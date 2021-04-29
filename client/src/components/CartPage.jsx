import React,{useContext} from 'react';
import { Col, Container, Row ,Button} from 'react-bootstrap';
import CartItem from './CartItem';

function CartPage (){
return(
<Container fluid>
<Row className="m-2">
<Col lg={8} className="p-2">

<CartItem/>

</Col>
<Col lg={4}>
<Row >
 
<h5 class="hcart text-uppercase py-1 mb-0">cart Summary</h5>
</Row>
<Row className = "p-3 CartDes">

<Col lg={10}>
<h6><span class="label js-subtotal">Total Products</span></h6>
</Col>
<Col lg={2}>
 150
</Col>

<Col lg={10}>
<h6><span class="label js-subtotal">Shipping</span></h6>
</Col>
<Col lg={2}className="m-auto">
20
</Col>
<Col lg={10} className="p-3 HrCart">
<h6><span class="label js-subtotal">Total Price</span></h6>
</Col>
<Col lg={2} className="p-3 HrCart">
Total
</Col>
<Button variant="outline-info"className="w-75 m-auto"  >PROCEED TO CHECKOUT</Button>{' '}
</Row>
</Col>    
</Row>
</Container>
)
}

export default CartPage;