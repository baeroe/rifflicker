import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  bassTab: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '7.6%',
    height: '75px',
    borderLeft: '2px solid black',
    boxSizing: 'border-box',
  },
  guitarTab: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '7.6%',
    height: '50px',
    borderLeft: '2px solid black',
    boxSizing: 'border-box',
  },
  string: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    borderTop: '4px solid black',
    boxSizing: 'border-box',
  },
  fretboard: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    marginTop: '40px',
  },
  navDot: {
    height: '20px',
    width: '20px',
    backgroundColor: 'black',
    borderRadius: '50%',
  }
});

export default function Fretboard(props) {
  const classes = useStyles();

  var tuning;
  var strings;
  var tabs;
  var fretboard;
  var navPos = [2, 4, 6, 8];

  if (props.selectedInstrument === "Bass") {
    tuning = [10, 5, 0, 7];

    strings = [];
    for (var i=1; i<tuning.length; i++) {
      tabs = [];
      tabs.push(<div className={classes.bassTab} style={{width: '0.5%', borderLeft: '2px solid black'}}></div>);
      for (var d=0; d<13; d++) {
        tabs.push(
          <div className={classes.bassTab}>
          {
            (i === 1 || i ===3) && d === 11
            ? <div className={classes.navDot} />
            : null
          }
          {
            i === 2 && navPos.includes(d)
            ? <div className={classes.navDot} />
            : null
          }
          </div>);
      }
      strings.push(<div className={classes.string}>{tabs}</div>);
    }
    strings.push(<div className={classes.string}></div>);

  } else if (props.selectedInstrument === "Guitar") {
    tuning = [7, 2, 10, 5, 0, 7];

    strings = [];
    for (var i=1; i<tuning.length; i++) {
      tabs = [];
      tabs.push(<div className={classes.guitarTab} style={{width: '0.5%', borderLeft: '1px solid black'}}></div>);
      for (var d=0; d<13; d++) {
        tabs.push(
          <div className={classes.guitarTab}>
          {
            (i === 2 || i ===4) && d === 11
            ? <div className={classes.navDot} />
            : null
          }
          {
            i === 3 && navPos.includes(d)
            ? <div className={classes.navDot} />
            : null
          }
          </div>);
      }
      strings.push(<div className={classes.string}>{tabs}</div>);
    }
    strings.push(<div className={classes.string}></div>);
  }

  return(<div className={classes.fretboard}>{strings}</div>);
};
