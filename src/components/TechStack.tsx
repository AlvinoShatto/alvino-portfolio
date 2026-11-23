import React, { useState } from 'react';
import { 
  Code2, 
  Layout, 
  Server, 
  Cpu, 
  Database, 
  Terminal, 
  ShieldCheck, 
  Layers, 
  Sparkles 
} from 'lucide-react';
import { SKILLS_CATEGORIES } from '../data/portfolioData';

export const TechStack: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...SKILLS_CATEGORIES.map(c => c.category)];

  const filteredCategories = selectedCategory === 'All' 
    ? SKILLS_CATEGORIES 
    : SKILLS_CATEGORIES.filter(c => c.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Programming Languages': return <Code2 className="w-4 h-4 text-[#D71927]" />;
      case 'Frontend Development': return <Layout className="w-4 h-4 text-[#D71927]" />;
      case 'Backend Development': return <Server className="w-4 h-4 text-[#D71927]" />;
      case 'AI & Computer Vision': return <Cpu className="w-4 h-4 text-[#D71927]" />;
      case 'Databases & Storage': return <Database className="w-4 h-4 text-[#D71927]" />;
      case 'Core Concepts & Security': return <ShieldCheck className="w-4 h-4 text-[#D71927]" />;
      case 'DevOps & Developer Tools': return <Terminal className="w-4 h-4 text-[#D71927]" />;
      default: return <Layers className="w-4 h-4 text-[#D71927]" />;
    }
  };

  return (
    <section id="stack" className="relative py-24 bg-[#080808] border-t border-[#1C1C1C]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#D71927]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#222]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#D71927] uppercase tracking-[0.2em] mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>// 03. TECHNICAL ENVIRONMENT</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight">
              ENGINEERING TOOLKIT
            </h2>
          </div>
          <p className="mt-3 md:mt-0 font-mono text-xs text-[#777] max-w-sm text-left md:text-right">
            STRUCTURED BY DISCIPLINE &bull; NO ARTIFICIAL PERCENTAGES &bull; TESTED IN PRODUCTION
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded text-xs font-mono tracking-wider transition-all duration-200 border ${
                selectedCategory === cat
                  ? 'bg-[#D71927] text-white border-[#D71927] shadow-[0_0_15px_rgba(215,25,39,0.4)]'
                  : 'bg-[#121212] text-[#8E8E93] border-[#222222] hover:text-white hover:border-[#333]'
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((group, idx) => (
            <div
              key={group.category}
              className="p-6 rounded-xl bg-[#0F0F0F] border border-[#202020] hover:border-[#D71927]/60 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#D71927] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-5 pb-3 border-b border-[#1A1A1A]">
                  <div className="flex items-center gap-2.5">
                    <span className="p-1.5 rounded bg-[#161616] border border-[#262626]">
                      {getCategoryIcon(group.category)}
                    </span>
                    <h3 className="font-mono text-xs font-semibold text-white tracking-wider uppercase">
                      {group.category}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono text-[#555]">
                    0{idx + 1}
                  </span>
                </div>

                {/* Skills Interactive Badges */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded bg-[#151515] hover:bg-[#D71927] text-[#D0D0D0] hover:text-white border border-[#262626] hover:border-[#D71927] text-xs font-mono transition-all duration-200 cursor-default select-none shadow-sm hover:shadow-[0_0_12px_rgba(215,25,39,0.35)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Telemetry */}
              <div className="mt-6 pt-3 border-t border-[#181818] flex items-center justify-between text-[10px] font-mono text-[#666]">
                <span>STATUS: VERIFIED</span>
                <span className="text-[#D71927]">{group.skills.length} TECHNOLOGIES</span>
              </div>
            </div>
          ))}
        </div>

        {/* Live Architecture Workflow Preview Strip (Inspired by Work Process in reference) */}
        <div className="mt-16 p-8 rounded-2xl bg-[#0C0C0C] border border-[#222] relative overflow-hidden">
          <div className="flex items-center gap-2 text-xs font-mono text-[#D71927] uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FULL-STACK & AI ARCHITECTURE WORKFLOW</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 rounded-lg bg-[#121212] border border-[#1E1E1E]">
              <span className="text-xl font-display text-[#D71927] font-black block">01 / ARCHITECT</span>
              <p className="text-xs font-mono text-white mt-1">Schema & API Contract</p>
              <p className="text-[11px] text-[#777] mt-1 leading-normal">
                Strict relational data modeling (MySQL), document structures (MongoDB), and OpenAPI documentation.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-[#121212] border border-[#1E1E1E]">
              <span className="text-xl font-display text-[#D71927] font-black block">02 / SECURE</span>
              <p className="text-xs font-mono text-white mt-1">Authentication & RBAC</p>
              <p className="text-[11px] text-[#777] mt-1 leading-normal">
                Google/LinkedIn OAuth 2.0, cryptographically verified JWT tokens, and fine-grained endpoint authorization.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-[#121212] border border-[#1E1E1E]">
              <span className="text-xl font-display text-[#D71927] font-black block">03 / INFER</span>
              <p className="text-xs font-mono text-white mt-1">Computer Vision & AI</p>
              <p className="text-[11px] text-[#777] mt-1 leading-normal">
                Sub-50ms inference pipelines using MediaPipe pose landmarks, Hugging Face models, and voice interaction.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-[#121212] border border-[#1E1E1E]">
              <span className="text-xl font-display text-[#D71927] font-black block">04 / DEPLOY</span>
              <p className="text-xs font-mono text-white mt-1">Production Delivery</p>
              <p className="text-[11px] text-[#777] mt-1 leading-normal">
                Automated continuous deployment via Vercel and Render, optimized client bundles, and live monitoring.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
