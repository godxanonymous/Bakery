import { useState } from "react";
import { Minus, Plus, Trash2, ShoppingBag, CheckCircle, MapPin, Phone, User, FileText } from "lucide-react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { StaggerContainer, staggerItem, AnimatedSection } from "../components/AnimatedSection";

interface CartItem {
  id: number;
  name: string;
  price: number;
  qty: number;
}

const initialCart: CartItem[] = [
  { id: 1, name: "Zinger Burger", price: 350, qty: 1 },
  { id: 2, name: "Regular Fries", price: 150, qty: 1 },
  { id: 3, name: "Chicken Pizza (Medium)", price: 850, qty: 1 },
];

const formFields = [
  { id: "name", label: "FULL NAME", placeholder: "e.g. Ahmad Raza", type: "text", icon: User, required: true },
  { id: "phone", label: "PHONE NUMBER", placeholder: "+92 300 000 0000", type: "tel", icon: Phone, required: true },
];

export function Checkout() {
  const [cart, setCart] = useState<CartItem[]>(initialCart);
  const [formData, setFormData] = useState({ name: "", phone: "", address: "", instructions: "" });
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const updateQty = (id: number, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, qty: Math.max(0, item.qty + delta) } : item))
        .filter((item) => item.qty > 0)
    );
  };

  const removeItem = (id: number) => setCart((prev) => prev.filter((item) => item.id !== id));

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const delivery = 80;
  const total = subtotal + delivery;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address) return;
    setOrderPlaced(true);
  };

  /* ── SUCCESS SCREEN ── */
  if (orderPlaced) {
    return (
      <div
        style={{
          backgroundColor: "#F4F4F4",
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'Roboto', sans-serif",
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          style={{
            backgroundColor: "#fff",
            borderRadius: "24px",
            padding: "64px 48px",
            textAlign: "center",
            boxShadow: "0 8px 40px rgba(0,0,0,0.12)",
            maxWidth: "480px",
            width: "100%",
          }}
        >
          {/* Animated check icon */}
          <motion.div
            initial={{ scale: 0, rotate: -90 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.25, type: "spring", stiffness: 300, damping: 18 }}
            style={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              backgroundColor: "rgba(255,0,0,0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 24px",
            }}
          >
            <CheckCircle size={40} color="#FF0000" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 900,
              fontSize: "1.8rem",
              color: "#1A1A1A",
              marginBottom: "12px",
            }}
          >
            Order Confirmed! 🎉
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.45 }}
            style={{ color: "#666", lineHeight: 1.7, marginBottom: "32px" }}
          >
            Thank you, <strong>{formData.name}</strong>! Your order has been placed
            successfully. We'll call you at <strong>{formData.phone}</strong> shortly to
            confirm delivery.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.68, duration: 0.45 }}
            style={{
              backgroundColor: "#F8F9FA",
              borderRadius: "12px",
              padding: "16px",
              marginBottom: "32px",
            }}
          >
            <div style={{ fontSize: "0.85rem", color: "#888", marginBottom: "8px" }}>
              ORDER TOTAL
            </div>
            <motion.div
              initial={{ scale: 0.7 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.78, type: "spring", stiffness: 320, damping: 16 }}
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 900,
                fontSize: "2rem",
                color: "#FF0000",
              }}
            >
              Rs. {total}/-
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.4 }}
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
                  letterSpacing: "0.05em",
                  backgroundColor: "#002080",
                  color: "#fff",
                  borderRadius: "8px",
                  padding: "14px 32px",
                  display: "inline-block",
                  cursor: "pointer",
                  boxShadow: "0 4px 16px rgba(0,32,128,0.25)",
                }}
              >
                Order More
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: "#F4F4F4", minHeight: "100vh", fontFamily: "'Roboto', sans-serif" }}>
      {/* Header */}
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
            ALMOST THERE
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
            Checkout &amp; <span style={{ color: "#FF0000" }}>Cart</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.22, duration: 0.45 }}
            style={{ color: "rgba(255,255,255,0.75)", fontSize: "1rem" }}
          >
            Review your order and fill in delivery details.
          </motion.p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-[1440px] mx-auto px-8 py-12">
        {cart.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-24"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            >
              <ShoppingBag size={64} color="#ccc" className="mx-auto mb-6" />
            </motion.div>
            <h2
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 800,
                fontSize: "1.5rem",
                color: "#555",
                marginBottom: "12px",
              }}
            >
              Your cart is empty
            </h2>
            <p style={{ color: "#999", marginBottom: "32px" }}>
              Add some items from our menu to get started!
            </p>
            <Link to="/menu">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  backgroundColor: "#FF0000",
                  color: "#fff",
                  borderRadius: "8px",
                  padding: "14px 32px",
                  display: "inline-block",
                  cursor: "pointer",
                  boxShadow: "0 4px 16px rgba(255,0,0,0.30)",
                }}
              >
                Browse Menu
              </motion.div>
            </Link>
          </motion.div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 items-start"
          >
            {/* ── LEFT: Checkout Form ── */}
            <AnimatedSection direction="left">
              <motion.div
                whileHover={{ boxShadow: "0 12px 36px rgba(0,0,0,0.10)" }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "20px",
                  padding: "40px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                }}
              >
                <h2
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 900,
                    fontSize: "1.4rem",
                    color: "#1A1A1A",
                    marginBottom: "32px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <MapPin size={22} color="#FF0000" />
                  Delivery Details
                </h2>

                <StaggerContainer className="flex flex-col gap-6" staggerDelay={0.1}>
                  {formFields.map((field) => (
                    <motion.div key={field.id} variants={staggerItem}>
                      <label
                        style={{
                          display: "block",
                          fontFamily: "'Montserrat', sans-serif",
                          fontWeight: 700,
                          fontSize: "0.8rem",
                          color: "#555",
                          letterSpacing: "0.06em",
                          marginBottom: "8px",
                        }}
                      >
                        {field.label} {field.required && "*"}
                      </label>
                      <motion.div
                        animate={focusedField === field.id ? { scale: 1.01 } : { scale: 1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 24 }}
                        style={{ position: "relative" }}
                      >
                        <field.icon
                          size={16}
                          color={focusedField === field.id ? "#002080" : "#aaa"}
                          style={{
                            position: "absolute",
                            left: 14,
                            top: "50%",
                            transform: "translateY(-50%)",
                            transition: "color 0.2s",
                          }}
                        />
                        <input
                          type={field.type}
                          placeholder={field.placeholder}
                          required={field.required}
                          value={formData[field.id as keyof typeof formData]}
                          onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
                          onFocus={(e) => {
                            setFocusedField(field.id);
                            e.target.style.borderColor = "#002080";
                          }}
                          onBlur={(e) => {
                            setFocusedField(null);
                            e.target.style.borderColor = "#E5E7EB";
                          }}
                          style={{
                            width: "100%",
                            padding: "13px 16px 13px 40px",
                            borderRadius: "10px",
                            border: "1.5px solid #E5E7EB",
                            fontSize: "0.9rem",
                            color: "#1A1A1A",
                            outline: "none",
                            fontFamily: "'Roboto', sans-serif",
                            boxSizing: "border-box",
                            transition: "border-color 0.22s",
                          }}
                        />
                      </motion.div>
                    </motion.div>
                  ))}

                  {/* Delivery Address */}
                  <motion.div variants={staggerItem}>
                    <label
                      style={{
                        display: "block",
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 700,
                        fontSize: "0.8rem",
                        color: "#555",
                        letterSpacing: "0.06em",
                        marginBottom: "8px",
                      }}
                    >
                      DELIVERY ADDRESS *
                    </label>
                    <motion.div
                      animate={focusedField === "address" ? { scale: 1.01 } : { scale: 1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 24 }}
                      style={{ position: "relative" }}
                    >
                      <MapPin
                        size={16}
                        color={focusedField === "address" ? "#002080" : "#aaa"}
                        style={{
                          position: "absolute",
                          left: 14,
                          top: "14px",
                          transition: "color 0.2s",
                        }}
                      />
                      <textarea
                        placeholder="Street, Block, Sector, Wah Cantt..."
                        required
                        rows={3}
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        onFocus={(e) => {
                          setFocusedField("address");
                          e.target.style.borderColor = "#002080";
                        }}
                        onBlur={(e) => {
                          setFocusedField(null);
                          e.target.style.borderColor = "#E5E7EB";
                        }}
                        style={{
                          width: "100%",
                          padding: "13px 16px 13px 40px",
                          borderRadius: "10px",
                          border: "1.5px solid #E5E7EB",
                          fontSize: "0.9rem",
                          color: "#1A1A1A",
                          outline: "none",
                          fontFamily: "'Roboto', sans-serif",
                          resize: "none",
                          boxSizing: "border-box",
                          transition: "border-color 0.22s",
                        }}
                      />
                    </motion.div>
                  </motion.div>

                  {/* Special Instructions */}
                  <motion.div variants={staggerItem}>
                    <label
                      style={{
                        display: "block",
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 700,
                        fontSize: "0.8rem",
                        color: "#555",
                        letterSpacing: "0.06em",
                        marginBottom: "8px",
                      }}
                    >
                      SPECIAL INSTRUCTIONS{" "}
                      <span style={{ color: "#bbb", fontWeight: 500 }}>(optional)</span>
                    </label>
                    <motion.div
                      animate={focusedField === "instructions" ? { scale: 1.01 } : { scale: 1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 24 }}
                      style={{ position: "relative" }}
                    >
                      <FileText
                        size={16}
                        color={focusedField === "instructions" ? "#002080" : "#aaa"}
                        style={{
                          position: "absolute",
                          left: 14,
                          top: "14px",
                          transition: "color 0.2s",
                        }}
                      />
                      <textarea
                        placeholder="Extra sauce, no onions, ring the bell twice..."
                        rows={3}
                        value={formData.instructions}
                        onChange={(e) => setFormData({ ...formData, instructions: e.target.value })}
                        onFocus={(e) => {
                          setFocusedField("instructions");
                          e.target.style.borderColor = "#002080";
                        }}
                        onBlur={(e) => {
                          setFocusedField(null);
                          e.target.style.borderColor = "#E5E7EB";
                        }}
                        style={{
                          width: "100%",
                          padding: "13px 16px 13px 40px",
                          borderRadius: "10px",
                          border: "1.5px solid #E5E7EB",
                          fontSize: "0.9rem",
                          color: "#1A1A1A",
                          outline: "none",
                          fontFamily: "'Roboto', sans-serif",
                          resize: "none",
                          boxSizing: "border-box",
                          transition: "border-color 0.22s",
                        }}
                      />
                    </motion.div>
                  </motion.div>
                </StaggerContainer>

                {/* Payment note */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  style={{
                    backgroundColor: "#F8F9FA",
                    borderRadius: "10px",
                    padding: "14px 18px",
                    marginTop: "24px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <span style={{ fontSize: "1.2rem" }}>💵</span>
                  <p style={{ color: "#555", fontSize: "0.85rem" }}>
                    <strong>Payment:</strong> Cash on Delivery only. Please keep the exact amount ready.
                  </p>
                </motion.div>
              </motion.div>
            </AnimatedSection>

            {/* ── RIGHT: Order Summary ── */}
            <AnimatedSection direction="right">
              <motion.div
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "20px",
                  padding: "32px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  position: "sticky",
                  top: "80px",
                }}
              >
                <h2
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 900,
                    fontSize: "1.2rem",
                    color: "#1A1A1A",
                    marginBottom: "24px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <ShoppingBag size={20} color="#FF0000" />
                  Order Summary
                </h2>

                {/* Cart Items */}
                <div className="flex flex-col gap-3 mb-6">
                  <AnimatePresence initial={false}>
                    {cart.map((item) => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, x: 20, height: 0 }}
                        animate={{ opacity: 1, x: 0, height: "auto" }}
                        exit={{ opacity: 0, x: -20, height: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 26 }}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                          padding: "12px",
                          backgroundColor: "#F8F9FA",
                          borderRadius: "10px",
                          overflow: "hidden",
                        }}
                      >
                        <div style={{ flexGrow: 1 }}>
                          <div
                            style={{
                              fontFamily: "'Montserrat', sans-serif",
                              fontWeight: 700,
                              fontSize: "0.85rem",
                              color: "#1A1A1A",
                              marginBottom: "2px",
                            }}
                          >
                            {item.name}
                          </div>
                          <motion.div
                            key={item.qty}
                            initial={{ opacity: 0.5, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            style={{ fontSize: "0.8rem", color: "#FF0000", fontWeight: 700 }}
                          >
                            Rs. {item.price * item.qty}/-
                          </motion.div>
                        </div>

                        {/* Qty controls */}
                        <div className="flex items-center gap-2">
                          <motion.button
                            type="button"
                            whileTap={{ scale: 0.88 }}
                            onClick={() => updateQty(item.id, -1)}
                            style={{
                              width: 28,
                              height: 28,
                              borderRadius: "50%",
                              border: "1.5px solid #E5E7EB",
                              backgroundColor: "#fff",
                              cursor: "pointer",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              padding: 0,
                            }}
                          >
                            <Minus size={12} color="#555" />
                          </motion.button>
                          <motion.span
                            key={item.qty}
                            initial={{ scale: 1.4, opacity: 0.6 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ type: "spring", stiffness: 500, damping: 22 }}
                            style={{
                              fontFamily: "'Montserrat', sans-serif",
                              fontWeight: 700,
                              fontSize: "0.9rem",
                              minWidth: "20px",
                              textAlign: "center",
                              display: "inline-block",
                            }}
                          >
                            {item.qty}
                          </motion.span>
                          <motion.button
                            type="button"
                            whileTap={{ scale: 0.88 }}
                            onClick={() => updateQty(item.id, 1)}
                            style={{
                              width: 28,
                              height: 28,
                              borderRadius: "50%",
                              border: "none",
                              backgroundColor: "#002080",
                              cursor: "pointer",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              padding: 0,
                            }}
                          >
                            <Plus size={12} color="#fff" />
                          </motion.button>
                        </div>

                        {/* Remove */}
                        <motion.button
                          type="button"
                          whileHover={{ scale: 1.2, color: "#FF0000" }}
                          whileTap={{ scale: 0.88 }}
                          onClick={() => removeItem(item.id)}
                          style={{
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            padding: "4px",
                            opacity: 0.45,
                            display: "flex",
                          }}
                        >
                          <Trash2 size={15} color="#FF0000" />
                        </motion.button>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {/* Add More Link */}
                <Link to="/menu">
                  <motion.div
                    whileHover={{ scale: 1.02, opacity: 1 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      textAlign: "center",
                      color: "#002080",
                      fontSize: "0.85rem",
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 700,
                      marginBottom: "24px",
                      padding: "10px",
                      border: "1.5px dashed #002080",
                      borderRadius: "10px",
                      opacity: 0.65,
                      cursor: "pointer",
                    }}
                  >
                    + Add More Items
                  </motion.div>
                </Link>

                {/* Price Breakdown */}
                <div
                  style={{
                    borderTop: "1.5px solid #F0F0F0",
                    paddingTop: "20px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    marginBottom: "20px",
                  }}
                >
                  {[
                    { label: "Subtotal", value: subtotal },
                    { label: "Delivery Fee", value: delivery },
                  ].map((row) => (
                    <div key={row.label} className="flex justify-between items-center">
                      <span style={{ color: "#666", fontSize: "0.875rem" }}>{row.label}</span>
                      <motion.span
                        key={row.value}
                        initial={{ opacity: 0.5, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        style={{ fontWeight: 600, color: "#1A1A1A", fontSize: "0.9rem" }}
                      >
                        Rs. {row.value}/-
                      </motion.span>
                    </div>
                  ))}
                  <div
                    style={{ borderTop: "1.5px solid #F0F0F0", paddingTop: "16px" }}
                    className="flex justify-between items-center"
                  >
                    <span
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 800,
                        fontSize: "1rem",
                        color: "#1A1A1A",
                      }}
                    >
                      TOTAL
                    </span>
                    <motion.span
                      key={total}
                      initial={{ scale: 1.2, color: "#FF6600" }}
                      animate={{ scale: 1, color: "#FF0000" }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 900,
                        fontSize: "1.4rem",
                        display: "inline-block",
                      }}
                    >
                      Rs. {total}/-
                    </motion.span>
                  </div>
                </div>

                {/* Confirm Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03, y: -2, boxShadow: "0 10px 28px rgba(255,0,0,0.42)" }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 380, damping: 20 }}
                  style={{
                    width: "100%",
                    padding: "16px",
                    borderRadius: "10px",
                    border: "none",
                    backgroundColor: "#FF0000",
                    color: "#fff",
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 900,
                    fontSize: "1rem",
                    letterSpacing: "0.06em",
                    cursor: "pointer",
                    boxShadow: "0 6px 20px rgba(255,0,0,0.35)",
                  }}
                >
                  Confirm Order →
                </motion.button>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  style={{
                    textAlign: "center",
                    color: "#aaa",
                    fontSize: "0.75rem",
                    marginTop: "12px",
                  }}
                >
                  🔒 Your information is safe with us
                </motion.p>
              </motion.div>
            </AnimatedSection>
          </form>
        )}
      </div>
    </div>
  );
}
