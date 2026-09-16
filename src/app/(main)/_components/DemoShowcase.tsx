"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import type { ServiceDemo } from "../_data/services";
import styles from "../test.module.css";

type DemoShowcaseProps = {
  demos: ServiceDemo[];
};

export default function DemoShowcase({ demos }: DemoShowcaseProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  const move = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * track.clientWidth * 0.78, behavior: "smooth" });
  };

  return (
    <>
      <div className={styles.demoToolbar}>
        <div className={styles.demoControls} aria-label="デモサイトのスライド操作">
          <button type="button" onClick={() => move(-1)} aria-label="前のデモを表示">
            ←
          </button>
          <button type="button" onClick={() => move(1)} aria-label="次のデモを表示">
            →
          </button>
        </div>
        <Link className={styles.demoAllLink} href="/services/web-production/demos">
          すべて見る <span aria-hidden="true">→</span>
        </Link>
      </div>
      <div className={styles.demoSlider} ref={trackRef}>
        {demos.map((demo) => (
          <a key={demo.title} className={styles.demoCard} href={demo.url} target="_blank" rel="noopener noreferrer">
            <span className={styles.demoImageWrap}>
              <Image
                src={demo.image}
                alt={`${demo.title}をノートPCとスマートフォンに表示した画面`}
                width={1448}
                height={1086}
                unoptimized
              />
            </span>
            <span className={styles.demoCaption}>
              <b>{demo.title}</b>
              <span>{demo.note}</span>
            </span>
            <span className={styles.demoLink}>
              デモを見る <i aria-hidden="true">{"↗︎"}</i>
            </span>
          </a>
        ))}
      </div>
    </>
  );
}
