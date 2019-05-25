import React, {Fragment} from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import {Typography, Button, Grid} from '@material-ui/core'
import Book from '../Book'
import AddBook from '../AddBook'

const styles={
  root:{
      
  }
}

const Library=props=>{
  const {classes}=props  
  return(
      <div className={classes.root}>
         <Typography variant="title" inline>My Library</Typography>
         <hr/>
         <Grid container spacing={8}>
            <Grid item md={4}>
              {props.own&&<AddBook/>}
            </Grid>
            <Grid item md={4}>
              <Book own={props.own}/>
            </Grid>
            <Grid item md={4}>
              <Book own={props.own}/>
            </Grid>
         </Grid>
         <Grid container spacing={8}>
            <Grid item md={4}>
              <Book own={props.own}/>
            </Grid>
            <Grid item md={4}>
              <Book own={props.own}/>
            </Grid>
            <Grid item md={4}>
              <Book own={props.own}/>
            </Grid>
         </Grid>
        
      </div>
  )
}

export default withStyles(styles)(Library)