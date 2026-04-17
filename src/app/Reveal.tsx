"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import styles from "./page.module.css";

type Props = {
  children: ReactNode;
  delay?: number;
  as?: "div" | "section" | "article";
  className?: string;
  id?: string;
};

export function Reveal({ children, delay = 0, as = "div", className, id }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Tag = as as "div";
  const cls = [styles.reveal, visible ? styles.revealVisible : "", className]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag
      id={id}
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cls}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
