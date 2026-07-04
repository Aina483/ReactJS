import React, { useState } from 'react'

const Notes = () => {

    const [formData, setFormData] = useState({
        note:"",
        details:""
    })
    let newFormData = {...formData}

    const handleChange = (e)=>{
        const {name, value} = e.target
         
        console.log(newFormData)
        setFormData(newFormData => ({
            ...newFormData,
            [name]:value
        }))

    }

    

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log("submitting form data",newFormData)
        setFormData({
            note:'',
            details:''
        })
    }


  return (
    <div className='h-screen bg-black text-white'>
        <form className='flex justify-between items-start p-10' onSubmit={handleSubmit}>
            <div className='flex gap-4 items-start flex-col'>
                <input 
                name='note'
                type='text' 
                placeholder='Enter Note Heading'
                value={formData.note}
                onChange={handleChange}
                className='px-5 py-2 border-2 outline-none rounded text-white'
                />
                <input
                name='details' 
                type='text' 
                placeholder='Enter Note Details'
                value={formData.details}
                onChange={handleChange}
                className='px-5 py-2 border-2 outline-none rounded text-white'/>
                <button className='rounded bg-white text-black outline-none px-5 py-2 w-full'>Add Note</button>
            </div>
        </form>
      
    </div>
  )
}

export default Notes
