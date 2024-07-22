import { Button } from 'primereact/button';
import { basics } from '../../profile.json';
import './style.css';

const About = () => {
  return (
    <div id='about' className='py-[10rem]'>
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
          <Button
            label='VIEW MY RESUME'
            outlined
            severity='secondary'
            icon='pi pi-file'
            className='mt-4 w-fit hover:text-[var(--primary)]'
            onClick={() => window.open(basics.resume, '_blank')}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
