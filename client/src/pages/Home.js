import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row, Card, Modal, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {ProductCard, ModalForm, UpdateForm, Navbar} from '../components'
import {getProducts, delProductById, addProduct, updateProductById} from '../store/function/CRUD_products'
import {adminLogout} from '../store/function/AdminLogin'


export default function Home ({history}) {
    const dispatch = useDispatch()
    const products = useSelector((state)=> state.productReducer.products)
    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])
    function handleDelete(productId) {
        dispatch(delProductById(productId))
    }
    function submitHandler(product) {
        dispatch(addProduct(product))
    }
    function submitHandler1(productId,product) {
        dispatch(updateProductById(productId,product))
    }
    async function logoutAdmin() {
        await dispatch(adminLogout())
        await history.push("/")

    }
    if(products.length === 0) {
        return (<p>Loading...</p>)
    }
    return(
        <Container>
            <Navbar logoutAdmin={logoutAdmin}></Navbar>
            <h1>Products</h1>
            <ModalForm submitHandler={submitHandler}></ModalForm>
            <Row xs={4}>
                    {products.map((product,index) => {
                        return ( <Card key={index}>
                                    <ProductCard  product= {product} />
                                    <Button onClick={()=> handleDelete(product.id)}>Delete</Button>
                                    <UpdateForm product={product} submitHandler={submitHandler1}></UpdateForm>
                                  </Card>
                                )
                    })}
            </Row>
            
        </Container>
    )
}

