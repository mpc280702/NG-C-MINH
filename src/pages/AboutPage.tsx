import React from 'react';
import { ArrowUpRight, GraduationCap, MapPin, CheckCircle2, ShieldCheck, Layers, FileCheck } from 'lucide-react';
import { DESIGNER_INFO, DESIGN_PROCESS_STEPS } from '../data/portfolioData';
import { SafeImage } from '../components/SafeImage';
import { PageRoute } from '../types/portfolio';

interface AboutPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#003028] text-[#F8F8F8] min-h-screen py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header Breadcrumbs & Title */}
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-[#8caaa0] uppercase tracking-wider mb-2">
            <button
              type="button"
              className="cursor-pointer hover:text-[#F8F8F8] focus-visible:ring-1 focus-visible:ring-[#10b981] rounded"
              onClick={() => onNavigate('home')}
            >
              Trang Chủ
            </button>
            <span>/</span>
            <span className="text-[#F8F8F8]">Về Cao Ngọc Minh</span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-6xl text-[#F8F8F8] tracking-tight">
            Nhà Thiết Kế &amp; Triết Lý Thị Giác
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#c0d3cb] font-light max-w-2xl leading-relaxed">
            Hành trình sáng tạo nghệ thuật đồ họa chuyên sâu với hơn {DESIGNER_INFO.experienceYears} năm thực chiến, nơi kiến trúc thương hiệu gặp gỡ ngôn ngữ thị giác hiện đại.
          </p>
        </div>

        {/* 2-Column Bio Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          {/* Left Column: Portrait & Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-3.5 rounded-3xl bg-[#083028] border border-[#003828] shadow-2xl relative">
              <SafeImage
                src={DESIGNER_INFO.portraitUrl}
                alt="Cao Ngọc Minh Graphic Designer"
                aspectClass="aspect-4/5"
                fallbackTitle="Cao Ngọc Minh"
                fallbackCategory="Graphic Designer"
                className="rounded-2xl object-cover"
              />

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#082820]/90 backdrop-blur-md border border-[#F8F8F8]/10 text-white flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono font-bold tracking-wider">
                    CAO NGỌC MINH
                  </div>
                  <div className="text-[11px] text-[#c0d3cb]">
                    Hà Nội, Việt Nam · Graphic Designer
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#003828] border border-[#10b981]/40 text-[#10b981] font-semibold">
                  AVAILABLE FOR WORK
                </span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#082820] border border-[#083028] space-y-3 text-xs font-mono text-[#c0d3cb]">
              <div className="flex items-center gap-2.5">
                <GraduationCap className="w-4 h-4 text-[#10b981] shrink-0" />
                <span>Chuyên ngành Graphic Design &amp; Visual Communication</span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#10b981] shrink-0 mt-0.5" />
                <span>Địa điểm: Số 27, P. Thụy Phương, Q. Bắc Từ Liêm, TP. Hà Nội</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#10b981] shrink-0" />
                <span>Sẵn sàng On-site tại Hà Nội &amp; Remote toàn quốc</span>
              </div>
            </div>
          </div>

          {/* Right Column: In-depth Manifesto & Journey */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-[#F8F8F8] leading-snug">
                "Thiết kế tốt không chỉ giải quyết thẩm mỹ; nó tạo dựng cấu trúc của niềm tin thương hiệu."
              </h2>
              <div className="mt-6 space-y-4 text-sm sm:text-base text-[#c0d3cb] leading-relaxed font-light">
                <p>
                  Tôi tiếp cận thiết kế đồ họa với niềm đam mê sâu sắc dành cho bố cục lưới chuẩn xác, chất liệu in ấn và nghệ thuật Typography. Trong hơn {DESIGNER_INFO.experienceYears} năm làm việc qua các dự án nhận diện thương hiệu, bao bì cao cấp và ấn phẩm truyền thông, tôi luôn tin rằng một thiết kế xuất sắc phải có khả năng đồng hành lâu dài cùng sự phát triển của thương hiệu.
                </p>
                <p>
                  Phương pháp làm việc của tôi tôn trọng hệ thống lưới (Grid System), tỷ lệ khoảng trắng cân đối và sự tối giản có mục đích. Mọi chi tiết — từ đường nét biểu trưng, phông chữ tiêu đề cho đến quy cách gia công ép kim hay dập nổi trên bao bì — đều được cân nhắc kỹ lưỡng để tối ưu trải nghiệm thị giác và chi phí sản xuất thực tế.
                </p>
                <p>
                  Không chỉ bàn giao file thiết kế hoàn chỉnh, tôi sẵn sàng đồng hành hỗ trợ kỹ thuật in ấn, kiểm tra mẫu in thực tế để đảm bảo ấn phẩm ra mắt thị trường đạt độ hoàn thiện cao nhất.
                </p>
              </div>
            </div>

            {/* 5-Step Working Methodology */}
            <div className="pt-6 border-t border-[#083028] space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-[#8caaa0] font-bold">
                Quy Trình Triển Khai 5 Bước Chuẩn Mực:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {DESIGN_PROCESS_STEPS.map((step) => (
                  <div key={step.step} className="p-4 rounded-xl bg-[#083028] border border-[#003828]">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-mono font-bold text-[#10b981]">
                        {step.step}. {step.title}
                      </span>
                      <span className="text-[10px] font-mono text-[#8caaa0] uppercase">
                        {step.enTitle}
                      </span>
                    </div>
                    <p className="text-xs text-[#c0d3cb] font-light leading-relaxed">
                      {step.summary}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Working Principles */}
            <div className="pt-6 border-t border-[#083028] space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-[#8caaa0] font-bold">
                Cam Kết &amp; Nguyên Tắc Hợp Tác
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#c0d3cb]">
                <div className="flex items-start gap-2 p-3 rounded-lg bg-[#082820] border border-[#083028]">
                  <ShieldCheck className="w-4 h-4 text-[#10b981] shrink-0 mt-0.5" />
                  <span>Bàn giao 100% file gốc vector (.AI, .EPS, .PDF, .SVG)</span>
                </div>
                <div className="flex items-start gap-2 p-3 rounded-lg bg-[#082820] border border-[#083028]">
                  <Layers className="w-4 h-4 text-[#10b981] shrink-0 mt-0.5" />
                  <span>Cung cấp cẩm nang Brand Guidelines rõ ràng, dễ ứng dụng</span>
                </div>
                <div className="flex items-start gap-2 p-3 rounded-lg bg-[#082820] border border-[#083028]">
                  <FileCheck className="w-4 h-4 text-[#10b981] shrink-0 mt-0.5" />
                  <span>Đảm bảo đúng tiến độ bàn giao cam kết ban đầu</span>
                </div>
                <div className="flex items-start gap-2 p-3 rounded-lg bg-[#082820] border border-[#083028]">
                  <CheckCircle2 className="w-4 h-4 text-[#10b981] shrink-0 mt-0.5" />
                  <span>Hỗ trợ kỹ thuật in ấn và tư vấn chất liệu miễn phí</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="px-6 py-3.5 rounded-xl bg-[#003828] hover:bg-[#10b981] hover:text-[#101010] text-[#F8F8F8] border border-[#F8F8F8]/30 font-bold text-xs flex items-center gap-2 cursor-pointer shadow-lg transition-all focus-visible:ring-2 focus-visible:ring-[#10b981]"
              >
                <span>Liên Hệ Hợp Tác Ngay</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <a
                href={DESIGNER_INFO.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-[#082820] hover:bg-[#083028] text-[#F8F8F8] border border-[#083028] font-bold text-xs flex items-center gap-2 transition-all focus-visible:ring-2 focus-visible:ring-[#10b981]"
              >
                <span>Tải CV (Google Drive)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
