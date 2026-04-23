import { motion } from "framer-motion";

export default function SectionHeading({
  overline,
  title,
  subtitle,
  align = "center",
}: {
  overline?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`flex flex-col gap-4 max-w-3xl ${align === "center" ? "mx-auto" : ""} ${alignment}`}
    >
      {overline && (
        <span className="font-ui text-xs uppercase tracking-[0.3em] text-gold">{overline}</span>
      )}
      <h2 className="font-display font-light text-4xl md:text-5xl lg:text-6xl text-text-primary leading-tight">
        {title}
      </h2>
      {align === "center" && <div className="gold-divider" />}
      {subtitle && (
        <p className="font-body italic text-lg md:text-xl text-text-secondary mt-2">{subtitle}</p>
      )}
    </motion.div>
  );
}
