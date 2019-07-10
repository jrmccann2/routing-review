import React from 'react'

function Form (props){
  const { handleChange, handleSubmit } = props.location.state
  return (
    <div>
      <h1>Form</h1>
      <input name="listItemName" type="text" placeholder="Name" onChange={handleChange}/>
      <input name="listItemDueDate" type="date" placeholder="Date" onChange={handleChange}/>
      <button onClick={handleSubmit}>Submit Item</button>
    </div>
  )
}

export default Form