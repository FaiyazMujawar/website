const Footer = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center py-6 text-gray-300'>
      <p>
        Designed and developed by <span>Faiyaz Mujawar</span>
      </p>
      <p>
        Built with <span className='text-[var(--primary)]'>React</span> and{' '}
        <span className='text-[var(--primary)]'>PrimeReact</span>. Hosted on
        <span className='text-[var(--primary)]'>Vercel</span>.
      </p>
    </div>
  );
};

export default Footer;
