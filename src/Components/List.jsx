import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../Styles/List.css';

function List() {
  // the visibility of information fields
  const [activeButton, setActiveButton] = useState(null);

  // Function to toggle the visibility of information fields
  const toggleInfoVisibility = (variant) => {
    setActiveButton(variant === activeButton ? null : variant);
  };

  // to render information based on active button
  const renderInformation = () => {
    switch (activeButton) {
      case 'primary':
        return (
          <div className="list__infos_info active">
            <h3 className="list__infos_title">Education</h3>
            <h3 className="list-homepage-container_title">2023 to present</h3>
              <h4 className="list-homepage-container_subtitle">TECHIN</h4>
              <p className="list-homepage-container_content">Full Stack Developer</p>
              <p className="list-homepage-container_content">Development of web applications using React, Node.js, MongoDB, Linux, SCRUM, Agile and SQL.</p>
              <h3 className="tlist-homepage-container_title">2017 to 2021</h3>
              <h4 className="list-homepage-container_subtitle">Vilnius College of Technologies and Design</h4>
              <p className="list-homepage-container_content">Civil Engineering Systems </p>
              <p className="list-homepage-container_content">Bachelor's degree</p>
              <h3 className="tlist-homepage-container_title">2014 to 2016</h3>
              <h4 className="list-homepage-container_subtitle">Vilnius University</h4>
              <p className="text-container__content">Cognitive Sciences</p>
              <p className="text-container__content">Master's degree</p>
          </div>
        );
      case 'secondary':
        return (
          <div className="list__infos_info active">
            <h3 className="list__infos_title">Work Experience</h3>
            <h5>November 2021 to January 2024</h5>
            <p className="list__infos_content">UAB "Naresta" - Head of Supply/Warehouse/IT</p>
            <h5>May 2019 to October 2021</h5>
            <p className="list__infos_content">UAB "Carglass" - Service Group Manager</p>
          </div>
        );
      case 'success':
        return (
          <div className="list__infos_info active">
            <h3 className="list__infos_title">Courses</h3>
            <p className="list__infos_content">Medical Assistance - Lithuanian Armed Forces</p>
            <p className="list__infos_content">Coach Qualification - Lithuanian Wrestling Federation</p>
          </div>
        );
      case 'warning':
        return (
          <div className="list__infos_info active">
            <h3 className="list__infos_title">Organizations</h3>
            <p className="list__infos_content">Lithuanian Riflemen's Union - Team Leader</p>
          </div>
        );
      case 'danger':
        return (
          <div className="list__infos_info active">
            <h3 className="list__infos_title">About Me</h3>
            <p className="list__infos_content">My strengths are quick orientation and determination, empathy, communicability.</p>
            <p className="list__infos_content">In my free time, I communicate with relatives, read scientific literature, promote combat sports and a healthy lifestyle, and go on solo motorcycle trips.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="list__container">
      <div className="list">
        <h1 className="list__title text-center ">Resume</h1>
        <div className="row-1">
          <div className="col-6">
            <div className="list__buttons">
              <Button variant="primary" className={`list__button list__button--primary ${activeButton === 'primary' ? 'active' : ''}`} onClick={() => toggleInfoVisibility('primary')}>
                Education
              </Button>
              <Button variant="secondary" className={`list__button list__button--secondary ${activeButton === 'secondary' ? 'active' : ''}`} onClick={() => toggleInfoVisibility('secondary')}>
                Work Experience
              </Button>
              <Button variant="success" className={`list__button list__button--success ${activeButton === 'success' ? 'active' : ''}`} onClick={() => toggleInfoVisibility('success')}>
                Courses
              </Button>
              <Button variant="warning" className={`list__button list__button--warning ${activeButton === 'warning' ? 'active' : ''}`} onClick={() => toggleInfoVisibility('warning')}>
                Organizations
              </Button>
              <Button variant="danger" className={`list__button list__button--danger ${activeButton === 'danger' ? 'active' : ''}`} onClick={() => toggleInfoVisibility('danger')}>
                About Me
              </Button>
            </div>
          </div>
        </div>
        <div className="list__infos">
          {renderInformation()}
        </div>
      </div>
    </div>
  );
}

export default List;