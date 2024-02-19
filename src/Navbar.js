import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [click, setClick] = useState(true);

  const closeMenu = () => {
    setOpen(false);
  };
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
          
          <div className="logo_box">
            <Link to="/">
              <i className="fa fa-search"></i>
            </Link>
          </div>

          <div className="nav_links">
            <ul>
              <li className="link">
                <Link to="/about">Why Us?</Link>
              </li>
              <li className="link">
                <span>
                  <Link to="#">Our Companies</Link>
                </span>
                <div className="nav_mega_drop_menu">
                  <div className="nav_mega_drop_menu_content">
                    
                    <div className="mega_nav_item">
                    <Link to='/skywalker'>
                        Skywalker Company Limited
                      </Link>

                    </div>
                    <div className="mega_nav_item">
                    <Link to='/gjr'>
                        GJR Company Limited
                      </Link>
                    </div>
                    <div className="mega_nav_item">
                    <Link to='/librex'>
                        Librex Holding
                      </Link>
                    </div>
                  </div>
                  
                </div>
              </li>
              <li className="link">
                <Link to="/company" className="drop_link">
                  Company
                </Link>
                <div className="drop_menu">
                  <Link to="/about" className="drop_link">
                    About Us
                  </Link>
                  <Link to="/contact" className="drop_link">
                    Contact
                  </Link>
                  <Link to="/careers" className="drop_link">
                    Careers
                  </Link>
                </div>
              </li>
            </ul>
          </div>

          <div className="menu-btn" onClick={() => setOpen(!open)}>
            <span></span>
            <span></span>
          </div>
        </div>



      </div>
      
      



    </nav>
  );
};
