import React from 'react';
import { Grid, Container, Typography, styled } from '@mui/material';
import client1 from '../Assets/phone-outline-icon.png';
import client2 from '../Assets/feedback-icon.png';
import client3 from '../Assets/maps-pin-line-icon.png';
import client4 from '../Assets/maps-pin-line-icon.png';
import client5 from '../Assets/maps-pin-line-icon.png';
import client6 from '../Assets/maps-pin-line-icon.png';
import TeleCaller from '../Assets/Contact_telecaller.jpeg';

const HoverImage = styled('img')({
  maxWidth: '100%',
  height: '60%',
  width: '30%',
  marginLeft: '40%',
  transition: 'transform 0.3s ease-in-out',
  backgroundColor: '#a0ce4e',
  borderRadius: '35%',
  padding: '5%',
  marginTop: '7%',
});

const ClientName = styled(Typography)({
  textAlign: 'center',
  fontWeight: 'bold',
  marginTop: '5px',
  fontSize: '18px', // You can adjust the font size by changing this value
});

const ClientsPage = () => {
  const clients = [client1, client2, client3, client4, client5, client6];
  const clientNames = [
    'Call Us<br /> Support: 0866-253-3477',
    'Write Us<br /> info@lomaait.com',
    'Visit Us<br /> Amaravathi, Guntur District, Andhra Pradesh',
    'Tirupati<br />3rd Floor, IIDT Building, Airport Road, Renigunta, Tirupati (Dt) A.P, Pin No:-517520.',
    'New Jersey<br />    2 Lee Court, Plainsboro, Princeton Meadows, New Jersey-08536.',
    'Australia<br />    PO BOX 537, Cherrybrook LPO, Cherrybrook, New South Wales-2126',
  ];

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom sx={{ mt: 4, fontWeight: '1000', fontFamily: 'Poppins' }}>
        Contact
      </Typography>
      <Grid container spacing={3}>
        {clients.map((client, index) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
            <HoverImage src={client} alt={`Client ${index + 1}`} />
            <ClientName variant="body2" dangerouslySetInnerHTML={{ __html: clientNames[index] }} sx={{ fontWeight: '600', fontFamily: 'Poppins', fontSize: '20px' }} />
          </Grid>
        ))}
      </Grid>
      {/* Add the image below the Grid */}
      <img src={TeleCaller} alt="Additional Image" style={{ maxWidth: '100%', marginTop: '100px' }} />
    </Container>
  );
};

export default ClientsPage;