import { FaLink } from 'react-icons/fa6';
import Pill from '../Pill';

export type ProjectProps = {
  name: string;
  description: string;
  date: string;
  keywords: string[];
  img: string;
  url: {
    label: string;
    href: string;
  };
};

const Project = ({ project }: { project: ProjectProps }) => {
  return (
    <div className='border-[1px] border-[var(--border-color)] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl my-4 lg:flex'>
      <div className='lg:w-1/5 h-fit max-h-[15rem] overflow-hidden'>
        <img src={project.img} alt='project-img' />
      </div>
      <div className='lg:w-4/5  p-5'>
        <div className='mb-4'>
          <h3
            className='text-2xl hover:cursor-pointer hover:text-[var(--primary)] mb-2 flex items-center'
            onClick={() => window.open(project.url.href, '_blank')}
          >
            {project.name}&nbsp;&nbsp;
            <FaLink />
          </h3>
          <p className='mb-2 text-lg text-gray-500'>{project.description}</p>
        </div>
        <div>
          {project.keywords.map((keyword, index) => (
            <Pill key={index} label={keyword} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
