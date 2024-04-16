import React from 'react'
import { Fragment } from 'react'

//function Greet() {
  //  return <h1>Welcome</h1>
//}

const Greet = (props) => {
    console.log(props)
    return (
     <Fragment>
        <h1>Welcome {props.name}</h1>
        {props.children}
        
     </Fragment>
    )
}

export default Greet