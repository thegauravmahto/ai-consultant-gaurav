
import React, { useState } from 'react';
import { Mail, Linkedin, Send, Sparkles, MessageCircle, Calendar, ArrowRight, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you within 24 hours."
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
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
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 animate-pulse" />
            Let's Connect & Transform
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Ready to Transform with{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI?
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Book a discovery call with <strong className="text-white">Gaurav Mahto</strong> to analyze your processes, 
            identify AI opportunities, and create a transformation roadmap.
          </p>
        </div>

        {/* Prominent Discovery Call Section */}
        <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/20 rounded-3xl p-10 max-w-4xl mx-auto mb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/5 to-purple-400/5 animate-pulse" />
          
          <div className="relative z-10 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Calendar className="w-8 h-8 text-blue-400 animate-bounce" />
              <h3 className="text-3xl font-bold text-white">Book Your AI Discovery Call</h3>
            </div>
            
            <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
              30-minute strategic session to understand your business processes and explore AI transformation opportunities.
            </p>

            {/* What you'll get */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                <span className="text-white font-medium">Process Analysis</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                <span className="text-white font-medium">AI Opportunity Map</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                <span className="text-white font-medium">Strategic Roadmap</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-12 py-5 text-xl font-bold rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-110 group"
              >
                <Calendar className="w-6 h-6 mr-3" />
                Book Discovery Call Now
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <div className="flex items-center gap-2 text-blue-200 bg-white/5 px-4 py-3 rounded-xl">
                <Clock className="w-5 h-5" />
                <span className="text-sm">Usually responds within 2 hours</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Enhanced contact info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Connect with Gaurav Mahto</h3>
              <p className="text-blue-100 text-lg leading-relaxed mb-8">
                AI transformation consultant passionate about helping businesses understand their processes 
                and unlock growth through strategic AI implementation. Let's discuss your vision and create actionable solutions.
              </p>
            </div>

            {/* Contact methods */}
            <div className="space-y-6">
              <a 
                href="mailto:gauravdhirm@gmail.com" 
                className="flex items-center gap-4 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 group transform hover:scale-105"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg">
                  <Mail className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-white font-semibold text-lg">Email</p>
                  <p className="text-blue-200">gauravdhirm@gmail.com</p>
                  <p className="text-blue-300 text-sm">Response within 24 hours</p>
                </div>
              </a>

              <a 
                href="https://linkedin.com/in/gauravmahto" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-4 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 group transform hover:scale-105"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center text-white shadow-lg">
                  <Linkedin className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-white font-semibold text-lg">LinkedIn</p>
                  <p className="text-blue-200">linkedin.com/in/gauravmahto</p>
                  <p className="text-blue-300 text-sm">Professional network & updates</p>
                </div>
              </a>
            </div>

            {/* Enhanced consultation approach */}
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <MessageCircle className="w-6 h-6 text-blue-400" />
                <span className="text-white font-semibold text-lg">My Consultation Approach</span>
              </div>
              <ul className="space-y-2 text-blue-100">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full" />
                  Understand your current business processes
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full" />
                  Identify specific AI implementation opportunities
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                  Create strategic roadmap for transformation
                </li>
              </ul>
            </div>
          </div>

          {/* Enhanced contact form */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <p className="text-blue-200 mb-6">
              Tell me about your business and AI goals. The more specific, the better I can help!
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-blue-400 focus:ring-blue-400/20 h-12 text-lg"
                  required
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-blue-400 focus:ring-blue-400/20 h-12 text-lg"
                  required
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Describe your business processes and how you'd like AI to help..."
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-blue-400 focus:ring-blue-400/20 resize-none text-lg"
                  required
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:transform-none"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    Send Message
                    <Send className="w-5 h-5" />
                  </div>
                )}
              </Button>
            </form>
          </div>
        </div>

        {/* Enhanced footer */}
        <div className="text-center mt-16 pt-8 border-t border-white/10">
          <p className="text-blue-200 text-lg">
            Built with passion for AI innovation • <span className="font-semibold text-white">Gaurav Mahto</span> © 2024
          </p>
          <p className="text-blue-300 text-sm mt-2">
            Transforming businesses through strategic AI implementation
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
