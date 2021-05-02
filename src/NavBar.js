import Logo from './Logo'

function NavBar(props) {
  return (
      <nav className="nav-bar">
        <a href="." className="logo-link">
          <Logo></Logo>
        </a>

        {/* <ul><div className='live-now text-big'>&nbsp;&nbsp;&nbsp;</div><div className='live-now text-big'>LIVE</div></ul> */}

        <ul className="nav-links">
          <li>
            <div onClick={() => props.onNavClick('#about')} className="nav-section text-big about">ABOUT</div>
          </li>
          <li>
            <div onClick={() => props.onNavClick('#program')} className="nav-section text-big program" >PROGRAM</div>
          </li>
          <li>
            <div onClick={() => props.onNavClick('#credits')} className="nav-section text-big credits">CREDITS</div>
          </li>
        </ul>
    </nav>
  );
}

export default NavBar;
