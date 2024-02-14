import { Hero } from '../Hero';

const slides = [
  {url: 'images/gjr-img-01.jpg', title: 'sky_img_01'},
  {url: 'images/gjr-img-02.jpg', title: 'sky_img_02'},
  {url: 'images/gjr-img-03.jpg', title: 'sky_img_03'},
  {url: 'images/gjr-img-04.jpg', title: 'sky_img_04'}
]


export const Gjr = () => {
  return (
    <div>
      Gjr




      <Hero slides={slides}/>
    </div>
  )
}