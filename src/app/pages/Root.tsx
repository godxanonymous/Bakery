import { Outlet, useLocation } from "react-router";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const pageVariants = {
  initial: {
    opacity: 0,
    y: 30,
    scale: 0.985,
    filter: "blur(5px)",
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.58,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -22,
    scale: 0.975,
    filter: "blur(7px)",
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 1, 1],
    },
  },
};

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 35, restDelta: 0.001 });

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "3px",
        backgroundColor: "#FF0000",
        transformOrigin: "0%",
        scaleX,
        zIndex: 9999,
      }}
    />
  );
}

export function Root() {
  const location = useLocation();

  return (
    <div style={{ fontFamily: "'Roboto', sans-serif" }} className="min-h-screen flex flex-col">
      <ScrollProgressBar />
      <Navbar />
      <main className="flex-1 overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={location.pathname}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{ willChange: "transform, opacity, filter" }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
