import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row, Card, Modal, Form } from 'react-bootstrap'

export default function Example({submitHandler}) {
    const [show, setShow] = useState(false);
    const [name, setName] = useState('')
    const [image_url, setURL] = useState('')
    const [price, setPrice] = useState(null)
    const [stock, setStock] = useState(null)

  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
        <Button variant="primary" onClick={handleShow}>
            Add Product
        </Button>
        <Modal show={show} onHide={handleClose} animation={false}>
          <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={()=> submitHandler({name,image_url,price,stock})}>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Product's Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Product's Name" required={true} onChange={(e)=> setName(e.target.value)}/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicImageURL">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control type="text" placeholder="Image URL" required={true} onChange={(e)=> setURL(e.target.value)}/>
                </Form.Group>
                <Form.Group controlId="formBasicPrice">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="Number" placeholder="Price" required={true} onChange={(e)=> setPrice(e.target.value)} min={1}/>
                </Form.Group>
                <Form.Group controlId="formBasicStock">
                    <Form.Label>Stock</Form.Label>
                    <Form.Control type="Number" placeholder="Stock" required={true} onChange={(e)=> setStock(e.target.value)}/>
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
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }