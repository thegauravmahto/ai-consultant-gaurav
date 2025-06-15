
import React from 'react';
import { Zap, Target, Code, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: Zap,
      title: "DOER Mentality",
      description: "I don't just strategize—I build. From identifying opportunities to shipping products, I believe in hands-on execution."
    },
    {
      icon: Target,
      title: "Business-First Approach",
      description: "Every AI solution I create is designed to solve real business problems and deliver measurable value, not just showcase cool tech."
    },
    {
      icon: Code,
      title: "Rapid Prototyping",
      description: "My 'vibe code' philosophy: get to MVP fast, validate with real users, then iterate. Speed and validation over perfection."
    },
    {
      icon: Lightbulb,
      title: "Continuous Innovation",
      description: "The AI landscape evolves daily. I stay at the forefront, constantly learning and adapting to bring cutting-edge solutions to market."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              The Builder Behind the{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Products
              </span>
            </h2>
            
            <div className="space-y-6 text-lg text-slate-700 leading-relaxed mb-8">
              <p>
                I'm <strong>Gaurav Mahto</strong>, and I build impactful AI products that solve real business problems. 
                My approach is simple: <em>identify the opportunity, rapidly build the MVP, and execute relentlessly</em>.
              </p>
              
              <p>
                During my college days, I generated <strong>~₹5.5M+ revenue</strong> through Codersdunia (which I founded) 
                and Binance P2P arbitrage trading. This early entrepreneurial success wasn't just about the money—it was 
                about proving that with the right mindset, you can turn ideas into reality.
              </p>
              
              <p>
                Today, I bring that same <strong>high-agency builder mentality</strong> to AI product development. 
                Whether it's saving ₹35.5M annually at Narayana Group or contributing ₹300M in revenue at Nxtwave, 
                I focus on creating solutions that move the needle for businesses.
              </p>
              
              <p>
                I'm passionate about <strong>practical AI applications</strong> and believe the future belongs to those 
                who can bridge the gap between cutting-edge technology and real-world business value.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                AI Strategy
              </span>
              <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                MVP Execution
              </span>
              <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                Business Value
              </span>
              <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                LLMs/RAG
              </span>
              <span className="px-4 py-2 bg-pink-100 text-pink-800 rounded-full text-sm font-medium">
                Python
              </span>
            </div>
          </div>

          {/* Values grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-white/60"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white mb-4 transform hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
