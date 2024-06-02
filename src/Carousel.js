import React, { useEffect, useRef, useState } from "react";
import "./Carousel.css";

export const CarouselItem = ({ children, width }) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      {children}
    </div>
  );
};

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swipe = useRef({});
  const numItemsToShow = 4; // Number of items to show at a time
  const totalItems = React.Children.count(children);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = totalItems - numItemsToShow; // Go to the last set of items
    } else if (newIndex >= totalItems) {
      newIndex = 0; // Loop back to the first set of items
    }
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateIndex(activeIndex + numItemsToShow);
    }, 10000); // 30 seconds interval
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [activeIndex]);

  const onTouchStart = (e) => {
    const touch = e.touches[0];
    swipe.current = { x: touch.clientX };
    console.log("TOUCH >>>> START");
  };

  const onTouchMove = (e) => {
    if (e.changedTouches && e.changedTouches.length) {
      swipe.current.swiping = true;
    }
    console.log("TOUCH >>>> MOVE");
  };

  const onTouchEnd = (e) => {
    const touch = e.changedTouches[0];
    const swipedLeft = touch.clientX - swipe.current.x > 0 ? true : false;
    const swipedRight = touch.clientX - swipe.current.x > 0 ? false : true;
    const absX = Math.abs(touch.clientX - swipe.current.x);
    if (swipe.current.swiping && absX > 50) {
      if (swipedLeft) {
        updateIndex(activeIndex - numItemsToShow);
      } else if (swipedRight) {
        updateIndex(activeIndex + numItemsToShow);
      }
    }
    swipe.current = {};
    console.log("TOUCH >>>> END");
  };

  return (
    <div
      className="carousel"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div
        className="inner"
        style={{
          transform: `translateX(-${(activeIndex * 100) / numItemsToShow}%)`,
        }}
      >
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, {
            width: `${100 / numItemsToShow}%`,
          });
        })}
      </div>
    </div>
  );
};

export default Carousel;
