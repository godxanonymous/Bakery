import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { ShoppingCart, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setMobileOpen(false), [location.pathname]);

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Menu", to: "/menu" },
    { label: "Reviews", to: "/reviews" },
    { label: "Contact", to: "/reviews" },
  ];

  const isActive = (to: string) => location.pathname === to;

  return (
    <motion.header
      initial={{ y: -72 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 w-full"
      style={{
        backgroundColor: scrolled ? "rgba(255,255,255,0.97)" : "#fff",
        boxShadow: scrolled
          ? "0 4px 24px rgba(0,0,0,0.12)"
          : "0 2px 12px rgba(0,0,0,0.07)",
        backdropFilter: "blur(12px)",
        transition: "box-shadow 0.35s ease, background-color 0.35s ease",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-baseline gap-1 select-none">
          <motion.span
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
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
              color: "#002080",
              fontWeight: 700,
              fontSize: "0.7rem",
              letterSpacing: "0.05em",
              lineHeight: 1,
            }}
          >
            BAKERS &amp; FAST FOOD
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.07, duration: 0.4, ease: "easeOut" }}
            >
              <Link
                to={link.to}
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  color: isActive(link.to) ? "#FF0000" : "#1A1A1A",
                  letterSpacing: "0.04em",
                  textDecoration: "none",
                  position: "relative",
                  paddingBottom: "4px",
                }}
              >
                {link.label}
                {isActive(link.to) && (
                  <motion.span
                    layoutId="nav-underline"
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "2px",
                      backgroundColor: "#FF0000",
                      borderRadius: "2px",
                    }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.45, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link to="/checkout">
              <motion.div
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.875rem",
                  letterSpacing: "0.06em",
                  backgroundColor: "#FF0000",
                  color: "#fff",
                  borderRadius: "8px",
                  padding: "10px 22px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  boxShadow: "0 4px 12px rgba(255,0,0,0.30)",
                  cursor: "pointer",
                }}
              >
                <ShoppingCart size={16} />
                Order Now
              </motion.div>
            </Link>
          </motion.div>
        </nav>

        {/* Mobile Toggle */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            {mobileOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={24} color="#1A1A1A" />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={24} color="#1A1A1A" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="px-8 py-4 flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                >
                  <Link
                    to={link.to}
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                      color: isActive(link.to) ? "#FF0000" : "#1A1A1A",
                      textDecoration: "none",
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.25, duration: 0.3 }}
              >
                <Link
                  to="/checkout"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.875rem",
                    letterSpacing: "0.06em",
                    backgroundColor: "#FF0000",
                    color: "#fff",
                    borderRadius: "8px",
                    padding: "10px 22px",
                    textDecoration: "none",
                    textAlign: "center",
                    display: "block",
                  }}
                >
                  Order Now
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
