import React,{useState, Fragment} from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import {Grid, Paper, Typography, Fab, Input, InputLabel, IconButton, Icon} from '@material-ui/core/'
import {Edit} from '@material-ui/icons/'
import {echangeStatus, ehandleChange} from './profilefnc.js'
import {Redirect } from 'react-router-dom'

const styles={
    root:{
      
    },
    paper:{
        padding:'80px',
        marginBottom:"40px"
    },
    entry:{
        marginTop:"20px",
        marginBottom:"20px"
    },
    title:{
        marginTop:"20px",
        marginBottom:"30px"
    }
}

const Profile=(props)=>{
    const {classes}=props
        
    const [editingStatus, changeEditingStatus]=useState({
        flag:false,
        nickname:false,
        firstname:false,
        lastname:false,
        exp:false, 
        about:false,
        password:false
    })

    const [customData, editCustomData]=useState({
        nickname:"zuckonit",
        firstname:"Steve",
        lastname:"Jobs",
        exp:"3",
        about:"amatuer",
        password:"123abc"
    })

   

    const changeStatus=(e, param)=>echangeStatus(e,param,changeEditingStatus,editingStatus) 
     
    const handleChange=(param,e)=>ehandleChange(param, e, editCustomData,customData)
   

    const content=Object.entries(customData).map((data, index)=>{
    
           return( <div key={index} className={classes.entry}>
              <Typography color="primary" variant="overline" inline>{data[0]}</Typography>
                <IconButton onClick={e=>changeStatus(e,data[0])}>
                    <Edit/>
                </IconButton>
                {!editingStatus[data[0]]&&<Typography color="secondary" variant="headline">{data[1]}</Typography>}
                {editingStatus[data[0]]&&<Input type="text" fullWidth value={data[1]} onChange={(e)=>handleChange(data[0], e)}/>}
           </div>)
    })

    return (
        <Grid container spacing={8} className={classes.root}>
             {!props.login&&<Redirect to="/"/>}
            <Grid item md={2}></Grid>
            <Grid item md={8} xs={12}>

              <Paper className={classes.paper}>
                
                <Typography variant="display2" align="center" color="primary" className={classes.title}>
                    My Profile Info
                </Typography>
                <hr/>
                {content}
                

                
              

                {editingStatus['flag']&&<Fab variant="extended" color="primary">EDIT</Fab>}   

              </Paper>

            </Grid>
            <Grid item md={2}></Grid>

           
        </Grid>
    )
}

export default withStyles(styles)(Profile)


