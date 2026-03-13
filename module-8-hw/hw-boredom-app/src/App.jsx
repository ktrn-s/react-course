import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [showActivity, setShowActivity] = useState("");
  const [showType, setShowType] = useState("");
  const [participants, setParticipants] = useState("");
  
  const getRes = async () => {
      const response = await fetch("https://bored.api.lewagon.com/api/activity/");
      const data = await response.json();
      console.log(data);
      setShowActivity(data.activity)
      setShowType(data.type)
      setParticipants(data.participants)
  };

  useEffect(() => {
    getRes();
  }, []);

  return (
    <div className='container'> 
      <h1 className='heading'>Bored? 🤔</h1>

      <div className='act-card'>
        <h3>{showActivity}</h3>
        
        <div className="info">
          <p><span>Type:</span> {showType}</p>
          <p><span>Participants:</span> {participants}</p>
      </div>
        <button
        className="btn"
        onClick={getRes}>Suggest Something Else </button>
      </div>
    </div>
  )
}

export default App
