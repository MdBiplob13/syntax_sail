"use client";
import Navbar from '@/app/components/Navbar/Navbar';
import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 2000);
  };

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email Us',
      details: 'hello@yourcompany.com',
      description: 'Send us an email anytime'
    },
    {
      icon: '📞',
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri from 9am to 6pm'
    },
    {
      icon: '📍',
      title: 'Visit Us',
      details: '123 Business Street, City',
      description: 'Come say hello at our office'
    },
    {
      icon: '💬',
      title: 'Live Chat',
      details: 'Start chatting',
      description: 'Instant support available'
    }
  ];

  const faqs = [
    {
      question: 'How long does it take to get a response?',
      answer: 'We typically respond within 24 hours during business days.'
    },
    {
      question: 'Do you offer free consultations?',
      answer: 'Yes, we offer free 30-minute consultations for new projects.'
    },
    {
      question: 'What are your business hours?',
      answer: 'Our team is available Monday to Friday, 9:00 AM to 6:00 PM EST.'
    }
  ];

  return (
    <div>
      <Navbar/>
    </div>
  );
};

export default ContactUs;