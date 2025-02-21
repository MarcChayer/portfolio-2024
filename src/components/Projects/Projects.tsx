import React, { useState, useEffect } from 'react';
import Container from '_components/common/Container';
import Lign from './components/Lign';
import Modal from './components/Modal';
import { projects } from 'src/__fixtures__/projects';
import { AnimatePresence, motion } from 'framer-motion';
import Card from './components/Card';
import Button from '_components/common/Button';
import DisplayLign from '_svgs/DisplayLign';
import DisplayGrid from '_svgs/DisplayGrid';

const Projects = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const [displayMode, setDisplayMode] = useState<'lign' | 'card'>('lign');
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const filterProjects = () => {
    switch (activeFilter) {
      case 'all':
        setFilteredProjects(projects);
        break;
      case 'dev':
        setFilteredProjects(
          projects.filter((project) => project.tag.includes('web')),
        );
        break;
      case 'design':
        setFilteredProjects(
          projects.filter((project) => project.tag.includes('design')),
        );
        break;
      default:
        setFilteredProjects(projects);
        break;
    }
  };

  useEffect(() => {
    filterProjects();
  }, [activeFilter]);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setModal({ active: false, index: 0 });
  };

  return (
    <Container id="projets" className="!justify-start">
      <div className="flex flex-col h-full w-full">
        <div className="self-start flex justify-between w-full pb-12 md:pb-24">
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
              title="Afficher les projets en liste"
              isActive={displayMode === 'lign'}
            >
              <DisplayLign
                className={`w-4 h-4 fill-white transition duration-300 hover:fill-primary ${
                  displayMode === 'lign' ? '!fill-primary' : ''
                }`}
              />
            </Button>
            <Button
              onClick={() => setDisplayMode('card')}
              title="Afficher les projets en grille"
              isActive={displayMode === 'card'}
            >
              <DisplayGrid
                className={`w-4 h-4 fill-white transition duration-300 hover:fill-primary ${
                  displayMode === 'card' ? '!fill-primary' : ''
                }`}
              />
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
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{
              duration: 0.3,
              ease: 'easeInOut',
            }}
          >
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
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
              ))
            ) : (
              <p>Aucun projet ne correspond à ce filtre.</p> // Message si aucun projet ne correspond
            )}
          </motion.div>

          {/* Modal conditionnelle */}
          {displayMode === 'lign' && filteredProjects.length > 0 && (
            <Modal modal={modal} projects={filteredProjects} />
          )}
        </AnimatePresence>
      </div>
    </Container>
  );
};

export default Projects;
