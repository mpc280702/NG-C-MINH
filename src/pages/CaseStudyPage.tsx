import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Sparkles } from 'lucide-react';
import { Project, PageRoute } from '../types/portfolio';
import { PROJECTS } from '../data/portfolioData';
import { SafeImage } from '../components/SafeImage';

interface CaseStudyPageProps {
  project: Project | null;
  onNavigate: (page: PageRoute, projectId?: string) => void;
  onSelectProject: (project: Project) => void;
}

export const CaseStudyPage: React.FC<CaseStudyPageProps> = ({
  project,
  onNavigate,
  onSelectProject,
}) => {
  const currentProject = project || PROJECTS[0];

  const currentIndex = PROJECTS.findIndex((p) => p.id === currentProject.id);
  const prevProject =
    currentIndex > 0 ? PROJECTS[currentIndex - 1] : PROJECTS[PROJECTS.length - 1];
  const nextProject =
    currentIndex < PROJECTS.length - 1 ? PROJECTS[currentIndex + 1] : PROJECTS[0];

  return (
    <div className="bg-[#003028] text-[#F8F8F8] min-h-screen py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 space-y-12">
        {/* Navigation Bar & Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#083028]"
        >
          <button
            onClick={() => onNavigate('works')}
            className="flex items-center gap-2 text-xs font-mono text-[#c0d3cb] hover:text-[#10b981] transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>← Quay lại danh mục dự án</span>
          </button>

          <div className="flex items-center gap-2">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                onSelectProject(prevProject);
                onNavigate('case-study', prevProject.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="p-2 rounded-lg bg-[#083028] hover:bg-[#003828] text-[#F8F8F8] border border-[#082820] text-xs font-mono flex items-center gap-1 cursor-pointer transition-colors"
              title={`Dự án trước: ${prevProject.title}`}
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Trước</span>
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                onSelectProject(nextProject);
                onNavigate('case-study', nextProject.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="p-2 rounded-lg bg-[#083028] hover:bg-[#003828] text-[#F8F8F8] border border-[#082820] text-xs font-mono flex items-center gap-1 cursor-pointer transition-colors"
              title={`Dự án tiếp theo: ${nextProject.title}`}
            >
              <span className="hidden sm:inline">Tiếp</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.button>
          </div>
        </motion.div>

        {/* Project Header */}
        <motion.div
          key={currentProject.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-4"
        >
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#8caaa0]">
            <span className="text-[#10b981] font-semibold">{currentProject.categoryLabel}</span>
            <span aria-hidden="true">·</span>
            <span>Khách hàng: {currentProject.client}</span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">Năm {currentProject.year}</span>
          </div>

          <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-[#F8F8F8] tracking-tight">
            {currentProject.title}
          </h1>

          <p className="text-base sm:text-xl text-[#c0d3cb] font-light leading-relaxed max-w-3xl">
            {currentProject.subtitle}
          </p>
        </motion.div>

        {/* Hero Image with gentle scale on load */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl overflow-hidden border border-[#003828] shadow-2xl"
        >
          <SafeImage
            src={currentProject.coverImage}
            alt={currentProject.title}
            aspectClass="aspect-16/9"
            fallbackTitle={currentProject.title}
            fallbackCategory={currentProject.categoryLabel}
          />
        </motion.div>

        {/* Editorial Breakdown: Brief & Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-6">
          {/* Left Column: Metadata & Tokens */}
          <div className="lg:col-span-4 space-y-8">
            <div className="p-6 rounded-2xl bg-[#083028] border border-[#003828] space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-[#8caaa0] font-bold">
                Hạng Mục Thực Hiện
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-[#F8F8F8]">
                {currentProject.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] shrink-0 mt-1.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Design Tokens */}
            {currentProject.tokens && (
              <div className="p-6 rounded-2xl bg-[#083028] border border-[#003828] space-y-4">
                <div className="text-xs font-mono uppercase tracking-wider text-[#8caaa0] font-bold">
                  Bảng Màu & Định Danh Thiết Kế
                </div>
                <div className="space-y-2.5">
                  {currentProject.tokens.map((token, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ x: 3 }}
                      className="p-2.5 rounded-xl bg-[#003028] border border-[#082820] flex items-center justify-between text-xs font-mono"
                    >
                      <div className="flex items-center gap-2.5">
                        {token.type === 'color' && (
                          <span
                            className="w-4 h-4 rounded-md border border-white/20 shrink-0"
                            style={{ backgroundColor: token.value }}
                          />
                        )}
                        <span className="text-[#F8F8F8] font-bold">{token.name}</span>
                      </div>
                      <span className="text-[#8caaa0]">{token.value}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-8 space-y-8">
            <div className="p-8 rounded-2xl bg-[#083028] border border-[#003828] space-y-3">
              <div className="text-xs font-mono uppercase font-bold text-[#10b981]">
                01. Thách Thức & Bối Cảnh
              </div>
              <p className="text-sm sm:text-base text-[#c0d3cb] leading-relaxed font-light">
                {currentProject.brief}
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#083028] border border-[#003828] space-y-3">
              <div className="text-xs font-mono uppercase font-bold text-[#10b981]">
                02. Giải Pháp Thị Giác & Bàn Giao
              </div>
              <p className="text-sm sm:text-base text-[#c0d3cb] leading-relaxed font-light">
                {currentProject.solution}
              </p>
            </div>

            {/* Testimonial Quote */}
            {currentProject.testimonial && (
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="p-6 sm:p-8 rounded-2xl bg-[#003828] border border-[#10b981]/30 space-y-3"
              >
                <p className="text-base sm:text-lg italic text-[#F8F8F8] leading-relaxed">
                  "{currentProject.testimonial.quote}"
                </p>
                <div className="text-xs font-mono text-[#8caaa0]">
                  <span className="font-bold text-[#F8F8F8]">
                    {currentProject.testimonial.author}
                  </span>{' '}
                  — {currentProject.testimonial.role}, {currentProject.testimonial.company}
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Media Gallery */}
        {currentProject.gallery && currentProject.gallery.length > 0 && (
          <div className="space-y-6 pt-8 border-t border-[#083028]">
            <h3 className="font-display font-bold text-2xl text-[#F8F8F8]">
              Hình Ảnh Ấn Phẩm & Phối Cảnh Thực Tế
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentProject.gallery.map((media, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4 }}
                  className={`space-y-2 ${idx === 0 ? 'md:col-span-2' : 'md:col-span-1'}`}
                >
                  <div className="rounded-2xl overflow-hidden border border-[#003828]">
                    <SafeImage
                      src={media.url}
                      alt={media.caption}
                      aspectClass={idx === 0 ? 'aspect-16/9' : 'aspect-4/3'}
                      fallbackTitle={`${currentProject.title} chi tiết #${idx + 1}`}
                      fallbackCategory={currentProject.categoryLabel}
                    />
                  </div>
                  <p className="text-xs font-mono text-[#8caaa0] italic">
                    Ảnh {String(idx + 1).padStart(2, '0')} — {media.caption}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Footer Navigation */}
        <div className="pt-10 border-t border-[#083028] flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={() => {
              onSelectProject(prevProject);
              onNavigate('case-study', prevProject.id);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 text-xs font-mono text-[#F8F8F8] hover:text-[#10b981] transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Dự án trước: {prevProject.title}</span>
          </button>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onNavigate('contact')}
            className="px-6 py-3 rounded-xl bg-[#003828] hover:bg-[#10b981] hover:text-[#101010] text-[#F8F8F8] border border-[#F8F8F8]/30 font-bold text-xs flex items-center gap-2 cursor-pointer shadow-lg transition-all"
          >
            <span>Tư Vấn Dự Án Tương Tự</span>
            <ArrowUpRight className="w-4 h-4" />
          </motion.button>

          <button
            onClick={() => {
              onSelectProject(nextProject);
              onNavigate('case-study', nextProject.id);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 text-xs font-mono text-[#F8F8F8] hover:text-[#10b981] transition-colors cursor-pointer group"
          >
            <span>Dự án tiếp theo: {nextProject.title}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
