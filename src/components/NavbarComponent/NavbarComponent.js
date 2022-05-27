import React from "react";

import {Navbar, Container, Nav} from "react-bootstrap";

const NavbarComponent = () => {
  
  return(
    <>
      <Navbar fixed="top" bg="" variant="dark" style={{height:"75px", background:"#2a86c0"}}>
        <Container>
          <Navbar.Brand href="/home" ><strong>Wallet</strong></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/buy-online" ><strong>Buy Online</strong></Nav.Link>
            <Nav.Link href="/contact-us" ><strong>Contact Us</strong></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarComponent