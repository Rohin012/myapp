import React from 'react'

import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export const EDisplay = ({img,title,price}) => {
  return (
    
      
      <Col xs lg="4">
    <Card style={{ width: '21rem' }}>
    <Card.Img style={{width:'12.5rem',height:'12.5rem'}} variant="top" src={img} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        {price}
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
  </Col>

  
  )
}
