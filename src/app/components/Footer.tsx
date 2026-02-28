import { Link } from "react-router";
import { MapPin, Phone, Clock, Instagram, Facebook, Twitter } from "lucide-react";
import { motion } from "motion/react";
import { StaggerContainer, staggerItem } from "./AnimatedSection";

export function Footer() {
  return (
    <footer
      style={{ backgroundColor: "#002080", fontFamily: "'Roboto', sans-serif" }}
      className="text-white overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-8 py-16">
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-4 gap-12"
          staggerDelay={0.1}
        >
          {/* Brand */}
          <motion.div variants={staggerItem} className="md:col-span-1">
            <Link to="/" className="flex items-baseline gap-1 mb-4" style={{ textDecoration: "none" }}>
              <motion.span
                whileHover={{ scale: 1.05 }}
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  color: "#FF0000",
                  fontStyle: "italic",
                  fontWeight: 900,
                  fontSize: "1.5rem",
                  letterSpacing: "-0.02em",
                  display: "inline-block",
                }}
              >
                PALACE
              </motion.span>
              <span
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "0.6rem",
                  letterSpacing: "0.05em",
                  lineHeight: 1,
                }}
              >
                BAKERS &amp; FAST FOOD
              </span>
            </Link>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.875rem", lineHeight: 1.8 }}>
              Serving fresh baked goods and fast food with love. Quality you can taste in every bite.
            </p>
            <div className="flex gap-4 mt-6">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.2, backgroundColor: "#FF0000" }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    backgroundColor: "rgba(255,255,255,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  <Icon size={16} color="#fff" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={staggerItem}>
            <h4
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: "0.875rem",
                letterSpacing: "0.1em",
                marginBottom: "1.5rem",
                color: "#FF0000",
              }}
            >
              QUICK LINKS
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Home", to: "/" },
                { label: "Our Menu", to: "/menu" },
                { label: "Reviews", to: "/reviews" },
                { label: "Order Now", to: "/checkout" },
              ].map((l) => (
                <li key={l.label}>
                  <Link to={l.to} style={{ textDecoration: "none" }}>
                    <motion.span
                      whileHover={{ x: 6, color: "#fff" }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      style={{
                        color: "rgba(255,255,255,0.75)",
                        fontSize: "0.875rem",
                        display: "inline-block",
                      }}
                    >
                      {l.label}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Menu Highlights */}
          <motion.div variants={staggerItem}>
            <h4
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: "0.875rem",
                letterSpacing: "0.1em",
                marginBottom: "1.5rem",
                color: "#FF0000",
              }}
            >
              POPULAR ITEMS
            </h4>
            <ul className="flex flex-col gap-3">
              {["Zinger Burger", "Chicken Pizza", "Beef Shawarma", "Hot Deal Combo", "Palace Special"].map(
                (item) => (
                  <motion.li
                    key={item}
                    whileHover={{ x: 4, color: "rgba(255,255,255,0.95)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 24 }}
                    style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.875rem", cursor: "default" }}
                  >
                    {item}
                  </motion.li>
                )
              )}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={staggerItem}>
            <h4
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                fontSize: "0.875rem",
                letterSpacing: "0.1em",
                marginBottom: "1.5rem",
                color: "#FF0000",
              }}
            >
              CONTACT US
            </h4>
            <div className="flex flex-col gap-4">
              {[
                { Icon: MapPin, text: "Main Cantt Road, Wah Cantt, Punjab" },
                { Icon: Phone, text: "+92 300 123 4567" },
                { Icon: Clock, text: "Mon – Sun\n10:00 AM – 11:00 PM" },
              ].map(({ Icon, text }, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-3"
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 24 }}
                  style={{ cursor: "default" }}
                >
                  <motion.div
                    whileHover={{ scale: 1.3, rotate: [0, -15, 15, 0] }}
                    transition={{ duration: 0.4 }}
                    className="mt-1 shrink-0"
                  >
                    <Icon size={16} color="#FF0000" />
                  </motion.div>
                  <span
                    style={{
                      color: "rgba(255,255,255,0.75)",
                      fontSize: "0.875rem",
                      lineHeight: 1.7,
                      whiteSpace: "pre-line",
                    }}
                  >
                    {text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </StaggerContainer>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}
          className="mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.8rem" }}>
            © 2026 Palace Bakers &amp; Fast Food. All rights reserved.
          </p>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.8rem" }}>
            Made with ❤️ in Wah Cantt
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
