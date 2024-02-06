import React from 'react';
import dm from '../Assets/DM.jpg'
const CardWithImage1 = () => {
  const cardStyle = {
    display: 'flex',
    flexDirection: 'column', // Change to column on smaller screens
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: '4px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    width: '100%', // Make it full-width
    maxWidth: '500px', // Limit maximum width
  };

  const textStyle = {
    padding: '16px',
    flex: '1',
    width: '100%', // Make it full-width
  };

  const imageStyle = {
    width: '100%', // Make it full-width
    height: 'auto', // Maintain aspect ratio
    borderRadius: '4px',
    objectFit: 'cover',
  };

  return (
    <div style={cardStyle}>
      <img
        src={dm}
        alt=""
        style={imageStyle}
      />
      <div style={textStyle}>
        <h2 style={{ margin: '0', fontSize: '24px', fontWeight: 'bold' }}>
          How Digital Marketing helps to explore your Business HALL
        </h2>
        <p style={{ margin: '8px 0', fontSize: '16px' }}>
          Marketing is vastly increasing in the last few years. As the number
          of mobile applicants has been growing day by day, then why should the
          marketing presence not take advantage of mobile applications.
        </p>
        <p
          style={{
            margin: '8px 0',
            fontSize: '12px',
            color: '#666',
          }}
        >
          24.10.19 LOMAA IT ADMIN
        </p>
      </div>
    </div>
  );
};

export default CardWithImage1;
