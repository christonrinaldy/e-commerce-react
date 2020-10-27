import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Form, Button, Container, Row, ModalDialog, Alert} from 'react-bootstrap'
import {adminLogin} from '../store/function/AdminLogin'

export default function Login ({history}) {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const status = useSelector((state)=> state.adminReducer.status)
    
    
    async function submitHandler(e) {
        await e.preventDefault()
        console.log('login admin with email...',email)
        await dispatch(adminLogin(email,password))
    }
    useEffect(()=> {
        if(status === true) {
            history.push("/home")
        }
    },[status])
    return(
        <Container>
            <Row className="justify-content-md-center">
            <Form onSubmit={(e)=> submitHandler(e)}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange = {(e)=> setPassword(e.target.value)} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Alert key="1" show={status === false? true:false} variant="success" transition={false}>
                    Email/password is wrong
                </Alert>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </Row>
        </Container>
        
    )
}