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
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-black/80 backdrop-blur-md border-b border-white/10" 
        : "bg-black"
    }`}>
      <div className="container mx-auto">
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.45 }}
          className="flex items-center justify-between"
        >
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="py-4"
          >
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png" alt="Syntax Sail" width={210} height={56} />
            </Link>
          </motion.div>
           
 
          
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="hidden lg:flex items-center gap-8 rounded px-8 py-3"
          >
            {navLinks.map((l, i) => (
              <motion.span
                key={l.href}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * i }}
              >
                <Link
                  href={l.href}
                  className="text-white/90 hover:text-white transition-colors duration-200"
                >
                  {l.label}
                </Link>
              </motion.span>
            ))}

            <Link
              href="/start-project"
              className="ml-2 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-gray-100 hover:shadow-lg hover:scale-105"
            >
              Start Your Project
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-black/10">
                <FiArrowUpRight className="h-3 w-3" />
              </span>
            </Link>
          </motion.nav>

          {/* Hamburger button */}
          <motion.button
            aria-label="Main menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(v => !v)}
            whileTap={{ scale: 0.96 }}
            className="lg:hidden bg-[#1f1f1f] ring-1 ring-white/10 px-4 py-3 shadow-lg shadow-black/20 rounded-lg hover:bg-[#2a2a2a] transition-colors duration-200"
          >
            <div className="relative h-6 w-6">
              <motion.span
                animate={menuOpen ? "open" : "closed"}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="absolute right-0 top-1 block h-0.5 w-6 rounded-full bg-white"
              />
              <motion.span
                animate={menuOpen ? "open" : "closed"}
                transition={{ duration: 0.2 }}
                className="absolute right-0 top-1/2 translate-y-[-50%] block h-0.5 w-4 rounded-full bg-white"
              />
              <motion.span
                animate={menuOpen ? "open" : "closed"}
                transition={{ duration: 0.2 }}
                className="absolute right-0 bottom-1 block h-0.5 w-6 rounded-full bg-white"
              />
            </div>
          </motion.button>

          {/* Desktop hamburger */}
          <motion.button
            aria-label="Main menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(v => !v)}
            whileTap={{ scale: 0.96 }}
            className="hidden lg:block bg-[#1f1f1f] ring-1 ring-white/10 px-6 py-4 shadow-lg shadow-black/20 rounded-lg hover:bg-[#2a2a2a] transition-colors duration-200"
          >
            <div className="relative h-6 w-6">
              <motion.span
                animate={menuOpen ? "open" : "closed"}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="absolute right-0 top-1 block h-0.5 w-6 rounded-full bg-white"
              />
              <motion.span
                animate={menuOpen ? "open" : "closed"}
                transition={{ duration: 0.2 }}
                className="absolute right-0 top-1/2 translate-y-[-50%] block h-0.5 w-4 rounded-full bg-white"
              />
              <motion.span
                animate={menuOpen ? "open" : "closed"}
                transition={{ duration: 0.2 }}
                className="absolute right-0 bottom-1 block h-0.5 w-6 rounded-full bg-white"
              />
            </div>
          </motion.button>
        </motion.div>
      </div>

      {/* Dim backdrop */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Right-side navigation panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.aside
            key="panel"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed right-0 top-0 z-50 h-screen w-full max-w-md bg-[#121212] text-white shadow-2xl"
          >
            <div className="flex h-full flex-col p-8 relative">
              {/* Close Button */}
              <motion.button
                onClick={() => setMenuOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <FiX className="h-6 w-6" />
              </motion.button>

              {/* Logo */}
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Image src="/logo.png" alt="Syntax Sail" width={180} height={48} />
              </motion.div>

              {/* Nav links */}
              <motion.nav
                className="flex-1 space-y-8"
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},
                  show: {
                    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
                  },
                }}
              >
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    variants={{
                      hidden: { opacity: 0, x: 30 },
                      show: { opacity: 1, x: 0 },
                    }}
                    transition={{ type: "tween", ease: "easeOut", duration: 0.4 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="block text-2xl font-medium hover:text-white/80 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <Link
                  href="/start-project"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-black font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                >
                  Start Your Project
                  <FiArrowUpRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

    </header>
  );
}