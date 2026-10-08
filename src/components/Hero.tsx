import React from 'react';
import { Calendar, Phone, CheckCircle2, ShieldCheck, HeartPulse, Clock, Sparkles } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface HeroProps {
  onOpenAppointment: () => void;
  onOpenEmergency: () => void;
  onExploreSpecialties: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenAppointment,
  onOpenEmergency,
  onExploreSpecialties
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F7FAFA] via-white to-[#F7FAFA] pt-8 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-100">
      {/* Background soft ambient accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#27A6A6]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#0B5D6B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Medical reassurance kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#0B5D6B]/8 text-[#0B5D6B] text-xs font-semibold uppercase tracking-wider mb-5">
              <ShieldCheck className="w-4 h-4 text-[#27A6A6]" />
              <span>Établissement conventionné · Cocody, Abidjan</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-[#064852] tracking-tight leading-[1.15] mb-6">
              Votre santé, <br className="hidden sm:inline" />
              <span className="text-[#0B5D6B] relative inline-block">
                notre priorité
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#F2B84B]" viewBox="0 0 100 12" preserveAspectRatio="none">
                  <path d="M0,8 Q50,0 100,8" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
              {CLINIC_INFO.description} Consultations de pointe, laboratoire d'analyses, imagerie moderne et service d'urgences actif 24h/24 et 7j/7.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-8">
              <button
                onClick={onOpenAppointment}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-semibold text-white bg-[#0B5D6B] hover:bg-[#064852] active:bg-[#04333b] rounded-xl shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
              >
                <Calendar className="w-5 h-5 text-[#F2B84B]" />
                <span>Prendre rendez-vous</span>
              </button>

              <a
                href={`tel:${CLINIC_INFO.phoneMainRaw}`}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-semibold text-[#0B5D6B] bg-white hover:bg-slate-50 border border-slate-300 rounded-xl transition-all duration-200 shadow-2xs"
              >
                <Phone className="w-5 h-5 text-[#27A6A6]" />
                <span>Appeler la clinique</span>
              </a>
            </div>

            {/* 3 Reassuring Value Props specified in cahier des charges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-slate-200/80 w-full">
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#27A6A6] shrink-0" />
                <span>Équipe médicale certifiée</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#27A6A6] shrink-0" />
                <span>Prise en charge personnalisée</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-[#27A6A6] shrink-0" />
                <span>Plateau technique & Urgences 24/7</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase & Real-Time Clinic Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Medical Image with elegant framing */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-slate-100 aspect-4/3 sm:aspect-5/4">
                <img
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000"
                  alt="Établissement Clinique Médicale Le Grand Centre"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#064852]/80 via-transparent to-transparent" />
                
                {/* Photo caption tag */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-xs uppercase tracking-wider font-semibold text-[#F2B84B]">Plateau Technique & Urgences</p>
                  <p className="text-sm font-medium text-slate-100">Consultations spécialisées et blocs opératoires</p>
                </div>
              </div>

              {/* Floating Live Status Card: Urgences 24/7 */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white rounded-xl shadow-lg border border-slate-100 p-4 max-w-xs flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                  <HeartPulse className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-xs font-bold text-slate-900">Urgences Ouvertes 24/7</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">Médecins urgentistes & lits de réanimation prêts</p>
                  <button
                    onClick={onOpenEmergency}
                    className="mt-1 text-[11px] font-semibold text-[#0B5D6B] hover:underline"
                  >
                    Numéro direct d'urgence →
                  </button>
                </div>
              </div>

              {/* Floating Quick Stats Card */}
              <div className="absolute -top-4 -right-2 sm:-right-4 bg-white/95 backdrop-blur-md rounded-xl shadow-md border border-slate-100 py-2.5 px-3.5 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center text-[#F2B84B]">
                  <Clock className="w-4 h-4 text-amber-600" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-slate-900">RDV Rapide</div>
                  <div className="text-[11px] text-slate-500">Créneaux du jour dispo</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
