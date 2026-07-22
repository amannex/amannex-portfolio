import { useState, useEffect, useRef } from "react";

export function useScrollProgress(
  containerRef?: React.RefObject<HTMLElement | null>,
) {
  const [progress, setProgress] = useState(0);
  const rafPending = useRef(false);

  useEffect(() => {
    const target = containerRef?.current ?? window;

    function calculateProgress() {
      rafPending.current = false;
      let scrollTop;
      let scrollHeight;
      let clientHeight;

      if (target === window) {
        scrollTop = window.scrollY || document.documentElement.scrollTop;
        scrollHeight = document.documentElement.scrollHeight;
        clientHeight = document.documentElement.clientHeight;
      } else {
        const el = target as HTMLElement;
        scrollTop = el.scrollTop;
        scrollHeight = el.scrollHeight;
        clientHeight = el.clientHeight;
      }

      const scrollable = scrollHeight - clientHeight;
      if (scrollable <= 0) {
        setProgress(100);
        return;
      }

      const percentage = Math.min(
        100,
        Math.max(0, (scrollTop / scrollable) * 100),
      );
      setProgress(percentage);
    }

    function handleScroll() {
      if (rafPending.current) return;
      rafPending.current = true;
      requestAnimationFrame(calculateProgress);
    }

    calculateProgress();
    target.addEventListener("scroll", handleScroll, { passive: true } as any);

    return () => {
      target.removeEventListener("scroll", handleScroll, {
        passive: true,
      } as any);
      rafPending.current = false;
    };
  }, [containerRef]);

  return progress;
}
