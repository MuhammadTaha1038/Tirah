import { motion } from "framer-motion";
import { ShieldCheck, BadgeCheck, FileCheck2 } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";

const certs = [
  {
    icon: BadgeCheck,
    title: "IEC Registered",
    subtitle: "Importer-Exporter Code",
    body:
      "Tirah Food Industry is a duly registered Import-Export Code (IEC) holder, authorising us to engage in the international trade of agricultural and food commodities. Our IEC registration confirms our legal standing as a verified exporter, ensuring transparency, compliance, and trust in every cross-border transaction.",
  },
  {
    icon: ShieldCheck,
    title: "ISO 22000:2018",
    subtitle: "Food Safety Management Systems",
    body:
      "Our operations align with the principles of ISO 22000:2018 — the internationally recognised standard for Food Safety Management Systems. From sourcing and processing to packaging and dispatch, every step is governed by strict food-safety protocols, hygiene controls, and traceability practices that meet global benchmarks.",
  },
];

export default function Certifications() {
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
            Certifications & Compliance
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-light text-5xl md:text-7xl text-text-primary mt-6"
          >
            Verified. <span className="italic text-gradient-gold">Trusted.</span> Compliant.
          </motion.h1>
          <div className="gold-divider mt-8" />
          <p className="font-body italic text-xl text-text-secondary mt-8">
            International accreditations that anchor every shipment we send.
          </p>
        </div>
      </section>

      {/* CERTS */}
      <section className="pb-24 md:pb-32">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-10">
            {certs.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8, delay: i * 0.15 }}
                  className="relative bg-bg-surface border border-gold-strong rounded-lg p-10 md:p-12 hover:shadow-gold-lg transition-shadow grain"
                >
                  {/* Seal */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2">
                    <div className="relative">
                      <div className="w-20 h-20 rounded-full bg-gold-gradient flex items-center justify-center shadow-gold-lg">
                        <Icon className="w-10 h-10 text-bg-primary" strokeWidth={1.4} />
                      </div>
                      <div className="absolute inset-0 rounded-full border border-gold animate-pulse" />
                    </div>
                  </div>

                  <div className="text-center mt-12">
                    <span className="font-ui text-xs uppercase tracking-[0.4em] text-gold">
                      {c.subtitle}
                    </span>
                    <h2 className="font-display font-light text-4xl md:text-5xl text-text-primary mt-3">
                      {c.title}
                    </h2>
                    <div className="w-16 h-px bg-gold-gradient mx-auto my-6" />
                    <p className="font-body text-lg text-text-secondary leading-relaxed text-left">
                      {c.body}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Compliance commitments */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-20 bg-bg-secondary border border-gold rounded-lg p-10 md:p-14 text-center"
          >
            <FileCheck2 className="w-12 h-12 text-gold mx-auto mb-6" strokeWidth={1.3} />
            <h3 className="font-display font-light text-3xl md:text-4xl text-text-primary">
              Our Commitment to Global Standards
            </h3>
            <div className="gold-divider my-6" />
            <p className="font-body text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Every product that leaves our facility is the result of a process designed around
              international food-safety, traceability, and ethical-sourcing benchmarks. We work
              continuously with regulatory bodies and audit partners to maintain — and exceed —
              compliance for the markets we serve.
            </p>
          </motion.div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="py-24 bg-bg-secondary grain text-center">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <SectionHeading
            title="Trust, Sealed in Gold."
            subtitle="Compliance is not a checkbox. It is the foundation of every relationship we build."
          />
        </div>
      </section>
    </div>
  );
}
