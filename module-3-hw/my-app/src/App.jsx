import { useState } from 'react'
import './App.css'
import { ToDo } from './todolist'
import imageTwo from './assets/todo.jpg'

function App() {
  return (
    <div className='App'>
      <div className='wrapper'>
        <img src={imageTwo} alt="imageTwo" width="250px"/>
      </div>
      <div className='wrapper'>
        <h1>Today’s Tasks ✨</h1>
        <p className="subtitle">Small steps. Big results.</p>
      </div>
      <div>
        <ToDo/>
      </div>
    </div>
  )
}

export default App
