import { motion } from "framer-motion";
import { Award, Globe2, Leaf, Truck, Handshake } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";

const reasons = [
  {
    icon: Award,
    title: "Premium Quality",
    body:
      "Every product undergoes rigorous quality checks to ensure unmatched purity, freshness, and global standards. From the field to the final pack, our process is built around uncompromising excellence.",
  },
  {
    icon: Globe2,
    title: "Global Reach",
    body:
      "We export to multiple countries, building strong international partnerships across the Middle East, Europe, Asia, Africa, and the Americas. Our network ensures your shipment arrives wherever business takes you.",
  },
  {
    icon: Leaf,
    title: "Ethical Sourcing",
    body:
      "Our products are sourced directly from trusted farmers and certified suppliers, supporting sustainable agriculture and fair trade practices that uplift entire communities.",
  },
  {
    icon: Truck,
    title: "Reliable Logistics",
    body:
      "Timely delivery, secure packaging, and seamless export processes guarantee customer satisfaction. We treat every container as a promise — and we keep it.",
  },
  {
    icon: Handshake,
    title: "Trusted Partner",
    body:
      "Our reputation is built on transparency, consistency, and long-term collaboration with global buyers. When you partner with Tirah, you partner with a name that delivers.",
  },
];

export default function WhyChooseUs() {
  return (
    <div>
      {/* HERO */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-24 grain relative">
        <div className="absolute inset-0 radial-glow opacity-40" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-ui text-xs uppercase tracking-[0.4em] text-gold"
          >
            Why Choose Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-light text-5xl md:text-7xl text-text-primary mt-6 leading-tight"
          >
            Five Pillars of <span className="italic text-gradient-gold">Distinction</span>
          </motion.h1>
          <div className="gold-divider mt-8" />
          <p className="font-body italic text-xl text-text-secondary mt-8">
            What sets Tirah Food Industry apart in the global agro-export marketplace.
          </p>
        </div>
      </section>

      {/* PILLARS */}
      <section className="pb-24 md:pb-32">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {reasons.map((r, i) => {
              const Icon = r.icon;
              return (
                <motion.article
                  key={r.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: i * 0.1 }}
                  className={`group relative bg-bg-surface border border-gold rounded-lg p-10 hover:shadow-gold-lg hover:border-gold-strong transition-all duration-500 ${
                    i === reasons.length - 1 ? "md:col-span-2" : ""
                  }`}
                >
                  <div className="absolute -top-7 left-10 w-14 h-14 rounded-full bg-gold-gradient flex items-center justify-center shadow-gold">
                    <Icon className="w-6 h-6 text-bg-primary" strokeWidth={1.5} />
                  </div>
                  <div className="absolute top-6 right-8 font-display text-7xl text-gold/10 leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="mt-6">
                    <h3 className="font-display font-light text-3xl md:text-4xl text-text-primary group-hover:text-gold transition-colors">
                      {r.title}
                    </h3>
                    <div className="w-16 h-px bg-gold-gradient my-5" />
                    <p className="font-body text-lg text-text-secondary leading-relaxed">{r.body}</p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CLOSING QUOTE */}
      <section className="py-24 md:py-32 bg-bg-secondary grain text-center">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <SectionHeading
            overline="The Tirah Standard"
            title="Quality is not an act. It is a habit."
            subtitle="Every shipment, every partnership, every promise — held to the same uncompromising standard."
          />
        </div>
      </section>
    </div>
  );
}
