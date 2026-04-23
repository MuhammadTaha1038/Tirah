import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { MapPin, Phone, Mail, Clock, Send, Loader2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitting(false);
    toast.success("Message sent successfully", {
      description: `Thank you, ${data.name}. Our export team will reach out within 24 hours.`,
    });
    reset();
  };

  const whatsappUrl = `https://wa.me/923339044677?text=${encodeURIComponent(
    "Hello Tirah Food Industry, I'd like to learn more about your products."
  )}`;

  return (
    <div>
      {/* HERO */}
      <section className="pt-40 pb-16 md:pt-48 md:pb-20 grain relative">
        <div className="absolute inset-0 radial-glow opacity-40" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-ui text-xs uppercase tracking-[0.4em] text-gold"
          >
            Get in Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-light text-5xl md:text-7xl text-text-primary mt-6"
          >
            Let's Build Something <span className="italic text-gradient-gold">Together</span>
          </motion.h1>
          <div className="gold-divider mt-8" />
          <p className="font-body italic text-xl text-text-secondary mt-8">
            Whether you're sourcing a single container or planning a long-term partnership — we're
            ready to listen.
          </p>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="pb-24 md:pb-32">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* INFO */}
            <div className="lg:col-span-2 space-y-6">
              {[
                {
                  icon: MapPin,
                  title: "Visit Us",
                  lines: ["Wazir Dhund, Karkhano Market", "District Khyber, Jamrud", "Peshawar, Pakistan"],
                },
                {
                  icon: Phone,
                  title: "Call Us",
                  lines: ["+92 333 9044677", "+92 305 9054953"],
                  hrefs: ["tel:+923339044677", "tel:+923059054953"],
                },
                {
                  icon: Mail,
                  title: "Email Us",
                  lines: ["zakirullahfbr2023@gmail.com"],
                  hrefs: ["mailto:zakirullahfbr2023@gmail.com"],
                },
                {
                  icon: Clock,
                  title: "Business Hours",
                  lines: ["Mon – Sat: 9:00 AM – 6:00 PM (PKT)", "Sunday: Closed"],
                },
              ].map((card, i) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="bg-bg-surface border border-gold rounded-lg p-6 hover:shadow-gold transition-shadow flex gap-5"
                  >
                    <div className="w-12 h-12 rounded-full bg-gold-gradient flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-bg-primary" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-ui uppercase tracking-[0.25em] text-xs text-gold mb-2">
                        {card.title}
                      </h3>
                      <div className="font-body text-text-primary space-y-1">
                        {card.lines.map((l, j) =>
                          card.hrefs?.[j] ? (
                            <a
                              key={l}
                              href={card.hrefs[j]}
                              className="block hover:text-gold transition-colors"
                            >
                              {l}
                            </a>
                          ) : (
                            <p key={l}>{l}</p>
                          )
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-500 text-white font-ui font-bold uppercase tracking-widest rounded-lg px-6 py-5 transition-colors shadow-lg"
              >
                <FaWhatsapp className="w-6 h-6" />
                Chat on WhatsApp
              </motion.a>
            </div>

            {/* FORM */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-3 bg-bg-surface border border-gold-strong rounded-lg p-8 md:p-10 shadow-deep"
            >
              <h2 className="font-display font-light text-3xl md:text-4xl text-text-primary mb-2">
                Send a Message
              </h2>
              <p className="font-body italic text-text-secondary mb-8">
                Our export team responds within 24 hours.
              </p>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="font-ui uppercase tracking-widest text-xs text-gold block mb-2">
                      Full Name *
                    </label>
                    <Input
                      {...register("name", { required: "Name is required" })}
                      className="bg-bg-primary border-gold text-text-primary h-11"
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1 font-ui">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="font-ui uppercase tracking-widest text-xs text-gold block mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email" },
                      })}
                      className="bg-bg-primary border-gold text-text-primary h-11"
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1 font-ui">{errors.email.message}</p>}
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="font-ui uppercase tracking-widest text-xs text-gold block mb-2">
                      Phone
                    </label>
                    <Input
                      {...register("phone")}
                      className="bg-bg-primary border-gold text-text-primary h-11"
                    />
                  </div>
                  <div>
                    <label className="font-ui uppercase tracking-widest text-xs text-gold block mb-2">
                      Company
                    </label>
                    <Input
                      {...register("company")}
                      className="bg-bg-primary border-gold text-text-primary h-11"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-ui uppercase tracking-widest text-xs text-gold block mb-2">
                    Subject *
                  </label>
                  <Input
                    {...register("subject", { required: "Subject is required" })}
                    className="bg-bg-primary border-gold text-text-primary h-11"
                  />
                  {errors.subject && <p className="text-red-400 text-xs mt-1 font-ui">{errors.subject.message}</p>}
                </div>
                <div>
                  <label className="font-ui uppercase tracking-widest text-xs text-gold block mb-2">
                    Message *
                  </label>
                  <Textarea
                    rows={6}
                    {...register("message", { required: "Message is required", minLength: { value: 10, message: "Please write at least 10 characters" } })}
                    className="bg-bg-primary border-gold text-text-primary resize-none"
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1 font-ui">{errors.message.message}</p>}
                </div>
                <Button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-gold-gradient text-bg-primary font-ui font-bold uppercase tracking-widest rounded-full py-6 hover:opacity-95 hover:shadow-gold-lg transition-all disabled:opacity-60"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="pb-24">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="bg-bg-surface border border-gold-strong rounded-lg overflow-hidden shadow-deep">
            <iframe
              title="Tirah Food Industry Location"
              src="https://www.google.com/maps?q=Karkhano+Market+Peshawar+Pakistan&output=embed"
              loading="lazy"
              className="w-full h-[450px] border-0 grayscale-[40%] contrast-110"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
