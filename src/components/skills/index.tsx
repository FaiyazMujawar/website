import { projects, skills } from '../../profile.json';
import Project from './project';
import Skill from './skill';

const Skills = () => {
  return (
    <div id='skills py-20'>
      <div>
        <h1 className='text-5xl'>Personal work..</h1>
        <div className='grid grid-cols-2 gap-5 py-5'>
          {projects.map((project, index) => (
            <Project key={index} project={project} />
          ))}
        </div>
      </div>
      <div className='py-20'>
        {/* This should be in tabs */}
        <h1 className='text-5xl'>My Skills</h1>
        {/* This should be grid */}
        <div className='grid grid-cols-3 py-10 gap-5'>
          {skills.map((skill, index) => (
            <Skill key={index} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
