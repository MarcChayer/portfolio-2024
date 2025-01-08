import React, { useState } from 'react';
import Container from '_components/common/Container';
import Lign from './components/Lign';
import Modal from './components/Modal';
import { projects } from 'src/__fixtures__/projects';
import { AnimatePresence, motion } from 'framer-motion';
import display1 from '_svgs/display1.svg';
import display2 from '_svgs/display2.svg';
import Image from 'next/image';
import Card from './components/Card';
import Button from '_components/common/Button';

const Projects = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const [displayMode, setDisplayMode] = useState<'lign' | 'card'>('lign');
  const [activeFilter, setActiveFilter] = useState('all'); // Filtre actif

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'dev') return project.tag.includes('web');
    if (activeFilter === 'design') return project.tag.includes('design');
    return false;
  });

  return (
    <Container id="projets" className="">
      <div className="flex flex-col h-full w-full justify-center">
        <div className="flex justify-between w-full pb-12 md:pb-24">
          <div className="flex flex-col w-full flex-wrap gap-4 xs:flex-row xs:w-auto md:gap-6">
            <Button
              onClick={() => handleFilterChange('all')}
              title="Tous les projets"
              isActive={activeFilter === 'all'}
            >
              Tous
            </Button>
            <Button
              onClick={() => handleFilterChange('dev')}
              title="Projets développements"
              isActive={activeFilter === 'dev'}
            >
              Développement
            </Button>
            <Button
              onClick={() => handleFilterChange('design')}
              title="Projets graphisme"
              isActive={activeFilter === 'design'}
            >
              Design
            </Button>
          </div>
          <div className="hidden md:flex md:gap-6">
            <Button
              onClick={() => setDisplayMode('lign')}
              title="Affichage 1"
              isActive={displayMode === 'lign'}
            >
              <Image src={display1} alt="Affichage 1" width={15} />
            </Button>
            <Button
              onClick={() => setDisplayMode('card')}
              title="Affichage 2"
              isActive={displayMode === 'card'}
            >
              <Image src={display2} alt="Affichage 2" width={15} />
            </Button>
          </div>
        </div>

        <AnimatePresence mode="popLayout">
          <motion.div
            className={`${
              displayMode === 'card'
                ? 'grid grid-cols-1 gap-24 md:grid-cols-2 h-full'
                : 'flex flex-col justify-center'
            }`}
            key={activeFilter}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{
              duration: 0.3,
              ease: 'easeInOut',
            }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{
                  opacity: 0,
                  y: -20,
                  transition: {
                    duration: 0.3,
                    ease: 'easeInOut',
                  },
                }}
                transition={{
                  delay: index * 0.2,
                  duration: 0.3,
                  ease: 'easeInOut',
                }}
              >
                <div className="block md:hidden">
                  <Card key={project.id} project={project} />
                </div>

                <div className="hidden md:block">
                  {displayMode === 'lign' ? (
                    <Lign
                      key={project.id}
                      id={project.id}
                      index={index}
                      title={project.fullName}
                      technos={project.technos}
                      year={project.year}
                      setModal={setModal}
                    />
                  ) : (
                    <Card key={project.id} project={project} />
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        {displayMode === 'lign' && (
          <Modal modal={modal} projects={filteredProjects} />
        )}
      </div>
    </Container>
  );
};

export default Projects;
