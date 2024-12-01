const BirthdayComponent = ({ birthdayArray, deleteFunction }) => {
  return (
    <>
      {birthdayArray.map(({ id, picture, name, age }) => {
        return (
          <div key={id} style={{ display: 'flex', marginBottom: '0.5rem', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', }}>
              <img style={{ marginRight: '0.5rem' }} className='profile' src={picture} alt='unKnown' />
              <div>
                <h1 className='bitName'>{name}</h1>
                <p className='bitYear'>{age} years old</p>
              </div>
            </div>
            <button id='canBtn' onClick={() => deleteFunction(id)} type='button'>&times;</button>
          </div>
        );
      })}
    </>
  );
};

export default BirthdayComponent;