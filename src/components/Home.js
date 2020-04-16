import React, { Fragment, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


import LogoM from 'Assets/logo_M.png';


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
    textAlign: 'center',
  },
  link: {
    width: '10%',
  }
});

export default function Home() {
  const classes = useStyles();

  useEffect(() => {
    if (location.pathname === "/") {
      document.getElementById("homeBtn").style.boxShadow="0px 2px 4px -1px rgba(0,0,0,0.2) inset,0px 4px 5px 0px rgba(0,0,0,0.14) inset,0px 1px 10px 0px rgba(0,0,0,0.12) inset";
      document.getElementById("practiceBtn").style.boxShadow="0px 2px 4px -1px rgba(0,0,0,0.2)";

    }
  },[])

  return(
    <Fragment>
      <div className={classes.root}>

        <img src={LogoM} alt="Logo" />
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
