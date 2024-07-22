import { Button } from 'primereact/button';
import { basics } from '../../profile.json';
import './styles.css';

const Home = () => {
  return (
    <div id='home' className='py-20 h-[80vh] flex'>
      <div className='flex flex-col justify-center'>
        <div className='text-2xl text-[var(--primary)]'>
          Hey there! I'm&mdash;
        </div>
        <div className='text-[7rem] font-bold text-wrap'>
          Faiyaz <span className='text-[var(--primary)]'>Mujawar</span>
        </div>
        <div className='text-2xl'>
          <code className='text-red-400'>${`{${basics.designation}}`}</code>
          <span className='text-gray-500'>
            ,&nbsp; Based in {basics.location}.
          </span>
        </div>
        <div className='profiles mt-8'>
          <Button
            label='LinkedIn'
            outlined
            icon='pi pi-linkedin'
            className='mr-4 hover:text-[var(--primary)]'
            severity='secondary'
            onClick={() => window.open(basics.profiles.linkedin, '_blank')}
          />
          <Button
            label='GitHub'
            outlined
            icon='pi pi-github'
            className='mr-4 hover:text-[var(--primary)]'
            severity='secondary'
            onClick={() => window.open(basics.profiles.github, '_blank')}
          />
          <Button
            label='Email'
            outlined
            icon='pi pi-envelope'
            className='mr-4 hover:text-[var(--primary)]'
            severity='secondary'
            onClick={() => window.open(`mailto:${basics.profiles.linkedin}`)}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
