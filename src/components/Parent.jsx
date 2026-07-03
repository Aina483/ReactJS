import React from 'react'
import Child from './Child'

const Parent = () => {
    const name = 'Aina';
    const age = 22;
    const occupation = 'Software Engineer'
  return (
    <div>
      <h1>Parent Component</h1>
      <Child username={name} age={age} occ = {occupation}/>
    </div>
  )
}

export default Parent
