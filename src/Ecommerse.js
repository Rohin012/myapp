import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';

import { EDisplay } from './EDisplay';
import Row from 'react-bootstrap/Row';



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
    <Container>
        <Row>
      {
        
        data.map((v)=>{
             return ( <EDisplay title={v.title} price={v.price} img={v.image}/>)
         }) }
         </Row>
         </Container>
       </>
  )
}
