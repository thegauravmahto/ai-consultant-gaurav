
import React from 'react';
import { Brain, Code, TrendingUp, Users } from 'lucide-react';

const SkillsToolkit = () => {
  const skillCategories = [
    {
      icon: Brain,
      title: "Product",
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50",
      skills: [
        "Business Strategy",
        "Market Analysis", 
        "Agile Methodologies",
        "API Testing",
        "Product Analytics",
        "User Research"
      ]
    },
    {
      icon: Code,
      title: "Technology",
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50",
      skills: [
        "Python",
        "SQL",
        "LLM's & NLP",
        "Flask",
        "HTML/CSS",
        "ChatGPT Integration",
        "Prompt Engineering",
        "RAG Architecture"
      ]
    },
    {
      icon: TrendingUp,
      title: "Marketing",
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
      skills: [
        "Marketing Strategy",
        "Influencer Marketing",
        "Competitive Analysis",
        "User Research",
        "Market Research"
      ]
    },
    {
      icon: Users,
      title: "Leadership & Management",
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50",
      skills: [
        "Cross-functional Leadership",
        "Project Management",
        "Stakeholder Management"
      ]
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Skills & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Toolkit</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A comprehensive skillset spanning product strategy, technical implementation, 
            and business execution—everything needed to turn AI concepts into market-ready solutions.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className={`${category.bgColor} rounded-2xl p-8 border border-white/60 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group`}
              >
                {/* Icon and title */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {category.title}
                  </h3>
                </div>

                {/* Skills list */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center gap-3 p-3 bg-white/70 rounded-lg hover:bg-white transition-colors duration-200"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color}`} />
                      <span className="text-slate-700 font-medium text-sm">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Decorative gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500 pointer-events-none`} />
              </div>
            );
          })}
        </div>

        {/* Bottom section with education */}
        <div className="mt-20 bg-gradient-to-r from-slate-50 to-blue-50 rounded-3xl p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Education & Continuous Learning</h3>
            <p className="text-slate-600">Building expertise through formal education and practical application</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white mb-4">
                <Brain className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">
                Indian Institute of Technology Madras
              </h4>
              <p className="text-slate-600 text-sm mb-1">Diploma, Computer Programming</p>
              <p className="text-slate-500 text-xs">2023-2025</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white mb-4">
                <Code className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">
                Jawaharlal Nehru Technological University
              </h4>
              <p className="text-slate-600 text-sm mb-1">B.Tech</p>
              <p className="text-slate-500 text-xs">2018-2022</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsToolkit;
