import React from 'react';
import { ArrowUpRight, GraduationCap, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { DESIGNER_INFO, CLIENT_LOGOS, AWARDS } from '../data/portfolioData';
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
            <span className="cursor-pointer hover:text-[#F8F8F8]" onClick={() => onNavigate('home')}>Trang Chủ</span>
            <span>/</span>
            <span className="text-[#F8F8F8]">Về Minh Ngọc</span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-6xl text-[#F8F8F8] tracking-tight">
            Nhà Thiết Kế & Triết Lý Thị Giác
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#c0d3cb] font-light max-w-2xl leading-relaxed">
            Hành trình hơn 7 năm theo đuổi nghệ thuật đồ họa chuẩn mực, nơi kiến trúc hình học gặp gỡ cảm xúc xúc giác tinh tế.
          </p>
        </div>

        {/* 2-Column Bio Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          {/* Left Column: Portrait & Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-3.5 rounded-3xl bg-[#083028] border border-[#003828] shadow-2xl relative">
              <SafeImage
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=900&auto=format&fit=crop"
                alt="Minh Ngọc Graphic Designer"
                aspectClass="aspect-4/5"
                fallbackTitle="Minh Ngọc"
                fallbackCategory="Art Director & Designer"
                className="rounded-2xl"
              />

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#082820]/90 backdrop-blur-md border border-[#F8F8F8]/10 text-white flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono font-bold tracking-wider">
                    MINH NGỌC
                  </div>
                  <div className="text-[11px] text-[#c0d3cb]">
                    Saigon, Vietnam · Independent Studio
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#003828] border border-[#10b981]/40 text-[#10b981] font-semibold">
                  VERIFIED DESIGNER
                </span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#082820] border border-[#083028] space-y-3 text-xs font-mono text-[#c0d3cb]">
              <div className="flex items-center gap-2.5">
                <GraduationCap className="w-4 h-4 text-[#10b981] shrink-0" />
                <span>Tốt nghiệp Cử nhân Thiết kế Đồ họa — ĐH Mỹ Thuật TP.HCM</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#10b981] shrink-0" />
                <span>Studio: Quận 1, TP. Hồ Chí Minh (Gặp mặt theo lịch hẹn)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Award className="w-4 h-4 text-[#10b981] shrink-0" />
                <span>Thành viên Ban Giám Khảo Creative Awards Vietnam 2025</span>
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
                  Tôi bắt đầu sự nghiệp từ tình yêu sâu sắc với giấy in, mực offset và các kiểu chữ cổ điển. Sau hơn 7 năm làm việc qua hàng chục thương hiệu F&B, mỹ phẩm, thời trang và xuất bản, tôi tin rằng một bộ nhận diện xuất sắc phải có khả năng đứng vững trước sự bào mòn của xu hướng thời vụ.
                </p>
                <p>
                  Phương pháp thiết kế của tôi chịu ảnh hưởng mạnh mẽ từ trường phái đồ họa Thụy Sĩ (Swiss Graphic Design): Tôn trọng hệ thống lưới (grid system), tỷ lệ khoảng trắng hài hòa và tính tối giản có mục đích. Mỗi chi tiết từ nét cắt logo, độ cong chữ cái cho đến kỹ thuật ép kim dập chìm trên nhãn chai đều phải mang trong mình một lý do tồn tại rõ ràng.
                </p>
                <p>
                  Tôi không chỉ giao file thiết kế cho bạn; tôi đồng hành cùng xưởng in, kiểm tra mẫu test thực tế và đảm bảo rằng sản phẩm cuối cùng xuất hiện trên kệ hàng với vẻ đẹp hoàn hảo nhất.
                </p>
              </div>
            </div>

            {/* 4-Step Working Methodology */}
            <div className="pt-6 border-t border-[#083028] space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-[#8caaa0] font-bold">
                Quy Trình Hợp Tác 4 Bước Chuẩn Mực:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#083028] border border-[#003828]">
                  <div className="text-xs font-mono font-bold text-[#10b981] mb-1">
                    01. Nghiên Cứu Khảo Cổ
                  </div>
                  <div className="text-sm font-bold text-[#F8F8F8]">Bối Cảnh & Định Vị</div>
                  <p className="text-xs text-[#c0d3cb] mt-1 font-light">
                    Phỏng vấn sâu, khảo sát đối thủ và tìm ra tinh thần cốt lõi của thương hiệu.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#083028] border border-[#003828]">
                  <div className="text-xs font-mono font-bold text-[#10b981] mb-1">
                    02. Phát Triển Concept
                  </div>
                  <div className="text-sm font-bold text-[#F8F8F8]">Biểu Trưng & Chữ</div>
                  <p className="text-xs text-[#c0d3cb] mt-1 font-light">
                    Phác thảo hướng giải pháp độc bản, xây dựng bảng màu và typography.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#083028] border border-[#003828]">
                  <div className="text-xs font-mono font-bold text-[#10b981] mb-1">
                    03. Thử Nghiệm Chất Liệu
                  </div>
                  <div className="text-sm font-bold text-[#F8F8F8]">In Mẫu & Phối Cảnh 3D</div>
                  <p className="text-xs text-[#c0d3cb] mt-1 font-light">
                    Kiểm tra độ bám mực, chọn định lượng giấy và dựng mockup chân thực.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#083028] border border-[#003828]">
                  <div className="text-xs font-mono font-bold text-[#10b981] mb-1">
                    04. Bàn Giao Quy Chuẩn
                  </div>
                  <div className="text-sm font-bold text-[#F8F8F8]">Cẩm Nang Thương Hiệu</div>
                  <p className="text-xs text-[#c0d3cb] mt-1 font-light">
                    Đóng gói toàn bộ file gốc vector và cẩm nang hướng dẫn sử dụng chi tiết.
                  </p>
                </div>
              </div>
            </div>

            {/* Client Roster */}
            <div className="pt-6 border-t border-[#083028]">
              <div className="text-xs font-mono uppercase tracking-wider text-[#8caaa0] font-bold mb-4">
                Khách Hàng & Đối Tác Đồng Hành
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {CLIENT_LOGOS.map((client, idx) => (
                  <div
                    key={idx}
                    className="py-3 px-2 rounded-xl bg-[#082820] border border-[#083028] text-center font-display font-bold text-xs text-[#F8F8F8] tracking-wider select-none"
                  >
                    {client}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
