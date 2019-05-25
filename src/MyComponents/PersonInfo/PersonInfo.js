import React, {Fragment} from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import {Avatar, Typography, Grid, Button} from '@material-ui/core'

const styles={
  avatar:{
    height:"100px",
    width:"100px"
  }
}

const PersonInfo=props=>{
  const {classes}=props
  return(
       <Fragment>
         <Grid container>
          <Grid item md={3}>
          </Grid>
          <Grid item md={2}>
          <Avatar className={classes.avatar}/>
          </Grid>
          <Grid item md={4}>
          <Typography inline variant="headline" className={classes.name} gutterBottom>User Nickname</Typography>
          {!props.own&&<Button color="secondary">Chat with this user</Button>}
          <Typography variant="subheading" className={classes.name} gutterBottom>Full Name</Typography>
          <Typography variant="subheading" className={classes.name} gutterBottom>About</Typography>
          
          </Grid>
          <Grid item md={3}>
          </Grid>
         </Grid>
         
        
       </Fragment>
     
  )
}

export default withStyles(styles)(PersonInfo)