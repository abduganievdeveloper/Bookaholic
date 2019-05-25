import React,{Fragment} from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import {MenuList, MenuItem, Badge, Typography} from '@material-ui/core'

const styles={

}

const Unread=props=>{
  return(
      <Fragment>
          <Typography variant="headline">Unread recent messages</Typography><hr/>
          <MenuList>
              <MenuItem>John Doe <Badge variant="dot" color="secondary">2</Badge></MenuItem>
              <MenuItem>Cara <Badge variant="dot" color="secondary">3</Badge></MenuItem>
              <MenuItem>Margot Robbie <Badge variant="dot" color="secondary">1</Badge></MenuItem>
          </MenuList>
      </Fragment>
  )
}

export default withStyles(styles)(Unread)