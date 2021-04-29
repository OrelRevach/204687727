import React from 'react'
import {Row,Col,Container,
    Form,Button,Table} from 'react-bootstrap'
import {sportsTypes,categories} from '../categories'

function ProductMangment (){
return(
<Container fluid>
<Row>
    <Col lg={2}>
    </Col>
    <Col className="p-4" lg={4}>
    <Form  className="SignUpForm p-4">
    <h2>Add Product </h2>

  <Form.Row>
      <Col>
        <Form.Label htmlFor="Name">Name:</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" id="Name"/>
    </Col>
    <Col>
        <Form.Label htmlFor="Price">Price:</Form.Label>
        <Form.Control type="text" placeholder="Enter a Price" id="Price"/>
    </Col>
    </Form.Row>
    <Row>
    <Col lg={4}>
    <h6>SELECT CATEGORIES </h6>
    <Form.Control as="select" multiple>
    {categories.map((cat) => (
      <option key={cat.id} value={cat.name}>
      {cat.name}  
      </option>
    ))}
    </Form.Control>
    <h6>SELECT SPORTS_TYPE </h6>
    <Form.Control as="select" multiple>
    {sportsTypes.map((sport) => (
      <option key={sport.id} value={sport.name}>
      {sport.name}  
      </option>
    ))}
    </Form.Control>
    </Col>
    <Col lg={2}></Col>
    <Col  lg={6}>
    <Col>
        <Form.Label htmlFor="First Photo">First Photo Url:</Form.Label>
        <Form.Control type="text" placeholder="Enter First Photo" id="First Photo"/>
    </Col>
    <Col>
        <Form.Label htmlFor="Secound Photo:">Secound Photo Url:</Form.Label>
        <Form.Control type="text" placeholder="Enter Secound Photo:" id="Secound Photo:"/>
    </Col>
    <Col>
        <Form.Label htmlFor="Third Photo:">Third Photo Url:</Form.Label>
        <Form.Control type="text" placeholder="Enter Third Photo" id="Third Photo"/>
    </Col>
    <Col>
        <Form.Label htmlFor="Fourth Photo">Fourth Photo Url:</Form.Label>
        <Form.Control type="text" placeholder="Enter Fourth Photo" id="Fourth Photo"/>
    </Col>
  </Col>
  </Row>
    
  
    <div className="text-center p-4">
    <Button variant="outline-info" className="">Update</Button>
    </div>
    </Form>
    </Col>
    <Col lg={2}></Col>
    <Col lg={2}className="p-4" >
        
    <Form  className="SignUpForm p-4">
    <h5>Product Remover</h5>
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
export default ProductMangment;