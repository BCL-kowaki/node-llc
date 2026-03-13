"use client";

import { useEffect, useRef, useState } from "react";

interface FadeUpSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function FadeUpSection({ children, className = "", id }: FadeUpSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id={id}
      className={`snap-section fade-up ${visible ? "visible" : ""} ${className}`}
    >
      {children}
    </section>
  );
}
