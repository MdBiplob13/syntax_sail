import React from 'react'

const ScrollEffectSections = () => {
  return (
    <section className="relative">
        {[
          {
            title: "Strategy & Planning",
            desc: "We analyze your goals and create a comprehensive digital strategy",
            image: "📊",
          },
          {
            title: "Design & Development",
            desc: "Our team brings your vision to life with cutting-edge technology",
            image: "🚀",
          },
          {
            title: "Testing & Optimization",
            desc: "Rigorous testing ensures flawless performance and user experience",
            image: "🔧",
          },
          {
            title: "Launch & Support",
            desc: "We launch your project and provide ongoing support and maintenance",
            image: "🎯",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="min-h-screen flex items-center justify-center sticky top-0 bg-foreground text-background"
          >
            <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-4xl md:text-5xl font-bold mb-6">
                  {item.title}
                </h3>
                <p className="text-xl">{item.desc}</p>
              </div>
              <div className="text-8xl text-center">{item.image}</div>
            </div>
          </div>
        ))}
      </section>
  )
}

export default ScrollEffectSections