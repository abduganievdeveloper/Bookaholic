import React,{Fragment} from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import {Paper, Typography, Button, Input}  from '@material-ui/core'

const styles={
  cover:{
      backgroundColor:"#ddd",
      padding:"10px",
      color:"#333438"
  }
}

const AddBook=props=>{
  const {classes}=props
  return(<Fragment>
          <Paper className={classes.cover}>
              <Typography color="inherit" variant="headline" align="center">"Name"</Typography>
              <Typography color="inherit" variant="subheading">Description</Typography>
              <Typography color="inherit" variant="subheading">Author</Typography>
              <Typography  color="inherit"variant="subheading">Date of publication</Typography>
              <Typography color="inherit" variant="subheading">Quality</Typography>
          </Paper>
          <Button color="primary">Add this book to library</Button>
      </Fragment>
  )
}

export default withStyles(styles)(AddBook)