import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

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
  select: {
    width: '200px',
    margin: '20px',
  }
});

export default function PracticeKeyScale(props) {
  const classes = useStyles();

  const isDisabled = () => {
    if (props.selectedKey != "" && props.selectedScale != "") {
      return false;
    } else {
      return true;
    }
  }

  return (
    <div className={classes.root}>

      <Paper className={classes.paper} elevation={3}>
        <div className={classes.header}>
          <Typography variant="h3">Select the key and scale</Typography>
        </div>
        <div className={classes.selection}>
        <FormControl className={classes.select}>
          <InputLabel id="key-label">Key</InputLabel>
          <Select
            labelId="key-select-label"
            id="key-select"
            value={props.selectedKey}
            onChange={props.onKey}
          >
            <MenuItem value={'C'}>C</MenuItem>
            <MenuItem value={'C#'}>C#</MenuItem>
            <MenuItem value={'D'}>D</MenuItem>
            <MenuItem value={'D#'}>D#</MenuItem>
            <MenuItem value={'E'}>E</MenuItem>
            <MenuItem value={'F'}>F</MenuItem>
            <MenuItem value={'F#'}>F#</MenuItem>
            <MenuItem value={'G'}>G</MenuItem>
            <MenuItem value={'G#'}>G#</MenuItem>
            <MenuItem value={'A'}>A</MenuItem>
            <MenuItem value={'A#'}>A#</MenuItem>
            <MenuItem value={'B'}>B</MenuItem>
          </Select>
        </FormControl>

        <FormControl className={classes.select}>
          <InputLabel id="scale-label">Scale</InputLabel>
          <Select
            labelId="scale-select-label"
            id="scale-select"
            value={props.selectedScale}
            onChange={props.onScale}
          >
            <MenuItem value={'major'}>Major</MenuItem>
            <MenuItem value={'minor'}>Minor</MenuItem>
            <MenuItem value={'major Pentatonic'}>Major Pentatonic</MenuItem>
            <MenuItem value={'minor Pentatonic'}>Minor Pentatonic</MenuItem>
          </Select>
        </FormControl>
        </div>
        <div className={classes.buttons}>
          <Button className={classes.button} onClick={props.onBack}>Back</Button>
          <Button id="nextBtn" className={classes.button} onClick={props.onNext} disabled={isDisabled()}>Next</Button>
        </div>
      </Paper>

    </div>
  );
}
