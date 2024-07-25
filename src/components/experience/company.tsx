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

function getWorkDuration(startDate: string, endDate: string | null) {
  const start = getFormattedDate(startDate);
  const end = endDate == null ? 'Present' : getFormattedDate(endDate);
  return (
    <span className='text-gray-500 text-sm sm0:max-sm:block'>
      {start} &mdash; {end}
    </span>
  );
}

const Company = ({ company }: { company: CompanyProps }) => {
  return (
    <div className='project flex w-full mt-10'>
      {/* Index */}
      <div className='sm0:max-lg:hidden w-1/6 center flex-col'>
        <div className='rounded-full bg-gray-800 p-2 h-[50px] w-[50px] center flex-col'>
          {company.index}
        </div>
      </div>
      {/* Details */}
      <div className='border-[1px] border-[var(--border-color)] rounded-md w-full py-5'>
        <div className='flex justify-between items-center'>
          <span className='text-3xl ml-6'>{company.company}</span>
          {company.end == null && (
            <span className='bg-[var(--primary)] text-white py-1 px-2 rounded-sm text-sm mr-[-5px] mt-[-10px] text-center]'>
              Present
            </span>
          )}
        </div>
        <div className='border-t-[1px] border-b-[1px] py-2 my-2 border-[var(--border-color)] px-6'>
          <span className='text-lg text-gray-300 mb-2 mr-2'>
            {company.position}
          </span>
          {getWorkDuration(company.start, company.end)}
        </div>

        <div className='px-6 mt-4'>
          <ul className='px-4'>
            {company.summary.map((summary, index) => (
              <li className='list-item list-disc mb-2' key={index}>
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
