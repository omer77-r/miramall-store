"use client";

import { motion } from "framer-motion";
import { Star, MessageCircleHeart } from "lucide-react";
import { getLatestReviews } from "@/lib/data/reviews";
import { cn } from "@/lib/utils";

const avatarColors = [
  "bg-primary/10 text-primary",
  "bg-accent/15 text-accent",
  "bg-amber-100 text-amber-600",
  "bg-purple-100 text-purple-600",
  "bg-sky-100 text-sky-600",
  "bg-emerald-100 text-emerald-600",
  "bg-orange-100 text-orange-600",
  "bg-teal-100 text-teal-600",
];

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
}

export default function CustomerReviews() {
  const latestReviews = getLatestReviews(8);

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-amber-50 rounded-full px-5 py-2 text-amber-600 font-semibold text-sm mb-4">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            آراء حقيقية
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">شنو قالو الزبناء ديالنا</h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            ناس حقيقيين شراو من ميرا مول وعجبهم. شوف رأيهم.
          </p>
        </motion.div>

        {/* Review cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {latestReviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-muted/50 rounded-2xl p-5 sm:p-6 border border-border hover:shadow-lg hover:shadow-primary/5 hover:border-primary/10 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "w-4 h-4",
                      i < review.rating ? "text-amber-400 fill-amber-400" : "text-gray-200"
                    )}
                  />
                ))}
              </div>

              {/* Comment */}
              <p className="text-sm text-foreground leading-relaxed line-clamp-4 mb-4">
                &ldquo;{review.comment}&rdquo;
              </p>

              {/* User */}
              <div className="flex items-center gap-3 pt-3 border-t border-border">
                <div
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0",
                    avatarColors[index % avatarColors.length]
                  )}
                >
                  {getInitials(review.userName)}
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">{review.userName}</p>
                  <p className="text-xs text-muted-foreground">
                    {new Date(review.date).toLocaleDateString("ar-MA")}
                  </p>
                </div>
                <MessageCircleHeart className="w-4 h-4 text-primary/30 mr-auto" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Overall rating */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 flex items-center justify-center gap-6 bg-muted/30 rounded-2xl px-6 py-4 border border-border max-w-sm mx-auto"
        >
          <div className="text-center">
            <span className="text-3xl font-black text-foreground">4.8</span>
            <div className="flex items-center gap-0.5 mt-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-1">متوسط التقييم</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
