"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CursorFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e) => {
      if (e.target.tagName === "BUTTON" || e.target.tagName === "A" || e.target.closest("button") || e.target.closest("a")) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e) => {
      if (e.target.tagName === "BUTTON" || e.target.tagName === "A" || e.target.closest("button") || e.target.closest("a")) {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mouseenter", handleMouseEnter, true);
    document.addEventListener("mouseleave", handleMouseLeave, true);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseenter", handleMouseEnter, true);
      document.removeEventListener("mouseleave", handleMouseLeave, true);
    };
  }, []);

  // Don't render on mobile devices
  if (typeof window !== "undefined" && window.innerWidth < 768) {
    return null;
  }

  return (
    <>
      {/* Main cursor - small dot */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{
          type: "tween",
          ease: "linear",
          duration: 0,
        }}
      />

      {/* Cursor trail - smooth following circle */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-white/30 rounded-full pointer-events-none z-40"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 2.5 : 2,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          mass: 0.5,
        }}
      />
    </>
  );
}
