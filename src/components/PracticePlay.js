import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'column',
    marginTop: '20px',

  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  scale: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&*': {
      textAlign: 'center',
    },
  },
  reset: {
    marginLeft: '10px',
    height: '20px',
    color: 'white',
    background: '#ff5100',
    borderRadius: '0',
    boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2)',
    '&:hover': {
      background: '#ff5100',
    },
  },
  bassTab: {
    width: '7.6%',
    height: '75px',
    borderLeft: '2px solid black',
    boxSizing: 'border-box',
  },
  guitarTab: {
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
  fretboardContainer: {
    width: '65%',
    display: 'flex',
    justifyContent: 'center',
  },
  content: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    width: '100%'
  },
  footer: {
    display: 'flex',
    justifyContent: 'center',
  },
  notes: {
    marginTop: '10px',
    color: '#777777',
  },
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
    opacity: '70%',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '30px',
  },
  notesGuitarDot: {
    display: 'flex',
    height: '35px',
    width: '35px',
    backgroundColor: '#aaaaaa',
    opacity: '70%',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '30px',
  },
});

export default function PracticePlay(props) {
  const classes = useStyles();
  const notes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
  const notesOnScale = getNotesOnScale(props.selectedKey, props.selectedScale, notes);

  const buildFretboard = () => {
    var tuning;
    var strings;
    var tabs;
    var fretboard;

    if (props.selectedInstrument === "Bass") {
      tuning = [10, 5, 0, 7];

      strings = [];
      for (var i=1; i<tuning.length; i++) {
        tabs = [];
        tabs.push(<div className={classes.bassTab} style={{width: '0.5%', borderLeft: '2px solid black'}}></div>);
        for (var d=0; d<13; d++) {
          tabs.push(<div className={classes.bassTab}></div>);
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
          tabs.push(<div className={classes.guitarTab}></div>);
        }
        strings.push(<div className={classes.string}>{tabs}</div>);
      }
      strings.push(<div className={classes.string}></div>);
    }

    return(<div className={classes.fretboard}>{strings}</div>);
  };

  const buildNotesBoard = () => {

    var tuning;
    var tabs;
    var strings;

    if (props.selectedInstrument === "Bass") {
      tuning = [10, 5, 0, 7];
      tabs
      strings = [];

      for (var i=0; i<tuning.length; i++) {
        tabs = [];

        for (var d=0; d<14; d++) {
          tabs.push(
            <div className={classes.notesBassTab}>
              {
                notesOnScale.includes( notes[ (tuning[i]+d)%12 ] )
                ? <div className={classes.notesBassDot}>{notes[ (tuning[i]+d)%12 ]}</div>
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

        for (var d=0; d<14; d++) {
          tabs.push(
            <div className={classes.notesGuitarTab}>
              {
                notesOnScale.includes( notes[ (tuning[i]+d)%12 ] )
                ? <div className={classes.notesGuitarDot}>{notes[ (tuning[i]+d)%12 ]}</div>
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


  };

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div className={classes.scale}>
          <Typography variant="h3">{props.selectedKey} {props.selectedScale}</Typography>
          <Button className={classes.reset} onClick={props.onReset}>reset</Button>
        </div>
        <Typography className={classes.notes} variant="h5">{notesOnScale.join(" - ")}</Typography>
      </div>

      <div className={classes.content}>
        <div className={classes.fretboardContainer}>
          {buildFretboard()}
        </div>
        {buildNotesBoard()}
      </div>
      <div className={classes.footer}>
        <p>here is the footer</p>
      </div>
    </div>
  );
}

function getNotesOnScale(key, scale, notes) {
  var stepsOnScale;
  switch (scale) {
    case "major":
      stepsOnScale = [0, 2, 4, 5, 7, 9, 11];
      break;
    case "minor":
      stepsOnScale = [0, 2, 3, 5, 7, 8, 10];
      break;
    case "major Pentatonic":
      stepsOnScale = [0, 2, 4, 7, 9];
      break;
    case "minor Pentatonic":
      stepsOnScale = [0, 3, 5, 7, 10];
    default:
      break;
  }
  var startIndex = notes.indexOf(key);
  var notesOnScale = [];

  for (var i = 0; i<stepsOnScale.length; i++) {
    notesOnScale.push(notes[ (stepsOnScale[i]+startIndex)%12 ]);
  }

  return notesOnScale;
}
