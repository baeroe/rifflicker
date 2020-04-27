import React, { useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Bass from 'Assets/bass.png';
import Guitar from 'Assets/guitar.png';

const useStyles = makeStyles({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '50px',
  },
  paper: {
    width: '40%',
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
  },
  selection: {
    display: 'flex',
    justifyContent: 'center',
    margin: '50px 0 50px 0',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
  },
  instrumentBtn: {
    width: '200px',
    height: '200px',
    margin: '20px',
    boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2)',
    '&:focus': {
      boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2) inset,0px 4px 5px 0px rgba(0,0,0,0.14) inset,0px 1px 10px 0px rgba(0,0,0,0.12) inset',
    },
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    margin: '20px',
    color: 'white',
    background: '#ff5100',
    borderRadius: '0',
    width: '20%',
    boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
    '&:hover': {
      background: '#ff5100',
    },
    '&:disabled': {
      background: '#dddddd',
    },
  },
});

export default function PracticeInstrument(props) {
  const classes = useStyles();

  useEffect(() => {
    if (props.selectedInstrument === "Bass") {
      document.getElementById("bassBtn").focus();
    } else if (props.selectedInstrument === "Guitar") {
      document.getElementById("guitarBtn").focus();
    }
  },[])

  const isDisabled = () => {
    if (props.selectedInstrument != "" && props.selectedInstrument != undefined) {
      return false;
    } else {
      return true;
    }
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={3}>
        <div className={classes.header}>
          <Typography variant="h3">Select your instrument</Typography>
        </div>
        <div className={classes.selection}>
          <Button id="bassBtn" value="Bass" onClick={props.onInstrument} value="Bass" className={classes.instrumentBtn}>
            <img src={Bass} alt="Bass" value="Bass" />
          </Button>
          <Button id="guitarBtn" value="Guitar" onClick={props.onInstrument} value="Guitar" className={classes.instrumentBtn}>
            <img src={Guitar} alt="Guitar" value="Guitar" />
          </Button>
        </div>
        <div className={classes.buttons}>
          <Button className={classes.button} disabled>Back</Button>
          <Button id="nextBtn" className={classes.button} onClick={props.onNext} disabled={isDisabled()}>Next</Button>
        </div>
      </Paper>
    </div>
  );
}
