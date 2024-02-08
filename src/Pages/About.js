import React from 'react';
import { useSpring, animated } from 'react-spring';
import '../css/About.css'; 
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import DiamondIcon from '@mui/icons-material/Diamond';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Clip from '../Components/Clip';


const About = () => {
  // Define the animation properties for each icon using react-spring
  const [icon1Props, setIcon1Props] = useSpring(() => ({
    transform: 'scale(1)',
    config: { tension: 300, friction: 10 },
  }));

  const [icon2Props, setIcon2Props] = useSpring(() => ({
    transform: 'scale(1)',
    config: { tension: 300, friction: 10 },
  }));

  const [icon3Props, setIcon3Props] = useSpring(() => ({
    transform: 'scale(1)',
    config: { tension: 300, friction: 10 },
  }));

  const [icon4Props, setIcon4Props] = useSpring(() => ({
    transform: 'scale(1)',
    config: { tension: 300, friction: 10 },
  }));
  const [icon5Props, setIcon5Props] = useSpring(() => ({
    transform: 'scale(1)',
    config: { tension: 300, friction: 10 },
  }));
  const [icon6Props, setIcon6Props] = useSpring(() => ({
    transform: 'scale(1)',
    config: { tension: 300, friction: 10 },
  }));
  const [icon7Props, setIcon7Props] = useSpring(() => ({
    transform: 'scale(1)',
    config: { tension: 300, friction: 10 },
  }));

  return (
    <>
    <div>
      <Clip />
    </div>
    <div className="about-container" style={{ width: '100%' }}>
      
      <br/>
      <p>
        "Lomaa IT Solutions is a product-based result-oriented
         custom software development company.<br/> Every time we upgrade
          things with the latest technologies to serve our clients
           a new kind of software<br/> technologies to resolve and function the business in a digital way"
      </p>

      <div className="icon-container" style={{ width: '100%' }}>
        <animated.div
          style={icon1Props}
          className="icon-item"
          onMouseEnter={() => setIcon1Props({ transform: 'scale(1.2)' })}
          onMouseLeave={() => setIcon1Props({ transform: 'scale(1)' })}
        >
          <WorkspacesIcon fontSize="large"/>
          <h1>Our Team</h1>
          <p>We Lomaa IT Solutions have a passionate <br />team with over 4 years of experience in all <br />IT sectors.</p>
        </animated.div>
        <animated.div
          style={icon2Props}
          className="icon-item"
          onMouseEnter={() => setIcon2Props({ transform: 'scale(1.2)' })}
          onMouseLeave={() => setIcon2Props({ transform: 'scale(1)' })} 
        >
          <DiamondIcon />
          <h1>Vision</h1>
          <p>We are here in Vijayawada, with a lot<br /> of emerging IT sectors. By 2020, we will be <br /> one of the most booming companies in <br />Vijayawada with all high standard <br />corporative emerging IT sectors.</p>
        </animated.div>
        <animated.div
          style={icon3Props}
          className="icon-item"
          onMouseEnter={() => setIcon3Props({ transform: 'scale(1.2)' })}
          onMouseLeave={() => setIcon3Props({ transform: 'scale(1)' })}
        >
          <MiscellaneousServicesIcon />
          <h1>Mission</h1>
          <p>Our company is built with success tactics <br />and strategies for the best growth of <br /> clients and their business who owe to <br />LOMAA.</p>
        </animated.div>
      </div>
      <br/><br/>

      <div className="centered-container" style={{ width: '100%' }}>
    
        <p>
          Our best comes out when we have efficient 
          and knowledgeable individuals who are <br /> passionate,
          dedicated, and perceptiveness, continuously drive for our own firm.
        </p>
        <div>
        <animated.div
          style={icon4Props}
          className="icon-item"
          onMouseEnter={() => setIcon4Props({ transform: 'scale(1.2)' })}
          onMouseLeave={() => setIcon4Props({ transform: 'scale(1)' })}
        >
          <AccountCircleIcon fontSize="large" />
          </animated.div>
          <h1>Director</h1>
        </div>
      </div>

      <div className="centered-container" style={{ width: '100%' }}>
        <div>
        <animated.div
          style={icon5Props}
          className="icon-item"
          onMouseEnter={() => setIcon5Props({ transform: 'scale(1.2)' })}
          onMouseLeave={() => setIcon5Props({ transform: 'scale(1)' })}
        >
          <AccountCircleIcon fontSize="large" />
          </animated.div>
          <h1>Managing Director</h1>
        </div>
        <p>
          Every day we start our day hoping to do two things,
          making our firm stronger with a <br /> passionate team and 
          self-satisfaction from clients who trust us. 
        </p>
      </div>

      <div className="centered-container" style={{ width: '100%' }}>
      
        <p>
          Smart work is better than hard work. 
          The world is Innovating every second,
          then why can’t we  <br />innovate for our future. 
        </p>
        <div>
        <animated.div
          style={icon6Props}
          className="icon-item"
          onMouseEnter={() => setIcon6Props({ transform: 'scale(1.2)' })}
          onMouseLeave={() => setIcon6Props({ transform: 'scale(1)' })}
        >
          <AccountCircleIcon fontSize="large" />
          </animated.div>
          <h1>Director</h1>
        </div>
      </div>

      <div className="centered-container" style={{ width: '100%' }}>
        <div>
        <animated.div
          style={icon7Props}
          className="icon-item"
          onMouseEnter={() => setIcon7Props({ transform: 'scale(1.2)' })}
          onMouseLeave={() => setIcon7Props({ transform: 'scale(1)' })}
        >
          <AccountCircleIcon fontSize="large" />
          </animated.div>
          <h1>Project Manager</h1>
        </div>
        <p>
          We are in a world where life has become a race, 
          stop running. Stand and think of Learning. Learning  <br />will be 
          helping you focus on the success of the firm as well as self-growth. 
        </p>
      </div>

      
    
    </div>
    </>
  );
};

export default About;
