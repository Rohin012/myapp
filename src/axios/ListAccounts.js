import axios from 'axios';
import React, { useEffect, useState } from 'react'
import fetchauth from './customaxios';
import authfetchI from './Interseptor';

export default function ListAccounts() {

    const [data,setData]= useState([]);

    let d = JSON.parse(localStorage.getItem("token"));

    useEffect(()=>{

      authfetchI.get("/accounts").then(y=> {
        
            setData(y.data)
        }).catch(u=>{

            console.log(u);
        })

    },[])
  return (
    <table>
        <tbody>{
        
            data.map((v)=>{


                return(<tr>
                    <td>{v.title}</td>
                    <td>{v.firstName}</td>
                    <td>{v.lastName}</td>
                    <td>{v.email}</td>
                    <td>{v.password}</td>
                    <td>{v.Confirmpassword}</td>
                    
                    </tr>)

            })
        
        }
        
        </tbody>
        </table>

  )
}
