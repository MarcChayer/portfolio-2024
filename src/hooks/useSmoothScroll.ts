import { useEffect, useCallback, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

const useSmoothScroll = () => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      gestureOrientation: 'vertical',
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      infinite: false,
    });

    function raf(time: number) {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
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

      history.pushState(null, '', `/${selector}`);
    }
  }, []);

  return { scrollTo };
};

export default useSmoothScroll;
