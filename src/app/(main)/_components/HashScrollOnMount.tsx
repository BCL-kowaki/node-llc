"use client";

import { useEffect } from "react";

// 他ページから "/#services" のようなhash付きURLで遷移してきた場合、
// Next.jsのページ遷移だけではスクロールが発火しないことがあるため、
// マウント後に対象要素へ手動でスクロールする。
export default function HashScrollOnMount() {
  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.slice(1);
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "instant" as ScrollBehavior });
    });
  }, []);

  return null;
}
