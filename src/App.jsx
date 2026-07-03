import React, { useState } from 'react'
import Card from './components/Card'
import Parent from './components/Parent'
import ProfileCard from './components/ProfileCard'
import Resume from './components/Resume'

const App = () => {
  // The props passed can be anything - be it array , object, string, number, boolean or a function for that matter.
  console.log("parent rendered")
  const skills = ["React", "JS", "Node.js"]
  const user = {name:"Aina" , role:"SDE" , experience : 1.2}

  // useState - hook to manage the state of the app
  const [count, setCount] = useState(0);
  
  

  function handleDownload(){
    console.log("download button clicked")
  }

  
  return (
    <div className='m-4 p-4'>
      <h1>This is the practice React project.</h1>
      <Card/>
      <Parent/>  
      <ProfileCard role="SDE" experience={1.2}/>

      <Resume
      skills = {skills}
      user = {user}
      onDownload = {handleDownload}
      />


      <div className="mt-16">
        <h1 className='text-xm italic'> Count : {count}</h1>
        <button className='bg-blue-400' onClick={()=>setCount( count => count+1)}>Counter</button>
      </div>


  </div>
  )
}

export default App
 