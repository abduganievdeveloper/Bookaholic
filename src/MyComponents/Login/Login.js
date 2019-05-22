import React from 'react'
import {Input, Paper, Typography, Grid, Fab, InputLabel} from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'
import {Link} from 'react-router-dom'

//Style
const appHeight=window.innerHeight*0.8;
const styles = theme => ({
    root: {
      marginTop:"30px",
      textAlign:"center",
      width:"90%",
      marginLeft:"auto",
      marginRight:"auto",
      maxHeight:appHeight,
      height:appHeight,
      color:"white"
    },
    img:{
      maxWidth:"100%"
    },
    paper:{
      padding:"40px",
      textAlign:"left"
    }
});

//Component

const Login=(props)=>{
    const { classes } = props;
  
    return (
      <div>
          <Grid container className={classes.root}>
            <Grid item md={12} >
              <Typography variant="display2" color="inherit" align="center" gutterBottom>Bookaholic</Typography>
              <Grid container spacing={40}>
                <Grid item md={7} xs={12}>
                  
                    <Typography color="inherit" variant="headline" gutterBottom>
                      Share your books - share your knowledge
                    </Typography>
                    <Paper>
                      <img src="/images/group.jpg" className={classes.img}/>
                    </Paper>
                  
                </Grid>
                <Grid item md={5} xs={12}>
                  <Paper className={classes.paper}>
                    <Typography variant="headline" gutterBottom align="center" color="secondary">Register</Typography>
                    <InputLabel  variant="filled">Nickname ( remember it you will need it to log in )</InputLabel>
                    <Input fullWidth style={{marginBottom:"20px"}}/>
                    <InputLabel  variant="filled">First name</InputLabel>
                    <Input fullWidth style={{marginBottom:"20px"}}/>
                    <InputLabel  variant="filled">Last name</InputLabel>
                    <Input fullWidth style={{marginBottom:"20px"}}/>
                    <InputLabel  variant="filled">Reading experience ( in years )</InputLabel>
                    <Input fullWidth style={{marginBottom:"20px"}}/>
                    <InputLabel  variant="filled">Short about you</InputLabel>
                    <Input fullWidth style={{marginBottom:"20px"}}/>
                    <Fab variant="extended" color="secondary">Register</Fab>
                    <Typography color="primary" inline> Have an account already?</Typography>
                    <a href="#"><Typography color="secondary" inline> Sign in</Typography></a>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
     </div>
    );
  }
  

export default withStyles(styles)(Login)