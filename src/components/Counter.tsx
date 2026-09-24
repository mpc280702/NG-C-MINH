import React, { useEffect, useState } from 'react';

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

export const Counter: React.FC<CounterProps> = ({ end, suffix = '', duration = 1500 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * end));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration]);

  return (
    <span className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
};
