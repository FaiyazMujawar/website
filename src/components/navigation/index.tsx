import './styles.css';

const Navbar = () => {
  return (
    <div className='navbar sticky top-0 shadow-lg w-full'>
      <div className='sm0:max-sm:w-[90%] py-6 w-[70%] mx-auto flex justify-between items-center '>
        <div className='text-[2rem]'>
          <code style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
            <span className='text-gray-400'>{'{'}</span>
            <span className='text-[var(--primary)]'>FM</span>
            <span className='text-gray-400'>{'}'}</span>
          </code>
        </div>
        <div className='links text-center items-center'>
          <a href='#about'>About</a>
          <a href='#work'>Work</a>
          <a href='#skills'>Projects & Skills</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
