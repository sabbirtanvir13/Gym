"use client";

import { motion } from "framer-motion";

/* WhatsApp SVG */
function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/* Messenger SVG */
function MessengerIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
      <path d="M12 0C5.374 0 0 4.975 0 11.111c0 3.497 1.745 6.616 4.472 8.652V24l4.086-2.242c1.09.301 2.246.464 3.442.464 6.626 0 12-4.974 12-11.111C24 4.975 18.626 0 12 0zm1.193 14.963l-3.056-3.259-5.963 3.259L10.733 8.4l3.13 3.259L19.752 8.4l-6.559 6.563z" />
    </svg>
  );
}

/* Phone SVG */
function PhoneCallIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
      <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}

const buttons = [
  {
    href: "tel:01777829308",
    label: "Call 01777-829308",
    bg: "#FF4500",
    shadow: "#FF4500",
    icon: <PhoneCallIcon />,
    delay: 1.1,
  },
  {
    href: "https://m.me/ahmedgymcafe29",
    label: "Chat on Messenger",
    bg: "#0099FF",
    shadow: "#0099FF",
    icon: <MessengerIcon />,
    delay: 1.3,
  },
  {
    href: "https://api.whatsapp.com/send?phone=8801777829308",
    label: "Chat on WhatsApp",
    bg: "#25D366",
    shadow: "#25D366",
    icon: <WhatsAppIcon />,
    delay: 1.5,
  },
];

export default function FloatingContactButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      {buttons.map((btn) => (
        <motion.a
          key={btn.label}
          href={btn.href}
          target={btn.href.startsWith("http") ? "_blank" : undefined}
          rel={btn.href.startsWith("http") ? "noopener noreferrer" : undefined}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: btn.delay, type: "spring", stiffness: 200, damping: 15 }}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.95 }}
          aria-label={btn.label}
          title={btn.label}
          style={{ backgroundColor: btn.bg, boxShadow: `0 4px 20px ${btn.shadow}40` }}
          className="relative flex h-[52px] w-[52px] items-center justify-center rounded-full text-white"
        >
          {btn.icon}
          <span
            className="absolute inset-0 animate-ping rounded-full opacity-20"
            style={{ backgroundColor: btn.bg }}
          />
        </motion.a>
      ))}
    </div>
  );
}

