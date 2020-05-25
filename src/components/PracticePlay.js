import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Noteboard from 'Components/Noteboard';
import Fretboard from 'Components/Fretboard';
import Toolbar from 'Components/Toolbar';

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
  fretboardContainer: {
    width: '65%',
    display: 'flex',
    justifyContent: 'center',
  },
  content: {
    marginTop: '10px',
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
});

export default function PracticePlay(props) {
  const classes = useStyles();
  const notes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
  const notesOnScale = getNotesOnScale(props.selectedKey, props.selectedScale, notes);
  var recOn = false;
  var regex = new RegExp(props.selectedKey + "[0-9]");

  useEffect(() => {
    var noteDots = document.getElementsByName("dots");
    noteDots.forEach((item, i) => {
      if (regex.test(item.innerHTML)) {
        item.style.backgroundColor="#ff5100";
        item.style.color ="white";
      }
    });

  },[])

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
          <Fretboard selectedInstrument={props.selectedInstrument} />
        </div>
        <Noteboard notesOnScale={notesOnScale} selectedInstrument={props.selectedInstrument} selectedKey={props.selectedKey} />
      </div>
      {
      <div className={classes.footer}>
        <Toolbar />
      </div>
      }
    </div>
  );
}

function getNotesOnScale(key, scale, notes) {
  var stepsOnScale;
  switch (scale) {
    // case "Ionian":
    //   stepsOnScale = [0, 2, 4, 5, 7, 9, 11];
    //   break;
    // case "Dorian":
    //   stepsOnScale = [0, 2, 3, 5, 7, 9, 10];
    //   break;
    // case "Phrygian":
    //   stepsOnScale = [0, 1, 3, 5, 7, 8, 10];
    //   break;
    // case "Lydian":
    //   stepsOnScale = [0, 2, 4, 6, 7, 9, 11];
    //   break;
    // case "Mixolydian":
    //   stepsOnScale = [0, 2, 4, 5, 7, 9, 10];
    //   break;
    // case "Aeolian":
    //   stepsOnScale = [0, 2, 3, 5, 7, 8, 10];
    //   break;
    // case "Locrian":
    //   stepsOnScale = [0, 1, 3, 5, 6, 8, 10];
    //   break;
    case "Major":
      stepsOnScale = [0, 2, 4, 5, 7, 9, 11];
      break;
    case "Minor":
       stepsOnScale = [0, 2, 3, 5, 7, 8, 10];
       break;
    case "major Pentatonic":
      stepsOnScale = [0, 2, 4, 7, 9];
      break;
    case "minor Pentatonic":
      stepsOnScale = [0, 3, 5, 7, 10];
      break;
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
