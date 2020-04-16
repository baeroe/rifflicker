import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  notesBassGrid: {
    width: '70%',
    position: 'absolute',
    top: '-40px',
    display: 'flex',

  },
  notesGuitarGrid: {
    width: '70%',
    position: 'absolute',
    top: '-28px',
    display: 'flex',
  },
  notesBassTab: {
    display: 'flex',
    alignItems: 'center',
    width: '7.6%',
    height: '75px',
    boxSizing: 'border-box',
  },
  notesGuitarTab: {
    display: 'flex',
    alignItems: 'center',
    width: '7.6%',
    height: '50px',
    boxSizing: 'border-box',

  },
  notesString: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    boxSizing: 'border-box',
    borderTop: '4px solid transparent',
  },
  notesBassDot: {
    display: 'flex',
    height: '40px',
    width: '40px',
    backgroundColor: '#aaaaaa',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '25px',
    boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2)',
  },
  notesGuitarDot: {
    display: 'flex',
    height: '40px',
    width: '40px',
    backgroundColor: '#aaaaaa',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '25px',
    boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2)',
  },
  fretboard: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    marginTop: '40px',
  },
});

export default function Noteboard(props) {
  const classes = useStyles();

  const notes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
  var tuning;
  var tabs;
  var strings;

  if (props.selectedInstrument === "Bass") {
    tuning = [10, 5, 0, 7];
    tabs
    strings = [];

    for (var i=0; i<tuning.length; i++) {
      tabs = [];
      tabs.push(<div className={classes.notesBassTab} style={{width: '0.5%', borderLeft: '2px solid transparent'}}></div>);
      for (var d=0; d<14; d++) {
        tabs.push(
          <div className={classes.notesBassTab}>
            {
              props.notesOnScale.includes( notes[ (tuning[i]+d)%12 ] )
              ? <div name="dots" className={classes.notesBassDot}>{notes[ (tuning[i]+d)%12 ]}</div>
              : null
            }
          </div>
        );
      }
      strings.push(<div className={classes.notesString}>{tabs}</div>);
    }

    return(
      <div className={classes.notesBassGrid}>
        <div className={classes.fretboard}>{strings}</div>
      </div>
    );

  } else if (props.selectedInstrument === "Guitar") {

    tuning = [7, 2, 10, 5, 0, 7];
    tabs
    strings = [];

    for (var i=0; i<tuning.length; i++) {
      tabs = [];
      tabs.push(<div className={classes.notesGuitarTab} style={{width: '0.5%', borderLeft: '2px solid transparent'}}></div>);
      for (var d=0; d<14; d++) {
        tabs.push(
          <div className={classes.notesGuitarTab}>
            {
              props.notesOnScale.includes( notes[ (tuning[i]+d)%12 ] )
              ? <div name="dots" className={classes.notesGuitarDot}>{notes[ (tuning[i]+d)%12 ]}</div>
              : null
            }
          </div>
        );
      }
      strings.push(<div className={classes.notesString}>{tabs}</div>);
    }

    return(
      <div className={classes.notesGuitarGrid}>
        <div className={classes.fretboard}>{strings}</div>
      </div>
    );
  }
}
