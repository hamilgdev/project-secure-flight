import './styles.css';

export const CircleLoader = () => {
  return (
    <div className='lds-ripple [&>div]:border-grey-400 [&>div]:border-[4px]'>
      <div></div>
      <div></div>
    </div>
  );
};
