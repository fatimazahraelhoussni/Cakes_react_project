import React from "react";
import Slider from "react-slick";
import ava01 from '../../../assets/images/ava-1.jpg'
import ava02 from '../../../assets/images/ava-2.jpg'
import ava03 from '../../../assets/images/ava-3.jpg'
import '../../../styles/slider.css'
const TestimonialSlider = (props) => {
    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
  return <Slider {...settings}>
   <div>
  <p className="review__test">R.F's cakes are simply incredible! Every bite is an explosion of flavors. My guests were delighted, and so was I!</p>
  <div className="slider__content d-flex align-items-center gap-3">
    <img src={ava01} alt="avatar" className="rounded" />
    <h6>John Doe</h6>
  </div>
</div>
<div>
  <p className="review__test">I ordered a custom cake for my daughter's birthday, and it exceeded all our expectations. Beautiful visually, and the taste was simply divine.</p>
  <div className=" slider__content d-flex align-items-center gap-3">
    <img src={ava02} alt="avatar" className="rounded" />
    <h6>Mitchell Marsh</h6>
  </div>
</div>
<div>
  <p className="review__test">The quality and freshness of the ingredients are truly evident. R.F has managed to capture the very essence of artisanal pastry. A real delight with every order.</p>
  <div className="slider__content d-flex align-items-center gap-3">
    <img src={ava03} alt="avatar" className="rounded" />
    <h6>Steven Carlos</h6>
  </div>
</div> 
  </Slider>
};

export default TestimonialSlider;