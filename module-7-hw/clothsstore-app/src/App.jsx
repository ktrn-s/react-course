import About from './About';
import Shop from './Shop';
import Contact from './Contact';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css'


function App() {
  return (
      <Router>
        <nav>
          <Link to="/shop" className='link'>Shop</Link>
          <Link to="/about" className='link'>About</Link>
          <Link to="/contact" className='link'>contact us</Link>
        </nav>
        <Routes>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
  )
}

export default App;
