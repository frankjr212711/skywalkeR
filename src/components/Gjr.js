import { Hero } from '../Hero';
import './Gjr.css';

const slides = [
  {url: 'images/gjr-img-01.jpg', title: 'sky_img_01'},
  {url: 'images/gjr-img-02.jpg', title: 'sky_img_02'},
  {url: 'images/gjr-img-03.jpg', title: 'sky_img_03'},
  {url: 'images/gjr-img-04.jpg', title: 'sky_img_04'}
]


export const Gjr = () => {

  return (
    <div className='gjr_nav_section'>
      <div className="gjr_nav_content">
        <div className="banners">
          <div className="gjr_top_banner">
          <div className="gjr_logo">
            LOGO
          </div>
          <div className="gjr_text">
            GJR COMPANY LIMITED
          </div>
          <div className="gjr_contact">
            <span>+233</span>
          
          </div>
          </div>
        
        </div>
      </div>
      




      <Hero slides={slides}/>
    </div>
  )
}