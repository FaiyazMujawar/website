import { experience } from '../../profile.json';
import Company from './company';
const Experience = () => {
  return (
    <div className='py-20'>
      <h1 className='text-5xl'>Where have I worked?</h1>
      {experience.map((company, index) => (
        <Company key={index + 1} company={{ index: index + 1, ...company }} />
      ))}
    </div>
  );
};

export default Experience;
