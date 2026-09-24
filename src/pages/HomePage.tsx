import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight, Sparkles, CheckCircle2, Download, Layers, Compass } from 'lucide-react';
import { DESIGNER_INFO, PROJECTS, SERVICES, DESIGN_PROCESS_STEPS } from '../data/portfolioData';
import { SafeImage } from '../components/SafeImage';
import { PageRoute, Project } from '../types/portfolio';

interface HomePageProps {
  onNavigate: (page: PageRoute, projectId?: string) => void;
  onSelectProject: (project: Project) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onSelectProject }) => {
  const featuredProjects = PROJECTS.filter((project) => project.featured).slice(0, 4);

  return (
    <div className="bg-[#003028] text-[#F8F8F8] overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-16 sm:pt-24 pb-20 sm:pb-28 border-b border-[#083028] overflow-hidden">
        {/* Animated Ambient Lighting */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[320px] bg-[#003828] rounded-full blur-[130px] pointer-events-none opacity-50"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
          {/* Identity Tag & Specializations */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#8caaa0] uppercase tracking-wider mb-6">
            <span className="text-[#10b981] font-bold">{DESIGNER_INFO.name}</span>
            <span aria-hidden="true" className="opacity-40">/</span>
            <span>{DESIGNER_INFO.role}</span>
            <span aria-hidden="true" className="opacity-40">/</span>
            <span>Hà Nội, Việt Nam</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Statement */}
            <div className="lg:col-span-7 space-y-6">
              {/* Availability Status Badge */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#083028] border border-[#003828] text-xs font-mono text-[#c0d3cb] shadow-inner">
                <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                <span>{DESIGNER_INFO.availability}</span>
              </div>

              <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-[#F8F8F8]">
                Định hình bản sắc thương hiệu &amp;{' '}
                <span className="italic font-normal text-[#c0d3cb] underline decoration-1 underline-offset-8">
                  ngôn ngữ
                </span>{' '}
                thị giác chuẩn mực.
              </h1>

              <p className="text-base sm:text-lg text-[#c0d3cb] font-light leading-relaxed max-w-2xl">
                {DESIGNER_INFO.tagline} Với hơn {DESIGNER_INFO.experienceYears} năm thực chiến, tôi kiến tạo những sản phẩm thiết kế có sức sống bền bỉ, cân bằng giữa tư duy logic và cảm xúc thẩm mỹ.
              </p>

              {/* Specialization Tags Bar */}
              <div className="flex flex-wrap gap-2 pt-1">
                {DESIGNER_INFO.specializations.map((spec) => (
                  <span
                    key={spec}
                    className="px-3 py-1 rounded-lg bg-[#083028] border border-[#083028] text-xs font-mono text-[#8caaa0]"
                  >
                    ✦ {spec}
                  </span>
                ))}
              </div>

              {/* CTAs: View Works + Download CV + Contact */}
              <div className="pt-3 flex flex-wrap items-center gap-3.5">
                <button
                  type="button"
                  onClick={() => onNavigate('works')}
                  className="px-6 py-3.5 rounded-xl bg-[#003828] hover:bg-[#10b981] hover:text-[#101010] text-[#F8F8F8] border border-[#F8F8F8]/30 font-semibold text-xs sm:text-sm flex items-center gap-2 cursor-pointer shadow-xl transition-all focus-visible:ring-2 focus-visible:ring-[#10b981]"
                >
                  <span>Xem Toàn Bộ Dự Án</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={DESIGNER_INFO.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded-xl bg-[#082820] hover:bg-[#083028] text-[#F8F8F8] border border-[#083028] font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all focus-visible:ring-2 focus-visible:ring-[#10b981]"
                >
                  <Download className="w-4 h-4 text-[#10b981]" />
                  <span>Tải CV (Google Drive)</span>
                </a>

                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="px-5 py-3.5 rounded-xl bg-[#082820] hover:bg-[#083028] text-[#F8F8F8] border border-[#083028] font-semibold text-xs sm:text-sm flex items-center gap-2 cursor-pointer transition-all focus-visible:ring-2 focus-visible:ring-[#10b981]"
                >
                  <span>Liên Hệ</span>
                  <ArrowUpRight className="w-4 h-4 text-[#8caaa0]" />
                </button>
              </div>

              {/* Verified Metrics Counter */}
              <div className="pt-6 border-t border-[#083028] flex flex-wrap items-center gap-8 sm:gap-12">
                <div>
                  <div className="text-3xl font-display font-black text-[#F8F8F8]">
                    {DESIGNER_INFO.experienceYears}
                  </div>
                  <div className="text-xs font-mono text-[#8caaa0] uppercase mt-0.5">
                    Năm Kinh Nghiệm
                  </div>
                </div>
                <div className="w-px h-8 bg-[#083028] hidden sm:block" />
                <div>
                  <div className="text-3xl font-display font-black text-[#F8F8F8]">
                    {DESIGNER_INFO.completedProjects}
                  </div>
                  <div className="text-xs font-mono text-[#8caaa0] uppercase mt-0.5">
                    Dự Án &amp; Ấn Phẩm
                  </div>
                </div>
                <div className="w-px h-8 bg-[#083028] hidden sm:block" />
                <div>
                  <div className="text-3xl font-display font-black text-[#F8F8F8]">
                    {DESIGNER_INFO.workModes}
                  </div>
                  <div className="text-xs font-mono text-[#8caaa0] uppercase mt-0.5">
                    Print + Digital
                  </div>
                </div>
              </div>
            </div>

            {/* Right Featured Hero Showcase */}
            <div className="lg:col-span-5">
              <div
                onClick={() => {
                  onSelectProject(PROJECTS[0]);
                  onNavigate('case-study', PROJECTS[0].id);
                }}
                className="p-4 rounded-3xl bg-[#083028] border border-[#003828] hover:border-[#10b981]/50 shadow-2xl relative group transition-all cursor-pointer"
              >
                <div className="rounded-2xl overflow-hidden relative">
                  <SafeImage
                    src={PROJECTS[0].coverImage}
                    alt={PROJECTS[0].title}
                    aspectClass="aspect-4/3"
                    fallbackTitle={PROJECTS[0].title}
                    fallbackCategory={PROJECTS[0].categoryLabel}
                    loading="eager"
                    fetchPriority="high"
                    className="group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-md bg-[#082820]/90 backdrop-blur-md text-[11px] font-mono text-[#F8F8F8] border border-[#F8F8F8]/10 flex items-center gap-1.5 shadow-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
                    <span>Dự Án Nổi Bật · {PROJECTS[0].projectTypeLabel}</span>
                  </div>
                </div>

                <div className="mt-4 px-2 flex items-center justify-between">
                  <div>
                    <h2 className="font-display font-bold text-lg text-[#F8F8F8] group-hover:text-[#10b981] transition-colors">
                      {PROJECTS[0].title}
                    </h2>
                    <p className="text-xs font-mono text-[#8caaa0] mt-0.5">
                      {PROJECTS[0].subtitle}
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-[#003828] group-hover:bg-[#10b981] group-hover:text-[#101010] text-[#F8F8F8] border border-[#F8F8F8]/20 transition-all shadow-md shrink-0">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee Ticker */}
        <div className="mt-16 py-3 bg-[#082820] border-y border-[#083028] overflow-hidden whitespace-nowrap select-none flex">
          <div className="animate-marquee flex shrink-0 items-center gap-8 text-xs font-mono tracking-widest text-[#8caaa0] uppercase pr-8">
            <span>NHẬN DIỆN THƯƠNG HIỆU</span>
            <span className="text-[#10b981]">✦</span>
            <span>BAO BÌ SẢN PHẨM CAO CẤP</span>
            <span className="text-[#10b981]">✦</span>
            <span>ẤN PHẨM &amp; TẠP CHÍ NGHỆ THUẬT</span>
            <span className="text-[#10b981]">✦</span>
            <span>TYPOGRAPHY &amp; KEY VISUAL</span>
            <span className="text-[#10b981]">✦</span>
            <span>CẨM NANG BRAND GUIDELINES</span>
            <span className="text-[#10b981]">✦</span>
          </div>
          <div className="animate-marquee flex shrink-0 items-center gap-8 text-xs font-mono tracking-widest text-[#8caaa0] uppercase pr-8" aria-hidden="true">
            <span>NHẬN DIỆN THƯƠNG HIỆU</span>
            <span className="text-[#10b981]">✦</span>
            <span>BAO BÌ SẢN PHẨM CAO CẤP</span>
            <span className="text-[#10b981]">✦</span>
            <span>ẤN PHẨM &amp; TẠP CHÍ NGHỆ THUẬT</span>
            <span className="text-[#10b981]">✦</span>
            <span>TYPOGRAPHY &amp; KEY VISUAL</span>
            <span className="text-[#10b981]">✦</span>
            <span>CẨM NANG BRAND GUIDELINES</span>
            <span className="text-[#10b981]">✦</span>
          </div>
        </div>
      </section>

      {/* Featured Works Teaser */}
      <section className="py-20 sm:py-28 max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono text-[#8caaa0] uppercase tracking-wider mb-2 font-bold">
              Tuyển Tập Tác Phẩm
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-[#F8F8F8] tracking-tight">
              Dự Án Chọn Lọc
            </h2>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('works')}
            className="text-xs font-mono text-[#F8F8F8] hover:text-[#10b981] flex items-center gap-2 transition-colors cursor-pointer group focus-visible:ring-1 focus-visible:ring-[#10b981] rounded py-1 px-2"
          >
            <span>Khám phá toàn bộ {PROJECTS.length} dự án</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>

        {/* 4 Featured Projects Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => {
                onSelectProject(project);
                onNavigate('case-study', project.id);
              }}
              className="group p-4 rounded-3xl bg-[#083028] border border-[#003828] hover:border-[#10b981]/50 transition-all duration-300 cursor-pointer flex flex-col justify-between shadow-xl"
            >
              <div className="rounded-2xl overflow-hidden relative">
                <SafeImage
                  src={project.coverImage}
                  alt={project.title}
                  aspectClass="aspect-16/10"
                  fallbackTitle={project.title}
                  fallbackCategory={project.categoryLabel}
                  className="group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-3.5 left-3.5 px-2.5 py-1 rounded bg-[#082820]/90 backdrop-blur-md text-[10px] font-mono text-[#c0d3cb] border border-white/10 uppercase">
                  {project.projectTypeLabel}
                </div>
                <div className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-[#082820]/90 backdrop-blur-md border border-[#F8F8F8]/20 flex items-center justify-center text-[#F8F8F8] opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              <div className="mt-4 px-2">
                <div className="flex items-center justify-between text-xs font-mono text-[#8caaa0] mb-1.5 uppercase">
                  <span>{project.categoryLabel}</span>
                  <span className="tabular-nums">Năm {project.year}</span>
                </div>
                <h3 className="font-display font-bold text-xl text-[#F8F8F8] group-hover:text-[#10b981] transition-colors">
                  {project.title}
                </h3>
                <p className="mt-1 text-xs text-[#c0d3cb] line-clamp-2 font-light">
                  {project.subtitle}
                </p>

                {/* Role & Services Tags */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  <span className="px-2 py-0.5 rounded bg-[#003828] border border-[#10b981]/30 text-[11px] font-mono text-[#10b981]">
                    {project.role}
                  </span>
                  {project.services.slice(0, 2).map((srv) => (
                    <span key={srv} className="px-2 py-0.5 rounded bg-[#003028] border border-[#082820] text-[11px] font-mono text-[#8caaa0]">
                      {srv}
                    </span>
                  ))}
                </div>

                <div className="mt-4 pt-3 border-t border-[#003828] flex items-center justify-between text-xs font-mono text-[#8caaa0]">
                  <span>{project.client}</span>
                  <span className="text-[#F8F8F8] group-hover:translate-x-1 transition-transform flex items-center gap-1 font-semibold">
                    Xem Case Study →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5-Step Design Process Section */}
      <section className="py-20 sm:py-24 bg-[#082820] border-t border-[#083028]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#003828] border border-[#10b981]/30 text-xs font-mono text-[#10b981] mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>Quy Trình Chuẩn Mực</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-[#F8F8F8] tracking-tight">
              Quy Trình Thiết Kế 5 Bước
            </h2>
            <p className="text-xs sm:text-sm text-[#c0d3cb] mt-3 font-light leading-relaxed">
              Mỗi sản phẩm đều được phát triển qua quy trình chặt chẽ, từ nghiên cứu cốt lõi đến khi hoàn thiện file in ấn và giám sát thực tế.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {DESIGN_PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                className="p-5 rounded-2xl bg-[#083028] border border-[#003828] hover:border-[#10b981]/40 transition-all flex flex-col justify-between shadow-lg group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-lg font-mono font-black text-[#10b981] group-hover:scale-110 transition-transform">
                      {step.step}
                    </span>
                    <span className="text-[10px] font-mono text-[#8caaa0] uppercase tracking-wider">
                      {step.enTitle}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-base text-[#F8F8F8] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#c0d3cb] font-light leading-relaxed">
                    {step.summary}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#003828] text-[11px] text-[#8caaa0] font-light">
                  {step.details}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Teaser */}
      <section className="py-20 sm:py-24 border-t border-[#083028]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-xs font-mono text-[#8caaa0] uppercase tracking-wider mb-2 font-bold">
                Năng Lực Cung Cấp
              </div>
              <h2 className="font-display font-black text-3xl sm:text-5xl text-[#F8F8F8] tracking-tight">
                Dịch Vụ Thiết Kế
              </h2>
            </div>

            <button
              type="button"
              onClick={() => onNavigate('services')}
              className="text-xs font-mono text-[#F8F8F8] hover:text-[#10b981] flex items-center gap-2 cursor-pointer group focus-visible:ring-1 focus-visible:ring-[#10b981] rounded py-1 px-2"
            >
              <span>Xem chi tiết các gói dịch vụ</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <div
                key={service.index}
                onClick={() => onNavigate('services')}
                className="p-6 rounded-2xl bg-[#083028] border border-[#003828] hover:border-[#10b981]/40 transition-all cursor-pointer flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="text-sm font-mono font-bold text-[#10b981] mb-3">
                    {service.index}
                  </div>
                  <h3 className="font-display font-bold text-lg text-[#F8F8F8] group-hover:text-[#10b981] transition-colors leading-snug">
                    {service.name}
                  </h3>
                  <p className="mt-3 text-xs text-[#c0d3cb] font-light leading-relaxed line-clamp-3">
                    {service.tagline}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#003828] flex items-center justify-between text-xs font-mono text-[#8caaa0]">
                  <span>{service.timeline}</span>
                  <span className="text-[#F8F8F8] group-hover:translate-x-1 transition-transform">
                    Chi tiết →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action section */}
      <section className="py-20 bg-[#082820] border-t border-[#083028] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#003828] border border-[#083028] text-xs font-mono text-[#10b981]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Sẵn sàng cho dự án của bạn</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#F8F8F8] tracking-tight leading-tight">
            Bạn muốn nâng tầm diện mạo thương hiệu?
          </h2>

          <p className="text-sm sm:text-base text-[#c0d3cb] font-light max-w-xl mx-auto">
            Hãy liên hệ với tôi ngay hôm nay để nhận tư vấn giải pháp thị giác và báo giá chi tiết trong vòng 24 giờ.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 rounded-xl bg-[#003828] hover:bg-[#10b981] hover:text-[#101010] text-[#F8F8F8] border border-[#F8F8F8]/40 font-bold text-sm flex items-center gap-2 cursor-pointer shadow-2xl transition-all focus-visible:ring-2 focus-visible:ring-[#10b981]"
            >
              <span>Bắt Đầu Dự Án Ngay</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => onNavigate('about')}
              className="px-8 py-4 rounded-xl bg-[#003028] hover:bg-[#083028] text-[#F8F8F8] border border-[#083028] font-bold text-sm flex items-center gap-2 cursor-pointer transition-all focus-visible:ring-2 focus-visible:ring-[#10b981]"
            >
              <span>Tìm Hiểu Về Tôi</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
