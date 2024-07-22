import { basics } from '../../profile.json';

const Contact = () => {
  return (
    <div>
      <h1>Let's Connect!</h1>
      <a href={basics.email}>Email</a>
      <a href={basics.profiles.linkedin}>LinkedIn</a>
      <a href={basics.profiles.github}>GitHub</a>
    </div>
  );
};

export default Contact;
