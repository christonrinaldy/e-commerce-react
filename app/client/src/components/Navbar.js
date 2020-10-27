import React from 'react'
import {Navbar, Form, Button} from 'react-bootstrap'

export default function NavigationBar ({logoutAdmin}) {
    return(
        <>
            <Navbar bg="dark" variant="dark" className="bg-light justify-content-between">
                <Navbar.Brand href="#home">
                <img
                    alt=""
                    src="/logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                React Bootstrap
                </Navbar.Brand>
                    <Button onClick={() => logoutAdmin()} type="button" className=" mr-sm-2">Logout</Button>
            </Navbar>
        </>
    )
}