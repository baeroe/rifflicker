import React, { Fragment, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import RecBtn from 'Assets/rec_btn.png'
import * as ml5 from 'ml5';


const useStyles = makeStyles({
  recButton: {
    width: '120px',
    height: '120px',
    margin: '60px',
    boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2)',
    fontSize: '25px',
  },
  playedDot: {
    width: '70px',
    height: '70px',
    transition: '0.2s',
    boxShadow: '0px 4px 8px -2px rgba(0,0,0,0.2)',
  },

});

export default function Toolbar() {
  const classes = useStyles();

  var recOn = false;
  const model_url = 'https://cdn.jsdelivr.net/gh/ml5js/ml5-data-and-models/models/pitch-detection/crepe/';
  var audioContext;
  var mic;
  var thePitch;
  const notes = ['C', 'C#', 'D', 'D#','E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
  var notesOnStep = [];
  var octave=0;
  var noteDots;

  // create Key Value pairs for steps and the according notes
  for (var d=0; d<=60; d++) {
    if ((d)%12 === 0) {
      octave++
    }
    notesOnStep[d]= notes[(d)%12] + octave;
  }

  useEffect(() => {
    noteDots = document.getElementsByName("dots");
  },[])

  const handleRecBtn = () => {
    recOn = !recOn;

    if (recOn === true) {
      document.getElementById("recBtn").style.boxShadow = '0px 2px 4px -1px rgba(0,0,0,0.2) inset,0px 4px 5px 0px rgba(0,0,0,0.14) inset,0px 1px 10px 0px rgba(0,0,0,0.12) inset'
      audioContext === undefined
      ? setup()
      : getPitch()
    } else {
      document.getElementById("recBtn").style.boxShadow = '0px 2px 4px -1px rgba(0,0,0,0.2)'
    }
  }

  // recording functions
  async function setup() {
    audioContext = new AudioContext();
    mic = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
    startPitch(mic, audioContext);
  }

  function startPitch(stream, audioContext) {
    thePitch = ml5.pitchDetection(model_url, audioContext , mic, getPitch);

  }

  function getPitch() {
    thePitch.getPitch(function(err, freq) {
      if (freq) {
        getNote(freq);
      } else {
        getNote(-1);
      }
      recOn === true
      ? getPitch()
      : document.getElementById("recBtn").innerHTML = '<img src=' + RecBtn +  ' alt="RECORD"></img>'
    })
  }

  // get note from calculated frequency
  function getNote(freq) {
    if (freq === -1) {
      document.getElementById("recBtn").innerHTML = '-';
      noteDots.forEach((item, i) => {
        item.classList.remove(classes.playedDot)
      });
    } else {

      let steps = Math.round(Math.log2( Math.pow((freq / 33), 12) ));
      document.getElementById("recBtn").innerHTML = notesOnStep[steps];
      noteDots.forEach((item, i) => {
        item.innerHTML === notesOnStep[steps]
        ? item.classList.add(classes.playedDot)
        : item.classList.remove(classes.playedDot)
      });
    }
  }

  return(
    <Button id="recBtn" className={classes.recButton} onClick={handleRecBtn}>
      <img src={RecBtn} alt="RECORD"></img>
    </Button>
  );
}
