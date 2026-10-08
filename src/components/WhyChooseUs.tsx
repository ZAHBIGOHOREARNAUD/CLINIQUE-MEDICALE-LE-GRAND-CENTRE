import React from 'react';
import { Award, Cpu, Clock, ShieldCheck, HeartPulse, Sparkles } from 'lucide-react';
import { WHY_CHOOSE_US, KEY_STATS, INSURANCE_PARTNERS } from '../data/clinicData';

export const WhyChooseUs: React.FC = () => {
  const icons = [Award, Cpu, Clock, ShieldCheck];

  return (
    <section id="clinique" className="py-16 lg:py-24 bg-[#F7FAFA] border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Top Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-[#27A6A6] mb-2">
            La Clinique Le Grand Centre
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#064852] tracking-tight mb-4">
            Pourquoi Choisir Notre Établissement ?
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Fondée sur les standards internationaux de qualité et de sécurité des soins, notre clinique allie haute technicité médicale et humanisme au chevet du patient.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {WHY_CHOOSE_US.map((item, idx) => {
            const Icon = icons[idx] || Sparkles;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-2xs hover:shadow-md transition-shadow duration-200 flex flex-col justify-start"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0B5D6B]/10 text-[#0B5D6B] flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-[#0B5D6B]" />
                </div>
                <h3 className="text-base font-bold text-[#064852] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Key Stats Bar - Specified in Cahier des charges: CHIFFRES CLÉS */}
        <div className="bg-gradient-to-br from-[#064852] to-[#0B5D6B] rounded-3xl p-8 lg:p-10 shadow-lg text-white mb-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            {KEY_STATS.map((stat, i) => (
              <div key={i} className={`pt-4 lg:pt-0 ${i > 0 ? 'lg:pl-8' : ''} text-center lg:text-left`}>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F2B84B] tracking-tight mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-white mb-0.5">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-300">
                  {stat.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Insurances & Conventionnements */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80">
          <div className="text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Tiers Payant & Prise en Charge Directe</span>
            <h4 className="text-lg font-bold text-[#064852] mt-1">Partenariats Assurances & Mutuelles</h4>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {INSURANCE_PARTNERS.map((partner, index) => (
              <span
                key={index}
                className="px-3 py-1.5 bg-[#F7FAFA] border border-slate-200 text-xs font-semibold text-slate-700 rounded-lg hover:border-[#27A6A6] transition-colors"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
