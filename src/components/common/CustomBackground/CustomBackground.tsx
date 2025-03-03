import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useMotionValue, useSpring } from 'framer-motion';

const CustomBackground = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [backgroundGradients, setBackgroundGradients] = useState('');

  const mouse = { x: useMotionValue(0), y: useMotionValue(0) };
  const smoothMouse = {
    x: useSpring(mouse.x, { damping: 20, stiffness: 300, mass: 0.5 }),
    y: useSpring(mouse.y, { damping: 20, stiffness: 300, mass: 0.5 }),
  };

  const lastMousePosition = useRef({ x: 0, y: 0 });

  const checkScreenSize = useCallback(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  useEffect(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, [checkScreenSize]);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      lastMousePosition.current = { x: e.clientX, y: e.clientY };
      mouse.x.set(e.clientX);
      mouse.y.set(e.clientY);
      setIsVisible(true);
    },
    [mouse],
  );

  const handleMouseLeaveWindow = useCallback(() => {
    setIsVisible(false);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeaveWindow);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeaveWindow);
    };
  }, [isMobile, handleMouseMove, handleMouseLeaveWindow]);

  useEffect(() => {
    const updateGradients = () => {
      const xPercent = (smoothMouse.x.get() / window.innerWidth) * 100;
      const yPercent = (smoothMouse.y.get() / window.innerHeight) * 100;

      setBackgroundGradients(`radial-gradient(circle at ${xPercent}% ${yPercent}%, #0D1520, transparent 70%),
        radial-gradient(circle at ${xPercent / 1.2}% ${
          yPercent / 1.2
        }%, #1A2333, transparent 80%),
        radial-gradient(circle at ${xPercent / 1.5}% ${
          yPercent / 1.5
        }%, #00FFFF60, transparent 80%)`);
    };

    const unsubscribeX = smoothMouse.x.on('change', updateGradients);
    const unsubscribeY = smoothMouse.y.on('change', updateGradients);

    return () => {
      unsubscribeX();
      unsubscribeY();
    };
  }, [smoothMouse.x, smoothMouse.y]);

  return isVisible ? (
    <div
      className="fixed top-0 left-0 w-full h-full -z-50 transition-all duration-100 ease-out"
      style={{
        backgroundImage: `url(/images/black-orchid.png), ${backgroundGradients}`,
        backgroundColor: '#0D1520',
        backgroundRepeat: 'repeat, no-repeat',
      }}
    />
  ) : null;
};

export default CustomBackground;
