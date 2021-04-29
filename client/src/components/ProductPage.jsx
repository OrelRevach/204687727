import React from "react";
import { Row,Col,Container,Button,Carousel} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import products from '../products.js'
import {useParams} from "react-router-dom"
library.add(faCartPlus);
function ProductPage(){
     const { id } = useParams();
   
     const prod = products.find(elem=>Number(id)===Number(elem.id));
     console.log(prod.src[0]);
     console.log(prod.src[1]);
     console.log(prod.src[2]);
    

     return(
       
       
         <Container fluid>
        <Row>
        <Col lg={4} >
        <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={prod.src[0]}
     
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={prod.src[1]}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src=  {prod.src[2]}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </Col >
        
        <Col lg={4}>
       
        <div>
            
        <div className = "p-3" >
        Product Name: {prod.name}
        </div>
        <div className = "p-3" >
        <div style={{backgroundColor: '#98ded9'  ,display:'inline-block'}}>Price:{prod.price}</div>
        </div>
        <div className = "p-3">
        Quantity:
        <span className=" p-3">
        <input type="number" id="NumOfQuantity" min="1" max="100"></input>
        </span>
        </div>
        <div className="d-block p-3">
            Size: 
        <select name="cars" id="cars"className= "m-2" >
            <option value="small">S</option>
            <option value="medium">M</option>
            <option value="large">L</option>
            <option value="XL">XL</option>
        </select>
        </div>
        <div className = "p-3" >
        <Button style={{backgroundColor: '#98ded9'}}>BuyNow</Button>{' '}
        <Button style={{backgroundColor: '#98ded9'}} className="m-2" size="2x"
><FontAwesomeIcon icon="cart-plus"/></Button>

        </div>
        
        </div>
        
        </Col>
        
        </Row>
         </Container>
)
}


export default ProductPage;
