import React from 'react';
import CardWithImage1 from '../blog/Img1';
import CardWithImage2 from '../blog/Img2';
import { Link } from 'react-router-dom';

function Blog() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'row', // Display cards in a row
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', // Center vertically
    gap: '16px',
  };

  const pageStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center horizontally
    minHeight: '100vh',
  };

  const mediaQueryStyle = {
    '@media (max-width: 768px)': {
      containerStyle: {
        ...containerStyle, // Maintain other styles
        display: 'block', // Change display to block for mobile view
      },
    },
    '@media (max-width: 375px)': {
      containerStyle: {
        ...containerStyle, 
        display: 'block', 
      },
    },
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'black',
  };

  return (
    
    <div style={{ ...pageStyle, ...mediaQueryStyle }}>
      <div className='about-content'>
        <br></br><br></br>
      
      </div>
      <div style={containerStyle}>
        <div style={{ margin: '10px' }}>
          <Link to='/blog/digitalmarketing' style={linkStyle}><CardWithImage1 /></Link>
        </div>
        <div style={{ margin: '10px' }}>
          <Link to='/blog/customersupport' style={linkStyle}><CardWithImage2 /></Link>
        </div>
      </div>
    </div>
  );
}

export default Blog;
