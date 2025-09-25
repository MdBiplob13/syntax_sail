import React from 'react'

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Part 1: Banner */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-black to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            We Build Digital <span className="text-red">Experiences</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Transforming ideas into powerful digital solutions that drive growth and innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red/90 transition-all duration-300 hover:scale-105">
              Get Started
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300">
              View Portfolio
            </button>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-red rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red rounded-full opacity-20 animate-pulse delay-1000"></div>
        </div>
      </section>

      {/* Part 2: Infinite Slider */}
      <section className="bg-red py-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          <div className="flex space-x-8">
            {[...Array(8)].map((_, i) => (
              <span key={i} className="text-white text-2xl font-bold mx-8">
                ★ DIGITAL EXCELLENCE ★ INNOVATION ★ CREATIVITY ★ QUALITY ★
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Part 3: Stats Section */}
      <section className="py-20 bg-offwhite dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
                Driving Digital Success Through Innovation
              </h2>
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-4xl md:text-6xl font-bold text-red mb-2">100+</div>
                  <div className="text-foreground">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-6xl font-bold text-red mb-2">50+</div>
                  <div className="text-foreground">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-6xl font-bold text-red mb-2">5+</div>
                  <div className="text-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-6xl font-bold text-red mb-2">24/7</div>
                  <div className="text-foreground">Support</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-300 dark:bg-gray-700 h-80 rounded-2xl flex items-center justify-center">
                <span className="text-foreground">Your Image Here</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Part 4: Services Cards */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            We Help You Build Digital Business
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to your business needs and goals
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'UI/UX Design', desc: 'Creating intuitive and engaging user experiences', icon: '🎨' },
              { title: 'Web Development', desc: 'Building robust and scalable web applications', icon: '💻' },
              { title: 'SEO Optimization', desc: 'Boosting your visibility and search rankings', icon: '🔍' },
              { title: 'Digital Marketing', desc: 'Driving growth through strategic campaigns', icon: '📈' }
            ].map((service, index) => (
              <div key={index} className="bg-offwhite dark:bg-gray-800 p-6 rounded-2xl hover:transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Part 5: Scroll Effect Sections */}
      <section className="relative">
        {[
          { title: 'Strategy & Planning', desc: 'We analyze your goals and create a comprehensive digital strategy', image: '📊' },
          { title: 'Design & Development', desc: 'Our team brings your vision to life with cutting-edge technology', image: '🚀' },
          { title: 'Testing & Optimization', desc: 'Rigorous testing ensures flawless performance and user experience', image: '🔧' },
          { title: 'Launch & Support', desc: 'We launch your project and provide ongoing support and maintenance', image: '🎯' }
        ].map((item, index) => (
          <div key={index} className="min-h-screen flex items-center justify-center sticky top-0 bg-foreground text-background">
            <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-4xl md:text-5xl font-bold mb-6">{item.title}</h3>
                <p className="text-xl">{item.desc}</p>
              </div>
              <div className="text-8xl text-center">{item.image}</div>
            </div>
          </div>
        ))}
      </section>

      {/* Part 6: Product Design Section */}
      <section className="py-20 bg-offwhite dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12 items-center">
          {/* Left Text */}
          <div>
            <h3 className="text-4xl font-bold mb-4 text-foreground">Product Design</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Creating beautiful and functional products that users love and businesses need.
            </p>
          </div>
          
          {/* Middle Image */}
          <div className="flex justify-center">
            <div className="bg-gray-300 dark:bg-gray-700 w-64 h-64 rounded-2xl flex items-center justify-center">
              <span className="text-4xl">📱</span>
            </div>
          </div>
          
          {/* Right Content */}
          <div className="text-center">
            <div className="mb-8">
              <div className="text-sm text-gray-500 mb-2">VIEW PRODUCT</div>
              <button className="w-20 h-20 bg-red rounded-full flex items-center justify-center hover:rotate-180 transition-transform duration-500">
                <span className="text-2xl text-white">→</span>
              </button>
            </div>
            <div className="w-12 h-12 border-2 border-foreground rounded-full flex items-center justify-center mx-auto">
              <span className="text-lg">☆</span>
            </div>
          </div>
        </div>
      </section>

      {/* Part 7: Why Choose Us */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Why Choose Us?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">We deliver excellence in every project</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Expert Team', desc: 'Skilled professionals with years of experience' },
              { title: 'Quality Assurance', desc: 'Rigorous testing and quality control processes' },
              { title: 'Timely Delivery', desc: 'We respect deadlines and deliver on time' }
            ].map((item, index) => (
              <div key={index} className="p-6">
                <div className="text-4xl mb-4">⭐</div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Part 8: Process Steps */}
      <section className="py-20 bg-offwhite dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Number Display */}
            <div className="text-center">
              <div className="w-32 h-32 bg-red rounded-full flex items-center justify-center mx-auto mb-8">
                <span className="text-4xl text-white font-bold">1/4</span>
              </div>
            </div>
            
            {/* Right - Steps */}
            <div>
              <h3 className="text-4xl font-bold mb-8 text-foreground">Our Process</h3>
              <div className="space-y-6">
                {[
                  'Discovery & Planning',
                  'Design & Development',
                  'Testing & Quality Assurance',
                  'Launch & Maintenance'
                ].map((step, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-red rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">{index + 1}</span>
                    </div>
                    <span className="text-lg text-foreground">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Part 9: Reviews Slider */}
      <section className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Client Reviews</h2>
          <div className="flex overflow-x-auto space-x-8 pb-4">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="min-w-[300px] bg-offwhite dark:bg-gray-800 p-6 rounded-2xl">
                <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  "Excellent service! They delivered beyond our expectations."
                </p>
                <div className="font-semibold text-foreground">Client Name</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Part 10: FAQ Section */}
      <section className="py-20 bg-offwhite dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          {/* Left - Achievements */}
          <div>
            <h3 className="text-4xl font-bold mb-8 text-foreground">Our Achievements</h3>
            <div className="space-y-6">
              <div className="text-3xl font-bold text-red">200+</div>
              <div className="text-lg text-foreground">Satisfied Clients Worldwide</div>
              
              <div className="text-3xl font-bold text-red">500+</div>
              <div className="text-lg text-foreground">Projects Successfully Delivered</div>
              
              <div className="text-3xl font-bold text-red">98%</div>
              <div className="text-lg text-foreground">Client Retention Rate</div>
            </div>
          </div>
          
          {/* Right - FAQ */}
          <div>
            <h3 className="text-4xl font-bold mb-8 text-foreground">FAQ</h3>
            <div className="space-y-4">
              {[
                { q: 'How long does a project take?', a: 'Typically 2-6 weeks depending on complexity' },
                { q: 'Do you provide support after launch?', a: 'Yes, we offer 3 months free support' },
                { q: 'What technologies do you use?', a: 'Modern frameworks like Next.js, React, Tailwind' },
                { q: 'Can you work with our existing team?', a: 'Absolutely! We collaborate seamlessly' }
              ].map((faq, index) => (
                <div key={index} className="border-b border-gray-300 dark:border-gray-700 pb-4">
                  <div className="font-semibold text-foreground mb-2">{faq.q}</div>
                  <div className="text-gray-600 dark:text-gray-400">{faq.a}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Part 11: Before Footer */}
      <section className="relative py-32 bg-gray-900 text-white text-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 text-gray-300">Let's create something amazing together</p>
          <button className="bg-red text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-red/90 transition-all duration-300">
            Get Free Consultation
          </button>
        </div>
      </section>
    </div>
  )
}

export default HomePage