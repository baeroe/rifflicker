import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


import Logo from 'Assets/logo.png';


const useStyles = makeStyles({
  root: {
    margin: '150px 0 0 0',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  button: {
    margin: '20px 0 0 0',
    color: 'white',
    background: '#ff5100',
    borderRadius: '0',
    width: '100%',
    boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
    '&:hover': {
      background: '#ff5100',
    },
  },
  text: {
    fontSize: '24px',
    textAlign: 'left',
  },
  link: {
    width: '10%',
  },
  logo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  logoText: {
    marginLeft: '10px',
  }
});

export default function Home() {
  const classes = useStyles();

  return(
    <Fragment>
      <div className={classes.root}>
        <div className={classes.logo}>
          <img src={Logo} alt="Logo" />
          <Typography className={classes.logoText} variant="h1">IFFLICKER</Typography>
        </div>
        <Typography className={classes.text} variant="body1">
          You wanna play some nice riffs? <br/>
          HELL YEA! You are at the right place!
        </Typography>
        <Link to="/practice" className={classes.link}>
          <Button className={classes.button}>LET'S GO</Button>
        </Link>

      </div>
    </Fragment>
  );
};
