import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LayoutGrid, List, Search, ArrowUpRight } from 'lucide-react';
import { Project, ProjectCategory, PageRoute } from '../types/portfolio';
import { PROJECTS } from '../data/portfolioData';
import { SafeImage } from '../components/SafeImage';

interface WorksPageProps {
  onSelectProject: (project: Project) => void;
  onNavigate: (page: PageRoute, projectId?: string) => void;
}

const CATEGORIES: { id: ProjectCategory; label: string }[] = [
  { id: 'all', label: 'Tất Cả Dự Án' },
  { id: 'branding', label: 'Nhận Diện Thương Hiệu' },
  { id: 'packaging', label: 'Bao Bì Sản Phẩm' },
  { id: 'editorial', label: 'Ấn Phẩm & Sách' },
  { id: 'typography', label: 'Typography & Poster' },
];

export const WorksPage: React.FC<WorksPageProps> = ({ onSelectProject, onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [viewMode, setViewMode] = useState<'bento' | 'list'>('bento');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const matchesCategory =
        activeCategory === 'all' || project.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.deliverables.some((d) =>
          d.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="bg-[#003028] text-[#F8F8F8] min-h-screen py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header Breadcrumbs & Title with Fade-in */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 text-xs font-mono text-[#8caaa0] uppercase tracking-wider mb-2">
            <span className="cursor-pointer hover:text-[#10b981] transition-colors" onClick={() => onNavigate('home')}>Trang Chủ</span>
            <span>/</span>
            <span className="text-[#F8F8F8]">Dự Án Chọn Lọc</span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-6xl text-[#F8F8F8] tracking-tight">
            Hồ Sơ Năng Lực & Dự Án
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#c0d3cb] font-light max-w-2xl leading-relaxed">
            Tuyển tập các dự án nhận diện thương hiệu, bao bì xúc giác và ấn phẩm xuất bản được kiến tạo với tinh thần chuẩn xác và duy mỹ nghệ thuật.
          </p>
        </motion.div>

        {/* Filter Controls & Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 pb-8 mb-10 border-b border-[#083028]"
        >
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <motion.button
                  key={cat.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all whitespace-nowrap cursor-pointer relative ${
                    isActive
                      ? 'bg-[#003828] text-[#F8F8F8] border border-[#10b981]/50 shadow-md'
                      : 'bg-[#083028] text-[#c0d3cb] border border-[#082820] hover:text-[#F8F8F8]'
                  }`}
                >
                  {cat.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeFilterDot"
                      className="inline-block w-1.5 h-1.5 rounded-full bg-[#10b981] ml-1.5"
                    />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Search & View Switcher */}
          <div className="flex items-center gap-3">
            <div className="relative w-full lg:w-72">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#8caaa0]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm dự án, khách hàng..."
                className="w-full bg-[#083028] border border-[#082820] rounded-xl pl-9 pr-8 py-2 text-xs text-[#F8F8F8] placeholder-[#8caaa0] focus:outline-none focus:border-[#10b981]/50 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#8caaa0] hover:text-[#F8F8F8]"
                >
                  ✕
                </button>
              )}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center p-1 rounded-xl bg-[#082820] border border-[#083028] shrink-0">
              <button
                onClick={() => setViewMode('bento')}
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                  viewMode === 'bento'
                    ? 'bg-[#003828] text-[#F8F8F8] shadow-sm'
                    : 'text-[#8caaa0] hover:text-[#F8F8F8]'
                }`}
                title="Dạng lưới ảnh"
                aria-label="Dạng lưới"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                  viewMode === 'list'
                    ? 'bg-[#003828] text-[#F8F8F8] shadow-sm'
                    : 'text-[#8caaa0] hover:text-[#F8F8F8]'
                }`}
                title="Dạng danh sách"
                aria-label="Dạng danh sách"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Content Presentation with Layout Animations */}
        {filteredProjects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-20 text-center rounded-3xl bg-[#082820] border border-dashed border-[#083028]"
          >
            <p className="text-sm text-[#c0d3cb]">
              Không tìm thấy dự án phù hợp với từ khóa của bạn.
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-3 text-xs font-mono underline text-[#10b981] cursor-pointer"
            >
              Xem lại toàn bộ dự án
            </button>
          </motion.div>
        ) : viewMode === 'bento' ? (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
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
                      aspectClass="aspect-4/3"
                      fallbackTitle={project.title}
                      fallbackCategory={project.categoryLabel}
                      className="group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-[#082820]/90 backdrop-blur-md border border-[#F8F8F8]/20 flex items-center justify-center text-[#F8F8F8] opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="mt-4 px-2">
                    <div className="flex items-center justify-between text-xs font-mono text-[#8caaa0] mb-1.5 uppercase">
                      <span className="font-semibold text-[#10b981]">{project.categoryLabel}</span>
                      <span className="tabular-nums">Năm {project.year}</span>
                    </div>
                    <h3 className="font-display font-bold text-xl text-[#F8F8F8] group-hover:text-[#10b981] transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-xs text-[#c0d3cb] line-clamp-2 font-light leading-relaxed">
                      {project.subtitle}
                    </p>

                    <div className="mt-4 pt-3 border-t border-[#003828] flex items-center justify-between text-xs font-mono text-[#8caaa0]">
                      <span className="truncate max-w-[180px]">{project.client}</span>
                      <span className="text-[#F8F8F8] group-hover:translate-x-1 transition-transform font-semibold">
                        Xem Chi Tiết →
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          /* Editorial Table List View with Hover highlight */
          <div className="divide-y divide-[#083028] border-y border-[#083028]">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ backgroundColor: 'rgba(8, 48, 40, 0.7)', x: 4 }}
                transition={{ duration: 0.2 }}
                onClick={() => {
                  onSelectProject(project);
                  onNavigate('case-study', project.id);
                }}
                className="py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer px-4 rounded-xl transition-colors group"
              >
                <div className="flex items-start md:items-center gap-6">
                  <span className="text-xs font-mono text-[#8caaa0] tabular-nums pt-1 md:pt-0">
                    {project.year}
                  </span>
                  <div>
                    <h3 className="text-xl font-display font-bold text-[#F8F8F8] group-hover:text-[#10b981] transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-[#c0d3cb] mt-1">
                      <span>{project.client}</span>
                      <span aria-hidden="true" className="opacity-40">·</span>
                      <span className="text-[#10b981] font-mono">{project.categoryLabel}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-6 text-xs font-mono">
                  <span className="hidden sm:inline text-[#8caaa0] truncate max-w-[240px]">
                    {project.deliverables.slice(0, 2).join(' / ')}
                  </span>
                  <span className="text-[#F8F8F8] group-hover:translate-x-1 transition-transform font-semibold">
                    Xem Case Study →
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
