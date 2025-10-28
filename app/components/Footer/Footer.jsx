'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiArrowUpRight, FiGithub, FiTwitter, FiInstagram, FiLinkedin, FiFacebook } from 'react-icons/fi';

function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' }
    ],
    services: [
      { name: 'Web Design', href: '/services/web-design' },
      { name: 'Development', href: '/services/development' },
      { name: 'SEO', href: '/services/seo' },
      { name: 'Digital Marketing', href: '/services/marketing' }
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Portfolio', href: '/portfolio' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'FAQ', href: '/faq' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' }
    ]
  };

  const socialLinks = [
    { name: 'Facebook', icon: <FiFacebook className="w-4 h-4" />, href: '#' },
    { name: 'Twitter', icon: <FiTwitter className="w-4 h-4" />, href: '#' },
    { name: 'Instagram', icon: <FiInstagram className="w-4 h-4" />, href: '#' },
    { name: 'LinkedIn', icon: <FiLinkedin className="w-4 h-4" />, href: '#' },
    { name: 'GitHub', icon: <FiGithub className="w-4 h-4" />, href: '#' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Background Gradient Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0f0f0f] to-black"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-red-600/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      
      <div className="relative z-10 pt-20 pb-8">
        {/* Main Footer Content */}
        <motion.div 
          className="mx-auto px-4 sm:px-6 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
            {/* Company Info */}
            <motion.div 
              className="lg:col-span-2"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link href="/" className="flex items-center space-x-3 mb-6 group">
                  <div className="flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <Image
                      src="/logo.png"
                      alt="Syntax Sail"
                      width={180}
                      height={48}
                      className="transition-all duration-300"
                    />
                  </div>
                </Link>
              </motion.div>
              
              <motion.p 
                className="text-gray-400 mb-8 max-w-md leading-relaxed text-lg"
                variants={itemVariants}
              >
                We create digital experiences that drive growth and innovation for businesses worldwide. 
                Let's build something amazing together.
              </motion.p>
              
              <motion.div 
                className="flex space-x-3"
                variants={itemVariants}
              >
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="w-12 h-12 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl flex items-center justify-center hover:bg-red-600/20 hover:border-red-500/30 transition-all duration-300 group"
                    aria-label={social.name}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="text-gray-400 group-hover:text-red-400 transition-colors duration-300">
                      {social.icon}
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Company Links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold mb-6 bg-gradient-to-r text-white bg-clip-text ">
                Company
              </h3>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <motion.li 
                    key={link.name}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-all duration-300 group flex items-center"
                    >
                      <span className="group-hover:text-red-400 mr-2 transition-transform duration-300 group-hover:translate-x-1">›</span>
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services Links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold mb-6 bg-gradient-to-r text-white bg-clip-text">
                Services
              </h3>
              <ul className="space-y-4">
                {footerLinks.services.map((link) => (
                  <motion.li 
                    key={link.name}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-all duration-300 group flex items-center"
                    >
                      <span className="group-hover:text-red-400 mr-2 transition-transform duration-300 group-hover:translate-x-1">›</span>
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Resources Links */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold mb-6 bg-gradient-to-r text-white bg-clip-text">
                Resources
              </h3>
              <ul className="space-y-4">
                {footerLinks.resources.map((link) => (
                  <motion.li 
                    key={link.name}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-all duration-300 group flex items-center"
                    >
                      <span className="group-hover:text-red-400 mr-2 transition-transform duration-300 group-hover:translate-x-1">›</span>
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div 
            className="border-t border-gray-800/50 mt-12 pt-8"
            variants={itemVariants}
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-500 text-sm">
                © {currentYear} Syntax Sail. All rights reserved.
              </div>
              <div className="flex flex-wrap justify-center gap-8 text-sm">
                {footerLinks.legal.map((link) => (
                  <motion.div
                    key={link.name}
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Link 
                      href={link.href}
                      className="text-gray-500 hover:text-white transition-all duration-300 relative group"
                    >
                      {link.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;