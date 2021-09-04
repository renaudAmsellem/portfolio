import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ResponsiveCarousel = ({ children, ...props }) => {
  return (
    <Carousel
      {...props}
      autoplay={false}
      swipeable={true}
      emulateTouch={true}
      showStatus={false}
      showThumbs={false}
      showArrows={false}
    >
      {children}
    </Carousel>
  );
};

export default ResponsiveCarousel;
