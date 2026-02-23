import { Component } from 'react'
import './App.css'

export class App extends Component {
  constructor() {
    super();

    this.state = {
    name: "Alla"
  }
  }
  updateName() {
    this.setState({name: "Emily"})
  }

  render(){
    return(
      <div>
        <h1>Hello {this.state.name}</h1>
        <button onClick={() => this.updateName()}>click</button>
      </div>
    )
  }
}
  

export default App
