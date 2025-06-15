
import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Zap, TrendingUp, Brain, Target, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentPhase, setCurrentPhase] = useState(0);
  const [currentBenefit, setCurrentBenefit] = useState(0);
  
  const businessPhases = [
    "Manual Processes", 
    "AI-Enhanced Workflows", 
    "Automated Excellence"
  ];
  
  const keyBenefits = [
    "10x Faster Execution",
    "90% Cost Reduction", 
    "24/7 Operations"
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const phaseInterval = setInterval(() => {
      setCurrentPhase(prev => (prev + 1) % businessPhases.length);
    }, 3000);
    
    const benefitInterval = setInterval(() => {
      setCurrentBenefit(prev => (prev + 1) % keyBenefits.length);
    }, 2500);

    return () => {
      clearInterval(phaseInterval);
      clearInterval(benefitInterval);
    };
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToWork = () => {
    const workSection = document.getElementById('case-studies');
    workSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            transition: 'transform 0.5s ease-out'
          }}
        />
        <div 
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-indigo-500/10 rounded-full blur-2xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
        <div 
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-500/8 rounded-full blur-3xl animate-float"
          style={{
            transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`,
            transition: 'transform 0.4s ease-out'
          }}
        />
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Enhanced personal branding badge */}
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm font-medium mb-8 animate-fade-in hover:bg-white/15 transition-all duration-300 hover:scale-105">
          <Brain className="w-5 h-5 animate-pulse text-blue-400" />
          <span className="font-bold text-lg">Gaurav Mahto</span>
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
            AI Transformation Consultant
          </span>
          <Zap className="w-5 h-5 text-yellow-300 animate-pulse" />
        </div>

        {/* Enhanced main headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
          Transform Your{' '}
          <div className="inline-block relative">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              {businessPhases[currentPhase]}
            </span>
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse" />
          </div>
          <br />
          Into <span className="relative">
            <em className="font-light bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              AI-Powered Success
            </em>
            <TrendingUp className="inline-block w-8 h-8 ml-2 text-emerald-400 animate-bounce" />
          </span>
        </h1>

        {/* Enhanced value proposition with dynamic benefits */}
        <div className="space-y-6 mb-12">
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            I help businesses <strong className="text-white">understand their current processes</strong>, 
            identify <strong className="text-cyan-300">AI opportunities</strong>, and 
            <strong className="text-emerald-300"> accelerate growth through strategic implementation</strong>
          </p>
          
          {/* Dynamic benefit showcase */}
          <div className="flex justify-center items-center gap-4 animate-fade-in animate-delay-300">
            <div className="px-6 py-3 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 backdrop-blur-sm border border-white/20 rounded-full">
              <span className="text-2xl font-bold text-emerald-400">
                {keyBenefits[currentBenefit]}
              </span>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-lg text-blue-200 animate-fade-in animate-delay-500">
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <Target className="w-5 h-5 text-green-400 animate-pulse" />
              Process Analysis & Optimization
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <Brain className="w-5 h-5 text-blue-400 animate-pulse" />
              Custom AI Strategy Development
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <Rocket className="w-5 h-5 text-purple-400 animate-pulse" />
              Rapid Implementation & Scale
            </div>
          </div>
        </div>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in animate-delay-700">
          <Button 
            onClick={scrollToContact} 
            size="lg" 
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-10 py-5 text-xl font-bold rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-110 hover:rotate-1 group"
          >
            Book Your Discovery Call
            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </Button>
          
          <Button 
            onClick={scrollToWork} 
            variant="outline" 
            size="lg" 
            className="border-2 border-white/30 hover:bg-white px-8 py-5 text-lg font-semibold rounded-xl backdrop-blur-sm transition-all duration-300 transform hover:scale-105 hover:-rotate-1 group text-zinc-950"
          >
            View Success Stories
            <Sparkles className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
          </Button>
        </div>

        {/* Enhanced business value indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16 animate-fade-in animate-delay-900">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 group">
            <div className="text-4xl font-bold text-emerald-400 mb-3 group-hover:scale-110 transition-transform">₹35.5M+</div>
            <p className="text-blue-200 text-base font-medium">Annual Savings Delivered</p>
            <p className="text-blue-300 text-sm mt-1">Through AI Process Optimization</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 group">
            <div className="text-4xl font-bold text-blue-400 mb-3 group-hover:scale-110 transition-transform">93.3%</div>
            <p className="text-blue-200 text-base font-medium">Process Time Reduction</p>
            <p className="text-blue-300 text-sm mt-1">From Manual to AI-Automated</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 group">
            <div className="text-4xl font-bold text-purple-400 mb-3 group-hover:scale-110 transition-transform">24/7</div>
            <p className="text-blue-200 text-base font-medium">AI-Powered Operations</p>
            <p className="text-blue-300 text-sm mt-1">Continuous Business Growth</p>
          </div>
        </div>

        {/* Consultation focus callout */}
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-4xl mx-auto mb-8 animate-fade-in animate-delay-1000">
          <h3 className="text-2xl font-bold text-white mb-4">
            🎯 My Approach: Understand → Strategize → Transform
          </h3>
          <p className="text-blue-100 text-lg leading-relaxed">
            I don't just implement AI tools. I analyze your current workflows, identify bottlenecks, 
            and create custom AI solutions that integrate seamlessly with your business processes to deliver measurable results.
          </p>
        </div>

        {/* Additional Services CTA */}
        <div className="mb-16 animate-fade-in animate-delay-1100">
          <Button 
            onClick={scrollToServices} 
            variant="ghost" 
            className="text-blue-200 hover:text-white hover:bg-white/10 px-8 py-3 text-lg font-medium rounded-lg backdrop-blur-sm transition-all duration-300 group border border-white/20 hover:border-white/40"
          >
            Explore AI Transformation Services
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center hover:border-white/60 transition-colors duration-300 cursor-pointer">
            <div className="w-2 h-4 bg-white/60 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
