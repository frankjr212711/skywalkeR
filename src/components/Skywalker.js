import { Link } from 'react-router-dom';
import { Nav } from '../Nav';
export const Skywalker = () => {
  return (

    <>

   
    <div className="sky_content">
      <div className="content">
        <div className="sky_banners">
          

          <div className="top_banner">
            <div className="top_banner_content">
              <div className="title">
                <h3>Quality Waters delivered accross Ghana</h3>
              </div>
              <div className="socials">
                <i className="fa fa-envelope"></i>
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-tiktok"></i>
              </div>
            </div>
          </div>

          <div className="mid_banner">
            <div className="mid_banner_content">
           
                <div className="logo-box">
                  <i className="fa fa-snowflake"></i>
                  {/* <img src="" alt="skywalker_logo" /> */}
                  <h2>SKYWALKER</h2>
                  <span>water never tasted so good...</span>
                </div>
              
              <div className="info">
                
                <div className="email">
                  <i className="fa fa-envelope"></i>
                  <span>EMAIL</span>
                </div>

                <div className="hours">
                  <i className="fa fa-clock"></i>
                  <span>09:00 - 17:00</span>
                </div>

                <div className="phone">
                  <i className="fa fa-phone"></i>
                  <span>+233 245 855 385</span>
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
                  </li>
                  <li>
                    <Link to="#">MORE INFORMATION
                      <i className="fa fa-caret-down"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            </div>
            
        </div>

        </div>


        {<SkyHero/>}
      </div>
    </>


    
  );
};


const SkyHero = () => {
  return (
    <div className='sky-hero'>
      skyHero
    </div>
  )
}