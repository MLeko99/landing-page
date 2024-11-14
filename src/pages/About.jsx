import React from "react";
import dummyImage from "../assets/dummy.png";

const About = () => {
  return (
    <div>
      <h1>About</h1>

      <div className="about-content-wrapper">
        <img src={dummyImage} alt="Dummy" />
        <div className="text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
          veritatis itaque quisquam inventore omnis, perspiciatis aliquam et
          maxime enim unde eaque non laudantium ab voluptas quaerat optio
          laboriosam magnam aspernatur! Ipsum id eligendi sunt unde corporis
          fuga repellat nesciunt atque est dolor eveniet cumque doloremque
          veniam, fugiat facilis nisi sit ad odit fugit. Dolore eveniet unde
          dolores excepturi atque vel!
        </div>
      </div>
    </div>
  );
};

export default About;
