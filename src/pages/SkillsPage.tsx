import React from 'react';
import { motion } from 'motion/react';
import { Layers, PenTool, CheckCircle2, ShieldCheck, FileCheck, Printer, ArrowUpRight } from 'lucide-react';
import { TOOL_SKILLS } from '../data/portfolioData';
import { PageRoute } from '../types/portfolio';

interface SkillsPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const SkillsPage: React.FC<SkillsPageProps> = ({ onNavigate }) => {
  const softwareSkills = TOOL_SKILLS.filter((s) => s.category === 'software');
  const disciplineSkills = TOOL_SKILLS.filter((s) => s.category === 'discipline');

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
            <span className="text-[#F8F8F8]">Kỹ Năng & Phần Mềm</span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-6xl text-[#F8F8F8] tracking-tight">
            Năng Lực Kỹ Thuật & Phần Mềm
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#c0d3cb] font-light max-w-2xl leading-relaxed">
            Làm chủ hệ sinh thái Adobe Creative Cloud chuyên nghiệp và quy chuẩn in ấn khắt khe, biến mọi ý tưởng trên màn hình thành ấn phẩm hoàn hảo ngoài đời thực.
          </p>
        </motion.div>

        {/* 2-Column Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Software Skills with Animated Progress Bars */}
          <div className="p-8 rounded-3xl bg-[#083028] border border-[#003828] shadow-2xl space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-[#082820]">
              <div className="w-10 h-10 rounded-xl bg-[#003828] border border-[#10b981]/30 flex items-center justify-center text-[#10b981]">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-display font-bold text-xl text-[#F8F8F8]">
                  Phần Mềm Đồ Họa Chuyên Dụng
                </h2>
                <p className="text-xs font-mono text-[#8caaa0]">
                  Adobe Creative Cloud & Digital Tools
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {softwareSkills.map((skill, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-[#F8F8F8]">{skill.name}</span>
                    <span className="font-mono text-[#10b981] tabular-nums font-semibold">
                      {skill.level}% Thành Thạo
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[#082820] overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: idx * 0.1, ease: 'easeOut' }}
                      className="h-full rounded-full bg-[#10b981]"
                    />
                  </div>
                  <p className="text-xs text-[#c0d3cb] font-light leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Design Disciplines */}
          <div className="p-8 rounded-3xl bg-[#083028] border border-[#003828] shadow-2xl space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-[#082820]">
              <div className="w-10 h-10 rounded-xl bg-[#003828] border border-[#10b981]/30 flex items-center justify-center text-[#10b981]">
                <PenTool className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-display font-bold text-xl text-[#F8F8F8]">
                  Chuyên Môn & Kỹ Thuật Đồ Họa
                </h2>
                <p className="text-xs font-mono text-[#8caaa0]">
                  Design Disciplines & Craftsmanship
                </p>
              </div>
            </div>

            <div className="space-y-5">
              {disciplineSkills.map((skill, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 4 }}
                  className="p-4 rounded-xl bg-[#003028] border border-[#082820] hover:border-[#10b981]/30 transition-all space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-bold text-[#F8F8F8] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
                      <span>{skill.name}</span>
                    </div>
                    <span className="text-xs font-mono text-[#10b981] font-semibold">
                      {skill.level}%
                    </span>
                  </div>
                  <p className="text-xs text-[#c0d3cb] font-light leading-relaxed pl-3.5">
                    {skill.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Prepress & Handoff Quality Standards */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#082820] border border-[#083028] space-y-8">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#8caaa0] font-bold mb-2">
              Cam Kết Tiêu Chuẩn Quốc Tế
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-[#F8F8F8]">
              Quy Chuẩn Đóng Gói File Bàn Giao Khách Hàng
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ y: -5 }}
              className="p-5 rounded-2xl bg-[#083028] border border-[#003828] hover:border-[#10b981]/30 transition-all space-y-3"
            >
              <FileCheck className="w-6 h-6 text-[#10b981]" />
              <h3 className="font-display font-bold text-base text-[#F8F8F8]">
                File Gốc Vector Đầy Đủ
              </h3>
              <p className="text-xs text-[#c0d3cb] leading-relaxed font-light">
                Bàn giao đầy đủ file Adobe Illustrator (.AI), EPS, SVG, PNG trong suốt và PDF phân giải cao (300 DPI+). Phân tách layer khoa học, outline chữ sẵn sàng in.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="p-5 rounded-2xl bg-[#083028] border border-[#003828] hover:border-[#10b981]/30 transition-all space-y-3"
            >
              <Printer className="w-6 h-6 text-[#10b981]" />
              <h3 className="font-display font-bold text-base text-[#F8F8F8]">
                Chuẩn Màu In CMYK & Pantone
              </h3>
              <p className="text-xs text-[#c0d3cb] leading-relaxed font-light">
                Tất cả ấn phẩm in ấn đều được kiểm tra profile màu CMYK Fogra39 / GRACoL, mã hóa chuẩn xác số màu Pantone Solid Coated / Uncoated để màu in không bị lệch.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="p-5 rounded-2xl bg-[#083028] border border-[#003828] hover:border-[#10b981]/30 transition-all space-y-3"
            >
              <ShieldCheck className="w-6 h-6 text-[#10b981]" />
              <h3 className="font-display font-bold text-base text-[#F8F8F8]">
                Bản Vẽ Khuôn Bế (Die-cut)
              </h3>
              <p className="text-xs text-[#c0d3cb] leading-relaxed font-light">
                Bao bì và hộp quà luôn đi kèm bản vẽ kỹ thuật khuôn bế (đường cắt, đường cấn gập, đường răng cưa) và mẫu in thử nghiệm 1:1 trước khi sản xuất hàng loạt.
              </p>
            </motion.div>
          </div>

          <div className="pt-4 flex justify-center">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 rounded-xl bg-[#003828] hover:bg-[#10b981] hover:text-[#101010] text-[#F8F8F8] border border-[#F8F8F8]/30 font-semibold text-xs flex items-center gap-2 cursor-pointer shadow-lg transition-all"
            >
              <span>Bạn cần tư vấn kỹ thuật in ấn cho dự án? Liên hệ ngay</span>
              <ArrowUpRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};
