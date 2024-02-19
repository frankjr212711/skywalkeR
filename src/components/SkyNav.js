

import { Link } from "react-router-dom";
import { Hero } from "../Hero";
import "./SkywalkerNav.css";


const slides = [
  { url: "images/sky-img-02.jpg", title: "sky_img_01" },
  { url: "images/sky-img-04.jpg", title: "sky_img_02" },
  { url: "images/sky-img-03.jpg", title: "sky_img_03" },
  { url: "images/sky-img-01.jpg", title: "sky_img_04" },
];

export const SkyNav = () => {
  return (
    <>
      <div className="sky_section">
        <div className="nav_content">
          <div className="sky_banners">
            <div className="top_banner">
              <div className="top_banner_content">
                <div className="title">
                  <h3>Quality Waters delivered across Ghana</h3>
                </div>
                <div className="socials">
                  <Link to="" data-tooltip="@skywalkerghana">
                    <i className="fa-brands fa-facebook-f"></i>
                  </Link>
                  <Link to="" data-tooltip="@skywalkerghana">
                    <i className="fa-brands fa-twitter"></i>
                  </Link>
                  <Link>
                    <i className="fa-brands fa-tiktok"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="mid_banner">
              <div className="mid_banner_content">
                <div className="logo-box">
                  <i className="fa fa-snowflake"></i>
                  {/* <img src="" alt="skywalker_logo" /> */}
                  <h1 className="sky_title">SKYWALKER</h1>
                  <span>water never tasted so good...</span>
                </div>

                <div className="info">
                  <div className="email" data-tooltip="info@skywalkerghana.com">
                    <Link to="mailto:info@skywalkerghana.com">
                      <i className="fa fa-envelope"></i>
                      <span>EMAIL</span>
                    </Link>
                  </div>
                  <div className="hours" data-tooltip="Mon - Fri Every Week">
                    <i className="fa fa-clock"></i>
                    <span>09:00 am - 5:00 pm</span>
                  </div>

                  <div className="phone" data-tooltip="CALL SALES">
                    <i className="fa fa-phone"></i>
                    <span>+233 593 063 919</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="third_banner">
              <div className="third_banner_content">
                <div className="nav">
                  <ul>
                    <li>
                      <Link to="#">
                        WATERS
                        <i className="fa fa-caret-down"></i>
                      </Link>
                      <div className="mega_drop_menu">
                        <div className="mega_drop_content">
                          <div className="item"></div>
                          <div className="item"></div>
                          <div className="item"></div>
                        
                        </div>
                      </div>
                    </li>
                    <li>
                      <Link to="#">
                        MORE INFORMATION
                        <i className="fa fa-caret-down"></i>
                      </Link>
                      <div className="mega_drop_menu_more">
                        <Link to='/terms'>Terms & Condition</Link>
                        <Link to='/delivery'>Delivery Services</Link>
                        <Link to='/other'>Other</Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </>
  );
};
