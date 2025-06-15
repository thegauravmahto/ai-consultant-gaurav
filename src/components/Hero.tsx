
import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Zap, TrendingUp, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentPhase, setCurrentPhase] = useState(0);

  const businessPhases = [
    "Current Processes",
    "AI Integration",
    "Accelerated Growth"
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhase((prev) => (prev + 1) % businessPhases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToWork = () => {
    const workSection = document.getElementById('case-studies');
    workSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
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
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Personal branding badge */}
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm font-medium mb-8 animate-fade-in hover:bg-white/15 transition-all duration-300">
          <Brain className="w-4 h-4 animate-pulse" />
          <span className="font-semibold">Gaurav Mahto</span>
          <div className="w-1 h-1 bg-white/60 rounded-full" />
          AI Transformation Consultant
          <Zap className="w-4 h-4 text-yellow-300 animate-pulse" />
        </div>

        {/* Dynamic main headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight tracking-tight">
          Transform Your{' '}
          <div className="inline-block relative">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              {businessPhases[currentPhase]}
            </span>
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse" />
          </div>
          <br />
          with <span className="relative">
            <em className="font-light bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">AI Excellence</em>
            <TrendingUp className="inline-block w-8 h-8 ml-2 text-emerald-400 animate-bounce" />
          </span>
        </h1>

        {/* Enhanced value proposition */}
        <div className="space-y-4 mb-12">
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            I help businesses <strong className="text-white">understand their current processes</strong> and 
            <strong className="text-cyan-300"> accelerate growth through strategic AI adoption</strong>
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-lg text-blue-200 animate-fade-in animate-delay-300">
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Process Analysis
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              AI Integration Strategy
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
              Speed & Efficiency Optimization
            </div>
          </div>
        </div>

        {/* CTA Buttons with enhanced animations */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-fade-in animate-delay-500">
          <Button 
            onClick={scrollToContact}
            size="lg" 
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 hover:rotate-1 group"
          >
            Book Discovery Call 
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            onClick={scrollToWork}
            variant="outline" 
            size="lg" 
            className="border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm transition-all duration-300 transform hover:scale-105 hover:-rotate-1 group"
          >
            Explore My Work
            <Sparkles className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
          </Button>
        </div>

        {/* Additional CTA for Services */}
        <div className="mb-16 animate-fade-in animate-delay-700">
          <Button 
            onClick={scrollToServices}
            variant="ghost" 
            className="text-blue-200 hover:text-white hover:bg-white/10 px-6 py-2 text-base font-medium rounded-lg backdrop-blur-sm transition-all duration-300 group"
          >
            View AI Transformation Services
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Business value indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16 animate-fade-in animate-delay-700">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-3xl font-bold text-emerald-400 mb-2">10x</div>
            <p className="text-blue-200 text-sm">Faster Process Execution</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-3xl font-bold text-blue-400 mb-2">90%</div>
            <p className="text-blue-200 text-sm">Cost Reduction Potential</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1">
            <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
            <p className="text-blue-200 text-sm">AI-Powered Operations</p>
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center hover:border-white/60 transition-colors duration-300">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
