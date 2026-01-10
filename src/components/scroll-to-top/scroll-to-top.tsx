"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          // Update visibility
          if (currentScrollY > 300) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }

          // Detect scroll direction
          if (currentScrollY > lastScrollY && currentScrollY > 300) {
            setIsScrollingDown(true);
          } else {
            setIsScrollingDown(false);
          }

          setLastScrollY(currentScrollY);
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: isScrollingDown ? 0.3 : 1,
            scale: 1,
          }}
          whileHover={{ opacity: 1 }}
          whileFocus={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 flex h-10 w-10 cursor-pointer items-center justify-center border border-border bg-card text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label="Scroll to top"
        >
          <ArrowUpIcon />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

function ArrowUpIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M10 15V5" />
      <path d="M5 10L10 5L15 10" />
    </svg>
  );
}
