import React, { useState } from 'react'

export default function DataManagement() {

    const [data,setData]=useState({
        firstName:"",
        lastName:"",
        Address:{
            city:"",
            stat:""
        }
    })

    const [index,setIndex]= useState(-1);

    const [multipledata,setMultipleData]= useState([]);

    const changeValue = (e)=>{

        setData({...data,[e.target.name]:e.target.value})

    }
    const changeValueA = (e)=>{
            
        setData({...data.Address,[e.target.name]:(e.target.value)})

    }

    const saveInfo = (e) =>{

        e.preventDefault()

        let formData = [...multipledata];

        if(index == -1)
        {
        formData.push(data);

        }
        else
        {
         formData[index]=data;
        }
        setIndex(-1);
        setMultipleData(formData);
        console.log(formData)
    }

    const DeleteInfo = (index) =>{

        let p = [...multipledata]

        p.splice(index,1);

        setMultipleData(p);

    }

    const editeInfo = (index) => {

        let edit = multipledata[index];

        setData({...edit})

        setIndex(index);

    }

  return (
    <div>

        <form onSubmit={saveInfo}>

            <input type="text" name="firstName" onChange={changeValue} value={data.firstName}/><br/><br/>
            <input type="text" name="lastName"  onChange={changeValue} value={data.lastName}/><br/><br/>
            <input type="text" name="Address.city" onChange={changeValueA} value={data.Address.city}/><br/><br/>
            <input type="text" name="Address.stat" onChange={changeValueA} value={data.Address.stat} /><br/><br/>
            <input type="submit" value="Save"/>


        </form>

        <table>
         {
            multipledata.map((v,index)=>{
               return( <tr>
                <td>{v.firstName}</td>
                <td>{v.lastName}</td>
                <td>{v.Address.city}</td>
                <td>{v.Address.stat}</td>
                <td><button onClick={()=>{ DeleteInfo(index)}}>Delete</button></td>
                 <td><button onClick={()=>{  editeInfo(index)}}>edite</button></td>
                 </tr>)
            })
         }
        </table>
    </div>
  )
}
