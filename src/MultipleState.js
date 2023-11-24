import React, { useState } from 'react'

const MultipleState = () => {

    const [data,setData]= useState({firstName:'Rohini',lastName:'Kawadkar',fullName:''

    })

    const fullName=()=>{

        setData({...data, fullName: data.firstName + " " + data.lastName})
    }

  return (
    <div>
        {/* {data.firstName}
        {data.lastName} */}
        {data.fullName}

        <button onClick={fullName}>Display</button>
    </div>
  )
}

export default MultipleState