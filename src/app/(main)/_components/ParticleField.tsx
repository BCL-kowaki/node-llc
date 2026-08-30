"use client";

import { useEffect, useRef } from "react";
import styles from "../test.module.css";

type Particle = {
  cosTheta: number;
  phase: number;
  seed: number;
  sinTheta: number;
  size: number;
};

// クリック時に発生させる波紋
type Pulse = {
  startTime: number;
  x: number;
  y: number;
};

type ParticleFieldProps = {
  /** 粒子の基本色(RGB)。未指定はトップページの青 */
  colorFrom?: [number, number, number];
  /** スクロール後に変化する色(RGB)。未指定は colorFrom(トップページ既定は緑) */
  colorTo?: [number, number, number];
  /** true でヒーロー領域のみに表示する(下層ページ用) */
  heroOnly?: boolean;
};

const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5));
// 波紋の寿命(ミリ秒)
const PULSE_DURATION = 1400;
const DEFAULT_BLUE: [number, number, number] = [30, 92, 190];
const DEFAULT_GREEN: [number, number, number] = [22, 148, 96];

function clamp(value: number, minimum = 0, maximum = 1) {
  return Math.min(maximum, Math.max(minimum, value));
}

function smoothstep(edgeStart: number, edgeEnd: number, value: number) {
  const progress = clamp((value - edgeStart) / (edgeEnd - edgeStart));
  return progress * progress * (3 - 2 * progress);
}

function createParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, index) => {
    const y = 1 - ((index + 0.5) / count) * 2;
    return {
      cosTheta: y,
      phase: index * GOLDEN_ANGLE,
      seed: ((index * 73) % 101) / 101,
      sinTheta: Math.sqrt(1 - y * y),
      size: 0.62 + (((index * 41) % 37) / 37) * 0.72,
    };
  });
}

export default function ParticleField({
  colorFrom = DEFAULT_BLUE,
  colorTo,
  heroOnly = false,
}: ParticleFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const colorEnd = colorTo ?? (colorFrom === DEFAULT_BLUE ? DEFAULT_GREEN : colorFrom);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d", { alpha: true });
    if (!context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let animationFrame = 0;
    let devicePixelRatio = 1;
    let height = 0;
    // 「面」として見えるよう、十分な密度を確保する。
    let particles = createParticles(window.innerWidth < 720 ? 5200 : 18000);
    let scrollPosition = window.scrollY;
    let statementStart = window.innerHeight;
    let statementHeight = window.innerHeight;
    let width = 0;

    // マウス位置(target = 実座標 / pointer = 描画用に滑らかに追従する座標)
    const pointerTarget = { active: false, x: 0, y: 0 };
    const pointer = { x: 0, y: 0 };
    // クリックで発生した波紋のリスト
    let pulses: Pulse[] = [];

    const measureSections = () => {
      const statement = document.querySelector<HTMLElement>("[data-particle-statement]");
      if (statement) {
        const rect = statement.getBoundingClientRect();
        statementStart = rect.top + window.scrollY;
        statementHeight = Math.max(rect.height, window.innerHeight);
      }

      // 白い下敷きの高さをヒーローセクションの実高さに同期させる
      // (スマホでヒーローが100svhより低い場合に、白が下の
      //  セクションへはみ出すのを防ぐ)
      const backdrop = document.querySelector<HTMLElement>("[data-hero-backdrop]");
      const heroSection = document.querySelector<HTMLElement>("main section");
      if (backdrop && heroSection) {
        backdrop.style.height = `${heroSection.offsetHeight}px`;
      }
    };

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      devicePixelRatio = Math.min(window.devicePixelRatio || 1, 1.6);
      canvas.width = Math.round(width * devicePixelRatio);
      canvas.height = Math.round(height * devicePixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
      particles = createParticles(width < 720 ? 5200 : 18000);
      measureSections();
    };

    const draw = (time: number) => {
      context.clearRect(0, 0, width, height);

      // マウスへ緩やかに追従させ、粒子が流れるように反応させる
      pointer.x += (pointerTarget.x - pointer.x) * 0.12;
      pointer.y += (pointerTarget.y - pointer.y) * 0.12;
      // マウスの影響半径(この範囲の粒子が反発・発光する)
      const pointerRadius = Math.max(width, height) * 0.14;
      const pointerRadiusSq = pointerRadius * pointerRadius;
      // 寿命が切れた波紋を破棄
      pulses = pulses.filter((pulse) => time - pulse.startTime < PULSE_DURATION);
      const pulseMaxRadius = Math.max(width, height) * 0.6;

      const heroProgress = clamp(scrollPosition / Math.max(statementStart * 0.82, height));
      // ヒーロー限定モードではセクション1(ステートメント)への遷移を行わない
      const statementProgress = heroOnly
        ? 0
        : clamp(
            (scrollPosition - statementStart + height * 0.58) /
              Math.max(statementHeight * 0.95, height),
          );

      const heroVisibility = 1 - smoothstep(0.28, 0.9, heroProgress);
      const statementVisibility =
        smoothstep(0, 0.22, statementProgress) * (1 - smoothstep(0.72, 1, statementProgress));
      const visibility = Math.max(heroVisibility, statementVisibility);

      if (visibility > 0.002) {
        const statementMix = smoothstep(0.03, 0.32, statementProgress);
        const red = Math.round(colorFrom[0] + (colorEnd[0] - colorFrom[0]) * statementMix);
        const greenChannel = Math.round(colorFrom[1] + (colorEnd[1] - colorFrom[1]) * statementMix);
        const blueChannel = Math.round(colorFrom[2] + (colorEnd[2] - colorFrom[2]) * statementMix);
        // ヒーローでは右端に「半分だけ見える」大きな真球体を置き、
        // セクション1では従来の位置・形(横長)へ遷移する
        const heroRadius = Math.max(Math.min(width * 0.45, height * 0.78, 940), 380);
        const statementRadius = Math.max(width * 0.52, 520);
        const radiusX = heroRadius + (statementRadius - heroRadius) * statementMix;
        // ヒーローは縦横比1:1(真球)、セクション1では従来の0.5へ
        const radiusY = radiusX * (1 - statementMix * 0.5);
        // マウス位置に合わせて球体全体をわずかに視差移動させる
        const parallaxX = pointerTarget.active ? (pointer.x - width * 0.5) * 0.045 : 0;
        const parallaxY = pointerTarget.active ? (pointer.y - height * 0.5) * 0.03 : 0;
        const centerX = width * (1.0 - statementMix * 0.21) + parallaxX;
        const heroCenterY = height * (0.5 + heroProgress * 0.35);
        const statementCenterY = height * (1.03 - statementProgress * 0.42);
        const centerY = heroCenterY * (1 - statementMix) + statementCenterY * statementMix + parallaxY;
        const rotation = time * 0.00011 + scrollPosition * 0.00045;
        const cosine = Math.cos(rotation);
        const sine = Math.sin(rotation);

        context.fillStyle = `rgb(${red} ${greenChannel} ${blueChannel})`;

        for (const particle of particles) {
          const phase = particle.phase + time * (0.000045 + particle.seed * 0.000018);
          const sphereX = particle.sinTheta * Math.cos(phase);
          const sphereZ = particle.sinTheta * Math.sin(phase);
          const rotatedX = sphereX * cosine - sphereZ * sine;
          const rotatedZ = sphereX * sine + sphereZ * cosine;
          const ripple =
            Math.sin(phase * 3 + time * 0.0007 + particle.seed * 5) *
            (0.04 + statementMix * 0.06);
          const depthScale = 0.88 + (rotatedZ + 1) * 0.065;
          let x = centerX + rotatedX * radiusX * depthScale;
          let y =
            centerY +
            (particle.cosTheta + ripple + Math.sin(rotatedX * 4 + time * 0.00045) * statementMix * 0.035) *
              radiusY;

          // マウス反発とクリック波紋による変位・発光量
          let boost = 0;
          if (pointerTarget.active) {
            const deltaX = x - pointer.x;
            const deltaY = y - pointer.y;
            const distanceSq = deltaX * deltaX + deltaY * deltaY;
            if (distanceSq < pointerRadiusSq) {
              const distance = Math.sqrt(distanceSq) || 1;
              const strength = 1 - distance / pointerRadius;
              const push = strength * strength * 52;
              x += (deltaX / distance) * push;
              y += (deltaY / distance) * push;
              boost = strength;
            }
          }
          for (const pulse of pulses) {
            const age = (time - pulse.startTime) / PULSE_DURATION;
            const ringRadius = smoothstep(0, 1, age) * pulseMaxRadius;
            const deltaX = x - pulse.x;
            const deltaY = y - pulse.y;
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY) || 1;
            // 波紋の輪の付近だけを外側へ押し出しつつ光らせる
            const band = Math.max(0, 1 - Math.abs(distance - ringRadius) / 140);
            if (band > 0) {
              const fade = 1 - age;
              const push = band * fade * 68;
              x += (deltaX / distance) * push;
              y += (deltaY / distance) * push;
              boost = Math.max(boost, band * fade);
            }
          }

          if (x < -4 || x > width + 4 || y < -4 || y > height + 4) continue;

          // ベースの不透明度を高めに取り、マウス・波紋の近くはさらに明るくする
          context.globalAlpha = Math.min(
            1,
            visibility * (0.6 + (rotatedZ + 1) * 0.2) + boost * 0.45,
          );
          const pointSize = particle.size * (1.35 + (rotatedZ + 1) * 0.18 + boost * 0.9);
          context.fillRect(x, y, pointSize, pointSize);
        }
      }

      context.globalAlpha = 1;
      if (!reducedMotion.matches && !document.hidden) {
        animationFrame = window.requestAnimationFrame(draw);
      }
    };

    const handleScroll = () => {
      scrollPosition = window.scrollY;
      if (reducedMotion.matches) draw(0);
    };

    const handleVisibility = () => {
      window.cancelAnimationFrame(animationFrame);
      if (!document.hidden) animationFrame = window.requestAnimationFrame(draw);
    };

    const handlePointerMove = (event: PointerEvent) => {
      // 初回は追従補間なしで現在地に合わせ、画面外からの不自然な流れ込みを防ぐ
      if (!pointerTarget.active) {
        pointer.x = event.clientX;
        pointer.y = event.clientY;
      }
      pointerTarget.active = true;
      pointerTarget.x = event.clientX;
      pointerTarget.y = event.clientY;
    };

    const handlePointerOut = (event: PointerEvent) => {
      // ウィンドウ外へ出たときだけ影響を止める
      if (!event.relatedTarget) pointerTarget.active = false;
    };

    const handlePointerDown = (event: PointerEvent) => {
      pulses.push({ startTime: performance.now(), x: event.clientX, y: event.clientY });
      // 波紋は同時に6個まで(連打によるコスト増を抑える)
      if (pulses.length > 6) pulses.shift();
    };

    resizeCanvas();
    // フォントや画像の読み込みで高さが変わるため、少し遅れて再計測する
    const remeasureTimer = window.setTimeout(measureSections, 600);
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("visibilitychange", handleVisibility);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerout", handlePointerOut);
    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    animationFrame = window.requestAnimationFrame(draw);

    return () => {
      window.clearTimeout(remeasureTimer);
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("visibilitychange", handleVisibility);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerout", handlePointerOut);
      window.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [colorFrom, colorEnd, heroOnly]);

  return <canvas ref={canvasRef} className={styles.particleCanvas} aria-hidden="true" />;
}
