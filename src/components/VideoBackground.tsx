"use client";

interface VideoBackgroundProps {
  src?: string;
  overlayOpacity?: number;
}

export default function VideoBackground({
  src = "/img/mv.mp4",
  overlayOpacity,
}: VideoBackgroundProps) {
  return (
    <>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover"
        style={{ zIndex: -1 }}
      >
        <source src={src} type="video/mp4" />
      </video>
      <div
        className="video-bg-overlay"
        style={
          overlayOpacity !== undefined
            ? { background: `rgba(0, 0, 0, ${overlayOpacity})` }
            : undefined
        }
      />
    </>
  );
}
