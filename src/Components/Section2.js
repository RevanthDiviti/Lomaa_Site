import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import verticalLine from '../Assets/service/VerticalImage.png';
import stepImg1 from '../Assets/service/step_img_1.jpg';
import stepImg2 from '../Assets/service/step_img_2.jpg';
import stepImg3 from '../Assets/service/step_img_3.jpg';
import stepImg5 from '../Assets/service/step_img_5.jpg';

const useStyles = makeStyles((theme) => ({
  section: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    backgroundColor: '#1F2732',
    marginTop:'4rem',
    [theme.breakpoints.up('lg')]: {
      paddingTop: theme.spacing(15),
      paddingBottom: theme.spacing(15),
    },
  },
  imgWrap: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  stepNumber: {
    fontSize: '2.5rem',
    color: '#FF5722',
  },
  stepTitle: {
    fontSize: '1.5rem',
    color: '#673AB7',
  },
  stepImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '50%',
    border: '10px solid rgba(255, 255, 255, 0.1)',
    maxWidth: '270px',
  },
}));

const StepsSection = () => {
  const classes = useStyles();

  return (
    <section className={classes.section}>
      <div className="container">
        <div className="divider-65"></div>
        <Grid container spacing={4}>
          {steps.map((step, index) => (
            <Grid item xs={12} key={index}>
              <Grid container alignItems="center" className={index % 2 === 0 ? '' : 'right'}>
                <Grid item xs={12} sm={6} md={6} className="step-center-part text-center">
                  <div>
                    <img src={step.images} alt={`Step ${index + 1}`} className={classes.stepImage} />
                  </div>
                </Grid>
                <Grid item xs={12} sm={6} md={6} className={index % 2 === 0 ? '' : 'text-right'}>
                  <Typography variant="h2" className={classes.stepNumber}>
                    <span className="color-main">{step.number}</span>
                  </Typography>
                  <Typography variant="h3" className={classes.stepTitle}>
                    {step.title}
                  </Typography>
                  <Typography variant="body1">{step.description}</Typography>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
        <div className={`img-wrap text-center ${classes.imgWrap}`}>
          <img src={verticalLine} alt="Vertical Line" />
        </div>
      </div>
    </section>
  );
};

const steps = [
  {
    number: '01',
    title: 'Strategy',
    description: 'We define and clear our own competition and Discover new ways which will give us a vast auctioned audience.',
    images: stepImg1,
  },
  {
    number: '02',
    title: 'Design',
    description: 'We design and create each and every service and module in such a way it will be a brand of its own kind. We make these brands a masterpiece which is built just for you.',
    images: stepImg2,
  },
  {
    number: '03',
    title: 'Develop',
    description: 'We add colours to your ideas and be with you in building your world. We will make you engage in each, and every step of the project live for better performance.',
    images: stepImg3,
  },
  {
    number: '04',
    title: 'Support',
    description: 'This is where you go and build in the globe. We develop, design, marketing and maintenance. We’ll be in your world while designing and developing your world.',
    images: stepImg5,
  },
];

export default StepsSection;
