import { useRouter } from 'next/router';
import { projects } from 'src/__fixtures__/projects';
import Project from '_components/Project';

const ProjectDetail = () => {
  const router = useRouter();
  const { slug } = router.query;

  const project = projects.find((project) => project.id === slug);

  if (!project) {
    return <p>Projet introuvable.</p>;
  }

  return <Project project={project} />;
};

export default ProjectDetail;
