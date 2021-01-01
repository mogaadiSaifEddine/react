import React from'react' 
const accord =()=>{
    return(
    <Accordion defaultActiveKey="0">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Click me!
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body className ='hio'>here's no thing !! </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
        Click me!
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>Hello! I'm another body
      <Form class ="ff">
    <Container fluid >
  <Form.Group  controlId="formHorizontalEmail">
    <Row>
    <Form.Label class="col-2">
      Email
    </Form.Label>
    <Col class="col-10">
      <Form.Control type="email" placeholder="Email" />
    </Col>
    </Row>
  </Form.Group>

  <Form.Group  controlId="formHorizontalPassword">
    <Row>
    <Form.Label class="col-2">
      Password
    </Form.Label>
    <Col class="col-10">
      <Form.Control type="password" placeholder="Password" />
    </Col>
    </Row>
  </Form.Group>
  
  <Form.Group controlId="formHorizontalCheck">
  <Col>
  <Form.Label class="col-2">
    </Form.Label>
    <Row class="col-10">
      <Form.Check label="Remember me" />
    </Row>
    </Col>
  </Form.Group>

  <Form.Group >
    <Col>
    <Form.Label class="col-2">
    </Form.Label> 
    <Row class="col-10">
    <Button variant="outline-primary">Sign in</Button>
    </Row>
    </Col>
  </Form.Group>
  </Container>
</Form>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>)
}
export default accord;