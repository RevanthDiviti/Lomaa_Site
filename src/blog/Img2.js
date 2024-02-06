import React from 'react';
import cs from '../Assets/Customer Support.jpg'

const CardWithImage2 = () => {
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
        src={cs}
        alt=""
        style={imageStyle}
      />
      <div style={textStyle}>
        <h2 style={{ margin: '0', fontSize: '24px', fontWeight: 'bold' }}>
          How to Strengthen Your Customer Support
        </h2>
        <p style={{ margin: '8px 0', fontSize: '16px' }}>
          Customers are the most crucial factor for any kind of business.
          Service and support to them is the dividing line for what we do and
          what we don’t do. It actually helps to know what you can do to
          strengthen your customer support.
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

export default CardWithImage2;
