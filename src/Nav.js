
import {useState} from 'react'

export const Nav = () => {

    const [open, setOpen] = useState(false);
  
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
      </nav>
    );
  };
