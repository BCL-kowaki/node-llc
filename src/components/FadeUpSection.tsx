"use client";

interface SnapSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function FadeUpSection({
  children,
  className = "",
  id,
}: SnapSectionProps) {
  return (
    <section
      id={id}
      className={`snap-page ${className}`}
    >
      {children}
    </section>
  );
}
