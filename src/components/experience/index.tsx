import { experience } from '../../profile.json';
import Company from './company';

const Experience = () => {
  return (
    <div>
      <h1>Where have I worked?</h1>
      {experience.map((exp, index) => (
        <Company key={index} company={exp} />
      ))}
    </div>
  );
};

export default Experience;
