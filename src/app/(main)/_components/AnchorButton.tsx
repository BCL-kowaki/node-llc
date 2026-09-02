"use client";

type AnchorButtonProps = {
  id: string;
  className?: string;
  children: React.ReactNode;
};

// 同一ページ内アンカーへ移動するボタン。
// ネイティブの <a href="#id"> だけだとスクロールが発火しない環境があるため、
// クリック時に直接 scrollIntoView している(背景の粒子アニメーションが重く、
// smoothだと動き出す前に止まって見えるためinstantでジャンプさせる)。
export default function AnchorButton({ id, className, children }: AnchorButtonProps) {
  return (
    <a
      className={className}
      href={`#${id}`}
      onClick={(e) => {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: "instant" as ScrollBehavior });
        history.replaceState(null, "", `#${id}`);
      }}
    >
      {children}
    </a>
  );
}
