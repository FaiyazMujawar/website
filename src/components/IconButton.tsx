export type IconButtonProps = {
  icon: React.ReactNode;
  text: string;
  onClick: () => unknown;
};

const IconButton = (props: IconButtonProps) => {
  return (
    <div className='mr-2 hover:text-[var(--primary)]'>
      <button
        className='py-2 px-3 border-[1px] border-[var(--border-color)] hover:bg-[var(--hover-bg)] rounded-lg flex items-center'
        onClick={props.onClick}
      >
        <span className='mr-2'>{props.icon}</span>
        {props.text}
      </button>
    </div>
  );
};

export default IconButton;
