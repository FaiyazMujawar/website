import { Chip } from 'primereact/chip';

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
          <Chip label={keyword} key={index} className='m-1 text-[12px]' />
        ))}
      </div>
    </div>
  );
};

export default Skill;
