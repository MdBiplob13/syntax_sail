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
        e.target.classList.add("cursor-text-hover");
      }
    };

    const handleTextLeave = (e) => {
      if (e.target.tagName === "H1" || e.target.tagName === "H2" || e.target.tagName === "H3" || 
          e.target.tagName === "P" || e.target.tagName === "SPAN" || e.target.closest("h1, h2, h3, p, span")) {
        setIsTextHovering(false);
        e.target.classList.remove("cursor-text-hover");
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
      {/* Main cursor - small dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-50"
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
          scale: isHovering ? 1.5 : isTextHovering ? 1.2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          mass: 0.5,
        }}
      />

      {/* Text hover effect - transparent circle that makes text red */}
      {isTextHovering && (
        <motion.div
          className="fixed top-0 left-0 w-16 h-16 bg-transparent border border-red-500/20 rounded-full pointer-events-none z-30"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            x: mousePosition.x - 32,
            y: mousePosition.y - 32,
            scale: 1,
            opacity: 1,
          }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
          }}
        />
      )}
    </>
  );
}
