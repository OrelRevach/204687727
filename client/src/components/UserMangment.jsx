import React from 'react'
import {Row,Col,Container,
    Form,Button,Table} from 'react-bootstrap'

function UserMangment (){
return(
<Container fluid>
<Row>
<Col lg={2}>
    
    </Col>
    <Col className="p-4" lg={4}>
    <Form  className="SignUpForm p-4">
    <h2>User Update</h2>
  <Form.Row>
  <Col>
        <Form.Label htmlFor="UserID">UserID:</Form.Label>
        <Form.Control type="text" placeholder="Enter UserId" id="UserID"/>
    </Col>
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
    <Button variant="outline-info" className="">Update</Button>
    </div>
    </Form>
    </Col>
    <Col lg={2}>
    
    </Col>
    <Col lg={2}className="p-4" >
        
    <Form  className="SignUpForm p-4">
    <h3>User Remover</h3>
    <Form.Row className="m-2">
    <Form.Label htmlFor="UseID">UserID:</Form.Label>
    <Form.Control type="text" placeholder="Enter UserId" id="UseID"/>
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
      <th>UserID</th>
      <th>FirstName</th>
      <th>LastName</th>
      <th>Email</th>
      <th>Phone-Number</th>
      <th>Country</th>
      <th>City</th>
      <th>Zip Code</th>
      <th>Password</th>
      <th>Permission </th>

     
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      {Array.from({ length: 10 }).map((_, index) => (
        <td key={index}>Table cell {index}</td>
      ))}
    </tr>
  </tbody>
</Table>   
</Row> 
</Container>
)
}





export default UserMangment;