import React, { Fragment } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import {Button, Avatar, Typography, Grid} from '@material-ui/core'

const styles={
  info:{
    marginLeft:"0.5rem"
  }
}

const PersonalInfo=props=>{
  const {classes}=props
  return(
      <Fragment>
       <div className={classes.info}>
       <Typography variant="headline" className={classes.name} gutterBottom>User Nickname</Typography>
        <Typography variant="subheading" className={classes.name} gutterBottom>Full Name</Typography>
        <Typography variant="subheading" className={classes.name} gutterBottom>About</Typography>
        
       </div>
        <Button color="primary">Settings</Button>
        
        
      </Fragment>
  )
}

export default withStyles(styles)(PersonalInfo)