import { experience } from '../../profile.json';
import Company from './company';
const Experience = () => {
  return (
    <div id='work' className='sm0:max-sm:py-10 py-20'>
      <h1 className='title'>Where have I worked?</h1>
      {experience.map((company, index) => (
        <Company key={index + 1} company={{ index: index + 1, ...company }} />
      ))}
    </div>
  );
};

export default Experience;
