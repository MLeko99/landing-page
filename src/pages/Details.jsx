import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import proljece from "../assets/proljece.jpeg";
import ljeto from "../assets/ljeto.jpeg";
import jesen from "../assets/jesen.jpeg";
import zima from "../assets/zima.jpeg";

const Details = () => {
  return (
    <div>
      <h1>Details</h1>
      <div className="carousel-wrapper">
        <Carousel>
          <div>
            <img src={proljece} alt="" />
          </div>
          <div>
            <img src={ljeto} alt="" />
          </div>
          <div>
            <img src={jesen} alt="" />
          </div>
          <div>
            <img src={zima} alt="" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Details;
