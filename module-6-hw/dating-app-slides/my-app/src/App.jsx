import { useState } from 'react'
import { data } from './data'
import './App.css'

function App() {
  const [person, setPerson] = useState(0);
  const {id, name, description, age, image} = data[person];
console.log(data[person])

  const previousPerson = () => {
    setPerson((person => {
      person --;
      if (person < 0){
        return data.length-1;
      }
      return person;
    }))
  }

  const nextPerson = () => {
    setPerson((person => { 
      person ++;
      if (person > data.length - 1) {
        person = 0;
      }
      return person
    }))
  }

  return(<div>
    
    <div className='container'>
    <div className=''>
          <img src={image} alt="person's photo" width="300px" />
      </div>

      <div className=''>
        <h1>{id} - {name}</h1>
      </div>

      <div className=''>
        <h2>{description}</h2>
      </div>

      <div className=''>
        <h2>{age} years old</h2>
      </div>

      <div className='btn '>
        <button onClick={previousPerson}>Previous</button>
        <button onClick={nextPerson}>Next</button>
      </div>

    </div>
    </div>
  )
}

export default App
