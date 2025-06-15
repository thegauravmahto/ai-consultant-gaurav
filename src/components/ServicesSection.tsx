
import React from 'react';
import { Brain, Rocket, Code, ArrowRight, Sparkles, Calendar, Target, Zap, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Readiness Assessment",
      subtitle: "Understand Your Current State",
      description: "Deep-dive analysis of your existing processes to identify AI opportunities. I map your workflows, spot inefficiencies, and create a tailored roadmap for AI transformation that fits your business goals.",
      features: [
        "Complete process mapping & analysis", 
        "AI opportunity identification", 
        "ROI projections & feasibility study", 
        "Strategic implementation roadmap"
      ],
      outcome: "Clear understanding of where AI can drive 10x improvements",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: Rocket,
      title: "Rapid AI Prototyping",
      subtitle: "From Idea to Working Solution",
      description: "Turn AI concepts into working prototypes in weeks, not months. My rapid development approach gets your AI solution in front of users fast for real-world validation and iteration.",
      features: [
        "0→1 AI product development", 
        "User testing & validation cycles", 
        "Agile development methodology", 
        "Performance optimization"
      ],
      outcome: "Working AI prototype ready for user feedback in 2-4 weeks",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: Code,
      title: "Enterprise AI Implementation",
      subtitle: "Scale with Production-Ready Solutions",
      description: "Deploy robust, scalable AI systems that integrate seamlessly with your existing infrastructure. Specializing in GenAI, RAG architectures, and custom AI solutions that solve real business problems.",
      features: [
        "Custom RAG & LLM solutions", 
        "API integrations & automation", 
        "Scalable cloud architecture", 
        "Security & compliance focus"
      ],
      outcome: "Production-ready AI systems that scale with your business",
      color: "from-emerald-400 to-teal-500"
    }
  ];

  const handleBookCall = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Enhanced section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 animate-pulse" />
            AI Transformation Services
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Partner with <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Gaurav Mahto</span>
            <br />to Build Your AI Future
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Whether you're a startup looking to integrate AI or an enterprise seeking to transform operations, 
            I provide hands-on expertise to turn AI concepts into measurable business value.
          </p>
          
          {/* Prominent Discovery Call CTA */}
          <Button 
            onClick={handleBookCall} 
            className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-8 py-4 rounded-lg transition-all duration-300 group hover:scale-105"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Schedule Your Discovery Call
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Enhanced services grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20"
              >
                {/* Enhanced icon with gradient */}
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl text-white mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon className="w-8 h-8" />
                </div>

                {/* Enhanced title and subtitle */}
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-blue-300 text-sm font-medium opacity-80">
                    {service.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-blue-100 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-blue-200 text-sm">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 group-hover:bg-purple-400 transition-colors animate-pulse" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Outcome highlight */}
                <div className="bg-gradient-to-r from-white/5 to-white/10 rounded-lg p-4 mb-6 border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold text-sm">Expected Outcome</span>
                  </div>
                  <p className="text-white text-sm font-medium">{service.outcome}</p>
                </div>

                {/* CTA per service card */}
                <Button 
                  onClick={handleBookCall} 
                  variant="outline" 
                  size="sm" 
                  className="w-full border-white/20 hover:bg-white transition-all duration-300 group/btn text-gray-950 hover:scale-105"
                >
                  Discuss This Service
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>

                {/* Enhanced decorative gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500 pointer-events-none`} />
              </div>
            );
          })}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 max-w-4xl mx-auto relative overflow-hidden">
            {/* Background animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 animate-pulse" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-6">
                <TrendingUp className="w-8 h-8 text-emerald-400 animate-bounce" />
                <h3 className="text-3xl font-bold text-white">
                  Ready to Transform Your Business with AI?
                </h3>
                <Zap className="w-8 h-8 text-yellow-400 animate-pulse" />
              </div>
              
              <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
                Let's analyze your current processes and create a strategic AI implementation plan. 
                Book a discovery call to explore how AI can drive your next breakthrough.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={handleBookCall} 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-10 py-4 text-xl font-semibold rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 group"
                >
                  Book a Discovery Call
                  <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button 
                  onClick={handleBookCall} 
                  variant="outline" 
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-xl transition-all duration-300 hover:scale-105"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
