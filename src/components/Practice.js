import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import PracticeInstrument from './PracticeInstrument';
import PracticeKeyScale from './PracticeKeyScale';
import PracticePlay from './PracticePlay';

const stepperTheme = createMuiTheme({
  overrides: {
    MuiStepIcon: {
      root: {
        '&$active': {
          color: '#ff5100',
        },
        '&$completed': {
          color: '#ff5100',
        },
      },
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  stepper: {
    width: '50%',
  },
  content: {
    width: '100%',
  },
}));

export default function Practice() {
  const classes = useStyles();

  const [activeStep, setActiveStep] = React.useState(0);
  const [instrument, setInstrument] = React.useState('');
  const [scale, setScale] = React.useState('');
  const [key, setKey] = React.useState('');

  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleInstrument = (event) => {
    setInstrument(event.target.value);
  };

  const handleScale = (event) => {
    setScale(event.target.value);
  };

  const handleKey = (event) => {
    setKey(event.target.value);
  }

  const getStepContent = () => {
    switch (activeStep) {
      case 0:
        return <PracticeInstrument selectedInstrument={instrument} onNext={handleNext} onInstrument={handleInstrument}/>;
      case 1:
        return <PracticeKeyScale selectedKey={key} selectedScale={scale} onNext={handleNext} onBack={handleBack} onScale={handleScale} onKey={handleKey} />;
      case 2:
        return <PracticePlay onReset={handleReset} selectedInstrument={instrument} selectedKey={key} selectedScale={scale} />;
      default:
        return 'Unknown stepIndex';
    }
  }

  return (
    <div className={classes.root}>

      <div className={classes.stepper}>
        <ThemeProvider theme={stepperTheme}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </ThemeProvider>
      </div>

      <div className={classes.content}>
        {getStepContent()}
      </div>

    </div>
  );
}

function getSteps() {
  return ['Select your instrument', 'Select key and scale', 'LICK that RIFF'];
}
