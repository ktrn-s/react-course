import { useState } from 'react';
import { data } from './data'
import './App.css'
import ShowSlides from './ShowSlides'
import HandleList from './List'

function App() {
  const [place, setPlace] = useState(0);
  const [addList, setAddList] = useState([]);
  
  const removeItem = (id) => {
    let newCount = addList.filter(addList => addList.id !== id)
    setAddList(newCount);
  }

  const previousPlace = () => {
    setPlace((place => {
        place --;
        if (place < 0){
        return data.length-1;
        }
        return place;
    }))
    }

    const nextPlace = () => {
    setPlace((place => { 
        place ++;
        if (place > data.length - 1) {
        place = 0;
        }
        return place;
    }))
    }

    const addToList = () => {
      const currentPlace = data[place];
      const alreadyAdded = addList.some(item => item.id === currentPlace.id);
      if (!alreadyAdded){
        setAddList([...addList, currentPlace]);
      }
    }

  return (
    <div>
      <div className='container'>
        <div className='box'>
          <h1>Places to visit in Japan</h1>
        </div>
        <p>Japan is a country where tradition meets the latest in technology and fashion, where serene temples contrast with neon-lit city streetscapes, and historic castles, cherry blossoms and futuristic attractions all captivate wide-eyed visitors. This blend of old and new make Japan one of Asia's best countries to visit.</p>
        <div className='box'>
          <h3>So add most desired places you like to visit to your list!</h3>
        </div>
        <ShowSlides 
          data={data}
          place={place}
          previousPlace={previousPlace}
          nextPlace={nextPlace}
          addToList={addToList}
        />
        <div className='box'>
          <h2>My List of {addList.length }: </h2>
        </div>
        {addList.map((element, index ) => (
          <HandleList
            key={element.id}
            element={element}
            removeItem={removeItem}
            index={index}
          />
        ))}
        <div className='box'>
          <button className='btn' onClick={() => setAddList([])}>Delete all</button>
        </div>
      </div>
    </div>
  )
}

export default App;
