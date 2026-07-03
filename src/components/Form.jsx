import React, { useState } from 'react'

const Form = () => {
  const[username , setUsername] = useState('')

  const handleSubmit =(e)=>{
    e.preventDefault()
    console.log("submitting form")
    console.log("Form submitted by", username)
  }

  const handleChange = (e)=>{
    setUsername(username => e.target.value)

  }

  return (
    <div className='p-4 '>
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder='Enter your name' 
            value={username}
            onChange={handleChange}/>
            <button className='ml-4 bg-blue-500 rounded-lg'>Submit</button>
        </form>
    </div>
  )
}

export default Form
