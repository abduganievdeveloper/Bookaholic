import React,{Fragment} from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Book from '../MyComponents/Book'

const styles={

}

const Search=props=>{
  return(
      <Fragment>
          <h1>{props.match.params.name}</h1>
          <Book/>
      </Fragment>
  )
}
 
export default withStyles(styles)(Search)