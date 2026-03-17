import { useEffect, useRef, useState } from "react";

export function useAnimatedBars(count: number, active: boolean) {
  const [bars, setBars] = useState<number[]>(() =>
    Array.from({ length: count }, () => Math.random() * 0.4 + 0.05)
  );
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!active) return;
    const animate = () => {
      setBars((prev) =>
        prev.map((v) => {
          const delta = (Math.random() - 0.5) * 0.15;
          return Math.min(1, Math.max(0.04, v + delta));
        })
      );
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [active]);

  return bars;
}