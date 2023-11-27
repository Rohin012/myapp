import React, { useState } from 'react';

const MyForm = () => {
  
  const[data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    Confirmpassword: '',
    acceptTerm:''
  });

  
   const handelInput = (e)=>{

        setData({...data,[e.target.name]: e.target.value})

   }
  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        FirstName:
        <input type="text" name="firstName" onChange={handelInput}/>
        </label>  
      
      <br />
      <br />

      <label>
        lastName:
        <input type="text" name="lastName" onChange={handelInput}/>
        </label>  
        <br />
        <br/>
      <label>
        Email:
        <input  type="email" name="email" onChange={handelInput} />
      </label>
      <br />
      <br />
      <label>
        Password:
        <input  type="password" name="password"  onChange={handelInput}/>
       </label>
       <br />
      <br/>
       <label>
       Confirmpassword:
        <input  type="password" name="Confirmpassword"  onChange={handelInput}/>
       </label>
       <br />
      <br />
      <label>
       acceptTerm:
        <input  type="checkbox" name="acceptTerm"  onChange={handelInput}/>
       </label>
       <br />
      <br />
      <input type="submit" value="save"/>
    </form>
  )

}
export default MyForm;
