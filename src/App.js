import React, {Fragment} from 'react';
import './App.css';
import Welcome from './views/Welcome'

import withStyles from '@material-ui/core/styles/withStyles'
import Navbar from './MyComponents/Navbar'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

const styles={
   main:{
     padding:'0 15px'
   }
}


const App=(props)=>{
  const {classes}=props
  return (
    <Fragment>
    <Navbar/>
    <div className={classes.main}>
      <BrowserRouter basename="/rchat">
        <Switch>
          <Route path="/" component={Welcome} exact/>
        </Switch>
      </BrowserRouter>
      
    </div>
    </Fragment>
  );
}

export default withStyles(styles)(App);
