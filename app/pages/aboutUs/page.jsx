import React from 'react';
import Link from 'next/link';

const AboutUs = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'CEO & Founder',
      image: '👨‍💼',
      description: '10+ years in digital innovation and business strategy'
    },
    {
      name: 'Jane Smith',
      role: 'Creative Director',
      image: '👩‍🎨',
      description: 'Expert in UI/UX design and brand development'
    },
    {
      name: 'Mike Johnson',
      role: 'Lead Developer',
      image: '👨‍💻',
      description: 'Full-stack developer with passion for cutting-edge tech'
    },
    {
      name: 'Sarah Wilson',
      role: 'Marketing Head',
      image: '👩‍💼',
      description: 'Digital marketing strategist and growth hacker'
    }
  ];

  const milestones = [
    { year: '2019', event: 'Company Founded', description: 'Started with a vision to transform digital experiences' },
    { year: '2020', event: 'First 100 Clients', description: 'Reached milestone of serving 100+ satisfied clients' },
    { year: '2021', event: 'Team Expansion', description: 'Grew to 15+ dedicated professionals' },
    { year: '2022', event: 'Award Winning', description: 'Received Best Digital Agency award' },
    { year: '2023', event: 'Global Reach', description: 'Expanded services to 10+ countries' },
    { year: '2024', event: 'Innovation Hub', description: 'Launched AI-powered solutions division' }
  ];

  const values = [
    {
      icon: '🎯',
      title: 'Excellence',
      description: 'We strive for perfection in every project we undertake'
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'Constantly pushing boundaries with creative solutions'
    },
    {
      icon: '🤝',
      title: 'Collaboration',
      description: 'Working together to achieve extraordinary results'
    },
    {
      icon: '⚡',
      title: 'Agility',
      description: 'Adapting quickly to changing market demands'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">About Us</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            We are a passionate team of creators, developers, and strategists dedicated to 
            building digital experiences that make a difference.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-gray-600 dark:text-gray-400">
                <p>
                  Founded in 2019, we started as a small team with a big vision: to transform 
                  how businesses connect with their audiences through digital innovation.
                </p>
                <p>
                  What began as a passion project has grown into a full-service digital agency 
                  serving clients across the globe. We've helped startups, enterprises, and 
                  everything in between achieve their digital goals.
                </p>
                <p>
                  Our journey has been marked by continuous learning, adaptation, and a 
                  relentless pursuit of excellence in everything we do.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red">100+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red">5+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Years</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red">50+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Clients</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-200 dark:bg-gray-800 h-96 rounded-2xl flex items-center justify-center">
                <span className="text-6xl">🚀</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-offwhite dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The principles that guide our work and define our culture
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Our Journey</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-red h-full"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
                      <div className="text-red font-bold text-lg">{milestone.year}</div>
                      <h3 className="text-xl font-bold mb-2">{milestone.event}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-red rounded-full border-4 border-white dark:border-gray-900"></div>
                  
                  {/* Spacer */}
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-offwhite dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              The talented individuals behind our success
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300">
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <div className="text-red font-semibold mb-2">{member.role}</div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{member.description}</p>
                <div className="mt-4 flex justify-center space-x-3">
                  <button className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                    <span className="text-sm">📱</span>
                  </button>
                  <button className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                    <span className="text-sm">💼</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red to-red/90 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can help transform your digital presence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-red px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Get In Touch
            </Link>
            <Link 
              href="/portfolio" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red transition-colors duration-200"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;