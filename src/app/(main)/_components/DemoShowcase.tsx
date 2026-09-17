"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import styles from "../test.module.css";

type ShowcaseItem = {
  title: string;
  note: string;
  image: string;
  /** 指定するとカード全体がリンクになり「デモを見る」を表示する */
  url?: string;
};

type DemoShowcaseProps = {
  items: ShowcaseItem[];
  /** 指定すると右上に「すべて見る」リンクを表示する */
  allHref?: string;
  ariaLabel?: string;
};

export default function DemoShowcase({ items, allHref, ariaLabel = "デモサイトのスライド操作" }: DemoShowcaseProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  const move = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * track.clientWidth * 0.78, behavior: "smooth" });
  };

  return (
    <>
      <div className={styles.demoToolbar}>
        <div className={styles.demoControls} aria-label={ariaLabel}>
          <button type="button" onClick={() => move(-1)} aria-label="前へ">
            ←
          </button>
          <button type="button" onClick={() => move(1)} aria-label="次へ">
            →
          </button>
        </div>
        {allHref && (
          <Link className={styles.demoAllLink} href={allHref}>
            すべて見る <span aria-hidden="true">→</span>
          </Link>
        )}
      </div>
      <div className={styles.demoSlider} ref={trackRef}>
        {items.map((item) => {
          const body = (
            <>
              <span className={styles.demoImageWrap}>
                <Image
                  src={item.image}
                  alt={`${item.title}をノートPCとスマートフォンに表示した画面`}
                  width={1536}
                  height={1024}
                  unoptimized
                />
              </span>
              <span className={styles.demoCaption}>
                <b>{item.title}</b>
                <span>{item.note}</span>
              </span>
            </>
          );
          return item.url ? (
            <a key={item.title} className={styles.demoCard} href={item.url} target="_blank" rel="noopener noreferrer">
              {body}
              <span className={styles.demoLink}>
                デモを見る <i aria-hidden="true">{"↗︎"}</i>
              </span>
            </a>
          ) : (
            <div key={item.title} className={styles.demoCard}>
              {body}
            </div>
          );
        })}
      </div>
    </>
  );
}
