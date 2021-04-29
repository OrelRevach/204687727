import React from "react";
import {Nav, Navbar} from "react-bootstrap";

function Footer (){
return (
    <Navbar collapseOnSelect expand="lg"  style={{backgroundColor: '#c7ffd8'}} variant="light" className="w-100 HeadNavBar"  bottom >
    <Nav className="justify-content-center m-auto" activeKey="/home">
      <Nav.Item>
        <Nav.Link href="/ContactUs"><h5>Contact Us</h5></Nav.Link>
      </Nav.Item>
     
      <Nav.Item>
      <Nav.Item>
        <div className="mr-sm-2" >
        <Nav.Link href="/AboutUs"><h5>AboutUs</h5></Nav.Link>
        </div>
      </Nav.Item>
      </Nav.Item>
    </Nav>
    <div>
    © {new Date().getFullYear()}
     <span className="m-1">Copyright</span>
    </div>
  </Navbar>
)

}

export default Footer ; 