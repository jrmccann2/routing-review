import React from 'react'

function List (props) {
  const { list } = props.location.state
  return (
    <div>
      <h1>List</h1>
      {
        list ? (
          list.map( (listItem, index) => {
            return (
              <div key={index}>
                <h1>{listItem.listItemName}</h1>
                <h2>{listItem.listItemDueDate}</h2>
              </div>
            )
          })
        ) : (
          null
        )
      }
    </div>
  )
}

export default List