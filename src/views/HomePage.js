import React from "react";

import {Container, Badge} from "react-bootstrap";

const HomePage = () => {
  
  return (
    <Container style={{margin: "150px auto"}}>
      <div style={{textAlign: "center"}}>
        <h1>
          <Badge bg="secondary">Home Page</Badge>
        </h1>
      </div>
    </Container>
  )
}

export default HomePage