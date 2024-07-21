import { projects, skills } from '../../profile.json';
import Project from './project';
import Skill from './skill';

const Skills = () => {
  return (
    <div>
      <div>
        <h1>Some of my personal works...</h1>
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
      <div>
        {/* This should be in tabs */}
        <h1>My Skills</h1>
        {/* This should be grid */}
        <div>
          {skills.map((skill, index) => (
            <Skill key={index} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
