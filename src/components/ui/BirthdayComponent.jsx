const BirthdayComponent = ({ birthdayArray, deleteFunction }) => {
  return (
    <div id="birthady-saved-div">
      {birthdayArray.map(({ id, picture, name, age }) => {
        return (
          <div key={id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: "center" }}>
            <div className="birtbday-details-div">
              <img className='profile' src={picture} alt='unKnown' />
              <div>
                <h1 className='bitName'>{name}</h1>
                <p className='bitYear'>{age} years old</p>
              </div>
            </div>
            <button className='canBtn' onClick={() => deleteFunction(id)} type='button'>&times;</button>
          </div>
        );
      })}
    </div>
  );
};

export default BirthdayComponent;