import React, { useEffect } from 'react';
import type { ModalProps } from './Modal.types';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
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

  useEffect(() => {
    if (modalContainer.current) {
      let xMoveContainer = gsap.quickTo(modalContainer.current, 'left', {
        duration: 0.6,
        ease: 'power3',
      });
      let yMoveContainer = gsap.quickTo(modalContainer.current, 'top', {
        duration: 0.6,
        ease: 'power3',
      });
      window.addEventListener('mousemove', (e) => {
        const { pageX, pageY } = e;
        xMoveContainer(pageX);
        yMoveContainer(pageY);
      });
    }
    if (cursor.current) {
      let xMoveCursor = gsap.quickTo(cursor.current, 'left', {
        duration: 0.35,
        ease: 'power3',
      });
      let yMoveCursor = gsap.quickTo(cursor.current, 'top', {
        duration: 0.35,
        ease: 'power3',
      });
      window.addEventListener('mousemove', (e) => {
        const { pageX, pageY } = e;

        xMoveCursor(pageX);
        yMoveCursor(pageY);
      });
    }
  }, []);

  return (
    <>
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
            } = project;
            return (
              <div className="modal-modalContent" key={`modal_${project.id}`}>
                <Image
                  src={first}
                  height={400}
                  alt={`Projet ${project.fullName}`}
                  priority
                />
              </div>
            );
          })}
        </div>
      </motion.div>
    </>
  );
};

export default Modal;
