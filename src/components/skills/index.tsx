import { projects, skills } from '../../profile.json';
import Project from './project';
import Skill from './skill';

const Skills = () => {
  return (
    <div id='skills' className='sm0:max-sm:py-10 py-20'>
      <div>
        <h1 className='title'>Personal work..</h1>
        <div className='py-5'>
          {projects.map((project, index) => (
            <Project key={index} project={project} />
          ))}
        </div>
      </div>
      <div>
        {/* This should be in tabs */}
        <h1 className='title'>What skills do I have?</h1>
        <div className='grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] pt-10 gap-10'>
          {skills.map((skill, index) => (
            <Skill key={index} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
