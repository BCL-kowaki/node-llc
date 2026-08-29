import Image from "next/image";
import type { CSSProperties } from "react";
import type { Service } from "../_data/services";
import styles from "../test.module.css";

type AccentStyle = CSSProperties & {
  "--service-accent": string;
  "--service-soft": string;
};

export default function ServiceVisual({ service, compact = false }: { service: Service; compact?: boolean }) {
  const style: AccentStyle = {
    "--service-accent": service.accent,
    "--service-soft": service.accentSoft,
  };

  return (
    <div
      className={`${styles.serviceVisual} ${compact ? styles.serviceVisualCompact : ""}`}
      style={style}
      data-service-code={service.code}
      aria-hidden="true"
    >
      <Image
        src={`/test/generated/services/${service.slug}.png`}
        alt=""
        fill
        sizes={compact ? "(max-width: 1080px) 100vw, 50vw" : "(max-width: 1080px) 100vw, 42vw"}
        unoptimized
        className={styles.serviceVisualImage}
      />
      <span className={styles.visualNumber}>{service.number}</span>
    </div>
  );
}
