import React from 'react';
import { motion } from 'motion/react';
import { Layers, PenTool, Cpu, FileCheck, Printer, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { TOOL_SKILLS } from '../data/portfolioData';
import { PageRoute } from '../types/portfolio';

interface SkillsPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const SkillsPage: React.FC<SkillsPageProps> = ({ onNavigate }) => {
  const toolSkills = TOOL_SKILLS.filter((s) => s.category === 'tools');
  const specializationSkills = TOOL_SKILLS.filter((s) => s.category === 'specialization');
  const digitalSkills = TOOL_SKILLS.filter((s) => s.category === 'digital');

  const getBadgeStyle = (proficiency: string) => {
    switch (proficiency) {
      case 'Advanced':
        return 'bg-[#003828] text-[#10b981] border-[#10b981]/40';
      case 'Intermediate':
        return 'bg-[#082820] text-[#c0d3cb] border-[#083028]';
      default:
        return 'bg-[#082820] text-[#8caaa0] border-[#083028]';
    }
  };

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
            <button
              type="button"
              className="cursor-pointer hover:text-[#10b981] transition-colors focus-visible:ring-1 focus-visible:ring-[#10b981] rounded"
              onClick={() => onNavigate('home')}
            >
              Trang Chủ
            </button>
            <span>/</span>
            <span className="text-[#F8F8F8]">Kỹ Năng &amp; Phần Mềm</span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-6xl text-[#F8F8F8] tracking-tight">
            Kỹ Năng &amp; Công Cụ
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#c0d3cb] font-light max-w-2xl leading-relaxed">
            Các công cụ và chuyên môn tôi sử dụng để biến brief thành hệ thống thiết kế rõ ràng, từ digital đến ấn phẩm in.
          </p>
        </motion.div>

        {/* 3 Group Cards */}
        <div className="space-y-12 mb-16">
          {/* Group 1: Design Tools */}
          <div className="p-8 rounded-3xl bg-[#083028] border border-[#003828] shadow-2xl space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-[#082820]">
              <div className="w-10 h-10 rounded-xl bg-[#003828] border border-[#10b981]/30 flex items-center justify-center text-[#10b981]">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-display font-bold text-xl text-[#F8F8F8]">
                  1. Công Cụ Thiết Kế (Design Tools)
                </h2>
                <p className="text-xs font-mono text-[#8caaa0]">
                  Adobe Creative Cloud &amp; UI
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {toolSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="p-4 rounded-xl bg-[#003028] border border-[#082820] hover:border-[#10b981]/40 transition-all flex flex-col justify-between space-y-3"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-bold text-sm text-[#F8F8F8]">{skill.name}</h3>
                    <span
                      className={`px-2 py-0.5 rounded text-[11px] font-mono font-semibold border ${getBadgeStyle(
                        skill.proficiency
                      )}`}
                    >
                      {skill.proficiencyLabel}
                    </span>
                  </div>
                  <p className="text-xs text-[#c0d3cb] font-light leading-relaxed">
                    {skill.description}
                  </p>
                  <div className="pt-2 border-t border-[#082820] text-[11px] font-mono text-[#8caaa0]">
                    Kinh nghiệm: {skill.experience}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Group 2: Specialization */}
          <div className="p-8 rounded-3xl bg-[#083028] border border-[#003828] shadow-2xl space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-[#082820]">
              <div className="w-10 h-10 rounded-xl bg-[#003828] border border-[#10b981]/30 flex items-center justify-center text-[#10b981]">
                <PenTool className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-display font-bold text-xl text-[#F8F8F8]">
                  2. Chuyên Môn Thiết Kế (Specialization)
                </h2>
                <p className="text-xs font-mono text-[#8caaa0]">
                  Brand Identity, Packaging &amp; Editorial
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {specializationSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="p-4 rounded-xl bg-[#003028] border border-[#082820] hover:border-[#10b981]/40 transition-all flex flex-col justify-between space-y-3"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-bold text-sm text-[#F8F8F8]">{skill.name}</h3>
                    <span
                      className={`px-2 py-0.5 rounded text-[11px] font-mono font-semibold border ${getBadgeStyle(
                        skill.proficiency
                      )}`}
                    >
                      {skill.proficiencyLabel}
                    </span>
                  </div>
                  <p className="text-xs text-[#c0d3cb] font-light leading-relaxed">
                    {skill.description}
                  </p>
                  <div className="pt-2 border-t border-[#082820] text-[11px] font-mono text-[#8caaa0]">
                    Kinh nghiệm: {skill.experience}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Group 3: Digital & Creative Systems */}
          <div className="p-8 rounded-3xl bg-[#083028] border border-[#003828] shadow-2xl space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-[#082820]">
              <div className="w-10 h-10 rounded-xl bg-[#003828] border border-[#10b981]/30 flex items-center justify-center text-[#10b981]">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-display font-bold text-xl text-[#F8F8F8]">
                  3. Digital &amp; Creative Workflow
                </h2>
                <p className="text-xs font-mono text-[#8caaa0]">
                  Digital Systems, Social Kits &amp; AI-assisted Workflow
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {digitalSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="p-4 rounded-xl bg-[#003028] border border-[#082820] hover:border-[#10b981]/40 transition-all flex flex-col justify-between space-y-3"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-bold text-sm text-[#F8F8F8]">{skill.name}</h3>
                    <span
                      className={`px-2 py-0.5 rounded text-[11px] font-mono font-semibold border ${getBadgeStyle(
                        skill.proficiency
                      )}`}
                    >
                      {skill.proficiencyLabel}
                    </span>
                  </div>
                  <p className="text-xs text-[#c0d3cb] font-light leading-relaxed">
                    {skill.description}
                  </p>
                  <div className="pt-2 border-t border-[#082820] text-[11px] font-mono text-[#8caaa0]">
                    Kinh nghiệm: {skill.experience}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Prepress & Quality Standards */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#082820] border border-[#083028] space-y-8">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#8caaa0] font-bold mb-2">
              Cách Tôi Chuẩn Bị File
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl text-[#F8F8F8]">
              File Bàn Giao &amp; Chuẩn Hóa
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-[#083028] border border-[#003828] hover:border-[#10b981]/30 transition-all space-y-3">
              <FileCheck className="w-6 h-6 text-[#10b981]" />
              <h3 className="font-display font-bold text-base text-[#F8F8F8]">
                File Gốc Vector Đầy Đủ
              </h3>
              <p className="text-xs text-[#c0d3cb] leading-relaxed font-light">
                Bàn giao đúng định dạng cần thiết cho từng mục đích: file source, file vector và file export cho digital/in ấn. Cấu trúc layer và tên file được sắp xếp rõ ràng.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#083028] border border-[#003828] hover:border-[#10b981]/30 transition-all space-y-3">
              <Printer className="w-6 h-6 text-[#10b981]" />
              <h3 className="font-display font-bold text-base text-[#F8F8F8]">
                Chuẩn Màu In CMYK &amp; Pantone
              </h3>
              <p className="text-xs text-[#c0d3cb] leading-relaxed font-light">
                Kiểm tra kích thước, bleed, font, hình ảnh và không gian màu theo yêu cầu của nhà in hoặc nền tảng sử dụng.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#083028] border border-[#003828] hover:border-[#10b981]/30 transition-all space-y-3">
              <ShieldCheck className="w-6 h-6 text-[#10b981]" />
              <h3 className="font-display font-bold text-base text-[#F8F8F8]">
                Bản Vẽ Khuôn Bế (Die-cut)
              </h3>
              <p className="text-xs text-[#c0d3cb] leading-relaxed font-light">
                Khi dự án có packaging, tôi chuẩn bị artwork và các thông số cần thiết theo khuôn bế/kích thước được cung cấp.
              </p>
            </div>
          </div>

          <div className="pt-4 flex justify-center">
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 rounded-xl bg-[#003828] hover:bg-[#10b981] hover:text-[#101010] text-[#F8F8F8] border border-[#F8F8F8]/30 font-semibold text-xs flex items-center gap-2 cursor-pointer shadow-lg transition-all focus-visible:ring-2 focus-visible:ring-[#10b981]"
            >
              <span>Trao đổi về yêu cầu file? Liên hệ ngay</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
