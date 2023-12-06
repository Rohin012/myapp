
import React, { useState } from 'react'
import authfetchI from './Interseptor';
import { Link } from 'react-router-dom';



export default function RegistrationForm() {

    
   const [data,setData] = useState({
    title:"",
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    Confirmpassword:"",
    acceptTerm:""

    })

    const handleSubmit = (e)=>{

        e.preventDefault();

        authfetchI.post("accounts/register",data)
        .then(y=>{
            console.log(y.data);
            
            localStorage.setItem("token",JSON.stringify(y.data))
            
        }).catch(y=>{

            console.log(y)
        })

    }

    const handleInput = (e)=>{

        const { name, checked, value} = e.target;

        var myObject = {...data,[name] : value}
 
 
         setData(myObject);

    }

  return (
    <>

<form onSubmit={handleSubmit}>
<input type='text' name="title" value={data.title}  onChange={handleInput}/>
<input type='text' name="firstName" value={data.firstName}  onChange={handleInput}/>
<input type='text' name="lastName" value={data.lastName}  onChange={handleInput}/>
<input type='text' name="email" value={data.email}  onChange={handleInput}/>
<input type='text' name='password'  value={data.password}  onChange={handleInput}/>
<input type='text' name="Confirmpassword" value={data.Confirmpassword}  onChange={handleInput}/>

<input type='checkbox' name="acceptTerm" checked={data.acceptTerm}  onChange={handleInput}/>
<button type='submit' value="save"><Link to="/ListAccounts">SignIn</Link></button>
</form>


    </>
   
  )
}
