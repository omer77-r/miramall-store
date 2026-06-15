"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Minus, Plus, Trash2, X, ShoppingBag, Truck } from "lucide-react"
import { useCart } from "@/components/providers/CartProvider"

export function SlideCart() {
  const {
    items,
    removeItem,
    updateQuantity,
    totalItems,
    subtotal,
    deliveryFee,
    total,
    isOpen,
    closeCart,
  } = useCart()

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            onClick={closeCart}
          />

          {/* Panel - slides from left (RTL layout: from left) */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 left-0 z-50 h-full w-full max-w-md bg-white shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 h-16 border-b border-zinc-100">
              <button
                onClick={closeCart}
                className="p-2 -ml-2 text-zinc-500 hover:text-rose-600 transition-colors"
                aria-label="إغلاق"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-2">
                <ShoppingBag className="h-5 w-5 text-rose-500" />
                <h2 className="text-lg font-bold text-zinc-800">
                  سلة التسوق
                </h2>
              </div>

              <span className="text-sm text-zinc-400 min-w-[24px]">
                {totalItems > 0 && `${totalItems}`}
              </span>
            </div>

            {/* Content */}
            {items.length === 0 ? (
              /* Empty Cart */
              <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
                <div className="w-24 h-24 rounded-full bg-rose-50 flex items-center justify-center mb-6">
                  <ShoppingBag className="h-10 w-10 text-rose-300" />
                </div>
                <h3 className="text-lg font-semibold text-zinc-700 mb-2">
                  سلة التسوق فارغة
                </h3>
                <p className="text-sm text-zinc-400 mb-6">
                  لم تقومي بإضافة أي منتجات بعد. تصفحي منتجاتنا وأضيفي ما يعجبك!
                </p>
                <Link
                  href="/products"
                  onClick={closeCart}
                  className="px-6 py-2.5 bg-rose-500 hover:bg-rose-600 text-white rounded-full text-sm font-medium transition-colors"
                >
                  تصفح المنتجات
                </Link>
              </div>
            ) : (
              <>
                {/* Cart Items */}
                <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
                  {items.map((item) => (
                    <motion.div
                      key={item.productId}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex gap-3 p-3 rounded-2xl bg-zinc-50 border border-zinc-100"
                    >
                      {/* Product Image */}
                      <div className="w-20 h-20 rounded-xl bg-zinc-200 overflow-hidden flex-shrink-0 relative">
                        {item.product.images?.[0] ? (
                          <Image
                            src={item.product.images[0]}
                            alt={item.product.nameAr}
                            fill
                            className="object-cover"
                            sizes="80px"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-zinc-400">
                            <ShoppingBag className="h-6 w-6" />
                          </div>
                        )}
                      </div>

                      {/* Item Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-sm font-medium text-zinc-800 truncate">
                            {item.product.nameAr}
                          </h4>
                          <button
                            onClick={() => removeItem(item.productId)}
                            className="p-1 text-zinc-400 hover:text-red-500 transition-colors flex-shrink-0"
                            aria-label="حذف"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </div>

                        <p className="text-sm font-semibold text-rose-600 mt-0.5">
                          {item.product.price.toFixed(2)} د.م.
                        </p>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2 mt-2">
                          <div className="flex items-center border border-zinc-200 rounded-full">
                            <button
                              onClick={() =>
                                updateQuantity(item.productId, item.quantity - 1)
                              }
                              className="p-1.5 text-zinc-500 hover:text-rose-600 transition-colors"
                              aria-label="تقليل"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="text-sm font-medium text-zinc-700 min-w-[24px] text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.productId, item.quantity + 1)
                              }
                              className="p-1.5 text-zinc-500 hover:text-rose-600 transition-colors"
                              aria-label="زيادة"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                          </div>
                          <span className="text-xs text-zinc-400">
                            {(item.product.price * item.quantity).toFixed(2)} د.م.
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Footer Summary */}
                <div className="border-t border-zinc-100 px-4 py-4 space-y-3">
                  {/* Subtotal & Delivery */}
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between text-zinc-600">
                      <span>المجموع الفرعي</span>
                      <span className="font-medium">
                        {subtotal.toFixed(2)} د.م.
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-zinc-600">
                      <span className="flex items-center gap-1.5">
                        <Truck className="h-3.5 w-3.5 text-zinc-400" />
                        التوصيل
                      </span>
                      {deliveryFee === 0 ? (
                        <span className="text-green-600 font-medium text-xs">
                          🎉 توصيل مجاني
                        </span>
                      ) : (
                        <span className="font-medium">
                          {deliveryFee.toFixed(2)} د.م.
                        </span>
                      )}
                    </div>

                    {deliveryFee > 0 && (
                      <p className="text-xs text-zinc-400 bg-amber-50 text-amber-700 rounded-lg px-2 py-1 text-center">
                        أضيفي {(499 - subtotal).toFixed(2)} د.م. إضافية
                        للاستفادة من التوصيل المجاني
                      </p>
                    )}
                  </div>

                  {/* Total */}
                  <div className="flex items-center justify-between pt-3 border-t border-zinc-100">
                    <span className="text-base font-bold text-zinc-800">
                      الإجمالي
                    </span>
                    <span className="text-lg font-bold text-rose-600">
                      {total.toFixed(2)} د.م.
                    </span>
                  </div>

                  {/* COD Message */}
                  <p className="text-xs text-center text-zinc-500 flex items-center justify-center gap-1">
                    💰 الدفع عند الاستلام متاح لجميع الطلبات
                  </p>

                  {/* Checkout Button */}
                  <Link
                    href="/checkout"
                    onClick={closeCart}
                    className="block w-full py-3 bg-rose-500 hover:bg-rose-600 text-white text-center rounded-full font-semibold transition-colors"
                  >
                    إتمام الطلب
                  </Link>

                  {/* Continue Shopping */}
                  <button
                    onClick={closeCart}
                    className="block w-full py-2 text-sm text-zinc-500 hover:text-rose-600 text-center transition-colors"
                  >
                    ← متابعة التسوق
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
