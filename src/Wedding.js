import React, { useState, useRef, useEffect } from 'react';
import QRCode from 'qrcode.react';

const Weddinginvitation = () => {
  const initialFormData = {
    bride: '',
    groom: '',
    date: '',
    time: '',
    location: '',
    backgroundImage: null,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isEditing, setIsEditing] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const qrCodeRef = useRef(null);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleBackgroundImageChange = (event) => {
    const selectedFile = event.target.files[0];
    setFormData({
      ...formData,
      backgroundImage: selectedFile,
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

  useEffect(() => {
    if (submittedData) {
      downloadQRCode();
    }
  }, [submittedData]);

  const downloadQRCode = () => {
    const canvas = qrCodeRef.current.querySelector('canvas');
    if (canvas) {
      const pngUrl = canvas
        .toDataURL('image/png')
        .replace('image/png', 'image/octet-stream');
      const downloadLink = document.createElement('a');
      downloadLink.href = pngUrl;
      downloadLink.download = 'wedding_invitation_qr_code.png';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  };

  const generateQRValue = () => {
    const queryParams = new URLSearchParams({
      bride: formData.bride,
      groom: formData.groom,
      date: formData.date,
      time: formData.time,
      location: formData.location,
      backgroundImage: formData.backgroundImage ? URL.createObjectURL(formData.backgroundImage) : '',
    }).toString();
    return `${window.location.origin}/display?${queryParams}`;
  };

  return (
    <div className="wedding-invitation">
      <div className="background-image-container">
        {formData.backgroundImage ? (
          <img src={URL.createObjectURL(formData.backgroundImage)} alt="Wedding Background" style={{ width: '100%' }} />
        ) : (
          <img src="./utils/images/pics.png" alt="Wedding Background" style={{ width: '100%' }} />
        )}
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

            <label htmlFor="backgroundImage">Background Image:</label>
            <input type="file" id="backgroundImage" name="backgroundImage" accept="image/*" onChange={handleBackgroundImageChange} />
            <br />

            <button className="submit" type="submit">Submit</button>
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
          {submittedData && (
            <div ref={qrCodeRef} style={{ display: 'none' }}>
              <QRCode
                value={generateQRValue()}
                size={128}
                level={"H"}
                includeMargin={true}
              />
            </div>
          )}
          <button className="editbutton" onClick={toggleEditing}>Edit Details</button>
        </div>
      )}
    </div>
  );
};

export default Weddinginvitation;
