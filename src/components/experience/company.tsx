import { Chip } from 'primereact/chip';

export type CompanyProps = {
  index: number;
  company: string;
  position: string;
  start: string;
  end: string | null;
  summary: string[];
};

function getFormattedDate(dateString: string) {
  const date = new Date(dateString);
  const month = date.toLocaleString('default', { month: 'short' });
  const year = date.getFullYear();
  return `${month}, ${year}`;
}

const Company = ({ company }: { company: CompanyProps }) => {
  return (
    <div className='project flex w-full my-20'>
      <div className='flex flex-col w-1/6 justify-center items-center'>
        <div className='rounded-full bg-gray-800 p-2 h-[50px] w-[50px] flex flex-col justify-center items-center'>
          {company.index}
        </div>
      </div>
      <div className='border-[1px] border-gray-800 p-5 rounded-md w-full py-10 px-6'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center mb-2'>
            <span className='text-3xl mr-5'>{company.company}</span>
            {company.end == null && (
              <Chip
                className='text-sm text-[var(--primary)]'
                label='Currently Working'
              />
            )}
          </div>
          <span className='text-gray-400'>
            {getFormattedDate(company.start)} &mdash;&nbsp;
            {company.end != null ? getFormattedDate(company.end) : 'Present'}
          </span>
        </div>
        <h2 className='text-xl text-gray-400 mb-2'>{company.position}</h2>
        <p className='text-lg mb-2'>Key Responsibilities</p>
        <div>
          <ul style={{ listStyleType: 'circle', listStylePosition: 'inside' }}>
            {company.summary.map((summary, index) => (
              <li className='list-item text-lg' key={index}>
                {summary}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Company;

{
  /* <div>
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
    </div> */
}
