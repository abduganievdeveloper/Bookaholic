import React,{Fragment} from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import PersonInfo from '../MyComponents/PersonInfo'
import Library from '../MyComponents/Library'
import {Paper, Grid, Typography} from '@material-ui/core'
import {Redirect } from 'react-router-dom'


const styles={
  paper:{
      padding:"2rem"
  },
  lib:{
      marginTop:"6rem"
  } 
}

const Stranger=props=>{
  const {classes}=props
  return(
      <Fragment>
           {!props.login&&<Redirect to="/"/>}
          <Grid container>
            <Grid md={1}>
            </Grid>
            <Grid md={10}>
             <Paper className={classes.paper}>
                 <PersonInfo/>
                 <div  className={classes.lib}>
                 <Library own/>
                 </div>
             </Paper>    
            </Grid>
            <Grid md={1}>
            </Grid>
          </Grid>

      </Fragment>
  )
}

export default withStyles(styles)(Stranger)