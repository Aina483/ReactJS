import React, { useState } from 'react'
import Card from './components/Card'
import Parent from './components/Parent'
import ProfileCard from './components/ProfileCard'
import Resume from './components/Resume'
import Form from './components/Form'
import Notes from './components/Notes'
import Gallery from './components/Gallery'

const App = () => {
  // The props passed can be anything - be it array , object, string, number, boolean or a function for that matter.
  console.log("parent rendered")
  const skills = ["React", "JS", "Node.js"]
  const user = {name:"Aina" , role:"SDE" , experience : 1.2}
 

  // Stores the string in the browser's memory . if object is to be stored we use JSON.stringify
  localStorage.setItem('user' , JSON.stringify(user))
  

  // useState - hook to manage the state of the app
  const [count, setCount] = useState(0);
  const [num, setNum] = useState([10,20,30])


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

      <div className='mt-6'>
        <h1 className='text-xs italic underline'>Numbers are:</h1>
        <ul>
         {num.map((val , idx) => {
          return <li key= {idx}> {val}</li>
         })}        
         </ul>
         <button className='bg-blue-500' onClick={()=>setNum(num.map((val,idx) => {
          return val*10
         }))}>Change Numbers</button>
      </div>

      <Form/>

      <Notes/>


      <Gallery/>


  </div>
  )
}

export default App
 