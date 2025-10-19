"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUpRight, FiX, FiMenu } from "react-icons/fi";

const navLinks = [
  { href: "/process", label: "Our Process" },
  { href: "/website-management", label: "Website Management" },
  { href: "/sem", label: "Search Engine Marketing" },
  { href: "/portfolio", label: "Portfolio" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", menuOpen);
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard accessibility
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("keydown", handleKeyDown);
      // Focus trap
      const focusableElements = document.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (firstElement) firstElement.focus();

      const handleTabKey = (e) => {
        if (e.key === "Tab") {
          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              e.preventDefault();
              lastElement?.focus();
            }
          } else {
            if (document.activeElement === lastElement) {
              e.preventDefault();
              firstElement?.focus();
            }
          }
        }
      };

      document.addEventListener("keydown", handleTabKey);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
        document.removeEventListener("keydown", handleTabKey);
      };
    }
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/10"
          : "bg-black"
      }`}
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="flex items-center justify-between"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="py-4"
          >
            <Link
              href="/"
              className="flex items-center gap-2 transition-transform duration-300 hover:scale-105"
            >
              <Image
                src="/logo.png"
                alt="Syntax Sail"
                width={210}
                height={56}
                className="transition-all duration-300 hover:brightness-110"
              />
            </Link>
          </motion.div>

          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.1, ease: "easeOut" }}
            className="hidden lg:flex items-center gap-8 rounded px-8 py-3"
          >
            {navLinks.map((l, i) => (
              <motion.span
                key={l.href}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * i, ease: "easeOut" }}
                className="border-b-2 border-transparent hover:border-red-500"
              >
                <Link
                  href={l.href}
                  className="relative text-white/90 hover:text-white transition-all duration-300 group overflow-hidden"
                >
                  {l.label}
                  {/* Fill-type underline from left */}
                </Link>
              </motion.span>
            ))}

            {/* Enhanced Start Your Project Button */}
            <Link
              href="/start-project"
              className="ml-2 relative flex h-[45px] w-[185px] rounded-2xl items-center justify-center overflow-hidden bg-red-600 text-white transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/30 group"
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

              {/* Main gradient overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <span className="relative z-10 flex items-center gap-2 transition-all duration-300 group-hover:gap-3">
                Start Your Project
                <FiArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </Link>
          </motion.nav>

          {/* Enhanced Hamburger buttons */}
          <motion.button
            aria-label="Main menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            whileTap={{ scale: 0.96 }}
            className="lg:hidden bg-white ring-1 ring-white/10 px-4 py-3 shadow-lg shadow-black/20 rounded-lg hover:bg-[#2a2a2a] transition-all duration-500 hover:shadow-xl hover:shadow-red-500/10 hover:ring-red-500/30"
          >
            <div className="relative h-6 w-6">
              <motion.span
                animate={menuOpen ? "open" : "closed"}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="absolute right-0 top-1 block h-0.5 w-6 rounded-full bg-white transition-all duration-300"
              />
              <motion.span
                animate={menuOpen ? "open" : "closed"}
                transition={{ duration: 0.2 }}
                className="absolute right-0 top-1/2 translate-y-[-50%] block h-0.5 w-4 rounded-full bg-white transition-all duration-300"
              />
              <motion.span
                animate={menuOpen ? "open" : "closed"}
                transition={{ duration: 0.2 }}
                className="absolute right-0 bottom-1 block h-0.5 w-6 rounded-full bg-white transition-all duration-300"
              />
            </div>
          </motion.button>

          <motion.button
            aria-label="Main menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            whileTap={{ scale: 0.96 }}
            className="hidden lg:block bg-[#1f1f1f] ring-1 ring-white/10 px-6 py-4 shadow-lg shadow-black/20 rounded-lg hover:bg-[#2a2a2a] transition-all duration-500 hover:shadow-xl hover:shadow-red-500/10 hover:ring-red-500/30 group cursor-pointer"
          >
            <div className="relative h-6 w-6 cursor-pointer">
              <motion.span
                animate={menuOpen ? "open" : "closed"}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className=" absolute right-0 top-1 block h-0.5 w-6 rounded-full bg-[#ffffff] transition-all duration-300 group-hover:bg-red-400"
              />
              <motion.span
                animate={menuOpen ? "open" : "closed"}
                transition={{ duration: 0.2 }}
                className="absolute right-0 top-1/2 translate-y-[-50%] block h-0.5 w-4 rounded-full bg-[#ffffff] transition-all duration-300 group-hover:bg-red-400"
              />
              <motion.span
                animate={menuOpen ? "open" : "closed"}
                transition={{ duration: 0.2 }}
                className="absolute right-0 bottom-1 block h-0.5 w-6 rounded-full bg-[#ffffff] transition-all duration-300 group-hover:bg-red-400"
              />
            </div>
          </motion.button>
        </motion.div>
      </div>

      {/* Enhanced Dim backdrop */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Enhanced Right-side navigation panel with 1s duration */}
      <AnimatePresence>
        {menuOpen && (
          <motion.aside
            key="panel"
            initial={{
              x: "100%",
              scale: 0.8,
              opacity: 0,
              borderRadius: "50% 0 0 50%",
            }}
            animate={{
              x: 0,
              scale: 1,
              opacity: 1,
              borderRadius: "0%",
            }}
            exit={{
              x: "100%",
              scale: 0.8,
              opacity: 0,
              borderRadius: "50% 0 0 50%",
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 25,
              bounce: 0.3,
              duration: 1,
            }}
            className="fixed right-0 top-0 z-50 h-screen w-full max-w-md bg-[#121212] text-white shadow-2xl border-l border-white/10"
          >
            <div className="flex h-full flex-col p-8 relative">
              {/* Enhanced Close Button */}
              <motion.button
                onClick={() => setMenuOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-red-500/20 transition-all duration-500 hover:scale-110 hover:rotate-90 group cursor-pointer"
                initial={{ scale: 0, opacity: 0, rotate: -90 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{
                  delay: 0.3,
                  type: "spring",
                  stiffness: 200,
                  duration: 0.8,
                }}
              >
                <FiX className="h-6 w-6 transition-all duration-300 group-hover:text-red-400" />
              </motion.button>

              {/* Enhanced Logo */}
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: -20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  delay: 0.2,
                  type: "spring",
                  stiffness: 200,
                  duration: 0.8,
                }}
              >
                <Image
                  src="/logo.png"
                  alt="Syntax Sail"
                  width={180}
                  height={48}
                  className="transition-all duration-500 hover:scale-105"
                />
              </motion.div>

              {/* Enhanced Nav links */}
              <motion.nav
                className="flex-1 space-y-8"
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},
                  show: {
                    transition: {
                      staggerChildren: 0.15,
                      delayChildren: 0.4,
                    },
                  },
                }}
              >
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    variants={{
                      hidden: {
                        opacity: 0,
                        x: 50,
                        scale: 0.8,
                      },
                      show: {
                        opacity: 1,
                        x: 0,
                        scale: 1,
                      },
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 20,
                      duration: 0.8,
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="block text-2xl font-medium text-white/80 hover:text-white transition-all duration-500 group relative py-2 overflow-hidden"
                    >
                      {link.label}
                      {/* Fill-type underline from left for mobile nav */}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-purple-500 transition-all duration-700 ease-in-out group-hover:w-full origin-left"></span>
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>

              {/* Enhanced CTA Button */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  delay: 0.9,
                  type: "spring",
                  stiffness: 200,
                  damping: 20,
                  duration: 0.8,
                }}
              >
                <Link
                  href="/start-project"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-purple-600 px-8 py-4 text-white font-semibold transition-all duration-600 hover:scale-105 hover:shadow-2xl hover:shadow-red-600/30 group"
                >
                  Start Your Project
                  <FiArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </motion.div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </header>
  );
}
