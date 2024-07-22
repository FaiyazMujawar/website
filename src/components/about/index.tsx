import { FaFile } from 'react-icons/fa6';
import { basics } from '../../profile.json';
import IconButton from '../IconButton';
import './style.css';

const About = () => {
  return (
    <div id='about' className='py-28'>
      <div className='flex'>
        <div className='profile rounded-[16px] overflow-hidden mr-10'>
          <img src='/me.png' alt='profile.png' />
        </div>
        <div className='w-full flex flex-col justify-between'>
          <div className='text-5xl'>Who am I?</div>
          <div>
            {basics.about.map((about, index) => (
              <p className='text-xl py-2' key={index}>
                {about}
              </p>
            ))}
          </div>
          <IconButton
            text='VIEW MY RESUME'
            icon={<FaFile size={'20px'} />}
            onClick={() => window.open(basics.resume, '_blank')}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
