import './style.css';

function Header() {
  return (
      <header>
      <div className = "y-wrap">
        <nav className="navs">
          <p>Home</p>
          <ul>
            <li>Search</li>
            <li>About</li>
            <li>Login</li>
          </ul>
        </nav>
      </div>
      </header>
  );
}

export default Header;
