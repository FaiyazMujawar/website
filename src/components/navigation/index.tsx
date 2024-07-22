import './styles.css';

const Navbar = () => {
  return (
    <div className='navbar py-6 px-20 flex justify-between items-center sticky top-0 shadow-lg'>
      <div className='name text-[1.25rem]'>
        <a href='#'>faiyazmujawar</a>
      </div>
      <div className='links grid grid-cols-4 gap-2 text-center items-center'>
        <a href='#home'>Home</a>
        <a href='#about'>About</a>
        <a href='#work'>Work</a>
        <a href='#skills'>Skills</a>
      </div>
    </div>
  );
};

export default Navbar;
