import React, {useEffect, useState} from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import PersonalInfo from '../MyComponents/PersonalInfo'
import Unread from '../MyComponents/Unread'
import Book from '../MyComponents/Book'
import {Grid, Paper, Typography} from '@material-ui/core'
import {Redirect } from 'react-router-dom'

const styles={
  root:{
    padding:"2rem",
    margin:"1em"
  },
  fixedSide:{
    position:"fixed", 
  }
}

const Homepage=props=>{
  const {classes}=props
  const [token, setToken]=useState('')
  useEffect(()=>{
  
   const raw=document.cookie.split(';')
   
    raw.forEach((value, index)=>{
       const array=value.split('=')
       console.log(value)
       if(array[0].trim()=='token'){
         
        }
    })
    
  },[])

  return(
      <Grid container>
       
        <Grid item md={1}></Grid>
        <Grid item md={10}>
          {token}
          <Grid container spacing={8}>
            <Grid item md={8}>
           
            <Paper className={classes.root}>
              <Typography variant="headline">Recently uploaded books</Typography>
            </Paper>
            <Paper className={classes.root}>
             <Book/>
             
             </Paper> 
             <Paper className={classes.root}>
             <Book/>
             
             </Paper> 
             <Paper className={classes.root}>
             <Book/>
             
             </Paper> 
            </Grid>
            <Grid item md={4}>
            <div className={classes.fixedSide}>
            <Paper className={classes.root}>
             <PersonalInfo/>
            </Paper> 
             <Paper className={classes.root}> 
             <Unread/>
             </Paper>
             </div>
            </Grid>
          </Grid> 
         
        </Grid>
        <Grid item md={1}></Grid>
      </Grid>
  )
}

export default withStyles(styles)(Homepage)