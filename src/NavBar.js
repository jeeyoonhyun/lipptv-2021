function NavBar() {
  return (
      <nav className="nav-bar block">
          <a href="#home" className="nav-logo">
            <img src="logo.png" alt="LIPP TV logo" />
          </a>

          <ul className="nav-links">
          <li>
            <a href='#about' className="nav-section about">ABOUT</a>
          </li>
          <li>
            <a href='#program' className="nav-section program" >PROGRAM</a>
          </li>
          <li>
            <a href='#credits' className="nav-section credits">CREDITS</a>
          </li>
        </ul>
    </nav>
  );
}

export default NavBar;
