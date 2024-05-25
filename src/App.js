import React, { useState } from 'react';
import pic from './utils/images/pics.png';

const Weddinginvitation = () => {
  const initialFormData = {
    bride: '',
    groom: '',
    date: '',
    time: '',
    location:''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isEditing, setIsEditing] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedData(formData);
    setIsEditing(false);
  };

  const toggleEditing = () => {
    setIsEditing(!isEditing);
    setFormData(submittedData || initialFormData);
  };

  return (
    <div className="wedding-invitation">
      <div className="background-image-container">
        <img src={pic} alt="Wedding Background" style={{ width: '100%' }} />
      </div>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div className="card-content">
            <label htmlFor="bride">Bride:</label>
            <input type="text" id="bride" name="bride" value={formData.bride} onChange={handleChange} required /> <br />

            <label htmlFor="groom">Groom:</label>
            <input type="text" id="groom" name="groom" value={formData.groom} onChange={handleChange} required /> <br />

            <label htmlFor="date">Date:</label>
            <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required /> <br />

            <label htmlFor="time">Time:</label>
            <input type="time" id="time" name="time" value={formData.time} onChange={handleChange} required /> <br />

            <label htmlFor="location">Location:</label>
            <input type="location" id="location" name="location" value={formData.location} onChange={handleChange} required /> <br />

            <button className='submit' type="submit">Submit</button>
          </div>
        </form>
      ) : (
        <div className="card-content">
          <h1 className="couple-names" style={{ fontSize: '1.5rem' }}>
            {submittedData ? `${submittedData.bride} & ${submittedData.groom}` : 'Enter Names'}
          </h1>
          <p className="sa">{'We Invite You To Join In Our Wedding Ceremony'}</p>
          <p className="date">{submittedData ? submittedData.date : 'Date'}</p>
          <p className="time">{submittedData ? submittedData.time : 'Time'}</p>
          <p className="location">{submittedData ? submittedData.location : 'Location'}</p>
          <button className='editbutton' onClick={toggleEditing}>Edit Details</button>
        </div>
      )}
    </div>
  );
};

export default Weddinginvitation;
