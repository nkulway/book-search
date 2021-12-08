import { NavLink } from 'react-router-dom';
import './style.css';

function Header() {
  return (
      <header>
      <div className = "y-wrap">
        <nav className="navs">
          <NavLink to="/">Home</NavLink>
          <ul>
            <li>
            <NavLink to="/search">Search</NavLink>
              </li>
            <li>
            <NavLink to="/about">About</NavLink>
              </li>
            <li>
            <NavLink to="/login">Login</NavLink>
              </li>
              <li>
              <NavLink to="/redux">Redux</NavLink>
              </li>
          </ul>
        </nav>
      </div>
      </header>
  );
}

export default Header;
