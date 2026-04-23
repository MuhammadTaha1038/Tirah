import { motion } from "framer-motion";
import { BookOpen, Eye, Target } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";

export default function About() {
  const blocks = [
    {
      icon: BookOpen,
      title: "Our Story",
      body:
        "Tirah Food Industry was founded with a simple yet powerful vision — to bring the rich agricultural heritage of Pakistan to the world. Rooted in the fertile lands of Khyber and nurtured by generations of dedicated farmers, our journey began as a tribute to nature's bounty. Over the years, we have grown from a humble beginning into a trusted name in the global agro-export market, committed to delivering excellence in every shipment. Today, Tirah stands proudly as a bridge between Pakistan's golden fields and international markets, ensuring that the world experiences the authentic taste, quality, and purity of our produce.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      body:
        "To become a globally recognized leader in the export of premium agricultural and food products, known for our commitment to quality, integrity, and sustainability. We aspire to make Pakistan's agricultural produce a symbol of trust and excellence in every corner of the world.",
    },
    {
      icon: Target,
      title: "Our Mission",
      body:
        "To deliver the finest quality spices, seeds, nuts, grains, and dehydrated products through ethical sourcing, advanced processing, and reliable global distribution. We aim to empower farmers, support sustainable practices, and build long-lasting partnerships that bring nature's best to every table.",
    },
  ];

  return (
    <div>
      {/* HERO */}
      <section className="pt-40 pb-24 md:pt-48 md:pb-32 grain relative">
        <div className="absolute inset-0 radial-glow opacity-40" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-ui text-xs uppercase tracking-[0.4em] text-gold"
          >
            About Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="font-display font-light text-5xl md:text-7xl text-text-primary mt-6 leading-tight"
          >
            A Legacy <span className="italic text-gradient-gold">Cultivated</span> with Care
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="gold-divider mt-8"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-body italic text-xl text-text-secondary mt-8 max-w-3xl mx-auto"
          >
            From the fertile soils of Khyber to fine kitchens worldwide — we are guardians of
            tradition, ambassadors of quality.
          </motion.p>
        </div>
      </section>

      {/* STORY / VISION / MISSION */}
      <section className="pb-24 md:pb-32">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl space-y-20">
          {blocks.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8 }}
                className="grid md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-start bg-bg-surface border border-gold rounded-lg p-8 md:p-12 hover:shadow-gold transition-shadow"
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-gold-gradient flex items-center justify-center shadow-gold">
                    <Icon className="w-9 h-9 text-bg-primary" strokeWidth={1.5} />
                  </div>
                </div>
                <div>
                  <span className={`font-ui text-xs uppercase tracking-[0.4em] text-gold`}>
                    Chapter {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-display font-light text-4xl md:text-5xl text-text-primary mt-3 mb-6">
                    {b.title}
                  </h2>
                  <p className="font-body text-lg md:text-xl text-text-secondary leading-relaxed">
                    {b.body}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* QUOTE */}
      <section className="py-24 md:py-32 bg-bg-secondary grain text-center">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <SectionHeading
            overline="Our Promise"
            title='"Rooted in Quality. Grown for the World."'
            subtitle="Every grain, every spice, every shipment — a testament to the trust our partners place in us."
          />
        </div>
      </section>
    </div>
  );
}
