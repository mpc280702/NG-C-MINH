import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight, Sparkles, CheckCircle2, Award, Layers } from 'lucide-react';
import { DESIGNER_INFO, PROJECTS, SERVICES, AWARDS, CLIENT_LOGOS } from '../data/portfolioData';
import { SafeImage } from '../components/SafeImage';
import { Counter } from '../components/Counter';
import { PageRoute, Project } from '../types/portfolio';

interface HomePageProps {
  onNavigate: (page: PageRoute, projectId?: string) => void;
  onSelectProject: (project: Project) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onSelectProject }) => {
  const featuredProjects = PROJECTS.slice(0, 4);

  return (
    <div className="bg-[#003028] text-[#F8F8F8] overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-16 sm:pt-24 pb-20 sm:pb-28 border-b border-[#083028] overflow-hidden">
        {/* Animated Ambient Lighting */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.45, 0.65, 0.45],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#003828] rounded-full blur-[140px] pointer-events-none"
        />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#8caaa0] uppercase tracking-wider mb-6"
          >
            <span>Brand Identity</span>
            <span aria-hidden="true" className="opacity-40">·</span>
            <span>Bao Bì Cao Cấp</span>
            <span aria-hidden="true" className="opacity-40">·</span>
            <span>Editorial & Sách</span>
            <span aria-hidden="true" className="opacity-40">·</span>
            <span>Typography</span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Statement with Staggered Motion */}
            <div className="lg:col-span-7 space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#083028] border border-[#003828] text-xs font-mono text-[#c0d3cb] shadow-inner"
              >
                <span className="w-2 h-2 rounded-full bg-[#10b981] animate-ping" />
                <span>{DESIGNER_INFO.availability}</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="font-display font-black text-4xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-[#F8F8F8]"
              >
                Thiết kế đồ họa &{' '}
                <span className="font-editorial italic font-normal text-[#c0d3cb] underline decoration-1 underline-offset-8">
                  bản sắc
                </span>{' '}
                thương hiệu xúc giác.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-base sm:text-lg text-[#c0d3cb] font-light leading-relaxed max-w-2xl"
              >
                {DESIGNER_INFO.tagline} Với hơn 7 năm thực chiến, tôi kiến tạo những sản phẩm thiết kế có sức sống bền bỉ qua năm tháng, cân bằng giữa thẩm mỹ nghệ thuật và hiệu quả kinh doanh.
              </motion.p>

              {/* CTAs with hover effects */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="pt-2 flex flex-wrap items-center gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onNavigate('works')}
                  className="px-6 py-3.5 rounded-xl bg-[#003828] hover:bg-[#083028] text-[#F8F8F8] border border-[#F8F8F8]/30 font-semibold text-xs sm:text-sm flex items-center gap-2 cursor-pointer shadow-xl transition-all"
                >
                  <span>Xem Toàn Bộ Dự Án</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-3.5 rounded-xl bg-[#082820] hover:bg-[#083028] text-[#F8F8F8] border border-[#083028] font-semibold text-xs sm:text-sm flex items-center gap-2 cursor-pointer transition-all"
                >
                  <span>Liên Hệ Tư Vấn</span>
                  <ArrowUpRight className="w-4 h-4" />
                </motion.button>
              </motion.div>

              {/* Animated Counters */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="pt-8 border-t border-[#083028] flex flex-wrap items-center gap-8 sm:gap-12"
              >
                <div>
                  <div className="text-3xl font-display font-black text-[#F8F8F8]">
                    <Counter end={7} suffix="+" />
                  </div>
                  <div className="text-xs font-mono text-[#8caaa0] uppercase mt-0.5">
                    Năm Kinh Nghiệm
                  </div>
                </div>
                <div className="w-px h-8 bg-[#083028] hidden sm:block" />
                <div>
                  <div className="text-3xl font-display font-black text-[#F8F8F8]">
                    <Counter end={58} suffix="+" />
                  </div>
                  <div className="text-xs font-mono text-[#8caaa0] uppercase mt-0.5">
                    Dự Án Hoàn Thành
                  </div>
                </div>
                <div className="w-px h-8 bg-[#083028] hidden sm:block" />
                <div>
                  <div className="text-3xl font-display font-black text-[#F8F8F8]">
                    <Counter end={100} suffix="%" />
                  </div>
                  <div className="text-xs font-mono text-[#8caaa0] uppercase mt-0.5">
                    Khách Hàng Hài Lòng
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Featured Card Showcase with 3D Tilt Hover */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-5"
            >
              <motion.div
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="p-4 rounded-3xl bg-[#083028] border border-[#003828] hover:border-[#10b981]/40 shadow-2xl relative group transition-colors"
              >
                <div className="rounded-2xl overflow-hidden relative">
                  <SafeImage
                    src={PROJECTS[0].coverImage}
                    alt={PROJECTS[0].title}
                    aspectClass="aspect-4/3"
                    fallbackTitle={PROJECTS[0].title}
                    fallbackCategory={PROJECTS[0].categoryLabel}
                    className="group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-md bg-[#082820]/90 backdrop-blur-md text-[11px] font-mono text-[#F8F8F8] border border-[#F8F8F8]/10 flex items-center gap-1.5 shadow-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
                    <span>Dự Án Tiêu Biểu 2025</span>
                  </div>
                </div>

                <div className="mt-4 px-2 flex items-center justify-between">
                  <div>
                    <h3 className="font-display font-bold text-lg text-[#F8F8F8]">
                      {PROJECTS[0].title}
                    </h3>
                    <p className="text-xs font-mono text-[#8caaa0] mt-0.5">
                      {PROJECTS[0].subtitle}
                    </p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      onSelectProject(PROJECTS[0]);
                      onNavigate('case-study', PROJECTS[0].id);
                    }}
                    className="p-3 rounded-xl bg-[#003828] hover:bg-[#10b981] hover:text-[#101010] text-[#F8F8F8] border border-[#F8F8F8]/20 transition-all cursor-pointer shadow-md"
                    aria-label="Xem chi tiết"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Marquee Ticker */}
        <div className="mt-16 py-3 bg-[#082820] border-y border-[#083028] overflow-hidden whitespace-nowrap select-none">
          <div className="inline-flex items-center gap-8 text-xs font-mono tracking-widest text-[#8caaa0] uppercase animate-[marquee_24s_linear_infinite]">
            <span>NHẬN DIỆN THƯƠNG HIỆU</span>
            <span className="text-[#10b981]">✦</span>
            <span>BAO BÌ SẢN PHẨM CAO CẤP</span>
            <span className="text-[#10b981]">✦</span>
            <span>ẤN PHẨM & TẠP CHÍ NGHỆ THUẬT</span>
            <span className="text-[#10b981]">✦</span>
            <span>TYPOGRAPHY & KEY VISUAL</span>
            <span className="text-[#10b981]">✦</span>
            <span>CẨM NANG BRAND GUIDELINES</span>
            <span className="text-[#10b981]">✦</span>
            <span>NHẬN DIỆN THƯƠNG HIỆU</span>
            <span className="text-[#10b981]">✦</span>
            <span>BAO BÌ SẢN PHẨM CAO CẤP</span>
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
            onClick={() => onNavigate('works')}
            className="text-xs font-mono text-[#F8F8F8] hover:text-[#10b981] flex items-center gap-2 transition-colors cursor-pointer group"
          >
            <span>Khám phá toàn bộ {PROJECTS.length} dự án</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>

        {/* 4 Featured Projects Bento Grid with Hover Lift */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
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

                <div className="mt-4 pt-3 border-t border-[#003828] flex items-center justify-between text-xs font-mono text-[#8caaa0]">
                  <span>{project.client}</span>
                  <span className="text-[#F8F8F8] group-hover:translate-x-1 transition-transform flex items-center gap-1 font-semibold">
                    Xem Case Study →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Teaser with Hover Glow */}
      <section className="py-20 sm:py-24 bg-[#082820] border-t border-[#083028]">
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
              onClick={() => onNavigate('services')}
              className="text-xs font-mono text-[#F8F8F8] hover:text-[#10b981] flex items-center gap-2 cursor-pointer group"
            >
              <span>Xem chi tiết các gói dịch vụ</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={service.index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* International Awards & Recognition */}
      <section className="py-20 sm:py-24 border-t border-[#083028]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs font-mono text-[#8caaa0] uppercase tracking-wider mb-2 font-bold">
              Ghi Nhận Chuyên Môn
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-[#F8F8F8]">
              Giải Thưởng Thiết Kế Quốc Tế
            </h2>
            <p className="text-xs sm:text-sm text-[#c0d3cb] mt-2 font-light">
              Được vinh danh bởi các hội đồng thiết kế uy tín tại Tokyo TDC, Red Dot Germany, Awwwards và D&AD London.
            </p>
          </div>

          <div className="divide-y divide-[#083028] border-y border-[#083028]">
            {AWARDS.slice(0, 4).map((award, idx) => (
              <motion.div
                key={idx}
                whileHover={{ backgroundColor: 'rgba(8, 48, 40, 0.7)', x: 4 }}
                transition={{ duration: 0.2 }}
                className="py-5 grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6 items-center px-4 rounded-xl transition-all"
              >
                <div className="sm:col-span-2 text-xs font-mono text-[#8caaa0] tabular-nums">
                  {award.year}
                </div>
                <div className="sm:col-span-6 font-display font-bold text-base text-[#F8F8F8]">
                  {award.title}
                  <div className="text-xs font-mono text-[#8caaa0] font-normal">
                    {award.organization}
                  </div>
                </div>
                <div className="sm:col-span-2 text-xs text-[#c0d3cb]">
                  {award.category}
                </div>
                <div className="sm:col-span-2 sm:text-right text-xs font-mono text-[#10b981] font-semibold">
                  {award.project}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action section with pulsing glow */}
      <section className="py-20 bg-[#082820] border-t border-[#083028] relative overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0 bg-[#003828] rounded-full blur-[160px] pointer-events-none"
        />

        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#003828] border border-[#083028] text-xs font-mono text-[#10b981]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Sẵn sàng cho dự án của bạn</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl text-[#F8F8F8] tracking-tight leading-tight">
            Bạn muốn nâng tầm diện mạo thương hiệu?
          </h2>

          <p className="text-sm sm:text-base text-[#c0d3cb] font-light max-w-xl mx-auto">
            Hãy liên hệ với Minh Ngọc ngay hôm nay để nhận tư vấn giải pháp thị giác và báo giá chi tiết trong vòng 24 giờ.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 rounded-xl bg-[#003828] hover:bg-[#10b981] hover:text-[#101010] text-[#F8F8F8] border border-[#F8F8F8]/40 font-bold text-sm flex items-center gap-2 cursor-pointer shadow-2xl transition-all"
            >
              <span>Bắt Đầu Dự Án Ngay</span>
              <ArrowUpRight className="w-4 h-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onNavigate('about')}
              className="px-8 py-4 rounded-xl bg-[#003028] hover:bg-[#083028] text-[#F8F8F8] border border-[#083028] font-bold text-sm flex items-center gap-2 cursor-pointer transition-all"
            >
              <span>Tìm Hiểu Về Minh Ngọc</span>
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
};
