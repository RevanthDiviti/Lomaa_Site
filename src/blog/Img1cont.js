import React from 'react';
import { Container, Typography, Card, CardContent } from '@mui/material';
import dm from '../Assets/DM.jpg'

const Img1con = () => {
  const cardStyle = { backgroundColor: '#F0F0F0' };

  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <Card elevation={3} sx={{ marginBottom: 4, ...cardStyle }}>
        <CardContent sx={{ padding: 4 }}>
          <Typography variant="h4" gutterBottom>
            How you can use digital marketing helps to grow your business?
          </Typography>
          <img
            src={dm}
            alt="Digital Marketing"
            style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', marginBottom: '16px' }}
          />

          <Typography paragraph>
            Marketing is vastly increasing in the last few years. As the number of mobile applicants has been growing day by day, then why the marketing presence can't should take in mobile applications. In the last year's, the marketing footprints have already entered into all kinds of digital Media using Digital marketing. Digital marketing has brought a large curve to all kinds of businesses to meet their potential audience. To make these happen, try to start your online business presence. To make that happen, Digital marketing is the only motto every business has. We are mentioning each and every single step on how digital marketing helps and how it works for every business. Follow the below mentioned more significant pieces which one must consider and try in their business.
          </Typography>

          <Typography variant="h5">1. Content Marketing:</Typography>
          <Typography paragraph>
            Content is the booming and prime factor of the digital marketing world right now. Because it is useful in such a way can cater and refer all your Business and next-generation tactics to grow. It helps you to make a great contempt of generating leads, traffic grow, brand awareness, and growing their customer base...
          </Typography>

          <Typography variant="h5">2. Search Engine Optimization:</Typography>
          <Typography paragraph>
            In this digital world, to know about any company or firm website is the only front door access to attain the business. With the site, we can achieve traffic and leads, which doesn't happen; it would be the end of the company. To stop that, we have Search Engine Optimization in Digital marketing...
          </Typography>

          <Typography variant="h5">3. Social Media Marketing:</Typography>
          <Typography paragraph>
            Once upon a time, to attain a brand for your business is to publicity traditionally and make it happen to generate leads. Now, social media is no longer awaits you, it will help you find new and exciting ways to get the use and get the audience to your business...
          </Typography>

          <Typography variant="h5">4. Marketing Automation:</Typography>
          <Typography paragraph>
            The essential and most significant way digital marketing is booming is we are changing our usual emerging traditional methods and automated into digital operations. This automation helps us attain huge change which we are earlier doing. Updating each and every aspect and repeatedly doing what traditional marketing can't do...
          </Typography>

          <Typography paragraph>
            "Become Smarter and Agile Free use Digital marketing. Follow these tactics and find a huge growth in your business. Any queries or need any suggestions just let us know in the comment section"
          </Typography>

          {/* Additional section with the four points */}
          <Typography variant="h5" sx={{ marginTop: 4 }}>Key Strategies with SNO:</Typography>

          <Card sx={cardStyle}>
            <CardContent>
              <Typography variant="body1">1. Content Marketing:</Typography>
            </CardContent>
          </Card>

          <Card sx={cardStyle}>
            <CardContent>
              <Typography variant="body1">2. Search Engine Optimization:</Typography>
            </CardContent>
          </Card>

          <Card sx={cardStyle}>
            <CardContent>
              <Typography variant="body1">3. Social Media Marketing:</Typography>
            </CardContent>
          </Card>

          <Card sx={cardStyle}>
            <CardContent>
              <Typography variant="body1">4. Marketing Automation:</Typography>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Img1con;
