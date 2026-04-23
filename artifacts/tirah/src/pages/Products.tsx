import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { categories } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";
import SectionHeading from "@/components/shared/SectionHeading";
import { Input } from "@/components/ui/input";

export default function Products() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && categories.some((c) => c.id === hash)) {
      setActiveCategory(hash);
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 200);
    }
  }, []);

  const filtered = useMemo(() => {
    return categories
      .filter((c) => activeCategory === "all" || c.id === activeCategory)
      .map((c) => ({
        ...c,
        products: c.products.filter((p) =>
          p.name.toLowerCase().includes(search.toLowerCase())
        ),
      }))
      .filter((c) => c.products.length > 0);
  }, [activeCategory, search]);

  const totalProducts = categories.reduce((sum, c) => sum + c.products.length, 0);

  return (
    <div>
      {/* HERO */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-24 grain relative">
        <div className="absolute inset-0 radial-glow opacity-40" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-ui text-xs sm:text-sm uppercase tracking-[0.4em] text-gold font-bold"
          >
            The Catalog
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-light text-5xl md:text-7xl text-text-primary mt-6"
          >
            Our <span className="italic text-gradient-gold">Premium</span> Products
          </motion.h1>
          <div className="gold-divider mt-8" />
          <p className="font-body italic text-xl text-text-secondary mt-8 max-w-2xl mx-auto">
            {totalProducts}+ products across {categories.length} carefully curated categories — each
            sourced from the world's finest growing regions.
          </p>
        </div>
      </section>

      {/* FILTER BAR */}
      <section className="sticky top-20 z-30 bg-bg-primary/95 backdrop-blur-md border-y border-gold">
        <div className="container mx-auto px-4 md:px-6 py-5">
          <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" />
              <Input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products..."
                className="pl-11 bg-bg-surface border-gold-strong text-text-primary placeholder:text-text-secondary font-body h-11 rounded-full"
              />
            </div>
            <div className="flex-1 overflow-x-auto hide-scrollbar">
              <div className="flex gap-2 min-w-max">
                <button
                  onClick={() => setActiveCategory("all")}
                  className={`px-5 py-2 rounded-full font-ui text-xs sm:text-sm uppercase tracking-widest transition-all whitespace-nowrap ${
                    activeCategory === "all"
                      ? "bg-gold-gradient text-bg-primary font-bold"
                      : "border border-gold text-text-secondary hover:text-gold hover:border-gold-strong font-semibold"
                  }`}
                >
                  All
                </button>
                {categories.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setActiveCategory(c.id)}
                    className={`px-5 py-2 rounded-full font-ui text-xs sm:text-sm uppercase tracking-widest transition-all whitespace-nowrap ${
                      activeCategory === c.id
                        ? "bg-gold-gradient text-bg-primary font-bold"
                        : "border border-gold text-text-secondary hover:text-gold hover:border-gold-strong font-semibold"
                    }`}
                  >
                    {c.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES + PRODUCTS */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 space-y-24">
          {filtered.length === 0 && (
            <p className="text-center font-body italic text-xl text-text-secondary py-20">
              No products match your search. Try a different keyword.
            </p>
          )}
          {filtered.map((c) => {
            const Icon = c.icon;
            return (
              <div key={c.id} id={c.id} className="scroll-mt-40">
                <div className="flex flex-col items-center text-center mb-12">
                  <div className="w-16 h-16 rounded-full bg-gold-gradient flex items-center justify-center mb-5">
                    <Icon className="w-7 h-7 text-bg-primary" />
                  </div>
                  <h2 className="font-display font-light text-4xl md:text-5xl text-text-primary">
                    {c.name}
                  </h2>
                  <div className="gold-divider mt-4" />
                  <p className="font-body italic text-text-secondary mt-5 max-w-2xl">
                    {c.description}
                  </p>
                </div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.05 }}
                  variants={{
                    visible: { transition: { staggerChildren: 0.05 } },
                  }}
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                >
                  {c.products.map((p) => (
                    <motion.div
                      key={p.name}
                      variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                      }}
                    >
                      <ProductCard product={p} />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-bg-secondary grain text-center">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <SectionHeading
            overline="Need Bulk Pricing?"
            title="Let's talk numbers."
            subtitle="Custom packaging, MOQs, container loads — our export team is ready to help."
          />
          <a
            href={`https://wa.me/923339044677?text=${encodeURIComponent(
              "Hello Tirah, I'd like to discuss bulk pricing and shipping."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex mt-10 items-center justify-center gap-2 bg-gold-gradient text-bg-primary font-ui font-bold uppercase tracking-widest rounded-full px-10 py-4 hover:opacity-95 hover:shadow-gold-lg transition-all"
          >
            Request Bulk Quote
          </a>
        </div>
      </section>
    </div>
  );
}
