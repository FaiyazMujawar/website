import { FaFileAlt } from 'react-icons/fa';
import { basics } from '../../profile.json';
import IconButton from '../IconButton';
import './style.css';

const About = () => {
  return (
    <div id='about' className='py-20 sm0:max-sm:py-10'>
      <div className='md:flex'>
        <div className='profile center rounded-[16px] overflow-hidden shadow-2xl md:mr-10 sm0:max-sm:w-full'>
          <img className='rounded-[16px]' src='/me.png' alt='profile.png' />
        </div>
        <div className='w-full md:flex flex-col justify-between sm0:max-sm:mt-4'>
          <div className='title'>Who am I?</div>
          <div>
            {basics.about.map((about, index) => (
              <p className='text-lg py-2' key={index}>
                {about}
              </p>
            ))}
          </div>
          <div className='mt-4'>
            <IconButton
              text='VIEW MY RESUME'
              icon={<FaFileAlt size={'15px'} />}
              onClick={() => window.open(basics.resume, '_blank')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
