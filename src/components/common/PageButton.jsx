const PageButton = ({ id, buttonFunction, text }) => {
  return <button id={id} className='buttons' onClick={buttonFunction} type='button'>{text}</button>
};

export default PageButton;