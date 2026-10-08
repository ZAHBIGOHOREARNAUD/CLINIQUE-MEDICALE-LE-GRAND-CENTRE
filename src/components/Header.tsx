import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, Activity, AlertCircle } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenAppointment: () => void;
  onOpenEmergency: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onNavigate,
  onOpenAppointment,
  onOpenEmergency
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'clinique', label: 'La Clinique' },
    { id: 'specialites', label: 'Spécialités' },
    { id: 'services', label: 'Services' },
    { id: 'medecins', label: 'Médecins' },
    { id: 'actualites', label: 'Actualités' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      {/* Top micro-bar with emergency alert & hours */}
      <div className="bg-[#064852] text-white text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 font-medium text-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Urgences 24/7 ouvertes
            </span>
            <span className="hidden md:inline text-slate-300">· Plateau technique Cocody</span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenEmergency}
              className="text-amber-300 hover:text-amber-200 font-semibold flex items-center gap-1 transition-colors"
            >
              <AlertCircle className="w-3.5 h-3.5" />
              <span>Ligne Urgence : {CLINIC_INFO.phoneEmergency}</span>
            </button>
            <span className="hidden lg:inline text-slate-300">· {CLINIC_INFO.openingHours.split('|')[0]}</span>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div
        className={`bg-white transition-all duration-300 ${
          isScrolled
            ? 'py-2.5 shadow-sm border-b border-slate-100 bg-white/95 backdrop-blur-md'
            : 'py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick('accueil')}
            className="flex items-center gap-3 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B5D6B] rounded-lg"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0B5D6B] to-[#27A6A6] flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform duration-200">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="block text-[11px] font-bold tracking-widest text-[#27A6A6] uppercase">
                Clinique Médicale
              </span>
              <span className="block text-lg font-extrabold tracking-tight text-[#064852] leading-none">
                Le Grand Centre
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors relative ${
                    isActive
                      ? 'text-[#0B5D6B] font-semibold'
                      : 'text-slate-600 hover:text-[#0B5D6B] hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#27A6A6] rounded-full"></span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${CLINIC_INFO.phoneMainRaw}`}
              className="hidden xl:inline-flex items-center gap-2 px-3 py-2 text-xs font-semibold text-[#0B5D6B] hover:bg-[#F7FAFA] border border-slate-200 rounded-lg transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#27A6A6]" />
              <span>{CLINIC_INFO.phoneMain}</span>
            </a>

            <button
              onClick={onOpenAppointment}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-[#0B5D6B] hover:bg-[#064852] active:bg-[#04333b] rounded-lg shadow-xs hover:shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B5D6B] focus-visible:ring-offset-2"
            >
              <Calendar className="w-4 h-4 text-[#F2B84B]" />
              <span>Prendre rendez-vous</span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenAppointment}
              className="px-2.5 py-1.5 text-xs font-semibold text-white bg-[#0B5D6B] rounded-lg"
            >
              RDV
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#0B5D6B] rounded-lg border border-slate-200"
              aria-label="Ouvrir le menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-fade-in">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'bg-[#F7FAFA] text-[#0B5D6B] font-semibold border-l-4 border-[#27A6A6]'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAppointment();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-[#0B5D6B] rounded-xl shadow-xs"
            >
              <Calendar className="w-4 h-4 text-[#F2B84B]" />
              <span>Prendre rendez-vous en ligne</span>
            </button>

            <a
              href={`tel:${CLINIC_INFO.phoneMainRaw}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-[#0B5D6B] border border-slate-200 rounded-xl bg-slate-50"
            >
              <Phone className="w-4 h-4 text-[#27A6A6]" />
              <span>Appeler la clinique : {CLINIC_INFO.phoneMain}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEmergency();
              }}
              className="w-full flex items-center justify-center gap-2 py-2 text-xs font-semibold text-rose-700 bg-rose-50 border border-rose-200 rounded-xl"
            >
              <AlertCircle className="w-4 h-4 text-rose-600" />
              <span>Urgences 24/7 : {CLINIC_INFO.phoneEmergency}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
