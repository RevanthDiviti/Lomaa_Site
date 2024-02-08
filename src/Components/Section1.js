import React from 'react';
import { Grid, Container, Typography } from '@material-ui/core';

const ServiceSection = () => {
  return (
    <section className="s-pt-0 s-pb-30 s-pt-lg-30 s-pb-lg-75 ls about-icon teaser-contact-icon">
      <div className="divider-10 d-none d-xl-block"></div>
      <Container>
        <Grid container spacing={3} align="center">
          <ServiceItem
            iconSrc="../Assets/service/service_icon_1-1.png"
            title="Branding"
            description="Branding is the at most important factor for any kind of business, Because only branding can make a business known to the common people."
          >
            <img src="../Assets/service/service_icon_1-1.png" alt="service_icon_1-1" />
    </ServiceItem>
          <ServiceItem
            iconSrc="../Assets/service/service_icon_2-1.png"
            title="Web Design & Development"
            description="We design your Company Website in an innovative manner housing all the services of your organisation."
          />
          <ServiceItem
            iconSrc="../Assets/service/service_icon_3-1.png"
            title="Mobile App Development"
            description="Every service becomes user friendly when it meets with a mobile application. We design and develop mobile Application satisfying all the needs the client possess."
          />
          <ServiceItem
            iconSrc="../Assets/service/service_icon_4-1.png"
            title="Digital Marketing"
            description="90% of all Users are now into digital media promoting their business and making their particular business a brand. We do promote all social media platforms and in all search engines."
          />
          <ServiceItem
            iconSrc="../Assets/service/service_icon_5-1.png"
            title="SAP Services"
            description="To get idolized digital presence for Financial Analytical data with clearance authenticated security. We will make your presence with digitalization and globalization."
          />
          <ServiceItem
            iconSrc="../Assets/service/service_icon_6-1.png"
            title="BPO and KPO Services"
            description="Nowadays re-appropriating is utilized by practically all divisions, global organizations, all ventures. BPO alludes to the redistributing of fringe exercises of the association."
          />
        </Grid>
      </Container>
    </section>
  );
};

const ServiceItem = ({ img, title, description }) => {
    return (
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <div className="text-center call-icon">
          <div className="border-icon">
            <div>
              <img src={img} alt="" style={{ width: '100%', height: 'auto' }} />
            </div>
          </div>
          <Typography variant="h6" gutterBottom>{title}</Typography>
          <div className="icon-content">
            <Typography variant="body1">{description}</Typography>
          </div>
        </div>
      </Grid>
    );
  };
  
  export default ServiceSection;