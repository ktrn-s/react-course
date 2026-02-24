
function ShowSlides({data, place, previousPlace, nextPlace, addToList}) {
    const { name, toDo, image} = data[place];
return(
    <div>
        <div className='slidesBox'>
            <div>
                <h2>{name}</h2>
            </div>
            <div>
                <img src={image} alt=" photo" width="700px" />
            </div>
            <div>
                <p>{toDo} </p>
            </div>
            <div>
                <button className="btn" onClick={previousPlace}>Previous</button>
                <button className="btn" onClick={addToList}>Add to my list</button>
                <button className="btn" onClick={nextPlace}>Next</button>
            </div>
        </div> 
    </div>
    )
}

export default ShowSlides;
