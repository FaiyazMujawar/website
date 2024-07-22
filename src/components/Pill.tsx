export type PillProps = {
  label: string;
};

const Pill = (props: PillProps) => {
  return (
    <div className='py-2 px-5 text-sm w-fit border-[1px] border-[var(--border-color)] bg-[var(--hover-bg)] rounded-lg m-1 inline-block'>
      {props.label}
    </div>
  );
};

export default Pill;
