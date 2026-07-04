import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Gallery = () => {

    const [userData, setUserData] = useState([])

  const getData = async ()=>{
        console.log("data received")
        const response = await axios.get('https://picsum.photos/v2/list?page=3&limit=30')
        setUserData(response.data)
    }

    useEffect(()=>{
        getData()
    }, [])

    let printUserData = 'No data available'

    if(userData.length > 0){
        printUserData = userData.map((val,idx)=>{
            return <div>
            <div className='h-40 w-44 bg-white rounded-xl'>
                <img className='h-full w-full object-cover'key={idx} src= {val.download_url}/>
            </div>
            <h2>{val.author}</h2>
            </div>

        })
    }
  return (
    <div className='bg-black p-4 m-4 h-screen text-white'>
        <div className='flex flex-wrap gap-4'>
            {printUserData}
        </div>
    </div>
  )
}

export default Gallery
