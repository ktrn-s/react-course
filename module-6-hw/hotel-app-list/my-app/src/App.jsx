import { useState } from 'react'
import  {data } from './data'
import './App.css'
import HotelCard from './HotelCard';

function App() {
  const [count, setCount] = useState(data);

  const removeItem = (id) => {
    let newCount = count.filter(count => count.id !== id);
    setCount(newCount);
  }

  return (
  <div>
    <div className='container'>
      <h1>NYC top {count.length} hotels</h1>
    </div>
    
    {count.map((element => (
      <HotelCard 
      key={element.id}
      element= {element}
      removeItem={removeItem}
      />
    )))}

    <div className='container'>
          <button className='btn' onClick={() => setCount([]) }>Delete all</button>
    </div>
  </div>
  )
}

export default App
