import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Target, Lightbulb, Compass, Award } from 'lucide-react';
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
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#083028]">
          <button
            type="button"
            onClick={() => onNavigate('works')}
            className="flex items-center gap-2 text-xs font-mono text-[#c0d3cb] hover:text-[#10b981] transition-colors cursor-pointer group focus-visible:ring-1 focus-visible:ring-[#10b981] rounded py-1 px-2"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Quay lại danh mục dự án</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                onSelectProject(prevProject);
                onNavigate('case-study', prevProject.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="p-2 rounded-lg bg-[#083028] hover:bg-[#003828] text-[#F8F8F8] border border-[#082820] text-xs font-mono flex items-center gap-1 cursor-pointer transition-colors focus-visible:ring-1 focus-visible:ring-[#10b981]"
              title={`Dự án trước: ${prevProject.title}`}
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Trước</span>
            </button>
            <button
              type="button"
              onClick={() => {
                onSelectProject(nextProject);
                onNavigate('case-study', nextProject.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="p-2 rounded-lg bg-[#083028] hover:bg-[#003828] text-[#F8F8F8] border border-[#082820] text-xs font-mono flex items-center gap-1 cursor-pointer transition-colors focus-visible:ring-1 focus-visible:ring-[#10b981]"
              title={`Dự án tiếp theo: ${nextProject.title}`}
            >
              <span className="hidden sm:inline">Tiếp</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Project Header */}
        <div key={currentProject.id} className="space-y-4">
          <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono text-[#8caaa0]">
            <span className="text-[#10b981] font-bold uppercase">{currentProject.categoryLabel}</span>
            <span aria-hidden="true">·</span>
            <span className="px-2 py-0.5 rounded bg-[#083028] border border-white/10 text-white font-medium">
              {currentProject.projectTypeLabel}
            </span>
            <span aria-hidden="true">·</span>
            <span>Loại dự án: {currentProject.client}</span>
            <span aria-hidden="true">·</span>
            <span className="tabular-nums">Năm {currentProject.year}</span>
          </div>

          <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-[#F8F8F8] tracking-tight">
            {currentProject.title}
          </h1>

          <p className="text-base sm:text-xl text-[#c0d3cb] font-light leading-relaxed max-w-3xl">
            {currentProject.subtitle}
          </p>

          {/* Role & Services Pill Bar */}
          <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-mono">
            <span className="px-3 py-1 rounded-lg bg-[#003828] border border-[#10b981]/40 text-[#10b981] font-bold">
              Vai trò: {currentProject.role}
            </span>
            {currentProject.services.map((srv) => (
              <span key={srv} className="px-3 py-1 rounded-lg bg-[#083028] border border-[#082820] text-[#c0d3cb]">
                {srv}
              </span>
            ))}
          </div>
        </div>

        {/* Hero Cover Image */}
        <div className="rounded-3xl overflow-hidden border border-[#003828] shadow-2xl">
          <SafeImage
            src={currentProject.coverImage}
            alt={currentProject.title}
            aspectClass="aspect-16/9"
            fallbackTitle={currentProject.title}
            fallbackCategory={currentProject.categoryLabel}
          />
        </div>

        {/* Structured Case Study Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-4">
          {/* Left Column: Metadata, Deliverables & Design Tokens */}
          <div className="lg:col-span-4 space-y-8">
            {/* Deliverables List */}
            <div className="p-6 rounded-2xl bg-[#083028] border border-[#003828] space-y-4 shadow-lg">
              <div className="text-xs font-mono uppercase tracking-wider text-[#8caaa0] font-bold">
                Hạng Mục Thực Hiện
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#F8F8F8]">
                {currentProject.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] shrink-0 mt-2" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Design Tokens */}
            {currentProject.tokens && currentProject.tokens.length > 0 && (
              <div className="p-6 rounded-2xl bg-[#083028] border border-[#003828] space-y-4 shadow-lg">
                <div className="text-xs font-mono uppercase tracking-wider text-[#8caaa0] font-bold">
                  Màu Sắc &amp; Typography
                </div>
                <div className="space-y-2.5">
                  {currentProject.tokens.map((token, idx) => (
                    <div
                      key={idx}
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
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: In-Depth Narrative */}
          <div className="lg:col-span-8 space-y-6">
            {/* 01. Problem & Context */}
            {currentProject.problem && (
              <div className="p-7 rounded-2xl bg-[#083028] border border-[#003828] space-y-2.5 shadow-lg">
                <div className="flex items-center gap-2 text-xs font-mono uppercase font-bold text-[#10b981]">
                  <Target className="w-4 h-4" />
                  <span>01. Bối Cảnh &amp; Vấn Đề</span>
                </div>
                <p className="text-sm sm:text-base text-[#c0d3cb] leading-relaxed font-light">
                  {currentProject.problem}
                </p>
              </div>
            )}

            {/* 02. Objective */}
            {currentProject.objective && (
              <div className="p-7 rounded-2xl bg-[#083028] border border-[#003828] space-y-2.5 shadow-lg">
                <div className="flex items-center gap-2 text-xs font-mono uppercase font-bold text-[#10b981]">
                  <Lightbulb className="w-4 h-4" />
                  <span>02. Mục Tiêu</span>
                </div>
                <p className="text-sm sm:text-base text-[#c0d3cb] leading-relaxed font-light">
                  {currentProject.objective}
                </p>
              </div>
            )}

            {/* 03. Research & Creative Direction */}
            {(currentProject.research || currentProject.creativeDirection) && (
              <div className="p-7 rounded-2xl bg-[#083028] border border-[#003828] space-y-3 shadow-lg">
                <div className="flex items-center gap-2 text-xs font-mono uppercase font-bold text-[#10b981]">
                  <Compass className="w-4 h-4" />
                  <span>03. Nghiên Cứu &amp; Định Hướng</span>
                </div>
                {currentProject.research && (
                  <p className="text-sm sm:text-base text-[#c0d3cb] leading-relaxed font-light">
                    {currentProject.research}
                  </p>
                )}
                {currentProject.creativeDirection && (
                  <div className="p-3.5 rounded-xl bg-[#003028] border border-[#082820] text-xs font-mono text-[#10b981]">
                    Creative Direction: {currentProject.creativeDirection}
                  </div>
                )}
              </div>
            )}

            {/* 04. Solution & Execution */}
            <div className="p-7 rounded-2xl bg-[#083028] border border-[#003828] space-y-2.5 shadow-lg">
              <div className="text-xs font-mono uppercase font-bold text-[#10b981]">
                04. Giải Pháp Thiết Kế
              </div>
              <p className="text-sm sm:text-base text-[#c0d3cb] leading-relaxed font-light">
                {currentProject.solution}
              </p>
            </div>

            {/* 05. Results */}
            {currentProject.results && (
              <div className="p-7 rounded-2xl bg-[#003828] border border-[#10b981]/30 space-y-2.5 shadow-lg">
                <div className="text-xs font-mono uppercase font-bold text-[#10b981]">
                  05. Kết Quả Đầu Ra
                </div>
                <p className="text-sm sm:text-base text-[#F8F8F8] leading-relaxed font-light">
                  {currentProject.results}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Media Gallery */}
        {currentProject.gallery && currentProject.gallery.length > 0 && (
          <div className="space-y-6 pt-8 border-t border-[#083028]">
            <h2 className="font-display font-bold text-2xl text-[#F8F8F8]">
              Hình Ảnh &amp; Visual Tham Khảo
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentProject.gallery.map((media, idx) => (
                <div
                  key={idx}
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
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer Navigation */}
        <div className="pt-10 border-t border-[#083028] flex flex-wrap items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => {
              onSelectProject(prevProject);
              onNavigate('case-study', prevProject.id);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 text-xs font-mono text-[#F8F8F8] hover:text-[#10b981] transition-colors cursor-pointer group focus-visible:ring-1 focus-visible:ring-[#10b981] rounded py-1 px-2"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Dự án trước: {prevProject.title}</span>
          </button>

          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="px-6 py-3 rounded-xl bg-[#003828] hover:bg-[#10b981] hover:text-[#101010] text-[#F8F8F8] border border-[#F8F8F8]/30 font-bold text-xs flex items-center gap-2 cursor-pointer shadow-lg transition-all focus-visible:ring-2 focus-visible:ring-[#10b981]"
          >
            <span>Tư Vấn Dự Án Tương Tự</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={() => {
              onSelectProject(nextProject);
              onNavigate('case-study', nextProject.id);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 text-xs font-mono text-[#F8F8F8] hover:text-[#10b981] transition-colors cursor-pointer group focus-visible:ring-1 focus-visible:ring-[#10b981] rounded py-1 px-2"
          >
            <span>Dự án tiếp theo: {nextProject.title}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
