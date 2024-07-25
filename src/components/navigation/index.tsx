import { FiBriefcase, FiPackage, FiUser } from 'react-icons/fi';
import './styles.css';

const Navbar = () => {
  return (
    <div className='navbar sticky top-0 shadow-lg w-full'>
      <div className='sm0:max-sm:w-[90%] sm0:max-sm:py-2 py-6 w-[70%] mx-auto flex justify-between items-center '>
        <div className='sm0:max-sm:text-[1.5rem] text-[2rem] font-extrabold'>
          <a href='#'>
            <code style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
              <span className='text-gray-400'>{'{'}</span>
              <span className='text-[var(--primary)]'>FM</span>
              <span className='text-gray-400'>{'}'}</span>
            </code>
          </a>
        </div>
        <div className='links text-center items-center'>
          <a href='#about'>
            <FiUser size={'25px'} />
          </a>
          <a href='#work'>
            <FiBriefcase size={'25px'} />
          </a>
          <a href='#skills'>
            <FiPackage size={'25px'} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
