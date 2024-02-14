import { useState } from "react"


export const HeroHome = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  const heroStyles = {
    width: '100%',
    height: '749px',
    margin: '100px auto 1rem auto',
    position: 'relative'
  }
  const slideStyles = {
    width: '100%',
    height: '100%',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundImage: `url(${slides[current].url})`
  };

  const leftArrowStyles = {
    position: 'absolute',
    top: '50%',
    left: '32px',
    transform: 'translate(-50%, -50%)',
    fontSize: '45px',
    color: '#fff',
    zIndex: 1,
    cursor: 'pointer'
  }
  const rightArrowStyles = {
    position: 'absolute',
    top: '50%',
    right: '32px',
    transform: 'translate(-50%, -50%)',
    fontSize: '45px',
    color: '#fff',
    zIndex: 1,
    cursor: 'pointer'
  }
  const goToPrevious = () => {
    const isFirstSlide = current === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : current - 1;
    setCurrent(newIndex)
  }
  const goToNext = () => {
    const isLastSlide = current === slides.length - 1;
    const newIndex = isLastSlide ? 0 : current + 1;
    setCurrent(newIndex)
  }


  return (
    <div style={heroStyles}>
      <div style={slideStyles}>
        <div style={leftArrowStyles} onClick={goToPrevious}>
          <i className="fa fa-angle-left"></i>
        </div>
        <div style={rightArrowStyles} onClick={goToNext}>
          <i className="fa fa-angle-right"></i>
        </div>
      </div>
    </div>
  )
}