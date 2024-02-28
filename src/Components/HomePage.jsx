import React from "react";
import { Link } from 'react-router-dom';
import MyImg from '../IMG/unnamed.jpg'; // Importing image
import '../Styles/HomePage.css'; 

// Functional component for the homepage
const HomePage = () => {
  return (
    <div className="container-fluid">
      <div className="row vh-100"> 
        <div className="col-12 homepage-container-background d-flex align-items-start">
          <div className="text-left p-5 mt-5">
            <div className="homepage position-relative p-0 m-0 overflow-hidden">
              <div className="homepage__row row m-0 justify-content-center" >
                <div className="homepage__col col homepage__content">
                  <div className="homepage__row align-items-center justify-content-center">
                    {/* Content Column */}
                    <div className="homepage__col-lg-6 col-12 mb-4 text-center text-lg-right">
                      {/* Title */}
                      <h1 className="homepage__title display-4 center-text">Welcome to My Portfolio</h1>
                      {/* Subtitle */}
                      <p className="homepage__subtitle lead center-text">Let's Get To Know Each Other!</p>
                      {/* Link to List Page */}
                      <Link to="/list">
                        <button className="homepage__btn btn btn-primary">Go to Resume</button>
                      </Link>
                    </div>
                    {/* Image Column */}
                    <div className="homepage__col-lg-6 col-12 mb-4 text-center text-lg-left position-relative">
                      {/* Large Image Container (visible on large screens) */}
                      <div className="homepage__img-container-lg img-container-lg d-none d-lg-block float-lg-right">
                        {/* Image */}
                        <img src={MyImg} alt="Logo" className="homepage__img img-fluid"/>
                      </div>
                      {/* Small Image Container (visible on small screens) */}
                      <div className="homepage__img-container-sm img-container-sm d-block d-lg-none text-center mb-4">
                        {/* Image */}
                        <img src={MyImg} alt="Logo" className="homepage__img img-fluid" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
  );
}

export default HomePage;
