import React, { useState } from 'react';
import '../Styles/Rating.css'; // Import CSS file
// import axios from 'axios';  // Have some bugs, temporarily commented out
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Rating = () => {
  // State variables
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    rating: 0
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Function to handle changes in form fields
  const handleFieldChange = (fieldName, value) => {
    setFormData({ ...formData, [fieldName]: value });
  };

  // Function to handle rating change
  const handleRatingChange = (value) => {
    setFormData({ ...formData, rating: value });
  };

  // Function to handle form submission
  const handleSubmit = async () => {
    const { name, age, rating } = formData;

    // Form validation
    if (!name || !age || !rating) {
      setError('Please fill out all fields before submitting');
      return;
    }

    if (!/^[A-Za-z]+$/.test(name)) {
      setError('Name should only contain letters');
      return;
    }

    if (name.charAt(0) !== name.charAt(0).toUpperCase()) {
      setError('Name should start with an uppercase letter');
      return;
    }

    if (name.length < 2 || name.length > 30) {
      setError('Name should be between 2 and 30 characters.');
      return;
    }

    // Count uppercase letters
    const uppercaseCount = (name.match(/[A-Z]/g) || []).length;

    if (uppercaseCount > 3) {
      setError('Name can have at most 3 uppercase letters.');
      return;
    }

    try {
      // Backend call (commented out due to bugs)
      // await axios.post('http://localhost:5173/api/saveFormData', formData);
      setSubmitted(true);
      setFormData({ name: '', age: '', rating: 0 }); // Reset form fields
      setError('');
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setError('An error occurred while submitting the form');
    }
  };

  // Render component
  return (
    <div className="rating">
      <div className="rating__container container">
        <div className="rating__row row justify-content-center">
          <div className="rating__col col-md-6">
            <div className="rating__card card">
              <div className="rating__card-body card__body">
                <h2 className="rating__card-title card__title">Rate My Work</h2>
                {/* Star rating */}
                <div className="rating__stars stars">
                  {[1, 2, 3, 4, 5].map((value, index) => (
                    <span
                      key={value}
                      className={`rating__star star star--${index + 1} ${value <= formData.rating ? 'star--selected' : ''}`}
                      onClick={() => handleRatingChange(value)}
                    >
                      ★
                    </span>
                  ))}
                </div>
                {/* Form fields */}
                <div className="rating__form-group form-group">
                  <label htmlFor="name" className="rating__label">Name:</label>
                  <input type="text" id="name" className="rating__input form-control" value={formData.name} onChange={(e) => handleFieldChange('name', e.target.value)} />
                </div>
                <div className="rating__form-group form-group">
                  <label htmlFor="age" className="rating__label">Age:</label>
                  <select id="age" className="rating__input form-control" value={formData.age} onChange={(e) => handleFieldChange('age', e.target.value)}>
                    <option value="">Select Age</option>
                    <option value="0-17">0-17</option>
                    <option value="18-34">18-34</option>
                    <option value="35-49">35-49</option>
                    <option value="50+">50+</option>
                  </select>
                </div>
                {/* Submit button */}
                <button className='rating__btn btn btn-primary btn-block' onClick={handleSubmit}>Submit</button>
                {/* Success and error messages */}
                {submitted && <p className="rating__submitted-message submitted-message">Form submitted successfully!</p>}
                {error && <p className="rating__error-message error-message">{error}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rating;