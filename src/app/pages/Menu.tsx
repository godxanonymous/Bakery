import { useState } from "react";
import { ShoppingCart, Plus, Star, Check } from "lucide-react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { AnimatedSection, StaggerContainer, staggerItem } from "../components/AnimatedSection";

const ZINGER =
  "https://images.unsplash.com/photo-1676902799933-6398d59135d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmlzcHklMjBjaGlja2VuJTIwemluZ2VyJTIwYnVyZ2VyfGVufDF8fHx8MTc3MjI1Mzk5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const PIZZA =
  "https://images.unsplash.com/photo-1631347155591-c162abe23014?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXBwZXJvbmklMjBwaXp6YSUyMHNsaWNlfGVufDF8fHx8MTc3MjIxNzU5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const FRIES =
  "https://images.unsplash.com/photo-1734774797087-b6435057a15e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVuY2glMjBmcmllcyUyMGdvbGRlbiUyMGNyaXNweXxlbnwxfHx8fDE3NzIxNDIyNDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const SHAWARMA =
  "https://images.unsplash.com/photo-1583665354191-634609954d54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGF3YXJtYSUyMHdyYXAlMjByb2xsJTIwc3RyZWV0JTIwZm9vZHxlbnwxfHx8fDE3NzIyNTM5OTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const CAKE =
  "https://images.unsplash.com/photo-1613323885373-6e91a09b598b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlJTIwZGVzc2VydCUyMGJha2VyeXxlbnwxfHx8fDE3NzIyMTA4NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const BURGER2 =
  "https://images.unsplash.com/photo-1627378378955-a3f4e406c5de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3VybWV0JTIwYnVyZ2VyJTIwZnJpZXMlMjBmYXN0JTIwZm9vZHxlbnwxfHx8fDE3NzIyNTM5ODh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

type Category = "All" | "Hot Deals" | "Pizza" | "Burgers & Rolls" | "Palace Special";
const categories: Category[] = ["All", "Hot Deals", "Pizza", "Burgers & Rolls", "Palace Special"];

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  category: Category;
  image: string;
  rating: number;
  badge?: string;
}

const products: Product[] = [
  { id: 1, name: "Zinger Burger", description: "Crispy fried chicken fillet with fresh lettuce, mayo, and our secret sauce.", price: "350/-", category: "Burgers & Rolls", image: ZINGER, rating: 4.9, badge: "Best Seller" },
  { id: 2, name: "Chicken Pizza", description: "Loaded with grilled chicken, bell peppers, olives, and mozzarella.", price: "850/-", category: "Pizza", image: PIZZA, rating: 4.8 },
  { id: 3, name: "Regular Fries", description: "Golden, crispy, perfectly salted fries cooked fresh every time.", price: "150/-", category: "Hot Deals", image: FRIES, rating: 4.7 },
  { id: 4, name: "Beef Shawarma Roll", description: "Tender beef shawarma wrapped in fresh pita with garlic sauce and veggies.", price: "450/-", category: "Burgers & Rolls", image: SHAWARMA, rating: 4.8, badge: "Popular" },
  { id: 5, name: "Palace Special Combo", description: "Zinger Burger + Reg Fries + Drink — the ultimate meal deal.", price: "550/-", category: "Palace Special", image: BURGER2, rating: 5.0, badge: "🔥 Hot Deal" },
  { id: 6, name: "Hot Deal Combo #1", description: "2 Zinger Burgers + 1 Large Fries + 2 Drinks at an unbeatable price.", price: "750/-", category: "Hot Deals", image: ZINGER, rating: 4.9, badge: "Deal" },
  { id: 7, name: "Pepperoni Pizza", description: "Classic pepperoni with rich tomato base and stretchy mozzarella.", price: "950/-", category: "Pizza", image: PIZZA, rating: 4.7 },
  { id: 8, name: "Chocolate Fudge Cake", description: "Rich, moist chocolate cake baked fresh daily — a bakery signature.", price: "250/-", category: "Palace Special", image: CAKE, rating: 4.9, badge: "Bakery Special" },
  { id: 9, name: "Chicken Shawarma", description: "Marinated chicken shawarma with pickles, garlic, and tahini.", price: "380/-", category: "Burgers & Rolls", image: SHAWARMA, rating: 4.8 },
];

export function Menu() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [cart, setCart] = useState<number[]>([]);
  const [filterKey, setFilterKey] = useState(0);

  const filtered = activeCategory === "All" ? products : products.filter((p) => p.category === activeCategory);

  const handleCategory = (cat: Category) => {
    setActiveCategory(cat);
    setFilterKey((k) => k + 1);
  };

  const addToCart = (id: number) => setCart((prev) => [...prev, id]);

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
            EXPLORE &amp; ORDER
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
            Our <span style={{ color: "#FF0000" }}>Menu</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.22, duration: 0.45 }}
            style={{ color: "rgba(255,255,255,0.75)", fontSize: "1rem" }}
          >
            Fresh, hot &amp; delicious — made with love every day.
          </motion.p>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-8 pb-24">
        {/* Category Filter Pills */}
        <motion.div
          className="flex gap-3 py-8 overflow-x-auto"
          style={{ scrollbarWidth: "none" }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {categories.map((cat, i) => {
            const active = activeCategory === cat;
            return (
              <motion.button
                key={cat}
                onClick={() => handleCategory(cat)}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.22 + i * 0.07, duration: 0.4 }}
                whileHover={{ scale: 1.06, y: -2 }}
                whileTap={{ scale: 0.96 }}
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.82rem",
                  letterSpacing: "0.04em",
                  whiteSpace: "nowrap",
                  padding: "10px 24px",
                  borderRadius: "99px",
                  border: active ? "none" : "2px solid #ddd",
                  backgroundColor: active ? "#FF0000" : "#fff",
                  color: active ? "#fff" : "#555",
                  cursor: "pointer",
                  boxShadow: active ? "0 6px 16px rgba(255,0,0,0.30)" : "none",
                  transition: "background-color 0.22s, color 0.22s, box-shadow 0.22s, border 0.22s",
                }}
              >
                {cat}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Results count */}
        <AnimatePresence mode="wait">
          <motion.p
            key={activeCategory}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ color: "#777", fontSize: "0.875rem", marginBottom: "24px" }}
          >
            Showing <strong style={{ color: "#1A1A1A" }}>{filtered.length}</strong> items
            {activeCategory !== "All" && (
              <> in <strong style={{ color: "#FF0000" }}>{activeCategory}</strong></>
            )}
          </motion.p>
        </AnimatePresence>

        {/* Product Grid with re-stagger on filter change */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filterKey}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          >
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 32, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <ProductCard
                  product={product}
                  added={cart.includes(product.id)}
                  onAddToCart={() => addToCart(product.id)}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Floating Cart Button */}
        <AnimatePresence>
          {cart.length > 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.6, y: 20 }}
              transition={{ type: "spring", stiffness: 380, damping: 22 }}
              style={{ position: "fixed", bottom: "32px", right: "32px", zIndex: 100 }}
            >
              <Link to="/checkout">
                <motion.div
                  whileHover={{ scale: 1.08, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    backgroundColor: "#FF0000",
                    color: "#fff",
                    borderRadius: "99px",
                    padding: "14px 28px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    boxShadow: "0 8px 28px rgba(255,0,0,0.45)",
                    cursor: "pointer",
                  }}
                >
                  <ShoppingCart size={18} />
                  View Cart
                  <motion.span
                    key={cart.length}
                    initial={{ scale: 1.6, opacity: 0.5 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 20 }}
                    style={{
                      backgroundColor: "#fff",
                      color: "#FF0000",
                      borderRadius: "99px",
                      width: 24,
                      height: 24,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.75rem",
                      fontWeight: 900,
                    }}
                  >
                    {cart.length}
                  </motion.span>
                </motion.div>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function ProductCard({
  product,
  added,
  onAddToCart,
}: {
  product: Product;
  added: boolean;
  onAddToCart: () => void;
}) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        boxShadow: "0 20px 48px rgba(0,0,0,0.16)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      style={{
        backgroundColor: "#fff",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      {/* Image */}
      <div style={{ position: "relative", height: "200px", backgroundColor: "#F4F4F4", overflow: "hidden" }}>
        <motion.div
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ width: "100%", height: "100%" }}
        >
          <ImageWithFallback
            src={product.image}
            alt={product.name}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </motion.div>
        {product.badge && (
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.35 }}
            style={{
              position: "absolute",
              top: "12px",
              left: "12px",
              backgroundColor: "#FF0000",
              color: "#fff",
              borderRadius: "99px",
              padding: "4px 12px",
              fontSize: "0.7rem",
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              letterSpacing: "0.05em",
            }}
          >
            {product.badge}
          </motion.span>
        )}
      </div>

      {/* Body */}
      <div style={{ padding: "20px", flexGrow: 1, display: "flex", flexDirection: "column", gap: "8px" }}>
        <div className="flex items-center justify-between">
          <h3
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 800,
              fontSize: "1rem",
              color: "#1A1A1A",
            }}
          >
            {product.name}
          </h3>
          <div className="flex items-center gap-1">
            <Star size={13} fill="#FFB800" color="#FFB800" />
            <span style={{ fontSize: "0.78rem", color: "#888", fontWeight: 600 }}>
              {product.rating}
            </span>
          </div>
        </div>
        <p style={{ fontSize: "0.83rem", color: "#777", lineHeight: 1.6, flexGrow: 1 }}>
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-2">
          <motion.span
            whileHover={{ scale: 1.08 }}
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 900,
              fontSize: "1.35rem",
              color: "#FF0000",
              display: "inline-block",
            }}
          >
            Rs. {product.price}
          </motion.span>
          <span style={{ fontSize: "0.75rem", color: "#aaa" }}>{product.category}</span>
        </div>
      </div>

      {/* Add to Cart Button */}
      <div style={{ padding: "0 20px 20px" }}>
        <motion.button
          onClick={onAddToCart}
          whileHover={!added ? { scale: 1.02 } : {}}
          whileTap={!added ? { scale: 0.97 } : {}}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: added ? "#1a9940" : "#002080",
            color: "#fff",
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 700,
            fontSize: "0.85rem",
            letterSpacing: "0.05em",
            cursor: added ? "default" : "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            boxShadow: added
              ? "0 4px 12px rgba(26,153,64,0.28)"
              : "0 4px 12px rgba(0,32,128,0.22)",
            transition: "background-color 0.35s ease, box-shadow 0.35s ease",
          }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {added ? (
              <motion.span
                key="added"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22 }}
                style={{ display: "flex", alignItems: "center", gap: "6px" }}
              >
                <Check size={16} /> Added to Cart
              </motion.span>
            ) : (
              <motion.span
                key="add"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22 }}
                style={{ display: "flex", alignItems: "center", gap: "6px" }}
              >
                <Plus size={16} /> Add to Cart
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </motion.div>
  );
}
