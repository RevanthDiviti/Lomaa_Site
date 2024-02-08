import React from 'react';
import '../css/Service.css';
import one from '../Assets/service/card1.jpg';
import two from '../Assets/service/card2.jpg';
import three from '../Assets/service/card3.jpg';
import four from '../Assets/service/card4.jpg';
import five from '../Assets/service/card5.jpg';
import six from '../Assets/service/card6.jpg';
import Clip from '../Components/Clip';



const Service = () => {
  return (
<>
    <div>
    

    <div>
      <div className='clip-div'>
    <Clip/>
    
    </div>
  
    <br/><br/>
    <div className="service-container">
   
      <div className="service-row">
        <div className="service-card">
        <img src={one} alt="Additional Image" style={{height:"25rem",width:"30rem"}}/>
          <h2 style={{color:"black",textAlign:"center"}}>Branding</h2>
          <p style={{textAlign:"center"}}>
            Branding is the utmost important factor for any kind of business because only branding can make a business known to the common people.
          </p>
        </div>
        <div className="service-card">
          <h2 style={{color:"black",textAlign:"center"}}>Web Design &<br/> Development</h2>
          <p style={{textAlign:"center"}}>
            We design your company website in an innovative manner housing all the services of your organization.
          </p>
          <img src={two} alt="Additional Image" style={{height:"25rem",width:"30rem",marginTop:"10rem"}}/>
        </div>
        <div className="service-card">
        <img src={three} alt="Additional Image" style={{height:"25rem",width:"30rem"}}/>
          <h2 style={{color:"black",textAlign:"center"}}>Mobile App<br></br> Development</h2>
          <p style={{textAlign:"center"}}>Every service becomes user friendly when
             it meets with a mobile application. We design
              and develop mobile Application satisfying all 
              the needs the client possess </p>
        </div>
      </div>
      
      <div className="service-row2">
        <div className="service-card">
        <img src={four} alt="Additional Image" style={{height:"25rem",width:"30rem"}}/>
          <h2 style={{color:"black",textAlign:"center"}}>Digital Marketing</h2>
          <p style={{textAlign:"center"}}>90% of all Users are now into digital media promoting their business and making their particular business a brand. We do promote all social media platforms and in all search engines. </p>
        </div>
        <div className="service-card">
          <h2 style={{color:"black",textAlign:"center"}}>SAP Services</h2>
          <p style={{textAlign:"center"}}>To get idolized digital presence for Financial Analytical data with clearance authenticated security. We will make your presence with digitalization and globalization. </p>
          <img src={five} alt="Additional Image" style={{height:"25rem",width:"28rem",marginTop:"6rem",marginLeft:"-0rem"}}/>
        </div>
        <div className="service-card">
        <img src={six} alt="Additional Image" style={{height:"25rem",width:"30rem"}}/>
          <h2 style={{color:"black",textAlign:"center"}}>BPO and KPO <br/> Services</h2>
          <p1 style={{textAlign:"center"}}>Nowadays re-appropriating is utilized by practically all divisions, global organizations, all ventures. BPO alludes to the redistributing of fringe exercises of the association. </p1>
        </div>
    <div>
    
    </div>
    </div>
    </div>
    </div>
    </div>
    </>
  );
};

export default Service;
