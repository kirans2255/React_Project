import React from 'react';

const DisplayInvitation = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const bride = queryParams.get('bride');
  const groom = queryParams.get('groom');
  const date = queryParams.get('date');
  const time = queryParams.get('time');
  const location = queryParams.get('location');
  const backgroundImage = queryParams.get('backgroundImage');

  const defaultImage = './utils/images/pics.png';
  const imgSrc = backgroundImage ? backgroundImage : defaultImage;

  return (
    <div className="wedding-invitation" style={{ position: 'relative', textAlign: 'center', color: 'white' }}>
      <div className="background-image-container" style={{ position: 'relative' }}>
        <img src={imgSrc} alt="Wedding Background" style={{ width: '100%', height: 'auto' }} onError={(e) => { e.target.onerror = null; e.target.src = defaultImage; }} />
      </div>
      <div className="card-content" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '20px', borderRadius: '10px' }}>
        <h1 className="couple-names" style={{ fontSize: '1.5rem' }}>
          {bride && groom ? `${bride} & ${groom}` : 'Enter Names'}
        </h1>
        <p className="sa">We Invite You To Join In Our Wedding Ceremony</p>
        <p className="date">{date || 'Date'}</p>
        <p className="time">{time || 'Time'}</p>
        <p className="location">{location || 'Location'}</p>
      </div>
    </div>
  );
};

export default DisplayInvitation;
