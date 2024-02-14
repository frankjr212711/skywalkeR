import { HeroHome } from '../HeroHome';

const slides = [
  {url: 'images/sky-img-01.jpg', title: 'sky_img_01'},
  {url: 'images/sky-img-02.jpg', title: 'sky_img_02'},
  {url: 'images/sky-img-03.jpg', title: 'sky_img_03'},
  {url: 'images/sky-img-04.jpg', title: 'sky_img_04'}
]

export const Home = () => {
  return (
    <div>
      <HeroHome slides={slides}/>
      
    <div className="home_content">
      <div className="content">
        <div className="home_banners">
          <div className="content">
            <div className="title">
              {/* <h3>Quality Waters delivered accross Ghana</h3> */}
            </div>
            <div className="socials">
              {/* <i className="fa-brand fa-facebook"></i> */}
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}