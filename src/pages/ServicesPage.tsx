import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Check, Clock, Layers, Sparkles, ShieldCheck } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';
import { PageRoute } from '../types/portfolio';

interface ServicesPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const [selectedServiceIndex, setSelectedServiceIndex] = useState(0);
  const activeService = SERVICES[selectedServiceIndex];

  return (
    <div className="bg-[#003028] text-[#F8F8F8] min-h-screen py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header Breadcrumbs & Title */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="flex items-center gap-2 text-xs font-mono text-[#8caaa0] uppercase tracking-wider mb-2">
            <span className="cursor-pointer hover:text-[#10b981] transition-colors" onClick={() => onNavigate('home')}>Trang Chủ</span>
            <span>/</span>
            <span className="text-[#F8F8F8]">Dịch Vụ Thiết Kế</span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-6xl text-[#F8F8F8] tracking-tight">
            Năng Lực & Dịch Vụ Cung Cấp
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#c0d3cb] font-light max-w-2xl leading-relaxed">
            Mỗi gói dịch vụ được thiết kế chuyên sâu nhằm giải quyết triệt để bài toán nhận diện thương hiệu, bao bì xúc giác và tối ưu hóa quy trình in ấn thực tế.
          </p>
        </motion.div>

        {/* 4 Service Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {SERVICES.map((s, idx) => {
            const isSelected = selectedServiceIndex === idx;
            return (
              <motion.button
                key={s.index}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedServiceIndex(idx)}
                className={`p-5 rounded-2xl text-left transition-all cursor-pointer flex flex-col justify-between border relative overflow-hidden ${
                  isSelected
                    ? 'bg-[#003828] border-[#10b981]/60 shadow-xl'
                    : 'bg-[#083028] border-[#082820] hover:border-[#003828] opacity-80 hover:opacity-100'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeServiceGlow"
                    className="absolute -top-10 -right-10 w-24 h-24 bg-[#10b981]/20 rounded-full blur-xl pointer-events-none"
                  />
                )}
                <div>
                  <div className="text-xs font-mono font-bold text-[#10b981] mb-2">
                    {s.index}
                  </div>
                  <h3 className="font-display font-bold text-base text-[#F8F8F8]">
                    {s.name}
                  </h3>
                </div>
                <div className="mt-4 text-xs font-mono text-[#8caaa0] flex items-center justify-between">
                  <span>{s.timeline}</span>
                  <span className="text-[#10b981] font-semibold">{isSelected ? '● Đang xem' : 'Chi tiết →'}</span>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Active Service Detailed Presentation with Animated Transition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedServiceIndex}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="p-8 sm:p-12 rounded-3xl bg-[#083028] border border-[#003828] shadow-2xl relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Left Column: Scope & Overview */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#082820] border border-[#083028] text-xs font-mono text-[#10b981]">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Thời gian thực hiện: {activeService.timeline}</span>
                </div>

                <h2 className="font-display font-black text-2xl sm:text-4xl text-[#F8F8F8] leading-snug">
                  {activeService.name}
                </h2>

                <p className="text-sm sm:text-base text-[#c0d3cb] leading-relaxed font-light">
                  {activeService.description}
                </p>

                {/* Detailed Breakdown steps */}
                <div className="pt-4 space-y-4">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#8caaa0] font-bold">
                    Quy Trình Triển Khai Chuyên Sâu:
                  </div>
                  <div className="space-y-3">
                    {activeService.deliverablesDetailed.map((step, sIdx) => (
                      <motion.div
                        key={sIdx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: sIdx * 0.08 }}
                        className="p-4 rounded-xl bg-[#003028] border border-[#082820] space-y-1 hover:border-[#10b981]/30 transition-colors"
                      >
                        <div className="text-sm font-bold text-[#F8F8F8] flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
                          <span>{step.title}</span>
                        </div>
                        <p className="text-xs text-[#c0d3cb] pl-3.5 leading-relaxed font-light">
                          {step.desc}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Deliverables & CTA */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-8 p-6 sm:p-8 rounded-2xl bg-[#003028] border border-[#082820]">
                <div className="space-y-4">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#8caaa0] font-bold">
                    Hạng Mục Bàn Giao (Deliverables):
                  </div>
                  <ul className="space-y-3 text-xs sm:text-sm text-[#F8F8F8]">
                    {activeService.deliverables.map((item, dIdx) => (
                      <motion.li
                        key={dIdx}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: dIdx * 0.06 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-5 h-5 rounded-full bg-[#003828] border border-[#10b981]/40 flex items-center justify-center text-[#10b981] shrink-0 mt-0.5 shadow-sm">
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="leading-snug">{item}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-6 border-t border-[#083028] text-xs text-[#c0d3cb] space-y-2 font-mono">
                    <div className="flex items-center gap-2 text-[#10b981]">
                      <ShieldCheck className="w-4 h-4 shrink-0" />
                      <span>Cam kết bảo hành file & hỗ trợ xưởng in 100%</span>
                    </div>
                    <p className="font-sans font-light">
                      Mọi thắc mắc kỹ thuật từ xưởng in về thông số màu CMYK, khuôn bế hay bù hao xén đều được trực tiếp Minh Ngọc giải quyết.
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#083028]">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onNavigate('contact')}
                    className="w-full py-3.5 px-6 rounded-xl bg-[#003828] hover:bg-[#10b981] hover:text-[#101010] text-[#F8F8F8] border border-[#F8F8F8]/30 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer shadow-xl transition-all"
                  >
                    <span>Nhận Báo Giá Gói Này</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
