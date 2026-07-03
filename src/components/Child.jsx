import React from 'react'

const Child = (props) => {
  return (
    <div>
      <h2>Child Component</h2>
      <div>
      <p>Name of the employee is {props.username} and age is {props.age}</p>
      <p>The designation of the {props.username} is {props.occ}</p>
      </div>
    </div>
  )
}

export default Child
