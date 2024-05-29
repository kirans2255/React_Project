// import React, { useState } from 'react';

// const Weddinginvitation = () => {
//   const initialFormData = {
//     bride: '',
//     groom: '',
//     date: '',
//     time: '',
//     location: '',
//     backgroundImage: null, // New state property for background image
//   };

//   const [formData, setFormData] = useState(initialFormData);
//   const [isEditing, setIsEditing] = useState(false);
//   const [submittedData, setSubmittedData] = useState(null);

//   const handleChange = (event) => {
//     setFormData({
//       ...formData,
//       [event.target.name]: event.target.value,
//     });
//   };

//   const handleBackgroundImageChange = (event) => {
//     const selectedFile = event.target.files[0];
//     // You can add validations here to check file size or format (optional)
//     // ...

//     // Assuming the file is valid, update state with the selected file
//     setFormData({
//       ...formData,
//       backgroundImage: selectedFile,
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setSubmittedData(formData);
//     setIsEditing(false);
//   };

//   const toggleEditing = () => {
//     setIsEditing(!isEditing);
//     setFormData(submittedData || initialFormData);
//   };

//   return (
//     <div className="wedding-invitation">
//       <div className="background-image-container">
//         {formData.backgroundImage ? (
//           <img src={URL.createObjectURL(formData.backgroundImage)} alt="Wedding Background" style={{ width: '100%' }} />
//         ) : (
//           <img src="./utils/images/pics.png" alt="Wedding Background" style={{ width: '100%' }} /> // Replace with your default image path
//         )}
//       </div>
//       {isEditing ? (
//         <form onSubmit={handleSubmit}>
//           <div className="card-content">
//             <label htmlFor="bride">Bride:</label>
//             <input type="text" id="bride" name="bride" value={formData.bride} onChange={handleChange} required /> <br />

//             <label htmlFor="groom">Groom:</label>
//             <input type="text" id="groom" name="groom" value={formData.groom} onChange={handleChange} required /> <br />

//             <label htmlFor="date">Date:</label>
//             <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required /> <br />

//             <label htmlFor="time">Time:</label>
//             <input type="time" id="time" name="time" value={formData.time} onChange={handleChange} required /> <br />

//             <label htmlFor="location">Location:</label>
//             <input type="location" id="location" name="location" value={formData.location} onChange={handleChange} required /> <br />

//             <label htmlFor="backgroundImage">Background Image:</label>
//             <input type="file" id="backgroundImage" name="backgroundImage" accept="image/*" onChange={handleBackgroundImageChange} />
//             <br />

//             <button className="submit" type="submit">Submit</button>
//           </div>
//         </form>
//       ) : (
//         <div className="card-content">
//           <h1 className="couple-names" style={{ fontSize: '1.5rem' }}>
//             {submittedData ? `${submittedData.bride} & ${submittedData.groom}` : 'Enter Names'}
//           </h1>
//           <p className="sa">{'We Invite You To Join In Our Wedding Ceremony'}</p>
//           <p className="date">{submittedData ? submittedData.date : 'Date'}</p>
//           <p className="time">{submittedData ? submittedData.time : 'Time'}</p>
//           <p className="location">{submittedData ? submittedData.location : 'Location'}</p>
//           <button className="editbutton" onClick={toggleEditing}>Edit Details</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Weddinginvitation;

import React, { useState } from 'react';
import QRCode from 'qrcode.react';

const Weddinginvitation = () => {
  const initialFormData = {
    bride: '',
    groom: '',
    date: '',
    time: '',
    location: '',
    backgroundImage: null, // New state property for background image
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

  const handleBackgroundImageChange = (event) => {
    const selectedFile = event.target.files[0];
    // You can add validations here to check file size or format (optional)
    // ...

    // Assuming the file is valid, update state with the selected file
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

  return (
    <div className="wedding-invitation">
      <div className="background-image-container">
        {formData.backgroundImage ? (
          <img src={URL.createObjectURL(formData.backgroundImage)} alt="Wedding Background" style={{ width: '100%' }} />
        ) : (
          <img src="./utils/images/pics.png" alt="Wedding Background" style={{ width: '100%' }} /> // Replace with your default image path
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
          <button className="editbutton" onClick={toggleEditing}>Edit Details</button>

          {submittedData && (
            <QRCode
              value={JSON.stringify(submittedData)}
              size={256}
              style={{ marginTop: '20px' }}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Weddinginvitation;
