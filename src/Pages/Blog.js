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
    minHeight: '100vh', // Ensure the content takes at least the full height of the viewport
  };

  // Media query for smaller screens
  const mediaQueryStyle = {
    '@media (max-width: 768px)': {
      flexDirection: 'column', // Display cards in a column on smaller screens
    },
  };

  // Style to remove underline and set font color to black
  const linkStyle = {
    textDecoration: 'none',
    color: 'black',
  };

  return (
    <div style={{ ...pageStyle, ...mediaQueryStyle }}>
      <h1>Blog</h1>
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
