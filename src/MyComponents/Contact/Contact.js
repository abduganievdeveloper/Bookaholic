import React, {useState} from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import {MenuList, MenuItem} from '@material-ui/core'

const styles=theme=>({
  menuItem:{
  '&:focus':{
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  }
}})

const Contact=props=>{
  const {classes}=props
  const [active, setActive]=useState(0)
  
  const handleClick=(e,active)=>{
    e.preventDefault()
    console.log(active)
    setActive(active)
  } 

  return(
      <MenuList>
       <MenuItem onClick={e=>handleClick(e,0)} className={classes.menuItem}>Ahmedov</MenuItem>
       <MenuItem onClick={e=>handleClick(e,1)} className={classes.menuItem}>Nursat</MenuItem>
       <MenuItem onClick={e=>handleClick(e,2)} className={classes.menuItem}>Qobil</MenuItem> 
       
      </MenuList>
  )
}

export default withStyles(styles)(Contact)