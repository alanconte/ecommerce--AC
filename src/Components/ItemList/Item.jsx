import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({producto}) => {
  return (
    <div className='card'>
        <Card key={producto.key}>
        <Card.Img className='imgDetail' variant="top" src={producto.img} />
        <Card.Body>
          <Card.Title>{producto.nombre}</Card.Title>
          <Card.Text className='cardDetail'>
            {producto.detalles}
          </Card.Text>
          <Link to={`/detalle/${producto.id}`} >
          <Button variant="danger">Mas detalles</Button>
          </Link>
        
        </Card.Body>
      </Card>
    </div>
  )
}

export default Item