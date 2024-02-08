import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ServiceSection from '../Components/Section1';
import StepsSection from '../Components/Section2';
import vl from '../Assets/vertical_line.png';

const useStyles = makeStyles((theme) => ({
  sliderContainer: {
    position: 'relative',
    textAlign: 'center',
    minHeight: '100vh',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  },
  sliderContent: {
    position: 'relative',
    zIndex: 1,
    paddingTop: theme.spacing(10),
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(6),
    },
  },
  sliderTitle: {
    color: theme.palette.primary.main,
    textTransform: 'uppercase',
    marginBottom: theme.spacing(2),
  },
  sliderSubtitle: {
    color: theme.palette.secondary.main,
    textTransform: 'uppercase',
    marginBottom: theme.spacing(4),
  },
  sliderButton: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
}));

function Home() {
  const classes = useStyles();

  return (

    <>
      <div className={classes.sliderContainer}>
        <div className={classes.overlay}></div>
        <div className={classes.sliderContent}>
          <Typography variant='h4' className='classes.sliderMain'><b>WELCOME TO</b></Typography>
          <Typography variant="h2" className={classes.sliderTitle}>
            LOMAA IT
          </Typography>
          <Typography variant="h4" className={classes.sliderSubtitle}>
            One Stop for All IT Services
          </Typography>
          <Button variant="contained" color="primary" className={classes.sliderButton}>
            Get Started
          </Button>
        </div>
        <div className='verticalimage'>
          <img
            src={vl}
            alt="vertical_line"
            style={{ width: '100%', maxHeight: '15rem', marginTop: '5rem' }}
          />
          <h1>We are one of the best IT companies<br />standing in Vijayawada, AP.</h1>
        </div>
      </div>
      <ServiceSection />
      <StepsSection/>
    </>
  );
}

export default Home;
