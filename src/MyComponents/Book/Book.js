import React,{Fragment} from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import {Paper, Typography, Button}  from '@material-ui/core'

const styles={
  cover:{
      backgroundColor:"#ddd",
      padding:"10px",
      color:"#333438"
  }
}

const Book=props=>{
  const {classes}=props
  return(<Fragment>
          <Paper className={classes.cover}>
              <Typography color="inherit" variant="headline" align="center">"Name"</Typography>
              <Typography color="inherit" variant="subheading">Description</Typography>
              <Typography color="inherit" variant="subheading">Author</Typography>
              <Typography  color="inherit"variant="subheading">Date of publication</Typography>
              <Typography color="inherit" variant="subheading">Quality</Typography>
          </Paper>
          {!props.own&&<Fragment>Published by <Button color="primary">John Doe</Button></Fragment>}
          {props.own&&<Typography color="primary" inline>Published at 01-09-2018</Typography>}
          {props.own&&<Button color="primary">Edit</Button>}
          {props.own&&<Button color="secondary">Delete</Button>}
      </Fragment>
  )
}

export default withStyles(styles)(Book)