import React, { useEffect, useState } from 'react';
import ReactDOM  from 'react-dom';
import './style.css';
import unknown from './unknown_black.jpeg';
import PropTypes from 'prop-types';


let peoFromLocal = JSON.parse(localStorage.getItem('people') || '[]')
const Input = () => {
  // const [profile, setProfile] = useState('')
  const [person, setPerson] = useState('')
  const [age, setAge] = useState()
  const [people, setPeople] = useState(peoFromLocal)

  const getInfos = () => {
    if(person && age) {
        let mainDet = {
          id: people.length,
          pics:`${unknown}`,
          name: person,
          years: age+ "years Old",
        }
        people.push(mainDet)
        localStorage.setItem('people', JSON.stringify(people))
        setPerson('')
        setAge('')
    } else {
        alert("No details filled.")
    }
  }

  const Structure = ({id, pics, name, years}) => {
    return <div style={{display:'flex', marginBottom:'0.5rem', justifyContent:'space-between'}}>
      <div style={{display:'flex',}}>
        <img style={{marginRight:'0.5rem'}} className='profile' src={pics}/>
        <div>
          <h1>{name}</h1>
          <p>{years}</p>
        </div>
      </div>
      <button id='canBtn' type='button'>&times;</button>
    </div>
  } 

  Structure.propType = {
    pics: PropTypes.object.isRequired
  }

  const clearList = () =>{
    localStorage.clear()
    window.location.reload()
  }

  // const delBirth = (id) => {
  //   let canBirth = people.filter((x) => x.id !== id)
  //   setPeople(canBirth)
  // }

  return (
      
    <section> 
      <section className='sections' id='detSection'>
      <h1 id='title' style={{marginBottom:'1rem'}}>{people.length} birthdays today</h1>
       {people.map((infos)=>   { 
          const {id, pics, name, years} = infos
          return <Structure key={infos.id} {...infos}></Structure>
        })} 
        <button type='button' className='buttons' id='clearBtn' onClick={clearList}>Clear List</button>
      </section>

      <form className='sections' id='formSection'>
        {/* <div className="inputDiv">
        <input type="file" 
          value={profile} 
          onChange={(pro)=> setProfile(pro.target.value) }
          name='profile'/>
        </div> */}
        <div className="inputDiv">
          <label className='labels' htmlFor='fullName'>Name : </label>
          <input type="text" 
            value={person} 
            onChange={(name)=> setPerson(name.target.value)}
            id="fullName"/>
        </div>
        <div className="inputDiv">
          <label className='labels' htmlFor='age'>Age : </label>
          <input type="number" 
            onChange={(age)=> setAge(age.target.value)}
            value={age} 
            id='age'/>
        </div>
        <button id='addBtn' className='buttons' onClick={getInfos} type='button'>Add Birthday</button>
      </form>


    </section>
  );
}

ReactDOM.render(<Input/>, document.getElementById("root"))

