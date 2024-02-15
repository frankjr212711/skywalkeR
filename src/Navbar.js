import './Nav.css';
import { Link } from "react-router-dom";
import { useState } from "react";



export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [click, setClick] = useState(true);

  const closeMenu = () => {
    setOpen(false)
  }
  return (
    <nav>
      <div className="nav_content_tp">
        <div className="content">
          <div className="mail">
            <span>
              <i className="fa fa-envelope"></i>
            </span>
            <span>info@skywalkerghana.com</span>
          </div>
          <div className="contact">
            <i className="fa fa-phone"></i>
            <span>+233 245 853 855 | +233 245 853 855</span>
          </div>
        </div>
      </div>

      <div className="nav_content_dn">
        <div className="content">
          <Link to="/">
            <div className="logo_box">
              <h3>All-in-One</h3>
              {/* <i className="fab fa-typo3"></i> */}
            </div>
          </Link>
          <div className="nav_links">
            <ul>
              <li className="link">
                <Link to="/">Home</Link>
              </li>
              <li className="link">
                <Link to="/skywalker">Skywalker</Link>
              </li>
              <li className="link">
                <Link to="/gjr">Gjr</Link>
              </li>
              <li className="link">
                <Link to="/librex">Librex</Link>
              </li>
              <li className="link">
                <Link to="/fifthstar">Fifthstar</Link>
              </li>
              <li className="link">
                <Link to="/company">
                  Company
                  <i className="fa fa-caret-down"></i>
                </Link>
                <div className="drop_menu">
                  <Link to="/about">About Us</Link>
                  <Link to="/contact">Contact</Link>
                  <Link to="/careers">Careers</Link>
                </div>
              </li>
            </ul>
          </div>

          <div className="menu-btn" onClick={() => setOpen(!open)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>



      <div
        className={open ? "res_nav_content_dn active" : "res_nav_content_dn "}
      >
        <div className="content">
          <header>
            <Link to="/">
              <div className="logo_box">
              <h3>All-in-One</h3>
                {/* <i className="fab fa-typo3"></i> */}
              </div>
            </Link>
            <div className="close-btn" onClick={() => setOpen(!open)}>
              <span></span>
              <span></span>
            </div>
          </header>

          <div className={open ? "nav_links_ active" : 'nav_links_'}>
            <ul>
              <li className="link">
                <Link to="/" onClick={closeMenu}>Home</Link>
              </li>
              <li className="link">
                <Link to="/skywalker" onClick={closeMenu}>Skywalker</Link>
              </li>
              <li className="link">
                <Link to="/gjr" onClick={closeMenu}>Gjr</Link>
              </li>
              <li className="link">
                <Link to="/librex" onClick={closeMenu}>Librex</Link>
              </li>
              <li className="link">
                <Link to="/fifthstar" onClick={closeMenu}>5thStar</Link>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </nav>
  );
};