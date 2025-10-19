"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CursorFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isTextHovering, setIsTextHovering] = useState(false);

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

    const handleTextHover = (e) => {
      if (e.target.tagName === "H1" || e.target.tagName === "H2" || e.target.tagName === "H3" || 
          e.target.tagName === "P" || e.target.tagName === "SPAN" || e.target.closest("h1, h2, h3, p, span")) {
        setIsTextHovering(true);
      }
    };

    const handleTextLeave = (e) => {
      if (e.target.tagName === "H1" || e.target.tagName === "H2" || e.target.tagName === "H3" || 
          e.target.tagName === "P" || e.target.tagName === "SPAN" || e.target.closest("h1, h2, h3, p, span")) {
        setIsTextHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mouseenter", handleMouseEnter, true);
    document.addEventListener("mouseleave", handleMouseLeave, true);
    document.addEventListener("mouseenter", handleTextHover, true);
    document.addEventListener("mouseleave", handleTextLeave, true);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseenter", handleMouseEnter, true);
      document.removeEventListener("mouseleave", handleMouseLeave, true);
      document.removeEventListener("mouseenter", handleTextHover, true);
      document.removeEventListener("mouseleave", handleTextLeave, true);
    };
  }, []);

  // Don't render on mobile devices
  if (typeof window !== "undefined" && window.innerWidth < 768) {
    return null;
  }

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 bg-white rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />

      {/* Cursor trail */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-2 border-white rounded-full pointer-events-none z-40 mix-blend-difference"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
        }}
      />

      {/* Text hover effect */}
      {isTextHovering && (
        <motion.div
          className="fixed top-0 left-0 w-32 h-32 bg-red-500 rounded-full pointer-events-none z-30 mix-blend-difference"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            x: mousePosition.x - 64,
            y: mousePosition.y - 64,
            scale: 1,
            opacity: 0.3,
          }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        />
      )}
    </>
  );
}
