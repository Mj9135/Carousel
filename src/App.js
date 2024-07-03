import React from "react";
import Carousel, { CarouselItem } from "./Carousel";
import image1 from "./assets/image1.png";
import image2 from "./assets/image2.png";
import image3 from "./assets/image3.png";
import image4 from "./assets/image4.png";
import image5 from "./assets/image5.png";
import image6 from "./assets/image6.png";
import image7 from "./assets/image7.png";
import image8 from "./assets/image8.png";
const Slide = ({ src, alt }) => (
  <div>
    <img src={src} alt={alt} />
  </div>
);

export default function App() {
  return (
    <Carousel>
      <CarouselItem>
        <Slide src={image1} alt="Slide 1" />
      </CarouselItem>
      <CarouselItem>
        <Slide src={image2} alt="Slide 2" />
      </CarouselItem>
      <CarouselItem>
        <Slide src={image3} alt="Slide 3" />
      </CarouselItem>
      <CarouselItem>
        <Slide src={image4} alt="Slide 4" />
      </CarouselItem>
      <CarouselItem>
        <Slide src={image5} alt="Slide 5" />
      </CarouselItem>
      <CarouselItem>
        <Slide src={image6} alt="Slide 6" />
      </CarouselItem>
      <CarouselItem>
        <Slide src={image7} alt="Slide 7" />
      </CarouselItem>
      <CarouselItem>
        <Slide src={image8} alt="Slide 8" />
      </CarouselItem>
    </Carousel>
  );
}

// hii mj
