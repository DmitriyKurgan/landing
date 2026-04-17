"use client";

import { useRef, type ReactNode, type CSSProperties } from "react";
import styles from "./page.module.css";

type Props = {
  children: ReactNode;
  className?: string;
  intensity?: number;
};

export function TiltCard({ children, className, intensity = 8 }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  function handleMove(e: React.PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rx = (0.5 - y) * intensity;
    const ry = (x - 0.5) * intensity;
    el.style.setProperty("--tilt-rx", `${rx}deg`);
    el.style.setProperty("--tilt-ry", `${ry}deg`);
    el.style.setProperty("--tilt-mx", `${x * 100}%`);
    el.style.setProperty("--tilt-my", `${y * 100}%`);
  }

  function handleLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--tilt-rx", "0deg");
    el.style.setProperty("--tilt-ry", "0deg");
  }

  return (
    <div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={`${styles.tilt} ${className ?? ""}`}
      style={{ "--tilt-rx": "0deg", "--tilt-ry": "0deg" } as CSSProperties}
    >
      {children}
    </div>
  );
}
