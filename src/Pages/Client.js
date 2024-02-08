import React from 'react';
import { Grid, Container, Typography, styled } from '@mui/material';
import client1 from '../Assets/clients/allscripts.png';
import client2 from '../Assets/clients/cgi.png';
import client3 from '../Assets/clients/conduent.png';
import client4 from '../Assets/clients/ddd.png';
import client5 from '../Assets/clients/kisanbharath.png';
import client6 from '../Assets/clients/seal.png';
import client7 from '../Assets/clients/sealohio.png';
import client8 from '../Assets/clients/seven.png';
import client9 from '../Assets/clients/takeda.png';
import client10 from '../Assets/clients/virtusa.png';
import client11 from '../Assets/clients/voltari.png';

// Custom styled component for images with hover effect
const HoverImage = styled('img')({
  maxWidth: '70%',
  height: 'auto',
  transition: 'transform 0.3s ease-in-out',
  borderRadius: '10px', // Apply border radius
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 0 20px #00ff09',
  },
});

const ClientsPage = () => {
  
  const clients = [
    client1,
    client2,
    client3,
    client4,
    client5,
    client6,
    client7,
    client8,
    client9,
    client10,
    client11,
  ];

  return (
    <>
    <div className='about-content'>
        <br></br><br></br>
      
      </div>
    <Container>
      <Typography variant="h4" align="center" gutterBottom sx={{ mt: 4,fontWeight:'900',fontFamily:'inherit' }}>
        Our Clients
    </Typography>
      <Grid container spacing={3}>
        {clients.map((client, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            
            <HoverImage src={client} alt={`Client ${index + 1}`} />
          </Grid>
        ))}
      </Grid>
    </Container>
    </>
  );
};

export default ClientsPage;
