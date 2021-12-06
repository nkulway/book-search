import { NavLink } from 'react-router-dom';
import './style.css';

function Header() {
  return (
      <header>
      <div className = "y-wrap">
        <nav className="navs">
          <p>Home</p>
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
          </ul>
        </nav>
      </div>
      </header>
  );
}

export default Header;
