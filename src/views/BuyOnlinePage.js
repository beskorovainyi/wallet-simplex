import React, {useState} from "react";

import {
  Container,
  Row,
  Col,
  Card,
  Dropdown,
  InputGroup,
  DropdownButton,
  FormControl,
  Form,
  Button
} from "react-bootstrap";

const BuyOnlinePage = () => {
  
  const [coin, setCoin] = useState('BTC');
  const [email, setEmail] = useState('');
  const [money, setMoney] = useState('USD');
  
  return (
      <Container style={{margin: "150px auto", height: "800px"}}>
        <Row>
          <Col>
            <Card style={{border:"none"}}>
              <Card.Body>
                
                <h1 style={{textAlign: "center"}}><strong>Buy Bitcoin with a Credit Card or Debit Card</strong></h1>
                <br/>
                <h5 style={{textAlign: "center"}}>Buy Bitcoin Online the Easy Way</h5>
                <hr/>
                <h3 style={{textAlign: "center", color: "#2c8ac3"}}>Visa and MasterCard accepted here</h3>
                <br />
                
                <Container>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    {/*<Form.Label>Email address</Form.Label>*/}
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      onChange={(e) => {
                        setEmail(e.target.value)
                      }}
                    />
                  </Form.Group>
                </Container>
                <Container>
                  <Row>
                    <Col>
                      <InputGroup className="mb-3">
                        <FormControl aria-label="Text input with dropdown button"
                                     type="number"
                        />
                        <DropdownButton
                          variant="outline-secondary"
                          title={coin}
                          id="input-coin"
                          align="end"
                        >
                          <Dropdown.Item onClick={e => setCoin('BTC')}>BTC</Dropdown.Item>
                          <Dropdown.Item onClick={e => setCoin('LTC')}>LTC</Dropdown.Item>
                          <Dropdown.Item onClick={e => setCoin('ETH')}>ETH</Dropdown.Item>
                          <Dropdown.Item onClick={e => setCoin('DOGE')}>DOGE</Dropdown.Item>
                        </DropdownButton>
                      </InputGroup>
                    </Col>
                    <Col>
                      <InputGroup>
                        <DropdownButton
                          variant="outline-secondary"
                          title={money}
                          id="input-group-dropdown-3"
                        >
                          <Dropdown.Item onClick={e => setMoney('USD')}>USD</Dropdown.Item>
                          <Dropdown.Item onClick={e => setMoney('HRV')}>HRV</Dropdown.Item>
                          <Dropdown.Item onClick={e => setMoney('EUR')}>EUR</Dropdown.Item>
                          <Dropdown.Item onClick={e => setMoney('British Pound')}>British Pound</Dropdown.Item>
                        </DropdownButton>
                        <FormControl aria-label=""
                                     type="number"
                        />
                      </InputGroup>
                    </Col>
                  </Row>
                </Container>
                <Container>
                  <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Control type="text" placeholder={`(` + coin + `)` + ` address`}/>
                    <Form.Text className="text-muted">
                      {coin} address must be <strong>yours</strong> and <strong>under your full control.</strong>
                    </Form.Text>
                  </Form.Group>
                </Container>
                <Container style={{textAlign: "center"}}>
                  <Button style={{textAlign: "center", background: "#dc6326", borderRadius:"20px"}}  active>
                    <strong>CONTINUE</strong>
                  </Button>
                </Container>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
  )
}

export default BuyOnlinePage