import './index.css'
import { Link } from "react-router-dom";


export default function Header () {
  return (
    <header>
      <nav><h1>Games Night</h1></nav>
      <p><nav className='navbar'>
      <Link to="/">Home</Link>  
      <Link to="/gamesform">Registration Form</Link>
      <Link to="/posts">Attendees</Link>
      </nav>
      </p>
    </header>
  );
}
