
function ShowSlides({data, place, previousPlace, nextPlace, addToList}) {
    const { name, toDo, image} = data[place];
return(
    <div>
        <div className='slidesBox'>
            <div className=''>
                <h2>{name}</h2>
            </div>
            <div className=''>
                <img src={image} alt=" photo" width="700px" />
            </div>
            <div className=''>
                <p>{toDo} </p>
            </div>
            <div className=''>
                <button className="btn" onClick={previousPlace}>Previous</button>
                <button className="btn" onClick={addToList}>Add to my list</button>
                <button className="btn" onClick={nextPlace}>Next</button>
            </div>
        </div> 
    </div>
    )
}

export default ShowSlides;
