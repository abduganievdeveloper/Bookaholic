import React, {Fragment, useState} from 'react';
import './App.css';
import Welcome from './views/Welcome'
import Profile from './views/Profile'
import Homepage from './views/Homepage'
import Stranger from './views/Stranger'
import Chat from './views/Chat'
import Search from './views/Search'
import withStyles from '@material-ui/core/styles/withStyles'
import Navbar from './MyComponents/Navbar'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import fetchData from './fetchCalls/fetch.js'

const styles={
   main:{
     padding:'0'
   }
}
/*

*/ 
 
const App=(props)=>{
  const [login, setLogin]=useState(false)
  const [token, setToken]=useState(true)
  useEffect((token)=>{
    if(token){
    const raw=document.cookie.split(';')
    
      raw.forEach((value, index)=>{
        const array=value.split('=')
        if(array[0].trim()=='token'){
          const tn=array[1].split(',')[0]
          setToken(tn)
         }
      })
     
   }},[])
 
  const {classes}=props
  const [good, store]=useState('')
  const fetchIt=()=>{
    fetchData('/2.5/weather?q=Tashkent', 'GET', 'data', store)
    console.log(good)
  }
  return (
    <Fragment>
    
    <div className={classes.main}>
    <BrowserRouter basename="/book">
        <Fragment>
        <Navbar login={login} setLogin={setLogin} setToken={setToken}/>
      
        <Switch>
         <Route path="/" exact
           render={(routeProps) => (
            <Welcome {...routeProps} setLogin={setLogin } />
          )}
         />
          <Route path="/user" exact
            render={(routeProps) => (
              <Homepage {...routeProps} login={login } />
            )}
          />
          <Route path="/user/profile" exact
          render={(routeProps) => (
            <Profile {...routeProps} login={login } />
          )}
          />
          <Route path="/user/chat" exact
          render={(routeProps) => (
            <Chat {...routeProps} login={login } />
          )}
          />
          <Route path="/user/lib" exact
          render={(routeProps) => (
            <Stranger {...routeProps} login={login } />
          )}
          />

          <Route path="/user/search/:name" exact
          render={(routeProps) => (
            <Search {...routeProps} login={login } />
          )}
          />
        </Switch>
        </Fragment>
      </BrowserRouter>
    </div>
    </Fragment>
  );
}

export default withStyles(styles)(App);
