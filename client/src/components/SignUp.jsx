import React from 'react'
import {Row,Col,Container,
    Form,Button} from 'react-bootstrap'

function SignUp (){
return(
<Container fluid>
<Row>
    <Col className="p-4">
    <Form  className="SignUpForm p-4">
    <h2>Register:</h2>
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
    <Form.Label htmlFor="country">Country:</Form.Label>
    <Form.Control as="select" placeholder="Enter your country" id="country">
    <option>
    Israel
    </option>
    <option>
    Usa
    </option>
    <option>
    Canada
    </option>      
    </Form.Control>
    </Col>
    <Col>
    <Form.Label htmlFor="city">City:</Form.Label>
    <Form.Control type="text" placeholder="Enter your City" id="city"/>
    </Col>
    <Col>
    <Form.Label htmlFor="zipCode">Zip Code:</Form.Label>
    <Form.Control type="text" placeholder="Enter your Zip Code" id="zipCode"/>
    </Col>
    </Form.Row>
    {/*email,phone number, country,city,address , zip code,passwordX2 */}
    <Form.Row>
    <Col>
    <Form.Label htmlFor="password">Password:</Form.Label>
    <Form.Control type="password" placeholder="Enter your password" id="password"/>
    </Col>
    <Col>
    <Form.Label htmlFor="password">Re-Password:</Form.Label>
    <Form.Control type="password" placeholder="Enter your password" id="password"/>
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





export default SignUp;