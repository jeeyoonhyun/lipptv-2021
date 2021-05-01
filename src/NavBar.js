import Logo from './Logo'

function NavBar() {
  return (
      <nav className="nav-bar">
          <a href="/" className="nav-links">
            <Logo></Logo>
          </a>

          <ul className="nav-links">
          <li>
            <a href='#about' className="nav-section text-big about">ABOUT</a>
          </li>
          <li>
            <a href='#program' className="nav-section text-big program" >PROGRAM</a>
          </li>
          <li>
            <a href='#credits' className="nav-section text-big credits">CREDITS</a>
          </li>
        </ul>
    </nav>
  );
}

export default NavBar;
