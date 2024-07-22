import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa6';
import { basics } from '../../profile.json';
import IconButton from '../IconButton';
import './styles.css';

const Home = () => {
  return (
    <div id='home' className='py-28 flex'>
      <div className='flex flex-col justify-center'>
        <div className='text-2xl text-[var(--primary)]'>
          Hey there! I'm&mdash;
        </div>
        <div className='text-[7rem] font-bold text-wrap'>
          Faiyaz <span className='text-[var(--primary)]'>Mujawar</span>
        </div>
        <div className='text-2xl'>
          <code className='text-red-400'>`${`{${basics.designation}}`}`</code>
          <span className='text-gray-500'>
            ,&nbsp; based in {basics.location}.
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
