import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Clock, Copy, Check, Send, ArrowUpRight, AlertCircle, RefreshCw } from 'lucide-react';
import { DESIGNER_INFO } from '../data/portfolioData';
import { PageRoute } from '../types/portfolio';

const PROJECT_TYPES = [
  'Nhận Diện Thương Hiệu (Brand Identity)',
  'Thiết Kế Bao Bì (Packaging Design)',
  'Ấn Phẩm & Sách (Editorial Book)',
  'Key Visual & POSM Quảng Cáo',
  'Tư Vấn Thiết Kế & Hệ Thống Số',
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
    honeypot: '',
  });
  const [validationErrors, setValidationErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(DESIGNER_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.name || formData.name.trim().length < 2) {
      errors.name = 'Vui lòng nhập họ tên đầy đủ (tối thiểu 2 ký tự).';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email.trim())) {
      errors.email = 'Vui lòng nhập địa chỉ email hợp lệ (ví dụ: ten@domain.com).';
    }
    if (!formData.message || formData.message.trim().length < 5) {
      errors.message = 'Vui lòng nhập mô tả sơ lược về nhu cầu thiết kế (tối thiểu 5 ký tự).';
    }
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return; // Anti-spam bot trap
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${DESIGNER_INFO.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim() || 'Không cung cấp',
          company: formData.company.trim() || 'Cá nhân / Độc lập',
          service: selectedType,
          budget: selectedBudget,
          message: formData.message.trim(),
          _replyto: formData.email.trim(),
          _subject: `[Portfolio Inquiry] ${selectedType} - ${formData.name.trim()}`,
        }),
      });

      if (response.ok) {
        const data = await response.json().catch(() => ({ success: true }));
        if (data.success === 'true' || data.success === true || response.status === 200) {
          setSubmitStatus('success');
        } else {
          throw new Error('Dịch vụ gửi form tạm thời gián đoạn.');
        }
      } else {
        throw new Error(`Mã lỗi máy chủ: ${response.status}`);
      }
    } catch (err: any) {
      setSubmitStatus('error');
      setErrorMessage(
        err?.message || 'Không thể gửi form tự động do kết nối mạng hoặc chặn cross-origin.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const mailtoFallbackUrl = `mailto:${DESIGNER_INFO.email}?subject=${encodeURIComponent(
    `[Portfolio Inquiry] ${selectedType} - ${formData.name || 'Khách Hàng'}`
  )}&body=${encodeURIComponent(
    `Họ tên: ${formData.name}\nEmail: ${formData.email}\nSố điện thoại: ${formData.phone}\nDoanh nghiệp: ${formData.company}\nHạng mục: ${selectedType}\nNgân sách: ${selectedBudget}\n\nNội dung yêu cầu:\n${formData.message}`
  )}`;

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
            <span className="text-[#F8F8F8]">Liên Hệ Hợp Tác</span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-6xl text-[#F8F8F8] tracking-tight">
            Cùng Bắt Đầu Một Dự Án
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#c0d3cb] font-light max-w-2xl leading-relaxed">
            Khuyến khích bạn gửi kèm brief gồm mục tiêu thương hiệu, các hạng mục thiết kế cần thực hiện, tiến độ mong muốn (timeline) và ngân sách dự kiến để quá trình trao đổi đạt hiệu quả cao nhất.
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
                  loading="lazy"
                  decoding="async"
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-2xl object-cover border-2 border-[#10b981]/50 shadow-md"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#10b981] border-2 border-[#083028]" title="Online" />
              </div>
              <div>
                <h2 className="font-display font-black text-lg text-[#F8F8F8] tracking-tight">
                  {DESIGNER_INFO.name}
                </h2>
                <div className="text-xs font-mono font-bold text-[#10b981] uppercase tracking-wider">
                  {DESIGNER_INFO.role}
                </div>
                <div className="text-xs text-[#c0d3cb]">
                  {DESIGNER_INFO.location}
                </div>
              </div>
            </div>

            {/* Email Box */}
            <div className="p-5 rounded-2xl bg-[#083028] border border-[#003828] hover:border-[#10b981]/40 transition-colors shadow-lg space-y-2">
              <div className="text-[11px] font-mono uppercase text-[#8caaa0]">
                Email Liên Hệ Trực Tiếp
              </div>
              <div className="flex items-center justify-between gap-3">
                <a
                  href={`mailto:${DESIGNER_INFO.email}`}
                  className="font-mono text-sm sm:text-base font-bold text-[#F8F8F8] hover:text-[#10b981] hover:underline truncate transition-colors focus-visible:ring-1 focus-visible:ring-[#10b981] rounded"
                >
                  {DESIGNER_INFO.email}
                </a>
                <div className="flex items-center gap-1.5 shrink-0">
                  <a
                    href={`mailto:${DESIGNER_INFO.email}`}
                    className="px-2.5 py-1 bg-[#003828] border border-[#10b981]/40 rounded-lg text-xs font-bold text-[#10b981] hover:bg-[#10b981] hover:text-[#101010] transition-all focus-visible:ring-1 focus-visible:ring-[#10b981]"
                  >
                    Gửi Mail
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-lg bg-[#003828] border border-[#082820] text-[#F8F8F8] hover:bg-[#10b981] hover:text-[#101010] transition-colors cursor-pointer focus-visible:ring-1 focus-visible:ring-[#10b981]"
                    title="Sao chép email"
                    aria-label="Sao chép email"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#10b981]" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
              {copiedEmail && (
                <p className="text-xs font-mono text-[#10b981]">
                  ✓ Đã sao chép địa chỉ email vào bộ nhớ tạm!
                </p>
              )}
            </div>

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
                    <a
                      href={`tel:${DESIGNER_INFO.phoneTel}`}
                      className="font-mono font-bold text-sm text-[#F8F8F8] hover:text-[#10b981] transition-colors focus-visible:ring-1 focus-visible:ring-[#10b981] rounded"
                    >
                      {DESIGNER_INFO.phone}
                    </a>
                  </div>
                </div>
                <a
                  href={DESIGNER_INFO.zaloUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 bg-[#003828] border border-[#10b981]/40 rounded-full text-xs font-bold text-[#10b981] hover:bg-[#10b981] hover:text-[#101010] transition-all shrink-0 focus-visible:ring-1 focus-visible:ring-[#10b981]"
                >
                  Chat Zalo
                </a>
              </div>

              {/* Facebook */}
              <div className="p-4 rounded-2xl bg-[#083028] border border-[#003828] flex items-center justify-between gap-3 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#003828] border border-[#10b981]/30 flex items-center justify-center text-[#10b981] shrink-0">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#8caaa0] uppercase block">Facebook Cá Nhân</span>
                    <a
                      href={DESIGNER_INFO.facebook}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono font-bold text-sm text-[#F8F8F8] hover:text-[#10b981] transition-colors focus-visible:ring-1 focus-visible:ring-[#10b981] rounded"
                    >
                      {DESIGNER_INFO.facebookName}
                    </a>
                  </div>
                </div>
                <a
                  href={DESIGNER_INFO.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 bg-[#003828] border border-[#10b981]/40 rounded-full text-xs font-bold text-[#10b981] hover:bg-[#10b981] hover:text-[#101010] transition-all shrink-0 focus-visible:ring-1 focus-visible:ring-[#10b981]"
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
                  <span className="text-[#8caaa0] block text-[11px]">ĐỊA ĐIỂM:</span>
                  <span className="text-[#F8F8F8] font-medium block mt-0.5">{DESIGNER_INFO.location}</span>
                  <span className="text-[#10b981] font-semibold block mt-1">✓ {DESIGNER_INFO.workMode}</span>
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
                className="w-full py-3.5 px-4 rounded-xl bg-[#003828] hover:bg-[#10b981] hover:text-[#101010] text-[#F8F8F8] border border-[#10b981]/40 font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg focus-visible:ring-2 focus-visible:ring-[#10b981]"
              >
                <span>Tải CV / Hồ Sơ Năng Lực (Google Drive)</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7 p-6 sm:p-10 rounded-3xl bg-[#083028] border border-[#003828] shadow-2xl relative">
            <AnimatePresence mode="wait">
              {submitStatus === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-12 text-center space-y-5"
                  aria-live="polite"
                >
                  <div className="w-16 h-16 rounded-full bg-[#003828] border border-[#10b981]/50 flex items-center justify-center mx-auto text-[#10b981] shadow-xl">
                    <Check className="w-8 h-8" />
                  </div>
                  <h2 className="font-display font-black text-2xl sm:text-3xl text-[#F8F8F8]">
                    Đã Gửi Thành Công!
                  </h2>
                  <p className="text-sm sm:text-base text-[#c0d3cb] max-w-md mx-auto leading-relaxed font-light">
                    Cảm ơn bạn <span className="font-bold text-[#F8F8F8]">{formData.name}</span>. Yêu cầu về <span className="font-bold text-[#10b981]">{selectedType}</span> đã được chuyển trực tiếp tới hộp thư <span className="font-mono font-bold text-[#F8F8F8]">{DESIGNER_INFO.email}</span>. Tôi sẽ phản hồi chi tiết tới bạn trong vòng 24 giờ.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitStatus('idle');
                        setFormData({ name: '', email: '', phone: '', company: '', message: '', honeypot: '' });
                        setValidationErrors({});
                      }}
                      className="px-5 py-2.5 rounded-xl bg-[#003828] border border-[#10b981]/40 text-xs font-mono font-bold text-[#10b981] hover:bg-[#10b981] hover:text-[#101010] transition-colors cursor-pointer"
                    >
                      Gửi thêm một yêu cầu khác
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  {/* Honeypot field for bot protection */}
                  <input
                    type="text"
                    name="_honey"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {/* Error Alert if API submission failed */}
                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-xl bg-[#3d1214] border border-[#ef4444]/40 text-xs space-y-3 text-[#fca5a5]"
                      aria-live="assertive"
                    >
                      <div className="flex items-center gap-2 font-bold text-sm text-[#f87171]">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>Không thể gửi tự động qua API</span>
                      </div>
                      <p className="leading-relaxed">
                        {errorMessage || 'Đã xảy ra sự cố kết nối. Bạn có thể bấm nút gửi trực tiếp qua Email bên dưới.'}
                      </p>
                      <div className="flex flex-wrap gap-2 pt-1">
                        <a
                          href={mailtoFallbackUrl}
                          className="px-4 py-2 rounded-lg bg-[#ef4444] text-white font-bold text-xs flex items-center gap-1.5 hover:bg-[#dc2626] transition-colors"
                        >
                          <span>Mở Trình Gửi Email (Mailto Fallback)</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                        <button
                          type="button"
                          onClick={() => setSubmitStatus('idle')}
                          className="px-3 py-2 rounded-lg bg-black/30 border border-white/20 text-white text-xs font-semibold hover:bg-black/50 transition-colors flex items-center gap-1"
                        >
                          <RefreshCw className="w-3.5 h-3.5" />
                          <span>Thử lại form</span>
                        </button>
                      </div>
                    </motion.div>
                  )}

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#c0d3cb] mb-3 font-semibold">
                      1. Bạn đang quan tâm đến hạng mục thiết kế nào?
                    </label>
                    <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Hạng mục thiết kế">
                      {PROJECT_TYPES.map((type) => (
                        <button
                          key={type}
                          type="button"
                          role="radio"
                          aria-checked={selectedType === type}
                          onClick={() => setSelectedType(type)}
                          className={`px-3.5 py-2 text-xs rounded-xl transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-[#10b981] ${
                            selectedType === type
                              ? 'bg-[#003828] text-[#F8F8F8] border border-[#10b981]/50 font-semibold shadow-md'
                              : 'bg-[#003028] text-[#c0d3cb] border border-[#082820] hover:text-[#F8F8F8]'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#c0d3cb] mb-3 font-semibold">
                      2. Ngân sách dự kiến cho dự án
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2" role="radiogroup" aria-label="Ngân sách dự kiến">
                      {BUDGET_TIERS.map((tier) => (
                        <button
                          key={tier}
                          type="button"
                          role="radio"
                          aria-checked={selectedBudget === tier}
                          onClick={() => setSelectedBudget(tier)}
                          className={`py-2 px-2 text-xs rounded-xl transition-all cursor-pointer text-center truncate focus-visible:ring-2 focus-visible:ring-[#10b981] ${
                            selectedBudget === tier
                              ? 'bg-[#003828] text-[#F8F8F8] border border-[#10b981]/50 font-semibold shadow-md'
                              : 'bg-[#003028] text-[#c0d3cb] border border-[#082820] hover:text-[#F8F8F8]'
                          }`}
                        >
                          {tier}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-mono uppercase tracking-wider text-[#8caaa0] mb-2 font-semibold">
                        Họ &amp; Tên của bạn <span className="text-[#10b981]">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        aria-required="true"
                        aria-invalid={!!validationErrors.name}
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (validationErrors.name) setValidationErrors({ ...validationErrors, name: '' });
                        }}
                        placeholder="Nguyễn Văn A"
                        className={`w-full bg-[#003028] rounded-xl px-4 py-3 text-sm text-[#F8F8F8] focus:outline-none transition-colors border ${
                          validationErrors.name ? 'border-[#ef4444] focus:border-[#ef4444]' : 'border-[#082820] focus:border-[#10b981]/50'
                        }`}
                      />
                      {validationErrors.name && (
                        <p className="mt-1 text-xs text-[#f87171]">{validationErrors.name}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-mono uppercase tracking-wider text-[#8caaa0] mb-2 font-semibold">
                        Địa Chỉ Email <span className="text-[#10b981]">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        aria-required="true"
                        aria-invalid={!!validationErrors.email}
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (validationErrors.email) setValidationErrors({ ...validationErrors, email: '' });
                        }}
                        placeholder="email@cuaban.com"
                        className={`w-full bg-[#003028] rounded-xl px-4 py-3 text-sm text-[#F8F8F8] focus:outline-none transition-colors border ${
                          validationErrors.email ? 'border-[#ef4444] focus:border-[#ef4444]' : 'border-[#082820] focus:border-[#10b981]/50'
                        }`}
                      />
                      {validationErrors.email && (
                        <p className="mt-1 text-xs text-[#f87171]">{validationErrors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-mono uppercase tracking-wider text-[#8caaa0] mb-2 font-semibold">
                        Số Điện Thoại / Zalo
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="0327 430 794"
                        className="w-full bg-[#003028] border border-[#082820] rounded-xl px-4 py-3 text-sm text-[#F8F8F8] focus:outline-none focus:border-[#10b981]/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-company" className="block text-xs font-mono uppercase tracking-wider text-[#8caaa0] mb-2 font-semibold">
                        Tên Thương Hiệu / Doanh Nghiệp
                      </label>
                      <input
                        id="contact-company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Kanso Coffee"
                        className="w-full bg-[#003028] border border-[#082820] rounded-xl px-4 py-3 text-sm text-[#F8F8F8] focus:outline-none focus:border-[#10b981]/50 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-mono uppercase tracking-wider text-[#8caaa0] mb-2 font-semibold">
                      Mô Tả Nhu Cầu Thiết Kế Của Bạn <span className="text-[#10b981]">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      aria-required="true"
                      aria-invalid={!!validationErrors.message}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (validationErrors.message) setValidationErrors({ ...validationErrors, message: '' });
                      }}
                      placeholder="Chia sẻ về sản phẩm, đối tượng khách hàng mục tiêu, các hạng mục cần bàn giao..."
                      className={`w-full bg-[#003028] rounded-xl px-4 py-3 text-sm text-[#F8F8F8] focus:outline-none transition-colors resize-none border ${
                        validationErrors.message ? 'border-[#ef4444] focus:border-[#ef4444]' : 'border-[#082820] focus:border-[#10b981]/50'
                      }`}
                    />
                    {validationErrors.message && (
                      <p className="mt-1 text-xs text-[#f87171]">{validationErrors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl bg-[#003828] hover:bg-[#10b981] hover:text-[#101010] text-[#F8F8F8] border border-[#F8F8F8]/40 font-bold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-xl transition-all disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-[#10b981]"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        <span>Đang Gửi Yêu Cầu...</span>
                      </>
                    ) : (
                      <>
                        <span>Gửi Yêu Cầu Tư Vấn &amp; Báo Giá</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};
