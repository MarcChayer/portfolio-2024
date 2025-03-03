import React from 'react';
import type { ButtonsActionProps } from './ButtonsAction.types';
import Button from '_components/common/Button';
import { projects } from 'src/__fixtures__/projects';

const ButtonsAction = ({ projectIndex, router }: ButtonsActionProps) => {
  const handleOnNextProject = () => {
    const nextProjectIndex = projectIndex + 1;
    if (nextProjectIndex < projects.length) {
      router.push(`/projet/${projects[nextProjectIndex].id}`);
    } else {
      router.push(`/projet/${projects[0].id}`);
    }
  };

  const handleOnPreviousProject = () => {
    const previousProjectIndex = projectIndex - 1;
    if (previousProjectIndex >= 0) {
      router.push(`/projet/${projects[previousProjectIndex].id}`);
    } else {
      router.push(`/projet/${projects[projects.length - 1].id}`);
    }
  };

  return (
    <>
      <Button onClick={() => router.push('/')} title="Retour à l'accueil">
        Retour
      </Button>
      <div className="flex flex-col md:flex-row gap-4">
        <Button
          onClick={() => handleOnPreviousProject()}
          title="Projet précédent"
        >
          Précédent
        </Button>
        <Button
          onClick={() => handleOnNextProject()}
          title="Projet suivant"
          className="2xs:w-full"
        >
          Suivant
        </Button>
      </div>
    </>
  );
};
export default ButtonsAction;
