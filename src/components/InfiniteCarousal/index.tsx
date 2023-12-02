import { Images } from "../../constants/sliderImages";
import "./style.css";

export const InfiniteSlider = () => {
  return (
    <>
      <div className="slider">
        <div className="slide-track">
          {Images.map((img, ind) => (
            <div className="slide" key={ind}>
              <img src={img} height="100" width="250" alt="" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
