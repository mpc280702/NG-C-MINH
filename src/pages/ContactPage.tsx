import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Copy, Check, Send, ArrowUpRight } from 'lucide-react';
import { DESIGNER_INFO } from '../data/portfolioData';
import { PageRoute } from '../types/portfolio';

const PROJECT_TYPES = [
  'Nhận Diện Thương Hiệu (Brand Identity)',
  'Thiết Kế Bao Bì (Packaging Design)',
  'Ấn Phẩm & Sách (Editorial Book)',
  'Typography & Key Visual',
  'Tư Vấn Thiết Kế Toàn Diện',
];

const BUDGET_TIERS = [
  'Dưới 15 Triệu VNĐ',
  '15 — 30 Triệu VNĐ',
  '30 — 60 Triệu VNĐ',
  'Trên 60 Triệu VNĐ',
];

interface ContactPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [selectedType, setSelectedType] = useState('Nhận Diện Thương Hiệu (Brand Identity)');
  const [selectedBudget, setSelectedBudget] = useState('15 — 30 Triệu VNĐ');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(DESIGNER_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) return;

    setIsSubmitting(true);

    const payload = {
      'Họ và tên': formData.name.trim(),
      'Email người gửi': formData.email.trim(),
      'Số điện thoại / Zalo': formData.phone.trim(),
      'Thương hiệu / Doanh nghiệp': formData.company.trim(),
      'Hạng mục quan tâm': selectedType,
      'Ngân sách dự kiến': selectedBudget,
      'Nội dung yêu cầu': formData.message.trim(),
      '_subject': `[Portfolio] ${selectedType} — ${formData.name.trim()}`,
      '_replyto': formData.email.trim(),
      '_template': 'table',
      '_captcha': 'false',
    };

    try {
      const response = await fetch('https://formsubmit.co/ajax/mngoc12851@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok || !(result.success === true || result.success === 'true')) {
        throw new Error(result.message || 'Không thể gửi biểu mẫu.');
      }

      setSubmitted(true);
    } catch (error) {
      console.error('Contact form error:', error);
      window.location.href =
        `mailto:mngoc12851@gmail.com?subject=${encodeURIComponent(payload._subject)}&body=${encodeURIComponent(
          `Họ tên: ${payload['Họ và tên']}\\nEmail: ${payload['Email người gửi']}\\nĐiện thoại: ${payload['Số điện thoại / Zalo']}\\nDoanh nghiệp: ${payload['Thương hiệu / Doanh nghiệp']}\\nHạng mục: ${payload['Hạng mục quan tâm']}\\nNgân sách: ${payload['Ngân sách dự kiến']}\\n\\n${payload['Nội dung yêu cầu']}`
        )}`;
    } finally {
      setIsSubmitting(false);
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
            <span className="cursor-pointer hover:text-[#10b981] transition-colors" onClick={() => onNavigate('home')}>Trang Chủ</span>
            <span>/</span>
            <span className="text-[#F8F8F8]">Liên Hệ Hợp Tác</span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-6xl text-[#F8F8F8] tracking-tight">
            Khởi Đầu Một Dự Án Mới
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#c0d3cb] font-light max-w-2xl leading-relaxed">
            Tôi luôn hào hứng được lắng nghe câu chuyện thương hiệu của bạn và cùng nhau tạo nên những thiết kế thị giác đẳng cấp.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Info & Quick Connect */}
          <div className="lg:col-span-5 space-y-6">
            {/* Designer Identity Card */}
            <div className="p-5 rounded-2xl bg-[#083028] border border-[#003828] shadow-xl flex items-center gap-4">
              <div className="relative">
                <img
                  src={DESIGNER_INFO.portraitUrl}
                  alt={DESIGNER_INFO.name}
                  className="w-16 h-16 rounded-2xl object-cover border-2 border-[#10b981]/50 shadow-md"
                  onError={(e) => {
                    // Fallback to stylized initials if remote image fails
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#10b981] border-2 border-[#083028]" title="Online" />
              </div>
              <div>
                <h3 className="font-display font-black text-lg text-[#F8F8F8] tracking-tight">
                  {DESIGNER_INFO.name}
                </h3>
                <div className="text-xs font-mono font-bold text-[#10b981] uppercase tracking-wider">
                  {DESIGNER_INFO.role}
                </div>
                <div className="text-xs text-[#c0d3cb]">
                  Hà Nội, Việt Nam
                </div>
              </div>
            </div>

            {/* Email Box */}
            <motion.div
              whileHover={{ y: -3 }}
              className="p-5 rounded-2xl bg-[#083028] border border-[#003828] hover:border-[#10b981]/40 transition-colors shadow-lg space-y-2"
            >
              <div className="text-[11px] font-mono uppercase text-[#8caaa0]">
                Email Liên Hệ Trực Tiếp
              </div>
              <div className="flex items-center justify-between gap-3">
                <a
                  href={`mailto:${DESIGNER_INFO.email}`}
                  className="font-mono text-sm sm:text-base font-bold text-[#F8F8F8] hover:text-[#10b981] hover:underline truncate transition-colors"
                >
                  {DESIGNER_INFO.email}
                </a>
                <div className="flex items-center gap-1.5 shrink-0">
                  <a
                    href={`mailto:${DESIGNER_INFO.email}`}
                    className="px-2.5 py-1 bg-[#003828] border border-[#10b981]/40 rounded-lg text-xs font-bold text-[#10b981] hover:bg-[#10b981] hover:text-[#101010] transition-all"
                  >
                    Gửi Mail
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg bg-[#003828] border border-[#082820] text-[#F8F8F8] hover:bg-[#10b981] hover:text-[#101010] transition-colors cursor-pointer"
                    title="Sao chép email"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#10b981]" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
              {copiedEmail && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xs font-mono text-[#10b981]"
                >
                  ✓ Đã sao chép địa chỉ email vào bộ nhớ tạm!
                </motion.p>
              )}
            </motion.div>

            {/* Phone / Zalo & Facebook */}
            <div className="space-y-3">
              {/* Phone & Zalo */}
              <div className="p-4 rounded-2xl bg-[#083028] border border-[#003828] flex items-center justify-between gap-3 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#003828] border border-[#10b981]/30 flex items-center justify-center text-[#10b981] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#8caaa0] uppercase block">Số Điện Thoại / Zalo</span>
                    <a href={`tel:${DESIGNER_INFO.phoneTel}`} className="font-mono font-bold text-sm text-[#F8F8F8] hover:text-[#10b981] transition-colors">
                      {DESIGNER_INFO.phone}
                    </a>
                  </div>
                </div>
                <a
                  href={DESIGNER_INFO.zaloUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 bg-[#003828] border border-[#10b981]/40 rounded-full text-xs font-bold text-[#10b981] hover:bg-[#10b981] hover:text-[#101010] transition-all shrink-0"
                >
                  Chat Zalo
                </a>
              </div>

              {/* Facebook */}
              <div className="p-4 rounded-2xl bg-[#083028] border border-[#003828] flex items-center justify-between gap-3 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#003828] border border-[#10b981]/30 flex items-center justify-center text-[#10b981] shrink-0">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#8caaa0] uppercase block">Facebook Cá Nhân</span>
                    <a href={DESIGNER_INFO.facebook} target="_blank" rel="noreferrer" className="font-mono font-bold text-sm text-[#F8F8F8] hover:text-[#10b981] transition-colors">
                      {DESIGNER_INFO.facebookName}
                    </a>
                  </div>
                </div>
                <a
                  href={DESIGNER_INFO.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 bg-[#003828] border border-[#10b981]/40 rounded-full text-xs font-bold text-[#10b981] hover:bg-[#10b981] hover:text-[#101010] transition-all shrink-0"
                >
                  Nhắn Tin
                </a>
              </div>
            </div>

            {/* Studio Meta */}
            <div className="p-5 rounded-2xl bg-[#082820] border border-[#083028] space-y-3 text-xs font-mono text-[#c0d3cb]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#10b981] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#8caaa0] block text-[11px]">ĐỊA ĐIỂM LÀM VIỆC:</span>
                  <span className="text-[#F8F8F8] font-medium block mt-0.5">{DESIGNER_INFO.address}</span>
                  <span className="text-[#10b981] font-semibold block mt-1">✓ Sẵn sàng On-site tại Hà Nội &amp; Remote toàn quốc</span>
                </div>
              </div>
              <div className="flex items-center gap-3 pt-2 border-t border-[#083028]">
                <Clock className="w-4 h-4 text-[#10b981] shrink-0" />
                <div>
                  <span className="text-[#8caaa0] text-[11px] block">THỜI GIAN PHẢN HỒI DỰ KIẾN:</span>
                  <span className="text-[#F8F8F8] font-bold">{DESIGNER_INFO.responseTime}</span>
                </div>
              </div>
            </div>

            {/* Download CV CTA */}
            <div>
              <a
                href={DESIGNER_INFO.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-[#003828] hover:bg-[#10b981] hover:text-[#101010] text-[#F8F8F8] border border-[#10b981]/40 font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg"
              >
                <span>Tải CV / Hồ Sơ Năng Lực (Google Drive)</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-[#083028] border border-[#003828] shadow-2xl relative">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-16 text-center space-y-5"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', damping: 15 }}
                    className="w-16 h-16 rounded-full bg-[#003828] border border-[#10b981]/50 flex items-center justify-center mx-auto text-[#10b981] shadow-xl"
                  >
                    <Check className="w-8 h-8" />
                  </motion.div>
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-[#F8F8F8]">
                    Đã Tiếp Nhận Thông Tin!
                  </h3>
                  <p aria-live="polite" className="text-sm sm:text-base text-[#c0d3cb] max-w-md mx-auto leading-relaxed font-light">
                    Cảm ơn bạn <span className="font-bold text-[#F8F8F8]">{formData.name}</span>. Tôi đã nhận được yêu cầu về dịch vụ <span className="font-bold text-[#10b981]">{selectedType}</span> và sẽ gửi phản hồi chi tiết tới email <span className="font-mono font-bold text-[#F8F8F8]">{formData.email}</span> trong vòng 24 giờ.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
                      }}
                      className="text-xs font-mono underline text-[#10b981] cursor-pointer"
                    >
                      Gửi thêm một yêu cầu khác
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#c0d3cb] mb-3 font-semibold">
                      1. Bạn đang quan tâm đến hạng mục thiết kế nào?
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {PROJECT_TYPES.map((type) => (
                        <motion.button
                          key={type}
                          whileTap={{ scale: 0.97 }}
                          type="button"
                          onClick={() => setSelectedType(type)}
                          className={`px-3.5 py-2 text-xs rounded-xl transition-all cursor-pointer ${
                            selectedType === type
                              ? 'bg-[#003828] text-[#F8F8F8] border border-[#10b981]/50 font-semibold shadow-md'
                              : 'bg-[#003028] text-[#c0d3cb] border border-[#082820] hover:text-[#F8F8F8]'
                          }`}
                        >
                          {type}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#c0d3cb] mb-3 font-semibold">
                      2. Ngân sách dự kiến cho dự án
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {BUDGET_TIERS.map((tier) => (
                        <motion.button
                          key={tier}
                          whileTap={{ scale: 0.97 }}
                          type="button"
                          onClick={() => setSelectedBudget(tier)}
                          className={`py-2 px-2 text-xs rounded-xl transition-all cursor-pointer text-center truncate ${
                            selectedBudget === tier
                              ? 'bg-[#003828] text-[#F8F8F8] border border-[#10b981]/50 font-semibold shadow-md'
                              : 'bg-[#003028] text-[#c0d3cb] border border-[#082820] hover:text-[#F8F8F8]'
                          }`}
                        >
                          {tier}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#8caaa0] mb-2 font-semibold">
                        Họ & Tên của bạn *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Nguyễn Văn A"
                        className="w-full bg-[#003028] border border-[#082820] rounded-xl px-4 py-3 text-sm text-[#F8F8F8] focus:outline-none focus:border-[#10b981]/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#8caaa0] mb-2 font-semibold">
                        Địa Chỉ Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="email@cuaban.com"
                        className="w-full bg-[#003028] border border-[#082820] rounded-xl px-4 py-3 text-sm text-[#F8F8F8] focus:outline-none focus:border-[#10b981]/50 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#8caaa0] mb-2 font-semibold">
                        Số Điện Thoại / Zalo
                      </label>
                      <input
                        type="text"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="0327 430 794"
                        className="w-full bg-[#003028] border border-[#082820] rounded-xl px-4 py-3 text-sm text-[#F8F8F8] focus:outline-none focus:border-[#10b981]/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#8caaa0] mb-2 font-semibold">
                        Tên Thương Hiệu / Doanh Nghiệp
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Kanso Coffee"
                        className="w-full bg-[#003028] border border-[#082820] rounded-xl px-4 py-3 text-sm text-[#F8F8F8] focus:outline-none focus:border-[#10b981]/50 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#8caaa0] mb-2 font-semibold">
                      Mô Tả Nhu Cầu Thiết Kế Của Bạn
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Chia sẻ về sản phẩm, đối tượng khách hàng mục tiêu, các hạng mục cần bàn giao..."
                      className="w-full bg-[#003028] border border-[#082820] rounded-xl px-4 py-3 text-sm text-[#F8F8F8] focus:outline-none focus:border-[#10b981]/50 transition-colors resize-none"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl bg-[#003828] hover:bg-[#10b981] hover:text-[#101010] text-[#F8F8F8] border border-[#F8F8F8]/40 font-bold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-xl transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Gửi Yêu Cầu Tư Vấn & Báo Giá</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};
