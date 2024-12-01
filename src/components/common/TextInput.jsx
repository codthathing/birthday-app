const TextInput = ({id, label, name, type, value, onChange}) => {
  return (
    <div className="inputDiv">
      <label className='labels' htmlFor={id}>{label}: </label>
      <input type={type} name={name} value={value} onChange={onChange} id={id} />
    </div>
  );
};

export default TextInput;