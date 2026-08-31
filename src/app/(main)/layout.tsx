import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "node LLC | 事業と現場を、前へ。",
  description:
    "FDE伴走、システム開発、Webサイト制作、広告運用、LINE構築、動画制作、AI活用支援を一気通貫で支援する合同会社nodeの公式サイトです。",
};

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return children;
}
