export const runtime = "nodejs";

import { NextRequest } from "next/server";
import { z } from "zod";
import { createOrder, saveOrderToExcel, checkRateLimit } from "@/lib/orders";
import { appendOrderToSheet } from "@/lib/google-sheets";

const orderSchema = z.object({
  fullName: z.string().min(3, "الاسم خاصو يكون 3 حروف على الأقل"),
  phone: z
    .string()
    .regex(/^(05|06|07)\d{8}$/, "الرقم خاصو يبدا ب 06 أو 07 أو 05 (10 أرقام)"),
  city: z.string().min(1, "اختار المدينة"),
  address: z.string().min(5, "العنوان خاصو يكون 5 حروف على الأقل"),
  product: z.string(),
  productSlug: z.string(),
  quantity: z.number().int().min(1),
  unitPrice: z.number().min(0).optional(),
  totalPrice: z.number().min(1),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const result = orderSchema.safeParse(body);

    if (!result.success) {
      const errors = result.error.issues.map((i) => ({
        field: i.path[0],
        message: i.message,
      }));
      return Response.json({ success: false, errors }, { status: 400 });
    }

    if (!checkRateLimit(result.data.phone)) {
      return Response.json(
        {
          success: false,
          errors: [
            {
              field: "phone",
              message: "بزاف ديال الطلبات من هاد الرقم. جرب من بعد.",
            },
          ],
        },
        { status: 429 }
      );
    }

    const order = createOrder(result.data);

    // 1) كنجربو نصيفطوه ل Google Sheet (كيخدم online)
    const sentToSheet = await appendOrderToSheet(order);

    // 2) إلا ماكانش webhook مكوّن، كنسجلوه ف Excel محلي (للتطوير المحلي)
    if (!sentToSheet) {
      try {
        saveOrderToExcel(order);
      } catch (e) {
        console.error("LOCAL_EXCEL_ERROR:", e);
      }
    }

    return Response.json({ success: true, order });
  } catch (err) {
    console.error("ORDER_ERROR:", err);
    return Response.json(
      {
        success: false,
        errors: [{ field: "general", message: "وقع مشكل. جرب مرة أخرى." }],
      },
      { status: 500 }
    );
  }
}
