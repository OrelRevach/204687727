import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import { useParams } from 'react-router';
import articles from '../articles.js'
function BlogPost(){
    const {id}=useParams();
    const post= articles.find(elem=>id==elem.id)
    return(
     <Container fluid >
         <Row>
        <Col className="text-center p-3">
        <div className="d-inline-block"><h3>{post.title}/</h3></div>
        <div className="d-inline-block"><h6>written By:</h6></div>
        <div className="d-inline-block"><cite>{post.author}</cite></div>
        </Col>
        </Row>
        <Row>
        <Col className="p-4">
          {post.content}
        </Col>  
        </Row>

     </Container>
    )
}
export default BlogPost ; 
