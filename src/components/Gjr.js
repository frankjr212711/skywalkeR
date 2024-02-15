import { Link } from 'react-router-dom';
import { Hero } from "../Hero";
import "./Gjr.css";

const slides = [
  { url: "images/gjr-img-01.jpg", title: "sky_img_01" },
  { url: "images/gjr-img-02.jpg", title: "sky_img_02" },
  { url: "images/gjr-img-03.jpg", title: "sky_img_03" },
  { url: "images/gjr-img-04.jpg", title: "sky_img_04" },
];

export const Gjr = () => {
  return (
    <div className="gjr_nav_section">
      <div className="gjr_banners">
        
        <div className="gjr_top_banner">
          <div className="gjr_top_banner_content">
            <div className="gjr_logo_box">
              {/* <img src="" alt="" /> */}
              <h1>LOGO</h1>
            </div>
            {/* <div className="text">
              <h1>top banner</h1>
            </div> */}
           
            <div className="gjr_contact">
            <p>
                <span>
                  <i className="fa fa-envelope"></i>
                  info@gjrghana.com
                </span>
              </p>   
              <p>
                <span>
                  <i className="fa fa-phone"></i>
                  +233 244 250 280 || 0209 915 946
                </span>
              </p> 
              
            </div>
          </div>

        </div>

        <div className="gjr_mid_banner">
          <div className="mid_banner_content">
            <div className="gjr_mid_banner_text">
              <h1 className="gjr_title">
                G<span>J</span>R COMPANY LIMITED</h1>
            </div>

            <div className="media">
            <Link><i className="fa-brands fa-facebook-f"></i> </Link>
            <Link><i className="fa-brands fa-instagram"></i> </Link>
            <Link><i className="fa-brands fa-twitter"></i> </Link>
            <Link><i className="fa-brands fa-tiktok"></i> </Link>
            </div>
          </div>
        </div>
      </div>

      <Hero slides={slides} />
    </div>
  );
};
