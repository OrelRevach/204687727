import React from 'react'
import {Row,Col,Container,
    Form,Button} from 'react-bootstrap'

function ContactUs (){
return(
<Container fluid>
<Row>
    <Col className="p-4">
    <Form  className="SignUpForm p-4">
    <h2>How can we help you?</h2>
  <Form.Row>
      <Col>
        <Form.Label htmlFor="fName">First Name:</Form.Label>
        <Form.Control type="text" placeholder="Enter your first name" id="fName"/>
    </Col>
    <Col>
        <Form.Label htmlFor="lName">Last Name:</Form.Label>
        <Form.Control type="text" placeholder="Enter your last name" id="lName"/>
    </Col>
    </Form.Row>
    <Form.Row>
    <Col>
    <Form.Label htmlFor="email">Email:</Form.Label>
    <Form.Control type="email" placeholder="Enter your Email" id="email"/>
    </Col>
    <Col>
    <Form.Label htmlFor="pNumber">Phone Number:</Form.Label>
    <Form.Control type="text" placeholder="Enter your phone Number" id="pNumber"/>
    </Col>
    </Form.Row>
    <Form.Row>
    <Col>
    <Form.Label htmlFor="Topic">Topic:</Form.Label>
    <Form.Control type="text" placeholder="Enter the Topic" id="Topic"/>
    </Col>   
    </Form.Row>

    <Form.Row>
    <Col>
    <Form.Label htmlFor="textarea">Massage:</Form.Label>
    <Form.Control as="textarea" rows="6" placeholder="Enter the Massage" id="textarea"/>
    </Col>   
    </Form.Row>
    
    <div className="text-center p-4">
    <Button variant="outline-info" className="">Sign up</Button>
    </div>
    </Form>
    </Col>
    </Row>   
</Container>
)
}

export default ContactUs;