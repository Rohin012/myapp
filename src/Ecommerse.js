import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { EDisplay } from './EDisplay';



export const Ecommerse = () => {

   const [data,setData]= useState([])
   console.log(data);

    useEffect(()=>{

    axios.get("https://fakestoreapi.com/products")
    
    .then(y=>{

        setData(y.data);
        
    }).catch(y=>{
        console.log(y);
    })

    },[])
  return (
    <>
        
      {
        
        data.map((v)=>{
             return ( <EDisplay title={v.title} price={v.price} img={v.image}/>)
         }) }
       </>
  )
}
