import { basics } from '../../profile.json';

const About = () => {
  return (
    <div>
      <div>
        <div>
          <h1>Who am I?</h1>
          {basics.about.map((about, index) => (
            <p key={index}>{about}</p>
          ))}
        </div>
        <div>
          <img src='/me.png' alt='profile.png' />
        </div>
      </div>
      <div>
        <button>
          <a href={basics.resume} target='_tab'>
            VIEW MY RESUME
          </a>
        </button>
      </div>
    </div>
  );
};

export default About;
