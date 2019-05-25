import React,{Fragment, useState} from 'react'
import {AppBar, Typography, Button, Grid, Input, Paper} from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'
import {Link, Redirect} from 'react-router-dom'

const brHeight=window.innerHeight>700?window.innerHeight:700
const styles=theme=>({
    content:{
        //maxHeight:brHeight*0.1,
        marginBottom:brHeight*0.05,
        backgroundColor:"#45aaf2",
        padding:'15px',
        paddingLeft:"10%",
       
    },
    noLink:{
        textDecoration:"none",
        color:"white",
        
    },
    search:{
        padding:"0 10px",
        paddingRight:"0"
    }   
    
})

const Navbar=(props)=>{
    const {classes}=props;
    const login=props.login 

    const [searchWord, changeSearchWord]=useState('')
    const [redirectStatus, redirect]=useState(false)
    
    const changeSearch=(e)=>{
        changeSearchWord(e.target.value)
    }
    
    return(
        <AppBar className={classes.content} position="sticky" >
        
        <Grid container >
            <Grid item md={3}>
            <Typography variant="headline" component="h1" color="inherit">
               <Link to="/user" className={classes.noLink}>Bookaholic</Link>
            </Typography>
            
            </Grid>
            
            {login&&<Fragment>
            <Grid item md={3} >
                <Paper className={classes.search}>
                <Input
                 color="primary"
                 value={searchWord}
                 onChange={changeSearch}
                
                />
                <Link to={"/user/search/"+searchWord} className={classes.noLink}><Button color="primary">Search</Button></Link>
                </Paper>    
            </Grid>
            
            <Grid item md={1}>
              <Link to="/user/lib" className={classes.noLink}>
              <Button  color="inherit">
              Books
               </Button>
              </Link>
            </Grid>
            <Grid item md={1}>
              <Link to="/user/profile" className={classes.noLink}>
                <Button  color="inherit">
                 Settings
                 </Button>
              </Link>
            
            </Grid>
            <Grid item md={1}>
                <Link to="/user/chat" className={classes.noLink}>
                <Button color="inherit">
                Chat
                </Button>
                </Link>
            </Grid>
            <Grid  item md={3}>
                <Link to="/" className={classes.noLink}>
                  <Button color="secondary" onClick={e=>{props.setLogin(false)}}>
                 Logout
                 </Button>
                </Link>
            </Grid></Fragment>
        }
        {!login&&<Grid item md={6}></Grid>}
        </Grid>
            
        </AppBar>
    )
}
export default withStyles(styles)(Navbar);