import { useState, useEffect, useRef } from "react";
import unknown_icon from "./assets/unknown-icon.jpeg";
import BirthdayComponent from "./components/ui/BirthdayComponent";
import ImageInput from "./components/ui/ImageInput";
import TextInput from "./components/common/TextInput";
import PageButton from "./components/common/PageButton";

const App = () => {
  const fileInputRef = useRef();

  const [inputs, setInputs] = useState({ picture: "", name: "", age: "" });
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs({ ...inputs, [name]: value });
  };
  const [people, setPeople] = useState(() => {
    let peoFromLocal = localStorage.getItem("people");
    return peoFromLocal !== null ? JSON.parse(peoFromLocal) : [];
  });
  useEffect(() => {
    localStorage.setItem("people", JSON.stringify(people));
  }, [people]);

  const getInfos = () => {
    if (inputs.name && inputs.age) {
      let mainDet = { id: Date.now(), picture: inputs.picture || unknown_icon, name: inputs.name, age: inputs.age, };
      setPeople([...people, mainDet]);
      setInputs({ picture: null, name: "", age: "" });
      fileInputRef.current.value = "";
    };
  };

  const clearList = () => {
    setPeople([]);
  };

  const delBirth = (id) => {
    let canBirth = people.filter((x) => x.id !== id);
    setPeople(canBirth);
  };

  return (
    <section>
      <section className='sections' id='detSection'>
        <h1 id='title' style={{ marginBottom: '1rem' }}>{people.length} birthdays today</h1>
        <BirthdayComponent birthdayArray={people} deleteFunction={delBirth} />
        <PageButton id={"clearBtn"} buttonFunction={clearList} text={"Clear List"} />
      </section>
      <form className='sections' id='formSection'>
        <ImageInput imageInput={inputs} setImageInput={setInputs} inputRef={fileInputRef} />
        <TextInput id={"fullName"} label={"Name"} type={"text"} name={"name"} value={inputs.name} onChange={handleInput} />
        <TextInput id={"age"} label={"Age"} type={"number"} name={"age"} value={inputs.age} onChange={handleInput} />
        <PageButton id={"addBtn"} buttonFunction={getInfos} text={"Add Birthday"} />
      </form>
    </section>
  );
};

export default App;