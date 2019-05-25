import React, {Fragment} from 'react';
import {Paper, Input, Fab} from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'
import Message from './Message.js'

const appHeight=window.innerHeight>600?window.innerHeight*0.85:700*0.85;

const styles={
  messagingCont:{
      margin:'10px',
      marginTop:0,
      marginBottom:appHeight*0.012,
      padding:0,
      paddingTop:appHeight*0.01,
      paddingBottom:appHeight*0.01,
      height:appHeight*0.656,
      overflowY:"scroll"
  },
  inputBox:{
    height:appHeight*0.1 ,
    margin:'10px',
    marginTop:appHeight*0.012,
    marginBottom:appHeight*0.012,
    padding:appHeight*0.02,
    paddingTop:appHeight*0.02,
    paddingBottom:appHeight*0.02
  },
  input:{
      width:'80%'
  },
  send:{
      width:'10%',
      marginLeft:'5%',
      marginRight:'5%'
  },
  messages:{
    
  }
} 



const Messaging=(props)=>{
    const {classes}=props

    var messages=[{message:'Hello World', author:'Abdumalik'},
    {message:'Hello React', author:'Makhmud'}
  ]
    var messageList=messages.map(m=><Message key={m.author} side="right"  message={m.message} author={m.author}/>)

    const sendIt=(e)=>{
      const message={message:e.target.value,author:'Somebody'}
      messages.push(message)
    
    }
    return (
      <Fragment>
        <Paper className={classes.messagingCont}>
        <div className={classes.messages}>  
          {messageList}
          <Message author="Unknown" message="hey yo" side="left"/>
        </div>
        </Paper>
        <Paper className={classes.inputBox}>
          <Input className={classes.input} /><Fab color="secondary" onChange={sendIt} variant="extended" className={classes.send}>Send</Fab>
        </Paper>
      </Fragment>
    )
} 

export default withStyles(styles)(Messaging)