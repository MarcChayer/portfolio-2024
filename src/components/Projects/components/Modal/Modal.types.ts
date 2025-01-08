import type { ProjectsType } from 'src/__fixtures__/projects';

export type ModalProps = {
  modal: {
    active: boolean;
    index: number;
  };
  projects: ProjectsType[];
};
