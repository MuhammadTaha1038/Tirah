import { useEffect, useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Award, Globe, Leaf, Shield, Sparkles, Truck } from "lucide-react";
import { categories } from "@/data/products";
import SectionHeading from "@/components/shared/SectionHeading";
import AnimatedCounter from "@/components/shared/AnimatedCounter";
import { Button } from "@/components/ui/button";

const HERO_BG =
  "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1920&q=80";

const destinations = [
  { name: "Middle East", angle: -30, distance: 220 },
  { name: "Europe", angle: 25, distance: 250 },
  { name: "South Asia", angle: 90, distance: 200 },
  { name: "Africa", angle: 155, distance: 240 },
  { name: "North America", angle: 215, distance: 260 },
];

export default function Home() {
  const [heroLoaded, setHeroLoaded] = useState(false);
  useEffect(() => {
    const i = new Image();
    i.src = HERO_BG;
    i.onload = () => setHeroLoaded(true);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative h-[100dvh] w-full flex items-center justify-center text-center grain">
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            heroLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(247,250,246,0.78) 0%, rgba(237,244,234,0.72) 50%, rgba(247,250,246,0.95) 100%)",
          }}
        />
        <div className="absolute inset-0 radial-glow opacity-60" />

        <div className="relative z-10 container mx-auto px-4 flex flex-col items-center gap-8 max-w-5xl">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-ui text-xs md:text-sm uppercase tracking-[0.5em] text-gold font-bold"
          >
            Tirah Food Industry — Peshawar, Pakistan
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="font-display font-light text-5xl md:text-7xl lg:text-8xl text-text-primary leading-[1.05] tracking-tight"
          >
            Rooted in <span className="text-gradient-gold italic">Quality.</span>
            <br />
            Grown for the <span className="text-gradient-gold italic">World.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="gold-divider"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="font-body italic text-lg md:text-2xl text-text-secondary max-w-2xl font-medium"
          >
            Premium agricultural exports — spices, seeds, nuts, grains and oils — delivered with
            uncompromising quality from the heart of Khyber to the world's finest kitchens.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row items-center gap-4 mt-4"
          >
            <Button asChild size="lg" className="bg-gold-gradient text-bg-primary font-ui font-bold uppercase tracking-widest rounded-full px-10 py-7 hover:opacity-95 hover:shadow-gold-lg">
              <Link href="/products">Explore Our Catalog <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-gold-strong text-text-primary hover:bg-gold-gradient hover:text-bg-primary font-ui font-bold uppercase tracking-widest rounded-full px-10 py-7 bg-transparent">
              <Link href="/contact">Request a Quote</Link>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-ui text-xs uppercase tracking-[0.3em] text-text-secondary font-bold">Scroll</span>
          <div className="w-px h-12 bg-gold-gradient animate-pulse" />
        </motion.div>
      </section>

      {/* GLOBAL REACH */}
      <section className="py-24 md:py-32 bg-bg-secondary grain relative">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            overline="Our Global Reach"
            title="From Khyber to the World"
            subtitle="We connect Pakistan's finest agricultural produce with discerning buyers across five continents."
          />

          <div className="mt-16 grid lg:grid-cols-2 gap-16 items-center">
            {/* Radial hub */}
            <div className="relative w-full aspect-square max-w-xl mx-auto">
              <svg viewBox="-300 -300 600 600" className="w-full h-full overflow-visible">
                <defs>
                  <radialGradient id="hubGlow">
                    <stop offset="0%" stopColor="#E8C96E" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#C9A84C" stopOpacity="0" />
                  </radialGradient>
                  <linearGradient id="lineGold" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#C9A84C" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                <circle cx="0" cy="0" r="180" fill="url(#hubGlow)" />
                {destinations.map((d, i) => {
                  const rad = (d.angle * Math.PI) / 180;
                  const x = Math.cos(rad) * d.distance;
                  const y = Math.sin(rad) * d.distance;
                  const cx = x * 0.5;
                  const cy = y * 0.5 - 60;
                  return (
                    <g key={d.name}>
                      <motion.path
                        d={`M 0 0 Q ${cx} ${cy} ${x} ${y}`}
                        fill="none"
                        stroke="url(#lineGold)"
                        strokeWidth="1.5"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: i * 0.25, ease: "easeInOut" }}
                      />
                      <motion.g
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.25 + 1.2, type: "spring" }}
                      >
                        <circle cx={x} cy={y} r="6" fill="#E8C96E" />
                        <circle cx={x} cy={y} r="14" fill="none" stroke="#C9A84C" strokeOpacity="0.3" />
                        <text
                          x={x}
                          y={y - 22}
                          textAnchor="middle"
                          fill="#F5EDD8"
                          fontSize="14"
                          fontFamily="Josefin Sans"
                          letterSpacing="2"
                        >
                          {d.name.toUpperCase()}
                        </text>
                      </motion.g>
                    </g>
                  );
                })}
                <circle cx="0" cy="0" r="14" fill="#E8C96E" />
                <circle cx="0" cy="0" r="22" fill="none" stroke="#C9A84C" strokeWidth="1.5">
                  <animate attributeName="r" values="22;40;22" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="1;0;1" dur="3s" repeatCount="indefinite" />
                </circle>
                <text x="0" y="48" textAnchor="middle" fill="#C9A84C" fontSize="16" fontFamily="Cormorant Garamond" fontStyle="italic">
                  Peshawar
                </text>
              </svg>
            </div>

            {/* Counters */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-8">
              {[
                { end: 60, suffix: "+", label: "Premium Products" },
                { end: 25, suffix: "+", label: "Countries Served" },
                { end: 10, suffix: "", label: "Product Categories" },
              ].map((c) => (
                <div
                  key={c.label}
                  className="bg-bg-surface border border-gold rounded-lg p-8 text-center hover:shadow-gold transition-all"
                >
                  <div className="font-display text-6xl md:text-7xl text-gradient-gold font-light">
                    <AnimatedCounter end={c.end} suffix={c.suffix} />
                  </div>
                  <div className="mt-3 font-ui uppercase tracking-[0.25em] text-xs text-text-secondary">
                    {c.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            overline="The Catalog"
            title="Ten Categories. Sixty+ Products."
            subtitle="A curated portfolio sourced from the world's most renowned origins."
          />
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {categories.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={c.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: (i % 5) * 0.08 }}
                >
                  <Link
                    href={`/products#${c.id}`}
                    className="group flex flex-col items-center text-center bg-bg-surface border border-gold rounded-lg p-6 hover:shadow-gold-lg hover:-translate-y-1 transition-all duration-300 h-full"
                  >
                    <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border border-gold/30 shadow-md">
                      <img src={c.image} alt={c.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-text-primary group-hover:text-gold transition-colors">
                      {c.name}
                    </h3>
                    <span className="mt-2 font-ui text-xs uppercase tracking-widest text-text-secondary font-bold">
                      {c.products.length} items
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE TEASER */}
      <section className="py-24 md:py-32 bg-bg-secondary grain">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading overline="Why Tirah" title="A Standard of Excellence" />
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { icon: Award, label: "Premium Quality" },
              { icon: Globe, label: "Global Reach" },
              { icon: Leaf, label: "Ethical Sourcing" },
              { icon: Truck, label: "Reliable Logistics" },
              { icon: Sparkles, label: "Trusted Partner" },
            ].map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="flex flex-col items-center text-center gap-3"
                >
                  <Icon className="w-10 h-10 text-gold" strokeWidth={1.2} />
                  <p className="font-ui text-sm uppercase tracking-widest text-text-primary font-bold">
                    {f.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline" className="border-gold-strong text-text-primary hover:bg-gold-gradient hover:text-bg-primary font-ui font-bold uppercase tracking-widest rounded-full px-8 bg-transparent">
              <Link href="/why-choose-us">Discover the Tirah Difference <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CERTS STRIP */}
      <section className="py-20 border-y border-gold">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <Shield className="w-12 h-12 text-gold" strokeWidth={1.2} />
            <div>
              <p className="font-ui uppercase tracking-[0.3em] text-xs text-gold font-bold">Certified</p>
              <p className="font-display text-2xl text-text-primary mt-1">
                IEC Registered · ISO 22000:2018 Compliant
              </p>
            </div>
          </div>
          <Button asChild variant="outline" className="border-gold-strong text-text-primary hover:bg-gold-gradient hover:text-bg-primary font-ui font-bold uppercase tracking-widest rounded-full px-8 bg-transparent">
            <Link href="/certifications">View Certifications</Link>
          </Button>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 radial-glow opacity-60" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display font-light text-4xl md:text-6xl text-text-primary leading-tight"
          >
            Let's grow your business <span className="italic text-gradient-gold">together.</span>
          </motion.h2>
          <p className="mt-6 font-body italic text-xl text-text-secondary">
            Speak directly with our export team for tailored quotes, custom packaging, and bulk shipments.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-gold-gradient text-bg-primary font-ui font-bold uppercase tracking-widest rounded-full px-10 py-7 hover:opacity-95">
              <Link href="/contact">Contact Our Team <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
