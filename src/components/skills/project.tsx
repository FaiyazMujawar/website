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
        <Chip key={index} label={keyword} className='mr-2 text-[15px]' />
      ))}
    </Card>
  );
};

export default Project;

{
  /* <div className='p-5 border-[1px] border-gray-800 rounded-lg px-10'>
      <h3
        className='text-3xl hover:cursor-pointer hover:text-[var(--primary)] mb-2'
        onClick={() => window.open(project.url.href, '_blank')}
      >
        {project.name}
      </h3>
      {project.description && (
        <p className='text-gray-500 mb-4'>{project.description}</p>
      )}
      {project.keywords.map((keyword, index) => (
        <Chip key={index} label={keyword} className='mr-2 text-[12px]' />
      ))}
    </div> */
}
