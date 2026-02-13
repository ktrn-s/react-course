import { useState } from 'react'
import './App.css'
import { dataHW } from './dataHW';

function App() {
  const [books, setBooks] = useState(dataHW);
  
  return (
    <div>
      {books.map((each => {
        const{id, name} = each;
        return(
          <div key={id}>
            <p>{id}. {name}</p>
          </div>
        )
      }
      ))}
      <div>
        <button onClick={ () => setBooks([])}>Delete all</button>
      </div>
    </div>
  )
}
export default App
