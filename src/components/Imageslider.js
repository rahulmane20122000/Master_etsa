import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from '../assets/images/technology.jpg';
import gaming from "../assets/images/gaming.jpg";
import seminar from "../assets/images/seminar.jpg";


const img_style={
  "width":"100vw",
  "height":"50rem",
  "marginBottom":"0",
  "marginTop":"0"
}
const Imageslider=()=>{
    return(
        <React.Fragment>
            <Carousel>
  <Carousel.Item>
    <img
    style={img_style}
      className="d-block w-100"
      src={img1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Tecnical Event's</h3>
      <p>Event's Worth Play.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      style={img_style}
      className="d-block w-100"
      src={gaming}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Non-Tecnical Event's</h3>
      <p>Gmmers Must Play.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    style={img_style}
      className="d-block w-100"
      src={seminar}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Seminar's</h3>
      <p>Seminars About Technology & Industry's.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </React.Fragment>
    );
}

export default Imageslider;