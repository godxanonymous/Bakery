import { MapPin, Phone, Clock, MessageCircle, Star, Quote } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import {
  AnimatedSection,
  StaggerContainer,
  staggerItemLeft,
  staggerItemRight,
  staggerItem,
} from "../components/AnimatedSection";

const AVATAR1 =
  "https://images.unsplash.com/photo-1590905775253-a4f0f3c426ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWlsaW5nJTIwd29tYW4lMjBwb3J0cmFpdCUyMGF2YXRhcnxlbnwxfHx8fDE3NzIxOTcwNDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const reviews = [
  { id: 1, name: "Sara Malik", role: "Regular Customer", avatar: AVATAR1, text: "Honestly the best Zinger Burger I've ever had in Wah Cantt! The bun is always fresh, the chicken is crispy and juicy, and the service is super fast. Highly recommend!", rating: 5, date: "Feb 2026" },
  { id: 2, name: "Ahmed Raza", role: "Food Blogger", avatar: null, initials: "AR", text: "Palace Bakers is my go-to spot. The Palace Special Combo is outstanding value — massive portions, great taste, delivered hot every single time.", rating: 5, date: "Jan 2026" },
  { id: 3, name: "Hina Iqbal", role: "Verified Customer", avatar: null, initials: "HI", text: "The baked goods are just incredible. The chocolate cake is to die for and the bread is fresh every morning. This place truly lives up to its name!", rating: 5, date: "Jan 2026" },
  { id: 4, name: "Usman Khan", role: "Office Manager", avatar: null, initials: "UK", text: "We order from Palace for office lunches regularly. The Hot Deal Combo is perfect for big groups. Always on time and always delicious!", rating: 5, date: "Dec 2025" },
  { id: 5, name: "Ayesha Noor", role: "University Student", avatar: null, initials: "AN", text: "The shawarma roll is absolutely amazing. Great portion size, packed with flavor and the garlic sauce is the best. Will definitely keep coming back!", rating: 4, date: "Dec 2025" },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 + i * 0.06, type: "spring", stiffness: 400, damping: 18 }}
        >
          <Star size={16} fill={i < count ? "#FFB800" : "none"} color={i < count ? "#FFB800" : "#ddd"} />
        </motion.div>
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <div style={{ fontFamily: "'Roboto', sans-serif", backgroundColor: "#F4F4F4" }}>
      {/* Hero */}
      <div style={{ backgroundColor: "#002080" }}>
        <div className="max-w-[1440px] mx-auto px-8 py-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            style={{
              display: "inline-block",
              backgroundColor: "rgba(255,255,255,0.15)",
              color: "#fff",
              borderRadius: "99px",
              padding: "6px 18px",
              fontSize: "0.78rem",
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              letterSpacing: "0.08em",
              marginBottom: "16px",
            }}
          >
            COMMUNITY LOVE
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              color: "#fff",
              letterSpacing: "-0.02em",
              marginBottom: "12px",
            }}
          >
            Reviews &amp; <span style={{ color: "#FF0000" }}>Contact</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.22, duration: 0.45 }}
            style={{ color: "rgba(255,255,255,0.75)", fontSize: "1rem" }}
          >
            Hear from our happy customers and get in touch with us.
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* ── LEFT: Reviews ── */}
          <div>
            <AnimatedSection direction="left" className="mb-8">
              <h2
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
                  color: "#1A1A1A",
                  letterSpacing: "-0.01em",
                  marginBottom: "8px",
                }}
              >
                What Our{" "}
                <span style={{ color: "#FF0000" }}>Customers Say</span>
              </h2>
              <div className="flex items-center gap-3 mt-4">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, rotate: -30, scale: 0.4 }}
                      whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + i * 0.07, type: "spring", stiffness: 400, damping: 18 }}
                    >
                      <Star size={20} fill="#FFB800" color="#FFB800" />
                    </motion.div>
                  ))}
                </div>
                <span
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    color: "#1A1A1A",
                  }}
                >
                  4.9/5.0
                </span>
                <span style={{ color: "#888", fontSize: "0.875rem" }}>from 500+ reviews</span>
              </div>
            </AnimatedSection>

            <StaggerContainer className="flex flex-col gap-6" staggerDelay={0.12}>
              {reviews.map((review) => (
                <motion.div
                  key={review.id}
                  variants={staggerItemLeft}
                  whileHover={{
                    x: 6,
                    boxShadow: "0 12px 32px rgba(0,0,0,0.12)",
                  }}
                  transition={{ type: "spring", stiffness: 280, damping: 22 }}
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: "16px",
                    padding: "24px",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
                    position: "relative",
                    cursor: "default",
                  }}
                >
                  {/* Quote Icon */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.08 }}
                    viewport={{ once: true }}
                    style={{ position: "absolute", top: "20px", right: "20px" }}
                  >
                    <Quote size={40} color="#FF0000" />
                  </motion.div>

                  <StarRating count={review.rating} />

                  <p
                    style={{
                      color: "#444",
                      lineHeight: 1.7,
                      fontSize: "0.9rem",
                      margin: "12px 0 16px",
                    }}
                  >
                    "{review.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    {review.avatar ? (
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      >
                        <ImageWithFallback
                          src={review.avatar}
                          alt={review.name}
                          style={{
                            width: 44,
                            height: 44,
                            borderRadius: "50%",
                            objectFit: "cover",
                            border: "2px solid #F4F4F4",
                          }}
                        />
                      </motion.div>
                    ) : (
                      <motion.div
                        whileHover={{ scale: 1.1, backgroundColor: "#FF0000" }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        style={{
                          width: 44,
                          height: 44,
                          borderRadius: "50%",
                          backgroundColor: "#002080",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#fff",
                          fontFamily: "'Montserrat', sans-serif",
                          fontWeight: 800,
                          fontSize: "0.8rem",
                          flexShrink: 0,
                        }}
                      >
                        {review.initials}
                      </motion.div>
                    )}
                    <div>
                      <div
                        style={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontWeight: 700,
                          fontSize: "0.875rem",
                          color: "#1A1A1A",
                        }}
                      >
                        {review.name}
                      </div>
                      <div style={{ fontSize: "0.75rem", color: "#999" }}>
                        {review.role} · {review.date}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </StaggerContainer>
          </div>

          {/* ── RIGHT: Contact ── */}
          <div>
            <AnimatedSection direction="right" className="mb-8">
              <h2
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
                  color: "#1A1A1A",
                  letterSpacing: "-0.01em",
                  marginBottom: "8px",
                }}
              >
                Find <span style={{ color: "#002080" }}>Us</span>
              </h2>
              <p style={{ color: "#666", fontSize: "0.9rem" }}>
                Visit us in person or reach out — we'd love to hear from you.
              </p>
            </AnimatedSection>

            {/* Map */}
            <AnimatedSection direction="right" delay={0.08}>
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                style={{
                  width: "100%",
                  height: "280px",
                  borderRadius: "16px",
                  overflow: "hidden",
                  marginBottom: "24px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.10)",
                }}
              >
                <iframe
                  title="Palace Bakers Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26875.57637785093!2d72.73168!3d33.77280!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df93d748ff61b7%3A0x3c8b96a0e6b9bbbc!2sWah%20Cantt%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1680000000000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </motion.div>
            </AnimatedSection>

            {/* Contact Info Cards */}
            <StaggerContainer className="flex flex-col gap-4 mb-8" staggerDelay={0.1}>
              {[
                { icon: MapPin, label: "Address", value: "Main Cantt Road, Wah Cantt, Punjab, Pakistan" },
                { icon: Phone, label: "Phone", value: "+92 300 123 4567" },
                { icon: Clock, label: "Opening Hours", value: "Mon – Sun: 10:00 AM – 11:00 PM" },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  variants={staggerItemRight}
                  whileHover={{
                    x: -4,
                    boxShadow: "0 8px 24px rgba(0,0,0,0.10)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: "12px",
                    padding: "16px 20px",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                    cursor: "default",
                  }}
                >
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.15 }}
                    transition={{ duration: 0.4 }}
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      backgroundColor: "rgba(255,0,0,0.10)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <item.icon size={18} color="#FF0000" />
                  </motion.div>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 700,
                        fontSize: "0.78rem",
                        color: "#aaa",
                        letterSpacing: "0.06em",
                        marginBottom: "4px",
                      }}
                    >
                      {item.label.toUpperCase()}
                    </div>
                    <div style={{ fontSize: "0.9rem", color: "#1A1A1A", lineHeight: 1.5 }}>
                      {item.value}
                    </div>
                  </div>
                </motion.div>
              ))}
            </StaggerContainer>

            {/* WhatsApp Button */}
            <AnimatedSection direction="right" delay={0.15}>
              <motion.a
                href="https://wa.me/923001234567?text=Hello!%20I%20would%20like%20to%20place%20an%20order."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -3 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 380, damping: 20 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "12px",
                  width: "100%",
                  padding: "16px",
                  backgroundColor: "#25D366",
                  color: "#fff",
                  borderRadius: "12px",
                  textDecoration: "none",
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  fontSize: "1rem",
                  letterSpacing: "0.04em",
                  boxShadow: "0 6px 24px rgba(37,211,102,0.38)",
                  cursor: "pointer",
                }}
              >
                <motion.div
                  animate={{ rotate: [0, -15, 15, -10, 10, 0] }}
                  transition={{ repeat: Infinity, repeatDelay: 3, duration: 0.6 }}
                >
                  <MessageCircle size={22} />
                </motion.div>
                Order via WhatsApp
              </motion.a>
            </AnimatedSection>

            {/* Quick Contact Form */}
            <AnimatedSection direction="right" delay={0.22}>
              <motion.div
                whileHover={{ boxShadow: "0 12px 32px rgba(0,0,0,0.10)" }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "16px",
                  padding: "28px",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
                  marginTop: "24px",
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 800,
                    fontSize: "1.1rem",
                    color: "#1A1A1A",
                    marginBottom: "20px",
                  }}
                >
                  Send us a Message
                </h3>
                <div className="flex flex-col gap-4">
                  {[
                    { type: "text", placeholder: "Your Name" },
                    { type: "tel", placeholder: "Phone Number" },
                  ].map((field, i) => (
                    <motion.input
                      key={field.placeholder}
                      type={field.type}
                      placeholder={field.placeholder}
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                      whileFocus={{ scale: 1.01 }}
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        borderRadius: "8px",
                        border: "1.5px solid #E5E7EB",
                        fontSize: "0.9rem",
                        color: "#1A1A1A",
                        outline: "none",
                        fontFamily: "'Roboto', sans-serif",
                        boxSizing: "border-box",
                        transition: "border-color 0.2s",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#002080")}
                      onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                    />
                  ))}
                  <motion.textarea
                    placeholder="Your message..."
                    rows={3}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.26, duration: 0.4 }}
                    whileFocus={{ scale: 1.01 }}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      borderRadius: "8px",
                      border: "1.5px solid #E5E7EB",
                      fontSize: "0.9rem",
                      color: "#1A1A1A",
                      outline: "none",
                      fontFamily: "'Roboto', sans-serif",
                      resize: "none",
                      boxSizing: "border-box",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "#002080")}
                    onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                  />
                  <motion.button
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    style={{
                      width: "100%",
                      padding: "13px",
                      borderRadius: "8px",
                      border: "none",
                      backgroundColor: "#FF0000",
                      color: "#fff",
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 700,
                      fontSize: "0.875rem",
                      letterSpacing: "0.05em",
                      cursor: "pointer",
                      boxShadow: "0 4px 12px rgba(255,0,0,0.28)",
                    }}
                  >
                    Send Message
                  </motion.button>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
}
