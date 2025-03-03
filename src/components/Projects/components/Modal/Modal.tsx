import React, { useEffect, useRef, useCallback } from 'react';
import type { ModalProps } from './Modal.types';
import { motion } from 'framer-motion';
import Image from 'next/image';
import gsap from 'gsap';

const scaleAnimation = {
  initial: { scale: 0, x: '-50%', y: '-50%' },
  enter: {
    scale: 1,
    x: '-50%',
    y: '-50%',
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: '-50%',
    y: '-50%',
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

const Modal = ({ modal, projects }: ModalProps) => {
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const { pageX, pageY } = e;

    if (modalContainer.current) {
      gsap.to(modalContainer.current, {
        left: pageX,
        top: pageY,
        duration: 0.35,
        ease: 'power3',
      });
    }

    if (cursor.current) {
      gsap.to(cursor.current, {
        left: pageX,
        top: pageY,
        duration: 0.35,
        ease: 'power3',
      });
    }
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);

  return (
    <motion.div
      ref={modalContainer}
      variants={scaleAnimation}
      initial="initial"
      animate={active ? 'enter' : 'closed'}
      className="modal-modalContainer"
    >
      <div style={{ top: index * -100 + '%' }} className="modal-modalSlider">
        {projects.map((project) => {
          const {
            images: { first },
            id,
          } = project;
          return (
            <div className="modal-modalContent" key={`modal_${id}`}>
              <Image
                src={first}
                height={400}
                alt={`Projet ${project.fullName}`}
                loading="lazy"
                quality={80}
                width={800}
              />
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Modal;
