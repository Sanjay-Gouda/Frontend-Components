import React, { useEffect, useState } from "react";
import { CarouselImages } from "../../constants/carouseldata";
import "./style.css";

function Carousel() {
  const [activeImage, setActiveImage] = useState(0);

  const handleNext = () => {
    setActiveImage((activeImage + 1) % CarouselImages.length);
  };
  const handlePrev = () => {
    if (activeImage === 0) {
      setActiveImage(CarouselImages.length - 1);
    } else {
      setActiveImage(activeImage - 1);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNext();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [activeImage]);

  return (
    <>
      <div className="carousel-wrapper">
        <div>
          <button onClick={handlePrev}>Prev</button>
        </div>
        <div
          className="image-wrappwer"
          // style={{
          //   // transform: `translateX:(-${activeImage * 100}%)`,
          //   transform: `translate(-${activeImage * 100}%)`,
          // }}
        >
          {CarouselImages.map((item, ind) => (
            <>
              <img
                key={ind}
                className="image"
                src={item}
                style={{ display: activeImage === ind ? "block" : "none" }}
                alt="carousal-image"
              />
            </>
          ))}
        </div>
        <div>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    </>
  );
}

export default Carousel;
