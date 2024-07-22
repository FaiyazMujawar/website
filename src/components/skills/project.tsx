import { Card } from 'primereact/card';
import { Chip } from 'primereact/chip';

export type ProjectProps = {
  name: string;
  description: string;
  date: string;
  keywords: string[];
  url: {
    label: string;
    href: string;
  };
};

const Project = ({ project }: { project: ProjectProps }) => {
  return (
    <Card
      title={project.name}
      subTitle={project.description}
      className='bg-gray-800'
    >
      <div className='mb-4'>
        <a href={project.url.href} className='text-[var(--primary)]'>
          View: {project.url.label}
        </a>
      </div>
      {project.keywords.map((keyword, index) => (
        <Chip key={index} label={keyword} className='mr-2 text-[12px]' />
      ))}
    </Card>
  );
};

export default Project;
