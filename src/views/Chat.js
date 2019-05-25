import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import {Grid, Paper} from '@material-ui/core'
import Messaging from '../MyComponents/Messaging'
import Contact from '../MyComponents/Contact'
import {Redirect } from 'react-router-dom'

const styles=theme=>({
    paper:{
        padding:"40px"
    },
    
}) 

const Chat=props=>{
    const {classes}=props
  return(
      <Grid container spacing={40}>
       {!props.login&&<Redirect to="/"/>}
        <Grid item md={2}>
        </Grid>
        <Grid item md={8}>
        <Paper className={classes.paper}>
      <Grid container spacing={8}>
        <Grid item md={2}>
            <Contact/>
        </Grid>  
        <Grid item md={10}>
            <Messaging/>
        </Grid>    
      </Grid>
      </Paper>
        </Grid>
        <Grid item md={2}>
        </Grid>
      </Grid>
      
  )
}

export default withStyles(styles)(Chat)