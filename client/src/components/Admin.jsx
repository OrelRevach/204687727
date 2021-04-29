import React,{useState} from 'react';
import { Col, Container, Row ,Nav} from 'react-bootstrap';
import UserMangment from './UserMangment.jsx'
import OrderMangment from './OrderMangment.jsx'
import ProductMangment from'./ProductMangment.jsx'
function AdminPage(){


const [users, setUsers] = useState(false);
const [orders, setOrder] = useState(false);
const [products, setProduct] = useState(false);
const handleClick = (e) => {

 const {name} = e.target;
    switch (name) {
    case 'users':
        setUsers(true);
        setOrder(false);
        setProduct(false); 
        break;
    case 'orders':
            setOrder(true);
            setProduct(false);
            setUsers(false);
        break;   
    default:
        setProduct(true);
        setUsers(false);
        setOrder(false);
        break;
}
}
return(
<Container fluid>
<Row>

<Col  className="text-center p-3">
<h3> Hello Admin</h3>
<div >
<Nav fill variant="tabs" defaultActiveKey="/home" className="text-center">
  <Nav.Item>
    <Nav.Link  onClick={handleClick} name = "users">Users</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link onClick={handleClick} name = "orders">Orders</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link onClick={handleClick} name = "products ">Products</Nav.Link>
  </Nav.Item>
</Nav>
</div>
</Col>

</Row>
<Row>

<Col>

{  users&&<UserMangment/>}
{ orders&& <OrderMangment/>}
{products &&  <ProductMangment/>}



</Col>    
</Row>
</Container>
)

}

export default AdminPage;