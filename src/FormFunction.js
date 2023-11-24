import React, { useState } from 'react'

export default function FormFunction() {

  const [data,setData] = useState({
        firstName : "",
        lastName : ""
    });

    const handelInput = (e)=>{

        setData({[e.target.name]: e.target.value})

    }

    const saveInfo = (e)=>{
        e.preventDefault();

        console.log(data);

    }

    const handleInputForFirstName =(e)=>{

        setData({...data,firstName : e.target.value})

    }
    const handleInputForLastName =(e)=>{

        setData({...data,lastName : e.target.value})
    }


  return (
    <form onSubmit={saveInfo}>
        
        <input type='text' name="firstName" placeholder='please enter firstName' onChange={handelInput}/>
        <input type='text' name="lastName" placeholder='please enter lastName' onChange={handelInput}/>
        <input type='submit' value="save" />

    </form>
  )
}
