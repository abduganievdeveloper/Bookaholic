import React from 'react'
import {AppBar, Typography} from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'

const brHeight=window.innerHeight>700?window.innerHeight:700
const styles={
    content:{
        maxHeight:brHeight*0.1,
        marginBottom:brHeight*0.05,
        backgroundColor:"#45aaf2",
        padding:'15px',
        paddingLeft:"10%"
    }
}

const Navbar=(props)=>{
    const {classes}=props;
    return(
        <AppBar className={classes.content} position="sticky" >
            <Typography variant="headline" component="h1" color="inherit">
                Bookaholic
            </Typography>
        </AppBar>
    )
}
export default withStyles(styles)(Navbar);