
import React, { useEffect, useRef, useState } from 'react';
import { TrendingUp, Target, Zap, Rocket } from 'lucide-react';

const MetricsHighlight = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const metrics = [
    {
      number: "35.5M",
      subtitle: "Annual Savings Delivered at Narayana Group",
      icon: TrendingUp,
      color: "from-green-400 to-emerald-600",
      bgColor: "bg-green-50",
      delay: "delay-100"
    },
    {
      number: "₹300M",
      subtitle: "INR Revenue Contribution at Nxtwave",
      icon: Target,
      color: "from-blue-400 to-cyan-600",
      bgColor: "bg-blue-50",
      delay: "delay-200"
    },
    {
      number: "93.3%",
      subtitle: "Reduction in Loan Submission TAT",
      icon: Zap,
      color: "from-purple-400 to-pink-600",
      bgColor: "bg-purple-50",
      delay: "delay-300"
    },
    {
      number: "₹5.5M+",
      subtitle: "INR Revenue Generated as a Founder",
      icon: Rocket,
      color: "from-orange-400 to-red-600",
      bgColor: "bg-orange-50",
      delay: "delay-500"
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-transparent to-purple-50/50" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Impact in <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Numbers</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Real results from real projects. Here's the measurable impact I've delivered.
          </p>
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl ${metric.bgColor} p-8 border border-white/60 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isVisible ? `animate-fade-in ${metric.delay}` : 'opacity-0'
                }`}
              >
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${metric.color} text-white mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6" />
                </div>

                {/* Number */}
                <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-br ${metric.color} bg-clip-text text-transparent mb-3 group-hover:scale-105 transition-transform duration-300`}>
                  {metric.number}
                </div>

                {/* Subtitle */}
                <p className="text-slate-700 font-medium leading-snug group-hover:text-slate-900 transition-colors duration-300">
                  {metric.subtitle}
                </p>

                {/* Decorative element */}
                <div className={`absolute top-4 right-4 w-20 h-20 bg-gradient-to-br ${metric.color} opacity-5 rounded-full transform group-hover:scale-125 transition-transform duration-500`} />
              </div>
            );
          })}
        </div>

        {/* Bottom decoration */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 text-slate-500 text-sm">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-slate-300" />
            <span>Proven track record of delivering measurable results</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-slate-300" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricsHighlight;
