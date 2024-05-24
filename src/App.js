import React from 'react';
import pic from './utils/images/pics.png';

const Weddinginvitation = () => {
  const [coupleNames, setCoupleNames] = React.useState({
    bride: 'Stephanie',
    groom: 'James'
  });
  const [date, setDate] = React.useState('June |25| 2024');
  const [time, setTime] = React.useState("AT FIVE O'CLOCK IN THE EVENING");
  const [location, setLocation] = React.useState('ROYAL BOTANICAL GARDEN - SYDENY');
  const [sa, setSa] = React.useState('Request the pleasure of your company at the ceremony of our wedding');

  const [backgroundImage, setBackgroundImage] = React.useState(pic);

  return (
    <div className="wedding-card"> 
      <div className="background-image-container">
        <img src={backgroundImage} alt="Wedding Background" style={{ width: '100%' }} /> {/* Ensure image scales proportionally */}
      </div>
      <div className="card-content">
        <h1 className="couple-names" style={{ fontSize: '1.5rem' }}> {/* Adjust font size for mobile */}
          {coupleNames.bride} & {coupleNames.groom}
        </h1>
        <p className='sa'>{sa}</p>
        <p className="date">{date} </p>
        <p className="time">{time}</p>
        <p className="location">{location}</p>
      </div>
    </div>
  );
};

export default Weddinginvitation;
