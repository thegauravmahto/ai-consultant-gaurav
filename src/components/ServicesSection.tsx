
import React from 'react';
import { Brain, Rocket, Code, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Product Strategy",
      description: "Transform your business vision into actionable AI roadmaps. I help identify high-impact opportunities and create strategies that align AI capabilities with business objectives.",
      features: ["Market opportunity analysis", "AI feasibility assessment", "Strategic roadmap development", "ROI modeling & projections"]
    },
    {
      icon: Rocket,
      title: "Rapid Prototyping & MVP",
      description: "From concept to working prototype in weeks, not months. My 'vibe code' approach gets your AI product in front of users fast for real-world validation.",
      features: ["0→1 product development", "User research & validation", "Agile development cycles", "Performance optimization"]
    },
    {
      icon: Code,
      title: "GenAI & RAG Implementation",
      description: "Deploy production-ready GenAI solutions that solve real business problems. Specializing in RAG architectures, LLM integrations, and enterprise AI systems.",
      features: ["Custom RAG solutions", "LLM fine-tuning", "API integrations", "Scalable architecture design"]
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
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Consulting Services
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Partner with Me to Build Your{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI Future
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Whether you're a startup looking to integrate AI or an enterprise seeking to transform operations, 
            I provide hands-on expertise to turn AI concepts into business value.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20"
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl text-white mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-blue-100 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-blue-200 text-sm">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 group-hover:bg-purple-400 transition-colors" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-blue-100 mb-8 text-lg">
              Let's discuss your vision and create a strategic plan to make it reality. 
              Book a discovery call to explore how AI can drive your next breakthrough.
            </p>
            <Button 
              onClick={handleBookCall}
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 group"
            >
              Book a Discovery Call
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
