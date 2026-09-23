"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
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
  { icon: Phone, label: "Phone", value: "01777-829308", href: "tel:01777829308" },
  { icon: Mail, label: "Email", value: "hello@ahmedgym.com", href: "mailto:hello@ahmedgym.com" },
  { icon: Clock, label: "Opening Hours", value: "Mon–Fri: 5:00 AM – 11:00 PM\nSat–Sun: 6:00 AM – 10:00 PM" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const formattedMessage = `*New Inquiry - Ahmed Gym & Cafe 29*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Email:* ${formData.email}\n\n` +
      `*Message:*\n${formData.message}`;

    const waUrl = `https://api.whatsapp.com/send?phone=8801777829308&text=${encodeURIComponent(
      formattedMessage
    )}`;

    // Open WhatsApp in a new tab
    window.open(waUrl, "_blank");

    // Show SweetAlert confirmation modal
    Swal.fire({
      title: "Message Sent to WhatsApp!",
      text: "Your message details have been forwarded to WhatsApp (01777-829308).",
      icon: "success",
      confirmButtonText: "Open WhatsApp Chat",
      confirmButtonColor: "#25D366",
      showCancelButton: true,
      cancelButtonText: "Close",
      cancelButtonColor: "#333333",
      background: "#161619",
      color: "#FFFFFF",
      customClass: {
        popup: "rounded-3xl border border-white/10 shadow-2xl",
        confirmButton: "rounded-full px-6 py-2.5 font-bold text-sm",
        cancelButton: "rounded-full px-6 py-2.5 font-bold text-sm",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        window.open(waUrl, "_blank");
      }
    });

    setFormData({ name: "", phone: "", email: "", message: "" });
    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
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
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
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
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="01777-829308"
                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-ash-2 focus:border-accent/50"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-ash">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
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
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell us about your fitness goals..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-ash-2 focus:border-accent/50"
                />
              </div>

              <button
                type="submit"
                className={`group inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-bold transition-all duration-300 ${submitted
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
