
import React, { useState } from 'react'
import authfetchI from './Interseptor';
import { Link } from 'react-router-dom';



export default function RegistrationForm() {

    
   const [data,setData] = useState({
    email:"",
    password:"",

    })

    const handleSubmit = (e)=>{

        e.preventDefault();

        authfetchI.post("accounts/register",data)
        .then(y=>{

            localStorage.setItem("token",JSON.stringify(y.data))
            console.log(y.data);
        }).catch(y=>{

            console.log(y)
        })

    }

    const handleInput = (e)=>{

        setData({...data,[e.target.name]: e.target.value})

    }

  return (
    <>

<form onSubmit={handleSubmit}>

<input type='text' name="email" value={data.email}  onChange={handleInput}/>
<input type='text' name='password'  value={data.password}  onChange={handleInput}/>
<button type='submit' value="save"><Link to="/logIn">SignIn</Link></button>
</form>


    </>
   
  )
}
