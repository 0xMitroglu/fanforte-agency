import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CustomLeftArrow, CustomRightArrow } from "./CustomArrows";

const CarouselComponent = () => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={3000}
      transitionTime={500}
      renderArrowPrev={(onClickHandler, hasPrev) =>
        hasPrev && <CustomLeftArrow onClick={onClickHandler} />
      }
      renderArrowNext={(onClickHandler, hasNext) =>
        hasNext && <CustomRightArrow onClick={onClickHandler} />
      }
      renderThumbs={() => {}} // Disable the default thumbnail navigation
      centerMode={true} // Enable center mode to display two images at a time
      centerSlidePercentage={100}
    >
      <div className="slide-pair">
        <div className="slide-image">
          <img
            src="images/model_ava.jpg"
            alt="OF model Ava"
            className="carousel__img"
          />
        </div>
        <div className="slide-image">
          <img
            src="images/model_sabrina.jpg"
            alt="OF model Sabrina"
            className="carousel__img"
          />
        </div>
      </div>
      <div className="slide-pair">
        <div className="slide-image">
          <img
            src="images/model_matilda.png"
            alt="OF model Matilda"
            className="carousel__img"
          />
        </div>
        <div className="slide-image">
          <img
            src="images/model_thafi.jpg"
            alt="OF model Thafi"
            className="carousel__img"
          />
        </div>
      </div>
      <div className="slide-pair">
        <div className="slide-image">
          <img
            src="images/model_lily2.png"
            alt="OF model Lily"
            className="carousel__img"
          />
        </div>
        <div className="slide-image">
          <img
            src="images/model_carolina.jpg"
            alt="OF model Carolina"
            className="carousel__img"
          />
        </div>
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
