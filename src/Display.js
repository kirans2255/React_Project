import React from 'react';

const DisplayInvitation = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const bride = queryParams.get('bride');
  const groom = queryParams.get('groom');
  const date = queryParams.get('date');
  const time = queryParams.get('time');
  const location = queryParams.get('location');
  const backgroundImage = queryParams.get('backgroundImage');

  return (
    <div className="wedding-invitation">
      <div className="background-image-container">
        {backgroundImage ? (
          <img src={backgroundImage} alt="Wedding Background" style={{ width: '100%' }} />
        ) : (
          <img src="./utils/images/pics.png" alt="Wedding Background" style={{ width: '100%' }} />
        )}
      </div>
      <div className="card-content">
        <h1 className="couple-names" style={{ fontSize: '1.5rem' }}>
          {bride && groom ? `${bride} & ${groom}` : 'Enter Names'}
        </h1>
        <p className="sa">{'We Invite You To Join In Our Wedding Ceremony'}</p>
        <p className="date">{date || 'Date'}</p>
        <p className="time">{time || 'Time'}</p>
        <p className="location">{location || 'Location'}</p>
      </div>
    </div>
  );
};

export default DisplayInvitation;
