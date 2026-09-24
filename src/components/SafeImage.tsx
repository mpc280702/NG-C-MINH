import React, { useState } from 'react';
import { Sparkles, Image as ImageIcon } from 'lucide-react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string;
  fallbackCategory?: string;
  aspectClass?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt = 'Graphic design showcase',
  fallbackTitle = 'Visual Identity',
  fallbackCategory = 'Design',
  className = '',
  aspectClass = 'aspect-4/3',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (hasError || !src) {
    return (
      <div
        className={`w-full ${aspectClass} bg-gradient-to-br from-[#16171b] via-[#1c1e24] to-[#121316] border border-white/5 relative flex flex-col justify-between p-6 overflow-hidden select-none ${className}`}
      >
        {/* Subtle graphic design grid & technical corner marks */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="absolute top-3 left-3 w-2 h-2 border-t border-l border-white/20" />
        <div className="absolute top-3 right-3 w-2 h-2 border-t border-r border-white/20" />
        <div className="absolute bottom-3 left-3 w-2 h-2 border-b border-l border-white/20" />
        <div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-white/20" />

        <div className="flex items-center justify-between text-[11px] font-mono text-white/40 tracking-wider uppercase z-10">
          <span>{fallbackCategory}</span>
          <span>CURATED SPECIMEN</span>
        </div>

        <div className="my-auto py-4 z-10">
          <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/50 mb-3">
            <ImageIcon className="w-4 h-4" />
          </div>
          <h4 className="font-display font-bold text-lg md:text-xl text-white/90 tracking-tight">
            {fallbackTitle}
          </h4>
          <p className="text-xs text-white/50 mt-1 font-sans">
            Minimalist form & typography architecture
          </p>
        </div>

        <div className="flex items-center justify-between text-[10px] font-mono text-white/30 border-t border-white/5 pt-3 z-10">
          <span>FORM · BALANCE · TONE</span>
          <span>EST. 2026</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${aspectClass} ${className} bg-[#141518]`}>
      {isLoading && (
        <div className="absolute inset-0 bg-[#16181d] animate-pulse flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-white/10 border-t-white/50 rounded-full animate-spin" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        loading="lazy"
        onLoad={() => setIsLoading(false)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-all duration-700 ease-out ${
          isLoading ? 'opacity-0 scale-102' : 'opacity-100 scale-100'
        }`}
        {...props}
      />
    </div>
  );
};
