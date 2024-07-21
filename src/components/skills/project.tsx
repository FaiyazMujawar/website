export type ProjectProps = {
  name: string;
  description: string;
  date: string;
  summary: string[];
  keywords: string[];
  url: {
    label: string;
    href: string;
  };
};

const Project = ({ project }: { project: ProjectProps }) => {
  return (
    <div>
      <h3>{project.name}</h3>
      <p>{project.description && project.description}</p>
      <p>
        Description:
        <ul>
          {project.summary.map((summary, index) => (
            <li key={index}>{summary}</li>
          ))}
        </ul>
        {project.keywords.map((keyword, index) => (
          <span key={index}>{keyword}</span>
        ))}
      </p>
      <a href={project.url.href}>{project.url.label}</a>
    </div>
  );
};

export default Project;
