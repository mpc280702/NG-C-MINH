import React, { useState, useEffect } from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { DESIGNER_INFO } from '../data/portfolioData';
import { PageRoute } from '../types/portfolio';

interface FooterProps {
  onNavigate: (page: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [saigonTime, setSaigonTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Ho_Chi_Minh',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setSaigonTime(new Intl.DateTimeFormat('vi-VN', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const pages: { id: PageRoute; label: string }[] = [
    { id: 'home', label: 'Trang Chủ' },
    { id: 'works', label: 'Dự Án Nổi Bật' },
    { id: 'services', label: 'Dịch Vụ Thiết Kế' },
    { id: 'about', label: 'Về Cao Ngọc Minh' },
    { id: 'skills', label: 'Kỹ Năng & Phần Mềm' },
    { id: 'contact', label: 'Liên Hệ Báo Giá' },
  ];

  return (
    <footer className="bg-[#082820] border-t border-[#083028] text-[#F8F8F8] py-16">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-12">
        {/* Top Row: Wordmark, Page Sitemap, and Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#083028]">
          <div className="md:col-span-5 space-y-3">
            <button
              onClick={() => {
                onNavigate('home');
                scrollToTop();
              }}
              className="text-left cursor-pointer group"
            >
              <div className="text-2xl font-display font-black tracking-tight uppercase text-[#F8F8F8] flex items-center gap-1.5">
                <span>CAO NGỌC MINH</span>
                <span className="text-[#10b981]">.</span>
              </div>
              <p className="text-xs font-mono text-[#8caaa0] mt-1">
                Graphic Design & Creative Studio
              </p>
            </button>
            <p className="text-xs text-[#c0d3cb] max-w-sm font-light leading-relaxed">
              Chuyên sâu Brand Identity, Key Visual, Hệ Thống Ấn Phẩm Quảng Cáo & Thiết Kế Bao Bì.
            </p>
          </div>

          {/* Sitemap links */}
          <div className="md:col-span-4 space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-[#8caaa0] font-bold mb-3">
              Danh Mục Trang
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {pages.map((p) => (
                <button
                  key={p.id}
                  onClick={() => {
                    onNavigate(p.id);
                    scrollToTop();
                  }}
                  className="text-left text-[#c0d3cb] hover:text-[#F8F8F8] hover:underline cursor-pointer py-1 transition-colors"
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* Socials & Direct Connect */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-[#8caaa0] font-bold mb-3">
              Kết Nối Trực Tiếp
            </div>
            <div className="space-y-1.5 text-xs font-mono">
              <a
                href={`mailto:${DESIGNER_INFO.email}`}
                className="block text-[#c0d3cb] hover:text-[#10b981] hover:underline truncate"
              >
                {DESIGNER_INFO.email}
              </a>
              <a
                href={`tel:${DESIGNER_INFO.phoneTel}`}
                className="block text-[#c0d3cb] hover:text-[#10b981] hover:underline"
              >
                {DESIGNER_INFO.phone}
              </a>
              <a
                href={DESIGNER_INFO.zaloUrl}
                target="_blank"
                rel="noreferrer"
                className="block text-[#10b981] hover:underline font-bold"
              >
                Chat Zalo: {DESIGNER_INFO.phone}
              </a>
              <div className="pt-2 flex flex-wrap gap-2">
                {DESIGNER_INFO.socials.map((s, idx) => (
                  <a
                    key={idx}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[11px] text-[#8caaa0] hover:text-[#F8F8F8] flex items-center gap-0.5"
                  >
                    <span>{s.name}</span>
                    <ArrowUpRight className="w-2.5 h-2.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Studio Meta Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-xs font-mono text-[#c0d3cb]">
          <div className="flex flex-wrap items-center gap-6">
            <div>
              <span className="text-[#8caaa0] uppercase">Vị trí: </span>
              <span className="text-[#F8F8F8] font-semibold">Hà Nội (Việt Nam)</span>
            </div>
            <div>
              <span className="text-[#8caaa0] uppercase">Hanoi Time: </span>
              <span className="text-[#10b981] font-bold tabular-nums">
                {saigonTime || '14:30:00'}
              </span>
            </div>
            <div>
              <span className="text-[#8caaa0] uppercase">Nhận dự án: </span>
              <span className="text-[#10b981] font-semibold">Sẵn sàng nhận vị trí mới &amp; dự án</span>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 p-2 px-3 rounded-lg bg-[#003828] hover:bg-[#083028] border border-[#083028] text-[#F8F8F8] cursor-pointer transition-colors"
            aria-label="Về đầu trang"
          >
            <span>Về đầu trang</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 border-t border-[#083028] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8caaa0]">
          <div>
            © {new Date().getFullYear()} Cao Ngọc Minh. Toàn bộ hình ảnh &amp; thiết kế được bảo vệ bản quyền.
          </div>
          <div className="flex items-center gap-3">
            <span>Palette: Emerald &amp; Forest Architecture</span>
            <span aria-hidden="true">·</span>
            <span>Portfolio Edition 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
