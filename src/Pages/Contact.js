import { Block } from '@mui/icons-material';
import React from 'react';
import write_us_image from '../Assets/feedback-icon.png';
import location_image from '../Assets/maps-pin-line-icon.png';
import phone_outline_icon from '../Assets/phone-outline-icon.png';

const Contact = () => {
  return (
    <div className='container'>
      <div className='row' style={{backgroundColor:'gray'}}>
        <h1 style={{display:"flex",justifyContent:'center'}} >Contact page</h1>
      </div>
      <div className='row'>
        <div className='col-4' style={{display:'flex',justifyContent:'center'}}>
          <div style={{border:'5px solid #a0ce4e',height:'170px',
                                    width:'170px',borderRadius:'50%', padding:'5px'}}>
              <div style={{border:'5px solid #a0ce4e',height:'150px',
                                    width:'150px',borderRadius:'50%', padding:'20px',backgroundColor:'#a0ce4e'}}>
                <img style={{height:'100px'}} src={phone_outline_icon} alt='No image'/>
              </div>
          </div>
          <div style={{border:'5px solid #a0ce4e',height:'170px',
                                    width:'170px',borderRadius:'50%', padding:'5px'}}>
              <div style={{border:'5px solid #a0ce4e',height:'150px',
                                    width:'150px',borderRadius:'50%', padding:'20px',backgroundColor:'#a0ce4e'}}>
                <img style={{height:'100px'}} src={write_us_image} alt='No image'/>
              </div>
          </div>
          <div style={{border:'5px solid #a0ce4e',height:'170px',
                                    width:'170px',borderRadius:'50%', padding:'5px'}}>
              <div style={{border:'5px solid #a0ce4e',height:'150px',
                                    width:'150px',borderRadius:'50%', padding:'25px 0px 0px 30px',backgroundColor:'#a0ce4e'}}>
                <img style={{height:'100px'}} src={location_image} alt='No image'/>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
