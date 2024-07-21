export type CompanyProps = {
  company: string;
  position: string;
  start: string;
  end: string | null;
  summary: string[];
};

const Company = ({ company }: { company: CompanyProps }) => {
  return (
    <div>
      <h3>{company.company}</h3>
      <h4>{company.position}</h4>
      <p>
        {company.start} - {company.end ?? 'Present'}
      </p>
      <p>Work record:</p>
      <ul>
        {company.summary.map((summary, index) => (
          <li key={index}>{summary}</li>
        ))}
      </ul>
    </div>
  );
};

export default Company;
