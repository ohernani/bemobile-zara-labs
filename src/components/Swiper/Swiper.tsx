import React, { ReactNode, useEffect, useRef, useState } from 'react';

import classes from './Swiper.module.scss';

interface SwiperProps {
  children: ReactNode;
}

export const Swiper = ({ children }: SwiperProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [progress, setProgress] = useState(0);

  const onMouseDown = (e: React.MouseEvent) => {
    if (carouselRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - carouselRef.current.offsetLeft);
      setScrollLeft(carouselRef.current.scrollLeft);
    }
  };

  const onMouseLeave = () => {
    setIsDragging(false);
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    if (carouselRef.current) {
      const x = e.pageX - carouselRef.current.offsetLeft;
      const walk = (x - startX) * 2;
      carouselRef.current.scrollLeft = scrollLeft - walk;
      updateProgress();
    }
  };

  const updateProgress = () => {
    if (carouselRef.current) {
      const maxScrollLeft = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
      const currentScrollLeft = carouselRef.current.scrollLeft;
      const progressPercentage = (currentScrollLeft / maxScrollLeft) * 100;
      setProgress(progressPercentage);
    }
  };

  useEffect(() => {
    updateProgress();
    const handleResize = () => updateProgress();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={classes.swiperRoot}>
      <div
        className={classes.swiperRoot__CardWrapper}
        ref={carouselRef}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        onScroll={updateProgress}
        data-testid="carousel-container"
      >
        {React.Children.map(children, (child, index) => (
          <div key={index}>{child}</div>
        ))}
      </div>
      <div className={classes.swiperRoot__progressBarContainer}>
        <div
          className={classes.swiperRoot__progressBarContainer__progressBar}
          style={{ width: `${progress}%` }}
          data-testid="progress-bar"
        />
      </div>
    </div>
  );
};
