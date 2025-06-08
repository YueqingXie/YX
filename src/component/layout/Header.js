import React from 'react';

const Header = () => {
  return (
    <header>
      <nav className="nav-wrapper black">
        <div className="container">
          <a href="/" className="brand-logo">
            <span>Y.X.</span>
          </a>

          <a href="#" className="sidenav-trigger" data-target="mobile-menu">
            <i className="material-icons">menu</i>
          </a>

          <ul className="right hide-on-med-and-down">
            <li><a href="/travel">Travel</a></li>
            <li><a href="/dance">Dance</a></li>
            <li><a href="/music">Music</a></li>
            <li><a href="/calligraphy">Calligraphy</a></li>
            <li><a href="/procreate">Porcreate</a></li>

            <li>
              <a href="https://www.instagram.com/Ahri0126" target="_blank" rel="noopener noreferrer" className="btn-floating btn-small transparent">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UClv5NmxBvWIjid8crocDvZQ" target="_blank" rel="noopener noreferrer" className="btn-floating btn-small transparent">
                <i className="fab fa-youtube"></i>
              </a>
            </li>
          </ul>

          <ul className="sidenav grey lighten-2" id="mobile-menu">
            <li><a href="/travel" className="sidenavtext">Travel</a></li>
            <li><a href="/dance" className="sidenavtext">Dance</a></li>
            <li><a href="/music" className="sidenavtext">Music</a></li>
            <li><a href="/calligraphy" className="sidenavtext">Calligraphy</a></li>
            <li><a href="/porcreate" className="sidenavtext">Procreate</a></li>
            <li><a href="/#aboutmenav" className="sidenavtext">About Me</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
