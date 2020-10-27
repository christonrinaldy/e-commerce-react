import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row, Card, Modal, Form } from 'react-bootstrap'

export default function UpdateForm({submitHandler, product}) {
    const [show, setShow] = useState(false);
    const [name, setName] = useState(product.name)
    const [image_url, setURL] = useState('')
    const [price, setPrice] = useState(null)
    const [stock, setStock] = useState(null)

    useEffect(()=> {
      setName(product.name)
      setURL(product.image_url)
      setPrice(product.price)
      setStock(product.stock)

    },[show])

  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
        <Button variant="primary" onClick={handleShow}>
            Update Product
        </Button>
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={()=> submitHandler(product.id,{name,image_url,price,stock})}>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Product's Name</Form.Label>
                    <Form.Control type="text" value={name} required={true} onChange={(e)=> setName(e.target.value)}/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicImageURL">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control type="text" placeholder="Image URL" value ={image_url} required={true} onChange={(e)=> setURL(e.target.value)}/>
                </Form.Group>
                <Form.Group controlId="formBasicPrice">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="Number" placeholder="Price" value={price} required={true} onChange={(e)=> setPrice(e.target.value)} min={1}/>
                </Form.Group>
                <Form.Group controlId="formBasicStock">
                    <Form.Label>Stock</Form.Label>
                    <Form.Control type="Number" placeholder="Stock" value={stock} required={true} onChange={(e)=> setStock(e.target.value)}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }