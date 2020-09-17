import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import './Navigation.css'

export const Navigation = () => {
    return (
       
        <Navbar variant="dark" stick="top" className = "navbar" >
            <Container >
            <Navbar.Brand href="/"><h3>Fangy's Website</h3></Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
                <Nav >
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/projects">Projects</Nav.Link>
                    <Nav.Link href="/profile">About Me</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

