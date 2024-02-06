import React from 'react';
import { Container, Typography, Card, CardContent } from '@mui/material';
import cs from '../Assets/Customer Support.jpg'

const Img1con = () => {
  const cardStyle = { backgroundColor: '#F0F0F0' };

  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <Card elevation={3} sx={{ marginBottom: 4, ...cardStyle }}>
        <CardContent sx={{ padding: 4 }}>
          <Typography variant="h4" gutterBottom>
            How to Strengthen Your Customer Support
          </Typography>
          <img
            src={cs}
            alt="Customer Support"
            style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', marginBottom: '16px' }}
          />

          <Typography paragraph>
            Customers are the most crucial factor for any kind of Business. Service and support to them is the dividing line for what we do and what we don’t do. It actually helps to know what you??
          </Typography>

          <Typography variant="h5">What exactly is customer service?</Typography>
          <Typography paragraph>
            Consider your interactions with your team on team outings and team lunch. When we had a bad experience with them, which is the warning we will surely have to face some problems soon. Not only those establishments, clear not to face them frequently. You never want to lose any kind of customer, Isn’t it? If that is happening, it would is a lack of best customer support.
          </Typography>

          <Typography variant="h5">You have to build a team</Typography>
          <Typography paragraph>
            You have to build a team in such a way that they are ready to serve the organization and provide a complete experience that will keep them coming back. Here, we are mentioning some more factors to improve their customer service and should build them in your team as itself.
          </Typography>

          <Typography variant="h5">Creative Problem Solving:</Typography>
          <Typography paragraph>
            The foremost important aspect of customer service is to have the ability to solve critical problems. Whenever issues arise, your team should bend to their backward extent to solve their problem with the best solution. We may have some issues where we can’t find the solution easily but to get answers for these kinds of problems, we must have a team who are efficient, creative and stubborn enough to find the solution which is not so obvious. If your customer service representatives who can find the best solutions for any kind of the problem we can attain the growth for your Business.
          </Typography>

          <Typography variant="h5">Every customer is important</Typography>
          <Typography paragraph>
            Client the one and only most important and efficient assert a company have. Every customer is vital for an organization; the customer is the one who adds the value to any company. If any issues or limitations occurred while handling a Client, we should deal with these protocols while addressing any kind of Client. We must make our Client delightful with all the features one need. Based on these criteria’s, the Client may have a positive thought of choosing our Company.
          </Typography>

          <Typography variant="h5">Hire Motivated People:</Typography>
          <Typography paragraph>
            To get delightful clients for an organization it will be happened only because of a multilingual person. We must have professional, creative and optimistic persons in our team. They can handle any situation realistically and find solutions easily without hurdling the Company. Your team represents what your Company can do?? How those can get happened? Is completely done by your team. So, make sure you have the best smart working team so they can save your Company in any kind of issue.
          </Typography>

          <Typography variant="h5">Customer supports to improve your brand value and sales:</Typography>
          <Typography paragraph>
            To become a brand in the market is not a small thing; it is a step of adding each and every little thing your Company can do. With all these things customer support also makes you become a brand. If you have a delightful client who can add value to your Company, then that is where you’re starting your brand. Improving delightful clients can enhance your revenue at the same time, improves your brand identity and improve your sales. " Earlier, we have an epic, Client is the God, and he will rule the Company. This all happens only with a DELIGHTFUL CLIENT, So that is why most the companies had become brands handling each and every Client anxiously. Start building engaging customer service and Delightful clients for your Company to become a BRAND. "
          </Typography>

          <Typography paragraph>
              <i>" Earlier, we have an epic, Client is the God, and he will rule the Company. This all happens only with a DELIGHTFUL CLIENT, So that is why most the companies had become brands handling each and every Client anxiously. Start building engaging customer service and Delightful clients for your Company to become a BRAND. "</i>
        </Typography>
          <Typography paragraph>
            Having any queries related to customer service, tell us in the comment section.
          </Typography>

          {/* Additional section with the four points */}
          <Typography variant="h5" sx={{ marginTop: 4 }}>Key Points:</Typography>

          <Card sx={cardStyle}>
            <CardContent>
              <Typography variant="body1">1. What exactly is customer service?</Typography>
            </CardContent>
          </Card>

          <Card sx={cardStyle}>
            <CardContent>
              <Typography variant="body1">2. Creative Problem Solving</Typography>
            </CardContent>
          </Card>

          <Card sx={cardStyle}>
            <CardContent>
              <Typography variant="body1">3. Every customer is important</Typography>
            </CardContent>
          </Card>

          <Card sx={cardStyle}>
            <CardContent>
              <Typography variant="body1">4. Hire Motivated People</Typography>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Img1con;
