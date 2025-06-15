
import React, { useState } from 'react';
import { ChevronRight, TrendingUp, Users, Zap, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CaseStudies = () => {
  const [selectedCase, setSelectedCase] = useState(0);

  const caseStudies = [
    {
      id: 0,
      company: "Narayana Group",
      role: "Associate Product Manager - AI Initiatives",
      period: "Sep 2024 - Current",
      icon: Building,
      color: "from-green-500 to-emerald-600",
      bgGradient: "from-green-50 to-emerald-50",
      challenge: "A 5000Cr+ education leader needed to leverage AI across 500+ schools impacting 600K students, with massive call data going unanalyzed and employee support queries overwhelming the system.",
      process: [
        "Analyzed the existing infrastructure and identified key pain points in call analysis and employee support",
        "Designed India's largest education AI Platform architecture to handle 600K calls/month",
        "Implemented RAG-based employee support system with advanced NLP capabilities",
        "Led cross-functional team through 0→1 development of Enterprise GenAI suite"
      ],
      outcome: {
        primary: "₹35.5M annual savings",
        metrics: [
          "95% accuracy in call analysis",
          "Coverage increased from 2% to 100%",
          "92% of queries resolved autonomously (up from 35%)",
          "80% reduction in resolution time",
          "12+ real-time KPIs enabled"
        ]
      }
    },
    {
      id: 1,
      company: "Nxtwave",
      role: "Associate Product Manager & Growth Leader",
      period: "Jan 2023 - Aug 2024",
      icon: TrendingUp,
      color: "from-blue-500 to-cyan-600",
      bgGradient: "from-blue-50 to-cyan-50",
      challenge: "A growing edtech company needed to optimize payment infrastructure, streamline loan processes, and expand into new markets while maintaining rapid growth.",
      process: [
        "Redesigned entire payment infrastructure focusing on cost optimization",
        "Pioneered API integration for NBFC loan processes with focus on TAT reduction",
        "Led 0-1 initiative for study abroad segment targeting ₹3Bn ARR opportunity",
        "Developed WhatsApp bots and predictive tools for marketing optimization"
      ],
      outcome: {
        primary: "₹300M revenue contribution",
        metrics: [
          "93.7% savings (₹2.68M) on payment infrastructure",
          "93.3% reduction in loan submission TAT (₹1.3M+ saved)",
          "220% of first-month target achieved for Nxtwave Abroad",
          "91.8% CPL reduction with 450% YoY growth",
          "98.3% reduction in campaign setup time (75 hours/month saved)"
        ]
      }
    },
    {
      id: 2,
      company: "Entrepreneurial Ventures",
      role: "Founder & P2P Merchant",
      period: "May 2020 - Sep 2022",
      icon: Zap,
      color: "from-purple-500 to-pink-600",
      bgGradient: "from-purple-50 to-pink-50",
      challenge: "During college, identified opportunities in no-code education and cryptocurrency arbitrage trading, requiring quick execution and market understanding.",
      process: [
        "Built Codersdunia - a no-code platform addressing student needs in the emerging market",
        "Developed comprehensive marketing strategy to attract and retain users",
        "Executed Binance P2P arbitrage trading with careful risk management",
        "Scaled both ventures while managing college commitments"
      ],
      outcome: {
        primary: "₹5.5M+ total revenue generated",
        metrics: [
          "₹2.4M+ revenue from Codersdunia",
          "₹3.1M revenue from Binance P2P arbitrage",
          "15K+ monthly visitors to platform",
          "Strong early demonstration of business acumen",
          "Successful exit from both ventures"
        ]
      }
    }
  ];

  return (
    <section id="case-studies" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            A Builder's <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Real challenges, innovative solutions, measurable outcomes. Here's how I've helped organizations transform with AI and strategic product leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Case study selector */}
          <div className="lg:col-span-4">
            <div className="sticky top-8 space-y-4">
              {caseStudies.map((study, index) => {
                const Icon = study.icon;
                return (
                  <button
                    key={study.id}
                    onClick={() => setSelectedCase(index)}
                    className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 ${
                      selectedCase === index
                        ? `bg-gradient-to-r ${study.bgGradient} border-transparent shadow-lg`
                        : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${study.color} text-white transform ${selectedCase === index ? 'scale-110' : ''} transition-transform`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className={`font-bold text-lg mb-1 ${selectedCase === index ? 'text-slate-900' : 'text-slate-700'}`}>
                          {study.company}
                        </h3>
                        <p className="text-sm text-slate-500 mb-2">{study.role}</p>
                        <p className="text-xs text-slate-400">{study.period}</p>
                      </div>
                      <ChevronRight className={`w-5 h-5 text-slate-400 transform transition-transform ${selectedCase === index ? 'rotate-90' : ''}`} />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Case study details */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 lg:p-12">
              {(() => {
                const study = caseStudies[selectedCase];
                const Icon = study.icon;
                return (
                  <div>
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-8">
                      <div className={`p-4 rounded-2xl bg-gradient-to-r ${study.color} text-white`}>
                        <Icon className="w-8 h-8" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-slate-900">{study.company}</h3>
                        <p className="text-slate-600">{study.role}</p>
                      </div>
                    </div>

                    {/* Challenge */}
                    <div className="mb-8">
                      <h4 className="text-xl font-bold text-slate-900 mb-4">The Challenge</h4>
                      <p className="text-slate-700 leading-relaxed">{study.challenge}</p>
                    </div>

                    {/* Process */}
                    <div className="mb-8">
                      <h4 className="text-xl font-bold text-slate-900 mb-4">My Process & Thinking</h4>
                      <div className="space-y-3">
                        {study.process.map((step, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${study.color} text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5`}>
                              {index + 1}
                            </div>
                            <p className="text-slate-700">{step}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Outcome */}
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-4">The Measurable Outcome</h4>
                      <div className={`bg-gradient-to-r ${study.bgGradient} rounded-2xl p-6 mb-6`}>
                        <div className={`text-4xl font-bold bg-gradient-to-r ${study.color} bg-clip-text text-transparent mb-2`}>
                          {study.outcome.primary}
                        </div>
                        <p className="text-slate-600 font-medium">Primary impact delivered</p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {study.outcome.metrics.map((metric, index) => (
                          <div key={index} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${study.color}`} />
                            <span className="text-slate-700 text-sm font-medium">{metric}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
