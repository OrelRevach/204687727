import React from 'react'
import {Row,Col,Container,
    Form,Button,Table} from 'react-bootstrap'

function OrderMangment (){
return(
<Container fluid>
<Row>
    <Col lg={2}>
    </Col>
    <Col className="p-4" lg={4}>
    <Form  className="SignUpForm p-4">
    <h2>Order Update</h2>
    <Form.Row>
      <Col>
        <Form.Label htmlFor="OrderID">OrderID:</Form.Label>
        <Form.Control type="text" placeholder="Enter OrderID" id="OrderID"/>
    </Col>
    </Form.Row>
  <Form.Row>
      <Col>
        <Form.Label htmlFor="UserID">UserID:</Form.Label>
        <Form.Control type="text" placeholder="Enter UserID" id="UserID"/>
    </Col>
    <Col>
        <Form.Label htmlFor="name">Name:</Form.Label>
        <Form.Control type="text" placeholder="Enter a name" id="name"/>
    </Col>
    </Form.Row>
    <Form.Row>
    <Col>
    <Form.Label htmlFor="email">Email:</Form.Label>
    <Form.Control type="email" placeholder="Enter  Email" id="email"/>
    </Col>
    <Col>
    <Form.Label htmlFor="pNumber">Phone Number:</Form.Label>
    <Form.Control type="text" placeholder="Enter  phone Number" id="pNumber"/>
    </Col>
    </Form.Row>
    <Form.Row>
    <Col>
    <Form.Label htmlFor="country">Country:</Form.Label>
    <Form.Control as="select" placeholder="Enter  country" id="country">
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
    <Form.Control type="text" placeholder="Enter  City" id="city"/>
    </Col>
    <Col>
    <Form.Label htmlFor="zipCode">Zip Code:</Form.Label>
    <Form.Control type="text" placeholder="Enter  Zip Code" id="zipCode"/>
    </Col>
    </Form.Row>
  
    <div className="text-center p-4">
    <Button variant="outline-info" className="">Update</Button>
    </div>
    </Form>
    </Col>
    <Col lg={2}></Col>
    <Col lg={2}className="p-4" >
        
    <Form  className="SignUpForm p-4">
    <h3>Order Cancel</h3>
    <Form.Row className="m-2">
    <Form.Label htmlFor="OrderIdD">OrderId:</Form.Label>
    <Form.Control type="text" placeholder="Enter OrderID" id="OrderIdD"/>
    </Form.Row>

    <div className="text-center p-4">
    <Button variant="outline-info" className="">Submit</Button>
    </div>
    </Form>
    </Col>
</Row>
<Row>
    
<Table responsive>
  <thead>
    <tr>
      <th>Number</th>
      <th>OrderID</th>
      <th>Name</th>
      <th>Email</th>
      <th>Phone Number</th>
      <th>Country</th>
      <th>City</th>
      <th>Zip Code</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      {Array.from({ length: 7 }).map((_, index) => (
        <td key={index}>Table cell {index}</td>
      ))}
    </tr>
  </tbody>
</Table>   
    
</Row>   
</Container>
)
}





export default OrderMangment;