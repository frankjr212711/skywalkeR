import { Hero } from "./Hero";
import { Link } from "react-router-dom";

const slides = [
  { url: "images/gjr-img-01.jpg", title: "sky_img_01" },
  { url: "images/gjr-img-02.jpg", title: "sky_img_02" },
  { url: "images/gjr-img-03.jpg", title: "sky_img_03" },
  { url: "images/gjr-img-04.jpg", title: "sky_img_04" },
];

export const GjrNavbar = () => {
  return (
    <>
      <div className="gjr_nav_section">
        
        <div className="content">
          
          <div className="gjr_banners">
            <div className="gjr_top_banner">
              <div className="gjr_top_banner_content">
                <Link to="/gjr">
                  <div className="gjr_logo_box">
                    {/* <img src="" alt="" /> */}
                    <h1>LOGO</h1>
                  </div>
                </Link>
                <div className="gjr_contact">
                  <p>
                    <Link to="mailto:info@gjrghana.com">
                      <span>
                        <i className="fa fa-envelope"></i>
                        info@gjrghana.com
                      </span>
                    </Link>
                  </p>
                  <p>
                    <span>
                      <i className="fa fa-phone"></i>
                      +233 244 250 280 | +233 209 915 946
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="gjr_mid_banner">
              <div className="mid_banner_content">
                <div className="gjr_mid_banner_text">
                  <h1 className="gjr_title">
                    G<span>J</span>R COMPANY LIMITED
                  </h1>
                </div>
                <div className="gjr_nav_links">
                  <ul>
                    <li>
                      <Link to="/https://www.facebook.com">
                        <i className="fa-brands fa-facebook-f"></i>
                        {/* Kitchens */}
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.instagram.com">
                        <i className="fa-brands fa-instagram"></i>
                        {/* Wardrobes */}
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.twitter.com">
                        <i className="fa-brands fa-twitter"></i>
                        {/* TV Units */}
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.tiktok.com">
                        <i className="fa-brands fa-tiktok"></i>
                        {/* Vanity Units */}
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="gjr_comp_link">
                        Get Quote
                        {/* Company */}
                        {/* <i className="fa fa-caret-down"></i> */}
                      </Link>
                      {/* <div className="gjr_company_drop">
              <Link className='gjr_company_drop_link'>Construction</Link>
            </div> */}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="gjr_third_banner">
              <div className="third_banner_content">
                <div className="gjr_nav_items">
                  <ul>
                    <li>
                      <span>
                        Fitted Wardrobes
                        <div className="fa fa-angle-down"></div>
                      </span>
                      <div className="gjr_mega_drop_menu">
                        <div className="mega_drop_menu_content">
                          <div className="card">
                            <div className="card_img_box">
                              <img src="images/gjr-img-01.jpg" alt="" />
                            </div>
                            <div className="card_title"></div>
                            <div className="specs">
                              <a href="">Styles</a>
                              <a href="">Handles</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      Sliding Wardrobes
                      <div className="fa fa-angle-down"></div>
                    </li>
                    <li>
                      Home Office
                      <div className="fa fa-angle-down"></div>
                    </li>
                    <li>
                      Fitted Living
                      <div className="fa fa-angle-down"></div>
                    </li>
                    <li>
                      Understairs
                      <div className="fa fa-angle-down"></div>
                    </li>
                    <li>
                      Awkward Spaces
                      <div className="fa fa-angle-down"></div>
                    </li>
                    <li>
                      Why GJR
                      <div className="fa fa-angle-down"></div>
                      {/* <div className="gjr_mega_drop_menu"></div> */}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="gjr_fourth_banner">
              <div className="fourth_banner_content">
                <ul>
                  <li>
                    <Link to="/book_visit">
                      <h5>BOOK A FREE DESIGN VISIT</h5>
                    </Link>
                  </li>
                  <li>
                    <Link to="/brochure">
                      <h5>REQUSET A BROCHURE</h5>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>


          </div>


        </div>

        <Hero slides={slides} />
      </div>
    </>
  );
};