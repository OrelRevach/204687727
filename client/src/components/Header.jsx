import {Navbar, Nav, NavDropdown, Form, Button} from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import {useContext}from 'react'
import {StoreContext} from './StoreContext'
import ShopLogo from '../ORECATHLION1.png';
library.add(faShoppingCart);

const catt=<h5>Categories</h5>;
function Header() {
    const[store,updateStore]=useContext(StoreContext);
    return (
        <Navbar collapseOnSelect expand="lg" style={{backgroundColor: '#c7ffd8'}} variant="light" className="w-100 HeadNavBar" >
  <Navbar.Brand  href="/" ><img src={ShopLogo} className="w-15, 10 "></img>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/blog" variant="outline-success"><h5>Blog</h5></Nav.Link>
      <NavDropdown title={catt} id="collasible-nav-dropdown">
        <NavDropdown.Item href="/Cat/1">BasketBall</NavDropdown.Item>
        <NavDropdown.Item href="/Cat/2">FootBall</NavDropdown.Item>
        <NavDropdown.Item href="/Cat/3">Jogging</NavDropdown.Item>
        <NavDropdown.Item href="/Cat/4">Tennis</NavDropdown.Item>
        <NavDropdown.Item href="/Cat/5">Swimming</NavDropdown.Item>

        <NavDropdown.Divider />
        <NavDropdown.Item href="/Cat/6">Men's Clothing</NavDropdown.Item>
        <NavDropdown.Item href="/Cat/7">Women's Clothing</NavDropdown.Item>
        <NavDropdown.Item href="/Cat/8">Kids's Clothing</NavDropdown.Item>
        <NavDropdown.Item href="/Cat/9">Accesories</NavDropdown.Item>



      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="/signup"><h5>Sign Up</h5></Nav.Link>
      <Nav.Link eventKey={2} href="/login">
        <h5>Login</h5>
      </Nav.Link>
      <Nav.Link href="/CartPage">
        
      <div className="" ><FontAwesomeIcon icon="shopping-cart" />{store.cart.items.length}</div>
      </Nav.Link>
      <Form inline>
      <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
      <a href={`/search`} >
      <Button variant="outline-success"> <h5>Search</h5></Button>
      </a>
    </Form>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}
export default Header;

