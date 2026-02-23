import { useState } from 'react'
import { data } from './data';
import Cloths from './Cloths';
import Buttons from './Buttons';
import './App.css'


function Shop() {
    const [clothes, setClothes] = useState(data);

    const chosenClothes = (searchTerm) => {
    const newClothes = data.filter(element => element.searchTerm === searchTerm);
    setClothes(newClothes);
    }

    return (
    <div>
        <div className='cont'>
            <h2 className='back'>Free Standard Shipping</h2>
        </div>
        <Buttons filteredClothes={chosenClothes}/>
        <Cloths anyClothesItem={clothes}/>
    </div>
    )
}

export default Shop;
