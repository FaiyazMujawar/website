import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa6';
import { basics } from '../../profile.json';
import IconButton from '../IconButton';
import './styles.css';

const Home = () => {
  return (
    <div id='home' className='sm0:max-sm:py-10 py-20 flex'>
      <div className='flex flex-col justify-center'>
        <div className='heading2 text-[var(--primary)]'>
          Hey there! I'm&mdash;
        </div>
        <div className='heading1 font-bold text-wrap sm0:max-sm:mb-4'>
          Faiyaz <span className='heading1 text-[var(--primary)]'>Mujawar</span>
        </div>
        <div className='heading2'>
          <code className='text-red-400'>`${`{${basics.designation}}`}`</code>
          <span className='sm0:max-sm:hidden text-gray-500'>, </span>
          <span className='sm0:max-sm:block leading-normal text-gray-500'>
            Based in {basics.location}.
          </span>
        </div>
        <div className='profiles mt-8 flex'>
          <IconButton
            icon={<FaLinkedin size={'20px'} />}
            text='LinkedIn'
            onClick={() => window.open(basics.profiles.linkedin, '_blank')}
          />
          <IconButton
            icon={<FaGithub size={'20px'} />}
            text='GitHub'
            onClick={() => window.open(basics.profiles.github, '_blank')}
          />
          <IconButton
            icon={<FaEnvelope size={'20px'} />}
            text='Email'
            onClick={() => window.open(`mailto:${basics.email}`, '_blank')}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
