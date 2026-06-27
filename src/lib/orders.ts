import * as XLSX from "xlsx";
import path from "path";
import fs from "fs";

const ORDERS_FILE = path.join(process.cwd(), "data", "orders.xlsx");

export interface OrderRow {
  id: string;
  date: string;
  fullName: string;
  phone: string;
  city: string;
  address: string;
  product: string;
  productSlug: string;
  quantity: number;
  totalPrice: number;
  status: string;
}

function generateOrderId(): string {
  const now = new Date();
  const ts = now.getFullYear().toString().slice(2) +
    String(now.getMonth() + 1).padStart(2, "0") +
    String(now.getDate()).padStart(2, "0");
  const rand = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `MM-${ts}-${rand}`;
}

function getWorkbook(): XLSX.WorkBook {
  if (fs.existsSync(ORDERS_FILE)) {
    const buf = fs.readFileSync(ORDERS_FILE);
    return XLSX.read(buf, { type: "buffer" });
  }
  const wb = XLSX.utils.book_new();
  const headers: (keyof OrderRow)[] = [
    "id", "date", "fullName", "phone", "city", "address",
    "product", "productSlug", "quantity", "totalPrice", "status",
  ];
  const ws = XLSX.utils.aoa_to_sheet([headers]);
  XLSX.utils.book_append_sheet(wb, ws, "Orders");
  return wb;
}

export function saveOrder(data: Omit<OrderRow, "id" | "date" | "status">): OrderRow {
  const wb = getWorkbook();
  const ws = wb.Sheets["Orders"];

  const order: OrderRow = {
    id: generateOrderId(),
    date: new Date().toISOString(),
    status: "جديد",
    ...data,
  };

  const rows = XLSX.utils.sheet_to_json<OrderRow>(ws);
  rows.push(order);

  const newWs = XLSX.utils.json_to_sheet(rows);
  wb.Sheets["Orders"] = newWs;

  fs.mkdirSync(path.dirname(ORDERS_FILE), { recursive: true });
  const buf = XLSX.write(wb, { type: "buffer", bookType: "xlsx" });
  fs.writeFileSync(ORDERS_FILE, buf);

  return order;
}

export function getOrders(): OrderRow[] {
  if (!fs.existsSync(ORDERS_FILE)) return [];
  const buf = fs.readFileSync(ORDERS_FILE);
  const wb = XLSX.read(buf, { type: "buffer" });
  const ws = wb.Sheets["Orders"];
  return XLSX.utils.sheet_to_json<OrderRow>(ws);
}

const rateLimitMap = new Map<string, number[]>();

export function checkRateLimit(phone: string): boolean {
  const now = Date.now();
  const hourAgo = now - 3600_000;
  const attempts = (rateLimitMap.get(phone) || []).filter((t) => t > hourAgo);
  if (attempts.length >= 3) return false;
  attempts.push(now);
  rateLimitMap.set(phone, attempts);
  return true;
}
