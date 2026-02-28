import { Link } from "react-router";
import { ChefHat, Bike, Star, Wheat, ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import {
  AnimatedSection,
  StaggerContainer,
  staggerItem,
} from "../components/AnimatedSection";
import { CountUp } from "../components/CountUp";

const HERO_BURGER =
  "https://images.unsplash.com/photo-1627378378955-a3f4e406c5de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwYnVyZ2VyJTIwZnJpZXMlMjBmYXN0JTIwZm9vZHxlbnwxfHx8fDE3NzIyNTM5ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const BAKERY_IMG =
  "https://images.unsplash.com/photo-1736520537688-1f1f06b71605?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwYmFrZXJ5JTIwZnJlc2glMjBicmVhZCUyMHBhc3RyaWVzfGVufDF8fHx8MTc3MjI1Mzk5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const features = [
  {
    icon: ChefHat,
    title: "Master Chefs",
    desc: "Our team of expert chefs craft every dish with passion and culinary finesse.",
  },
  {
    icon: Bike,
    title: "Fast Delivery",
    desc: "Hot meals delivered straight to your door within 30 minutes, guaranteed.",
  },
  {
    icon: Star,
    title: "Premium Quality",
    desc: "Only the finest ingredients are used — no compromises, ever.",
  },
  {
    icon: Wheat,
    title: "Fresh Daily",
    desc: "Everything is baked and prepared fresh daily from scratch.",
  },
];

const stats = [
  { value: 5000, suffix: "+", label: "Happy Customers" },
  { value: 80, suffix: "+", label: "Menu Items" },
  { value: 8, suffix: "", label: "Years of Excellence" },
  { value: 4.9, suffix: "★", label: "Average Rating", isFloat: true },
];

const checks = ["100% Halal Certified", "No MSG Added", "Fresh Daily Bakes"];

const heroHeadline = ["Fresh Baked.", "Fast Food.", "Flawless Taste."];

export function Home() {
  return (
    <div style={{ fontFamily: "'Roboto', sans-serif" }}>
      {/* ── HERO ── */}
      <section style={{ backgroundColor: "#F8F9FA" }} className="overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-8 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <span
                style={{
                  display: "inline-block",
                  backgroundColor: "rgba(255,0,0,0.10)",
                  color: "#FF0000",
                  borderRadius: "99px",
                  padding: "6px 18px",
                  fontSize: "0.78rem",
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  marginBottom: "24px",
                }}
              >
                🔥 NOW OPEN — WAH CANTT
              </span>
            </motion.div>

            {/* Headline word by word */}
            <h1
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(2.2rem, 4vw, 3.6rem)",
                color: "#002080",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                marginBottom: "24px",
              }}
            >
              {heroHeadline.map((line, li) => (
                <motion.span
                  key={line}
                  style={{ display: "block" }}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.15 + li * 0.12,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {li === 2 ? (
                    <span style={{ color: "#FF0000" }}>{line}</span>
                  ) : (
                    line
                  )}
                </motion.span>
              ))}
            </h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.52, ease: [0.22, 1, 0.36, 1] }}
              style={{
                color: "#555",
                fontSize: "1.05rem",
                lineHeight: 1.8,
                marginBottom: "40px",
                maxWidth: "460px",
              }}
            >
              Palace Bakers &amp; Fast Food brings you irresistible burgers, crispy pizzas,
              and fresh-from-the-oven baked goods — all under one roof.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link to="/menu">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    letterSpacing: "0.06em",
                    backgroundColor: "#FF0000",
                    color: "#fff",
                    borderRadius: "8px",
                    padding: "14px 32px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    boxShadow: "0 6px 20px rgba(255,0,0,0.32)",
                    cursor: "pointer",
                  }}
                >
                  View Menu <ArrowRight size={16} />
                </motion.div>
              </Link>
              <Link to="/checkout">
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                    backgroundColor: "#002080",
                    color: "#fff",
                    borderColor: "#002080",
                  }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    letterSpacing: "0.06em",
                    backgroundColor: "transparent",
                    color: "#002080",
                    border: "2px solid #002080",
                    borderRadius: "8px",
                    padding: "12px 28px",
                    cursor: "pointer",
                  }}
                >
                  Custom Orders
                </motion.div>
              </Link>
            </motion.div>

            {/* Checkmarks */}
            <motion.div
              className="flex flex-wrap gap-6 mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.82 }}
            >
              {checks.map((item, i) => (
                <motion.div
                  key={item}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.85 + i * 0.1, duration: 0.4 }}
                >
                  <CheckCircle size={16} color="#FF0000" />
                  <span style={{ fontSize: "0.85rem", color: "#555" }}>{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right — Hero Image */}
          <div className="relative flex justify-center">
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: "absolute",
                width: "360px",
                height: "360px",
                borderRadius: "50%",
                backgroundColor: "rgba(255,0,0,0.08)",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
            <motion.div
              initial={{ x: 80, opacity: 0, scale: 0.9 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{ position: "relative", zIndex: 1, width: "100%" }}
            >
              <motion.div
                whileHover={{ scale: 1.02, rotate: 0.5 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <ImageWithFallback
                  src={HERO_BURGER}
                  alt="Towering gourmet burger and fries"
                  style={{
                    width: "100%",
                    maxWidth: "520px",
                    height: "420px",
                    objectFit: "cover",
                    borderRadius: "24px",
                    boxShadow: "0 24px 64px rgba(0,0,0,0.18)",
                    display: "block",
                    margin: "0 auto",
                  }}
                />
              </motion.div>
            </motion.div>

            {/* Floating badge — price */}
            <motion.div
              initial={{ opacity: 0, scale: 0, x: -20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.9, type: "spring", stiffness: 300, damping: 18 }}
              whileHover={{ scale: 1.08, y: -4 }}
              style={{
                position: "absolute",
                bottom: "24px",
                left: "0px",
                backgroundColor: "#fff",
                borderRadius: "12px",
                padding: "12px 20px",
                boxShadow: "0 8px 28px rgba(0,0,0,0.14)",
                zIndex: 2,
                cursor: "default",
              }}
            >
              <div
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 800,
                  color: "#FF0000",
                  fontSize: "1.4rem",
                }}
              >
                350/-
              </div>
              <div style={{ fontSize: "0.75rem", color: "#777" }}>Zinger Burger</div>
            </motion.div>

            {/* Floating badge — delivery */}
            <motion.div
              initial={{ opacity: 0, scale: 0, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.05, type: "spring", stiffness: 300, damping: 18 }}
              whileHover={{ scale: 1.08, y: -4 }}
              style={{
                position: "absolute",
                top: "24px",
                right: "0px",
                backgroundColor: "#002080",
                borderRadius: "12px",
                padding: "12px 20px",
                boxShadow: "0 8px 28px rgba(0,32,128,0.28)",
                zIndex: 2,
                cursor: "default",
              }}
            >
              <div
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 800,
                  color: "#fff",
                  fontSize: "1.1rem",
                }}
              >
                ⚡ 30 Min
              </div>
              <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.75)" }}>
                Fast Delivery
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS BANNER ── */}
      <section style={{ backgroundColor: "#FF0000", overflow: "hidden" }}>
        <StaggerContainer
          className="max-w-[1440px] mx-auto px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-8"
          staggerDelay={0.12}
        >
          {stats.map((s) => (
            <motion.div key={s.label} variants={staggerItem} className="text-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 350, damping: 18 }}
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 900,
                  fontSize: "2rem",
                  color: "#fff",
                }}
              >
                {s.isFloat ? (
                  <span>4.9★</span>
                ) : (
                  <CountUp target={s.value as number} suffix={s.suffix} duration={1800} />
                )}
              </motion.div>
              <div style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.85)" }}>
                {s.label}
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </section>

      {/* ── FEATURES ── */}
      <section style={{ backgroundColor: "#fff" }}>
        <div className="max-w-[1440px] mx-auto px-8 py-20">
          <AnimatedSection className="text-center mb-16">
            <span
              style={{
                display: "inline-block",
                backgroundColor: "rgba(0,32,128,0.08)",
                color: "#002080",
                borderRadius: "99px",
                padding: "6px 18px",
                fontSize: "0.78rem",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                letterSpacing: "0.08em",
                marginBottom: "16px",
              }}
            >
              WHY CHOOSE US
            </span>
            <h2
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                color: "#1A1A1A",
                letterSpacing: "-0.01em",
              }}
            >
              What Makes Us{" "}
              <span style={{ color: "#FF0000" }}>Palace</span>
            </h2>
          </AnimatedSection>

          <StaggerContainer
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
            staggerDelay={0.1}
          >
            {features.map((f) => (
              <motion.div
                key={f.title}
                variants={staggerItem}
                whileHover={{
                  y: -8,
                  boxShadow: "0 16px 40px rgba(0,32,128,0.14)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{
                  backgroundColor: "#F8F9FA",
                  borderRadius: "16px",
                  padding: "32px 24px",
                  textAlign: "center",
                  border: "1px solid #eee",
                  cursor: "default",
                }}
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.15 }}
                  transition={{ duration: 0.5 }}
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    backgroundColor: "rgba(255,0,0,0.10)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                  }}
                >
                  <f.icon size={28} color="#FF0000" />
                </motion.div>
                <h3
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 800,
                    fontSize: "1rem",
                    color: "#1A1A1A",
                    marginBottom: "12px",
                    letterSpacing: "0.02em",
                  }}
                >
                  {f.title}
                </h3>
                <p style={{ color: "#666", fontSize: "0.875rem", lineHeight: 1.7 }}>
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ── ABOUT BANNER ── */}
      <section style={{ backgroundColor: "#F4F4F4", overflow: "hidden" }}>
        <div className="max-w-[1440px] mx-auto px-8 py-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left">
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                <ImageWithFallback
                  src={BAKERY_IMG}
                  alt="Fresh bakery goods"
                  style={{
                    width: "100%",
                    height: "380px",
                    objectFit: "cover",
                    borderRadius: "20px",
                    boxShadow: "0 16px 48px rgba(0,0,0,0.14)",
                  }}
                />
              </motion.div>
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: "spring", stiffness: 280, damping: 18 }}
                style={{
                  position: "absolute",
                  top: "-16px",
                  right: "-16px",
                  backgroundColor: "#002080",
                  borderRadius: "12px",
                  padding: "16px 24px",
                  color: "#fff",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 900,
                    fontSize: "2rem",
                    lineHeight: 1,
                  }}
                >
                  8+
                </div>
                <div style={{ fontSize: "0.75rem" }}>
                  Years
                  <br />
                  Serving
                </div>
              </motion.div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.1}>
            <span
              style={{
                display: "inline-block",
                backgroundColor: "rgba(255,0,0,0.10)",
                color: "#FF0000",
                borderRadius: "99px",
                padding: "6px 18px",
                fontSize: "0.78rem",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 700,
                letterSpacing: "0.08em",
                marginBottom: "20px",
              }}
            >
              OUR STORY
            </span>
            <h2
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                color: "#002080",
                letterSpacing: "-0.01em",
                marginBottom: "20px",
                lineHeight: 1.2,
              }}
            >
              A Legacy of{" "}
              <span style={{ color: "#FF0000" }}>Flavor</span> in Wah Cantt
            </h2>
            <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "16px" }}>
              Founded over 8 years ago on the bustling Main Cantt Road, Palace Bakers &amp;
              Fast Food began as a small bakery with a big dream — to serve food that tastes
              like home.
            </p>
            <p style={{ color: "#555", lineHeight: 1.8, marginBottom: "32px" }}>
              Today, we are one of Wah Cantt's most beloved fast food destinations, combining
              the warmth of artisan baking with the convenience of fast food.
            </p>
            <Link to="/menu">
              <motion.div
                whileHover={{ scale: 1.05, x: 4 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  letterSpacing: "0.06em",
                  backgroundColor: "#002080",
                  color: "#fff",
                  borderRadius: "8px",
                  padding: "14px 32px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  boxShadow: "0 4px 16px rgba(0,32,128,0.25)",
                  cursor: "pointer",
                }}
              >
                Explore Our Menu <ArrowRight size={16} />
              </motion.div>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ backgroundColor: "#002080", overflow: "hidden" }}>
        <AnimatedSection>
          <div className="max-w-[1440px] mx-auto px-8 py-16 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                color: "#fff",
                letterSpacing: "-0.01em",
                marginBottom: "16px",
              }}
            >
              Ready to Order?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              style={{
                color: "rgba(255,255,255,0.75)",
                marginBottom: "32px",
                fontSize: "1.05rem",
              }}
            >
              Browse our menu and place your order in minutes.
            </motion.p>
            <Link to="/menu">
              <motion.div
                whileHover={{ scale: 1.06, y: -3 }}
                whileTap={{ scale: 0.97 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring", stiffness: 320, damping: 20 }}
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  letterSpacing: "0.06em",
                  backgroundColor: "#FF0000",
                  color: "#fff",
                  borderRadius: "8px",
                  padding: "16px 40px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  boxShadow: "0 6px 24px rgba(255,0,0,0.45)",
                  cursor: "pointer",
                }}
              >
                See Full Menu <ArrowRight size={18} />
              </motion.div>
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
