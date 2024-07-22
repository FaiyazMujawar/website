import Pill from '../Pill';

export type SkillProps = {
  name: string;
  keywords: string[];
};

const Skill = ({ skill }: { skill: SkillProps }) => {
  return (
    <div>
      <h3 className='text-2xl'>{skill.name}</h3>
      <div className='my-2'>
        {skill.keywords.map((keyword, index) => (
          <Pill label={keyword} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Skill;
