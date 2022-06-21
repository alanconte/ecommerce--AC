import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({producto}) => {
  return (
    <div>
        <Card key={producto.key} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={producto.img} />
        <Card.Body>
          <Card.Title>{producto.nombre}</Card.Title>
          <Card.Text>
            {producto.detalles}
          </Card.Text>
          <Button variant="primary">Mas detalles</Button>
        
        </Card.Body>
      </Card>
    </div>
  )
}

export default Item