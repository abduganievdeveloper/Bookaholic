import React,{useState} from 'react'
import {Input, Paper, Typography, Grid, Fab, InputLabel} from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import {Link, Redirect} from 'react-router-dom'

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
    },
    noLink:{
      textDecoration:"none",
      color:"white",
      
  }
});

//Component

const Login=(props)=>{
   
    const {classes}=props
    
    const [status, changeStatus]=useState('signin')
    const [regInfo, changeRegInfo]=useState({
      nickname:'',
      firstname:'',
      lastname:'',
      exp:'',
      about:'',
      password:''
    })

    const [signInfo, changeSignInfo]=useState({
      nickname:'',
      password:''
    })

    const regInfoCollect=(e)=>{
     
      switch(e.target.name){
        case 'nickname':{
          changeRegInfo({...regInfo, nickname:e.target.value}) 
          break
        }
        case 'firstname':{
          changeRegInfo({...regInfo, firstname:e.target.value}) 
          break
        }
        case 'lastname':{
          changeRegInfo({...regInfo, lastname:e.target.value}) 
          break
        }
        case 'exp':{
          changeRegInfo({...regInfo, exp:e.target.value}) 
          break
        }
        case 'about':{
          changeRegInfo({...regInfo, about:e.target.value}) 
          break
        }
        case 'password':{
          changeRegInfo({...regInfo, password:e.target.value}) 
          break
        }
      }
    }
    const signInfoCollect=(e)=>{

     
      switch(e.target.name){
       
        case 'nickname':{
          changeSignInfo({...signInfo, nickname:e.target.value}) 
          break
        }
        case 'password':{
          console.log('password')
          changeSignInfo({...signInfo, password:e.target.value}) 
          break
        }
      }
    }
    
    const [registered,setRegistered]=useState(false)
    



    const register=()=>{
      
      const {nickname, firstname, lastname, password}=regInfo
      var json={nickname, firstname, lastname, password}
      json=JSON.stringify(json)
      console.log(json)
      const url="http://localhost:3001/api/auth/register/"
      fetch(url,{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:json
      })
      .then(response=>{return response.json()})
      .then(json=>{if(json.message=="Succeeded"){
        changeStatus('signin')
        setRegistered(true)
     }})
      .catch(err=>console.log(err))

      
    }
    const [signedIn, setSignedIn]=useState(false)
    const signIn=()=>{
      const {nickname, password}=signInfo
      var json={nickname, password}
      json=JSON.stringify(json)
      console.log(json)
      const url="http://localhost:3001/api/auth/login/"
      fetch(url,{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:json
      })
      .then(response=>{
        document.cookie = "token=haha; expires = Thu, 01 Jan 1970 00:00:00 GMT;path=/"
        return response.json()})
      .then(json=>{
        if(json.token!=undefined)
        {
          setToken(json.token)
          document.cookie = "token="+json.token+",path=/"
          setSignedIn(true);
        }
      })
      .catch(err=>console.log(err))
    }


    const statusChange=(param)=>{
      param=="signin"?changeStatus('signin'):changeStatus('register')
    }
    //registration

    

    return (
      <div>
          <Grid container className={classes.root}>
           {signedIn&&<Redirect to="/user"/>}
            <Grid item md={12} >
              <Typography variant="display2" color="inherit" align="center" gutterBottom>Bookaholic</Typography>
              <Grid container spacing={40}>
                <Grid item md={7} xs={12}>
                  
                    <Typography color="inherit" variant="headline" gutterBottom>
                      Share your books - share your knowledge
                    </Typography>
                    <Paper>
                      <img src="/book/images/group.jpg" className={classes.img}/>
                    </Paper>
                  
                </Grid>
                <Grid item md={5} xs={12}>
                  {status=='register'&&<ReactCSSTransitionGroup 
                  transitionName="rotate"
                  transitionEnterTimeout={5000}
                  transitionLeaveTimeout={5000}
                  transitionAppear={true}
                  transitionAppearTimeout={5000}
                  ><Paper className={classes.paper} >
                     
                    <Typography variant="headline" gutterBottom align="center" color="secondary">Register</Typography>
                    <InputLabel  variant="filled">Nickname ( remember it you will need it to log in )</InputLabel>
                    <Input name="nickname" onChange={regInfoCollect} fullWidth style={{marginBottom:"20px"}}/>
                    <InputLabel  variant="filled">First name</InputLabel>
                    <Input name="firstname" onChange={regInfoCollect} fullWidth style={{marginBottom:"20px"}}/>
                    <InputLabel  variant="filled">Last name</InputLabel>
                    <Input name="lastname" onChange={regInfoCollect} fullWidth style={{marginBottom:"20px"}}/>
                    <Input type="password" name="password" onChange={regInfoCollect} fullWidth style={{marginBottom:"20px"}}/>
                    <Fab variant="extended" color="secondary" onClick={register}>Register</Fab>
                    <Typography color="primary" inline> Have an account already?</Typography>
                    <a href="#" onClick={e=>statusChange('signin')}> Sign in</a>
                  </Paper></ReactCSSTransitionGroup>}
                  {status=='signin'&&<ReactCSSTransitionGroup
                   transitionName="rotate"
                   transitionEnterTimeout={5000}
                   transitionLeaveTimeout={5000}
                   transitionAppear={true}
                   transitionAppearTimeout={5000}
                  ><Paper className={classes.paper}>
                    {registered&&<Typography variant="headline" gutterBottom align="center" color="secondary">Registered succesfully !!!</Typography>}
                    <Typography variant="headline" gutterBottom align="center" color="secondary">Sign in</Typography>
                    <InputLabel  variant="filled">Nickname ( remember it you will need it to log in )</InputLabel>
                    <Input onChange={signInfoCollect} name="nickname" fullWidth style={{marginBottom:"20px"}}/>
                    <InputLabel  variant="filled">Password</InputLabel>
                    <Input onChange={signInfoCollect} name="password" type="password" fullWidth style={{marginBottom:"20px"}}/>
                    <Link to="/user" className={classes.noLink} onClick={signIn}><Fab variant="extended" color="secondary" >Sign in</Fab></Link>
                    <Typography color="primary" inline> Don't have an account? </Typography>
                    <a href="#" onClick={e=>statusChange('register')} >Register</a>
                  </Paper></ReactCSSTransitionGroup>}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
     </div>
    );
  }
  

export default withStyles(styles)(Login)