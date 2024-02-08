import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <div>
        <footer className="footer-container">
        <div className="social-icons">
          <FacebookIcon fontSize="large"/>
          <InstagramIcon fontSize="large" />
          <TwitterIcon fontSize="large"/>
          <LinkedInIcon fontSize="large" />{/**/} 
        </div>
      </footer>
    </div>
  )
}

export default Footer
