import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar, Button} from '@material-ui/core';
import {BrowserRouter, Route, Link, Switch, useLocation} from 'react-router-dom';

import LogoS from 'Assets/logo_S.png';
import Home from 'Components/Home';
import Practice from 'Components/Practice';


const useStyles = makeStyles({
  appbar: {
    background: 'white',
    boxShadow: 'none',
  },
  button: {
    color: 'black',
    borderRadius: '0',
    width: '100%',
    boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2)',
    '&:hover': {
      background: '#ff5100',
      color:"#fafafa",
      boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
    },
  },
  link: {
    width: '8%',
    margin: '0 0 0 50px',
  },
});


export default function App() {
  const classes = useStyles();

  return(
    <BrowserRouter>

      <AppBar className={classes.appbar} position="static">
        <Toolbar variant="dense">
          <img src={LogoS}alt="Logo" />
          <Link className={classes.link} to="/">
            <Button id="homeBtn" className={classes.button}>HOME</Button>
          </Link>
          <Link className={classes.link} to="/practice">
            <Button id="practiceBtn" className={classes.button}>PRACTICE</Button>
          </Link>
        </Toolbar>
      </AppBar>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/practice" component={Practice} />
        <Route path="*" component={Home} />
      </Switch>

    </BrowserRouter>
  );
};
