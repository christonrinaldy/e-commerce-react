import React from 'react'
import {Button, Card} from 'react-bootstrap'

export default function cardComponent({product, deleteProduct}) {
    return(
        <>
            {console.log(product)}
            <Card.Img variant="top" src={product.image_url}/>
            <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>
                {JSON.stringify(product.price)}
            </Card.Text>
            </Card.Body>
        </>
    )
}