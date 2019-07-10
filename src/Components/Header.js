import React from 'react'
import {Link} from 'react-router-dom'

function Header (props){
  const { handleChange, handleSubmit, list } = props
  return (
    <div>
      <Link to={{pathname: "/Form", state: {handleChange, handleSubmit}}} >Form</Link>
      <Link to={{pathname: "/List", state: {list}}} >List</Link>
    </div>
  )
}

export default Header