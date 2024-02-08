import React, { useState } from 'react';

import {
  Grid,
  Container,
  Typography,
  styled,
  ThemeProvider,
  createTheme,
  TextField,
  Button,
  FormControl,
} from '@mui/material';
import client1 from '../Assets/phone-outline-icon.png';
import client2 from '../Assets/feedback-icon.png';
import client3 from '../Assets/maps-pin-line-icon.png';
import client4 from '../Assets/maps-pin-line-icon.png';
import client5 from '../Assets/maps-pin-line-icon.png';
import client6 from '../Assets/maps-pin-line-icon.png';
import TeleCaller from '../Assets/Contact_telecaller.jpeg';
import TeleCaller2 from '../Assets/Small_Screen_Telecaller_Image.jpeg';

const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
});

const StyledButton = styled(Button)(({ theme }) => ({
  border: '5px solid #62a716',
  padding: '20px 30px',
  fontSize: 'medium',
  borderRadius: '50px',
  fontWeight: 'bold',
  margin: '0 auto',
  cursor: 'pointer',
  backgroundColor: '#62a716',
  transition: 'background-color 0.3s ease-in-out',
  '&:hover': {
    backgroundColor: '#f0f0f0',
  },
}));

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { name, phoneNumber, email, topic, message });
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth margin="normal" required>
            <TextField
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              variant="outlined"
              placeholder="YOUR NAME"
              inputProps={{ style: { textAlign: 'center', fontWeight: 'bold' } }}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth margin="normal" required>
            <TextField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              variant="outlined"
              placeholder="EMAIL ADDRESS"
              inputProps={{ style: { textAlign: 'center', fontWeight: '600', fontSize: '16px' } }}
            />
          </FormControl>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth margin="normal">
            <TextField
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              fullWidth
              variant="outlined"
              placeholder="PHONE NUMBER"
              inputProps={{ style: { textAlign: 'center', fontWeight: 'bold' } }}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth margin="normal" required>
            <TextField
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              fullWidth
              variant="outlined"
              placeholder="YOUR TOPIC"
              inputProps={{ style: { textAlign: 'center', fontWeight: 'bold' } }}
            />
          </FormControl>
        </Grid>
      </Grid>
      <FormControl fullWidth margin="normal" required>
        <TextField
          multiline
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          fullWidth
          variant="outlined"
          placeholder="YOUR MESSAGE"
          inputProps={{ style: { textAlign: 'center', fontWeight: 'bold' } }}
        />
      </FormControl>
      <StyledButton type="submit" variant="contained" color="primary" fullWidth>
        Send Message
      </StyledButton>
    </form>
  );
};

const HoverImage = styled('img')(({ theme }) => ({
  maxWidth: '100%',
  height: '50%',
  width: '35%',
  marginLeft: '50%',
  transform: 'translateX(-50%)', 
  transition: 'transform 0.3s ease-in-out',
  backgroundColor: '#a0ce4e',
  borderRadius: '35%',
  padding: '5%',
  marginTop: '7%',
}));

const AdditionalBox = styled('div')(({ theme }) => ({
  maxWidth: '100%',
  height: 'auto',
  background: `url(${TeleCaller}) center/cover no-repeat`,
  marginTop: '100px',
  position: 'relative',
  backgroundSize: '100% 100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop: '10%',
  [theme.breakpoints.down('md')]: {
    height: 'auto',
    background: `url(${TeleCaller}) center/cover no-repeat`,
  },
  [theme.breakpoints.down('sm')]: {
    paddingTop: '20%',
    background: `url(${TeleCaller2}) center/cover no-repeat`, 
  },
}));

const Information = styled(Typography)({
  fontWeight: 'bold',
  fontFamily: 'Calibri, sans-serif',
  fontSize: '50px',
  color: '#000',
  textAlign: 'center',
  padding: '20px',
  marginRight: '40%',
});

const Description = styled(Typography)({
  fontSize: '20px',
  color: 'black',
  textAlign: 'center',
  padding: '10px',
  marginRight: '40%',
});

const ClientName = styled(Typography)({
  textAlign: 'center',
  fontWeight: 'bold',
  marginTop: '5px',
  fontSize: '18px',
});

const CallUs = styled(Typography)({
  fontWeight: 'bold',
  fontFamily: 'Calibri, sans-serif',
  fontSize: '35px',
  color: '#000',
  textAlign: 'center',
  padding: '20px',
  marginRight: '40%',
  display: 'flex',
  flexDirection: 'row',
});

const ContactNum = styled(Typography)({
  fontWeight: 'none',
  marginTop: '7px',
  fontSize: '25px',
  fontFamily: 'Calibri, sans-serif',
  color: '#a4ae2b',
});

const StartChatButton = styled('button')(({ theme }) => ({
  border: '5px solid #a0ce4e',
  padding: '20px 30px',
  fontSize: 'medium',
  borderRadius: '50px',
  fontWeight: 'bold',
  margin: '0 50% 0 0',
  cursor: 'pointer',
  backgroundColor: '#fff',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease-in-out',
  '&:hover': {
    backgroundColor: '#f0f0f0',
  },
}));

const ContactHeading = styled(Typography)(({ theme }) => ({
  width: '200px',
  height: '50rem',
  backgroundColor: '#a0ce4e',
  clipPath: 'polygon(-80% 0%, 180% 0%, 50% 100%)',
  width: 'calc(100% + 100px)',
  marginLeft: '-5rem',
  color: 'white',
  height: '10rem',
  marginTop: '-10px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const ContactFormContainer = styled('div')(({ theme }) => ({
  marginTop: '50px',
}));

const Contact = () => {
  const clients = [client1, client2, client3, client4, client5, client6];
  const clientNames = [
    'Call Us<br /> Support: 0866-253-3477',
    'Write Us<br /> info@lomaait.com',
    'Visit Us<br /> Amaravathi, Guntur District, Andhra Pradesh',
    'Tirupati<br />3rd Floor, IIDT Building, Airport Road, Renigunta, Tirupati (Dt) A.P<br /> Pin No:-517520.',
    'New Jersey<br />2 Lee Court, Plainsboro, Princeton Meadows, New Jersey-08536.',
    'Australia<br />PO BOX 537, Cherrybrook LPO, Cherrybrook, New South Wales-2126',
  ];
  return (
    <>   
    <div className='about-content'>
        <br></br><br></br>
      
      </div>
    <ThemeProvider theme={theme}>
      <Container>
        {/* <ContactHeading variant="h4" align="center" gutterBottom sx={{ mt: 4, fontWeight: '1000' }}>
          Contact
        </ContactHeading> */}
        <Grid container spacing={3}>
          {clients.map((client, index) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
              <HoverImage src={client} alt={`Client ${index + 1}`} />
              <ClientName
                variant="body2"
                dangerouslySetInnerHTML={{ __html: clientNames[index] }}
                sx={{ fontWeight: '600', fontSize: '20px' }}
              />
            </Grid>
          ))}
        </Grid>
        <AdditionalBox>
          <Information variant="body2">Live Support</Information>
          <Description variant="body2">
            Lomaa IT Solutions is a leading Web Development<br />
            Company, Mobile App Development Company, Digital<br />
            marketing company and a Branding Agency. It is based in <br />
            Vijayawada, India with clients across the globe.
          </Description>
          <CallUs variant="body2">
            Call Us Now: &nbsp;<ContactNum>0866-253-3477 or...</ContactNum>
          </CallUs>
          <StartChatButton>START CHAT NOW!</StartChatButton>
        </AdditionalBox>
        <ContactFormContainer>
          <ContactForm />
        </ContactFormContainer>
      </Container>
    </ThemeProvider>
  
    </>
  );
};

export default Contact;
