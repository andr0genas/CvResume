import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '/public/2478.jpg'; // Importing image file
import img2 from '/public/2490.jpg';
import img3 from '/public/4129.jpg';
import img4 from '/public/6841.jpg';
import '../Styles/CarouselAboutMe.css'; // Importing CSS file

const CarouselAboutMe = () => {
  return (
    <div className="carousel-container" style={{ backgroundColor: 'black' }}>
      <Carousel className="carousel-about-me">
        <Carousel.Item>
          <img
            className="carousel-about-me__image d-block img-fluid mx-auto"
            src={img1}
            alt="About me"
          />
          <Carousel.Caption className="carousel-about-me__caption">
            <h3 className="carousel-about-me__title">Lady Mint</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-about-me__image d-block img-fluid mx-auto"
            src={img2}
            alt="doggy"
          />
          <Carousel.Caption className="carousel-about-me__caption">
            <h3 className="carousel-about-me__title">Jackie</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-about-me__image d-block img-fluid mx-auto"
            src={img3}
            alt="I and doggo"
          />
          <Carousel.Caption className="carousel-about-me__caption">
            <h3 className="carousel-about-me__title">I and doggo</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carousel-about-me__image d-block img-fluid mx-auto"
            src={img4}
            alt="warsaw"
          />
          <Carousel.Caption className="carousel-about-me__caption">
            <h3 className="carousel-about-me__title">In Warsaw</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselAboutMe;
