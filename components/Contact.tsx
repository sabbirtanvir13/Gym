"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Check,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

const CONTACT_INFO = [
  { icon: MapPin, label: "Address", value: "Plot-112, Block 1, Road 1, Goyalkhali, Khulna, Bangladesh" },
  { icon: Phone, label: "Phone", value: "01711-677902", href: "tel:01711677902" },
  { icon: Mail, label: "Email", value: "hello@ahmedgym.com", href: "mailto:hello@ahmedgym.com" },
  { icon: Clock, label: "Opening Hours", value: "Mon–Fri: 5:00 AM – 11:00 PM\nSat–Sun: 6:00 AM – 10:00 PM" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="GET IN TOUCH"
          subtitle="Have questions? Want to book a tour? We're here to help you start your fitness journey."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Left: Contact info + map */}
          <div className="flex flex-col gap-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {CONTACT_INFO.map((item, i) => {
                const Icon = item.icon;
                const CardContent = (
                  <>
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-black transition-colors">
                      <Icon size={20} />
                    </div>
                    <h4 className="mt-4 text-xs font-bold uppercase tracking-wider text-ash">
                      {item.label}
                    </h4>
                    <p className="mt-1.5 whitespace-pre-line text-sm text-white/80 group-hover:text-white transition-colors">
                      {item.value}
                    </p>
                  </>
                );

                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                  >
                    {item.href ? (
                      <a
                        href={item.href}
                        className="group block rounded-2xl border border-white/8 bg-white/[0.02] p-6 hover:border-accent/40 transition-colors h-full"
                      >
                        {CardContent}
                      </a>
                    ) : (
                      <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-6 h-full">
                        {CardContent}
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="overflow-hidden rounded-2xl border border-white/8"
            >
              <iframe
                src="https://maps.google.com/maps?q=Plot-112,+Block+1,+Road+1,+Goyalkhali,+Khulna,+Bangladesh&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="280"
                style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Gym location"
              />
            </motion.div>
          </div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="rounded-3xl border border-white/8 bg-white/[0.02] p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-ash">
                  Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-ash-2 focus:border-accent/50"
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-ash">
                    Phone
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="01711-677902"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-ash-2 focus:border-accent/50"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-ash">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-ash-2 focus:border-accent/50"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-ash">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell us about your fitness goals..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-ash-2 focus:border-accent/50"
                />
              </div>

              <button
                type="submit"
                className={`group inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-bold transition-all duration-300 ${
                  submitted
                    ? "bg-green-500 text-white"
                    : "bg-accent text-black hover:scale-[1.02]"
                }`}
              >
                {submitted ? (
                  <>
                    <Check size={16} />
                    MESSAGE SENT!
                  </>
                ) : (
                  <>
                    SEND MESSAGE
                    <Send
                      size={15}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
