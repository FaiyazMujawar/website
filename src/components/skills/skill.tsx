export type SkillProps = {
  name: string;
  keywords: string[];
};

const Skill = ({ skill }: { skill: SkillProps }) => {
  return (
    <div>
      <h3>{skill.name}</h3>
      {skill.keywords.map((keyword, index) => (
        <span key={index}>{keyword}</span>
      ))}
    </div>
  );
};

export default Skill;
