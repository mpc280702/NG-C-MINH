import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PageRoute } from '../types/portfolio';
import { DESIGNER_INFO } from '../data/portfolioData';

interface NavbarProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute, projectId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageRoute; label: string }[] = [
    { id: 'home', label: 'Trang Chủ' },
    { id: 'works', label: 'Dự Án' },
    { id: 'services', label: 'Dịch Vụ' },
    { id: 'about', label: 'Về Tôi' },
    { id: 'skills', label: 'Kỹ Năng' },
    { id: 'contact', label: 'Liên Hệ' },
  ];

  const handleNavClick = (page: PageRoute) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#082820]/95 backdrop-blur-md border-b border-[#083028] text-[#F8F8F8] transition-colors">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => handleNavClick('home')}
          className="text-left group cursor-pointer"
        >
          <div className="text-xl sm:text-2xl font-display font-black tracking-tight text-[#F8F8F8] uppercase flex items-center gap-1.5">
            <span>CAO NGỌC MINH</span>
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
          </div>
          <p className="text-[11px] font-mono tracking-wider text-[#c0d3cb] uppercase">
            Graphic Designer
          </p>
        </motion.button>

        {/* Zone 2: Navigation Links for Distinct Pages with Animated Pill */}
        <nav className="hidden md:flex items-center gap-1.5 p-1.5 rounded-full bg-[#003028] border border-[#083028]">
          {navItems.map((item) => {
            const isActive =
              currentPage === item.id ||
              (currentPage === 'case-study' && item.id === 'works');
            return (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 text-xs font-semibold rounded-full transition-colors duration-200 cursor-pointer flex items-center gap-1.5 whitespace-nowrap relative ${
                  isActive
                    ? 'text-[#F8F8F8]'
                    : 'text-[#c0d3cb] hover:text-[#F8F8F8] hover:bg-[#083028]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavBackground"
                    className="absolute inset-0 bg-[#003828] rounded-full border border-[#10b981]/50 shadow-md -z-10"
                    transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                  />
                )}
                <span>{item.label}</span>
              </motion.button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => handleNavClick('contact')}
            className="px-4 py-2.5 text-xs font-bold rounded-lg bg-[#003828] hover:bg-[#10b981] hover:text-[#101010] text-[#F8F8F8] border border-[#F8F8F8]/30 transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-lg whitespace-nowrap"
          >
            <span>Liên Hệ</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-[#003028] border border-[#083028] text-[#F8F8F8] focus:outline-none"
            aria-label="Mở menu điều hướng"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#082820] border-b border-[#083028] px-6 py-6 space-y-3">
          <div className="text-xs font-mono text-[#8caaa0] pb-3 border-b border-[#083028]">
            KHÁM PHÁ PORTFOLIO
          </div>
          <div className="grid grid-cols-2 gap-2 pt-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`p-3 text-left rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                  currentPage === item.id
                    ? 'bg-[#003828] text-[#F8F8F8] border border-[#10b981]/50'
                    : 'bg-[#003028] text-[#c0d3cb] hover:bg-[#083028]'
                }`}
              >
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
