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
    height: '42px',
    width: '42px',
    backgroundColor: '#aaaaaa',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '20px',
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
    fontSize: '18px',
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

  const notes = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
  var tuning;
  var tabs = [];
  var strings = [];

  var notesOnStep = [];
  var octave = 0;
  for (var d=0; d<=59; d++) {
    if ((d)%12 === 0) {
      octave++
    }
    notesOnStep[d]= notes[(d)%12] + octave;
  }

  if (props.selectedInstrument === "Bass") {
    tuning = [19, 14, 9, 4];
    var styleGrid = classes.notesBassGrid;
    var styleDot = classes.notesBassDot;
    var styleTab = classes.notesBassTab;

  } else if (props.selectedInstrument === "Guitar") {
    tuning = [40, 35, 31, 26, 21, 16];
    var styleGrid = classes.notesGuitarGrid;
    var styleDot = classes.notesGuitarDot;
    var styleTab = classes.notesGuitarTab;
  }

  for (var i=0; i<tuning.length; i++) {
    tabs = [];
    tabs.push(<div key={"note "+ i + " first"} className={styleTab} style={{width: '0.5%', borderLeft: '2px solid transparent'}}></div>);
    for (var d=0; d<14; d++) {
      tabs.push(
        <div key={"note" + i + " " + d} className={styleTab}>
          {
            props.notesOnScale.includes( notes[ (tuning[i]+d)%12 ] )
            ? <div name="dots" className={styleDot}>{notesOnStep[d+tuning[i]]}</div>
            : null
          }
        </div>
      );
    };
    strings.push(<div key={"note string" + i} className={classes.notesString}>{tabs}</div>);
  }

  return(
    <div className={styleGrid}>
      <div className={classes.fretboard}>{strings}</div>
    </div>
  );
}
