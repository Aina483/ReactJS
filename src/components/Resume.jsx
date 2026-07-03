import React from 'react'

const Resume = ({skills , user, onDownload}) => {
  return (
    <div className= "rounded-xl shadow-lg bg-white h-50 w-50 visible">
        <h1 className = " p-8 text-xl italic font-bold">
           {user.name}
        </h1>
        <h2 className ="text-xm underline">Skills</h2>
        <ul>
            {skills.map((skill,index)=>{
                return <li key ={index}>{skill}</li>
            })}
            </ul>

        <div className=" bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
            <button className = "mb-6"onClick={onDownload}>Download</button>

        </div>
        
      
    </div>
  )
}

export default Resume
