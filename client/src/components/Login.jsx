import React from 'react'
import {Container, Form,Row,Col,Button} from 'react-bootstrap'
function Login (){
return(
<Container fluid >
<Row>
    <Col lg={5} md={12} className="p-5 m-auto ">
    <Form className=" LoginForm p-5">
  <Form.Group className=" p-5">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>
  <Form.Group  className=" p-5">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
    <div className="text-center">
  <Button variant="outline-info" className="">Login</Button>
  </div>
  
</Form>
    </Col>
</Row>

</Container>
)
}





export default Login;