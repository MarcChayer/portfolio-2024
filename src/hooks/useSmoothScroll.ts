import { useEffect, useCallback, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

const useSmoothScroll = () => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 1.5,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      gestureOrientation: 'vertical',
      wheelMultiplier: 1.5,
      touchMultiplier: 1.5,
      smoothWheel: true,
      infinite: false,
    });

    function raf(time: number) {
      if (lenisRef.current) {
        lenisRef.current.raf(time);
        if (!lenisRef.current.isStopped) {
          requestAnimationFrame(raf);
        }
      }
    }
    requestAnimationFrame(raf);

    return () => {
      lenisRef.current?.destroy();
    };
  }, []);

  const scrollTo = useCallback((selector: string) => {
    const target = document.querySelector(selector);
    if (target && lenisRef.current) {
      lenisRef.current.scrollTo(target as HTMLElement);
    }
  }, []);

  return { scrollTo };
};

export default useSmoothScroll;
