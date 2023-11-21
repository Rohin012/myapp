import React, { useState } from 'react';
import t from './data';

export const Home = () => {

    

     let [data,setData] =   useState(0);
    const inc = ()=>{
        setData(data+1);
       

    
    }
    let [data1,setData1] =   useState(0);
    const decre = ()=>{
     setData1(data1-1);
    }

    

  return (
    <> {data}
     <button onClick={inc}>+</button>

     {data1}
     <button onClick={decre}>-</button>




    <table>
        
        <tbody>
        {
        
            t.map((v,index)=>{

                return (<tr key={index}>
                     <td>{v.userId}</td>
                    <td>{v.id}</td>
                    <td>{v.body}</td>
                    <td>{v.title}</td>
                    
                    </tr>)

            })
        
        }
        
        </tbody>
        </table>

        </>
  )
}
