import React from 'react';
import { Container,Row,Col,CardDeck,Card,Button} from "react-bootstrap";
import articles from '../articles.js'
function Blog(){

    return(

<Container fluid>
<Row><h1 className="m-auto p-4">
    Blog
    </h1></Row>
{articles.map((article,index)=>{
    return (       
<Row className = " p-3" key={index} >
<Col lg={15} className="w-100">       
<Card>
 <Card.Header>{article.title}</Card.Header>
 <Card.Body>
<blockquote className="blockquote mb-0">
  <p>
    {article.content.substring(0,200)}
  </p>
  <Button variant ='outline-success' className="ml-auto d-inline-block" href= {`/post/${article.id}`}>Read More</Button>
  <footer className="blockquote-footer">
    Written By <cite title="Source Title">{article.author}</cite>
  </footer>

</blockquote>

</Card.Body>
</Card></Col>

   </Row>)
})}

           
</Container>    
)
}
export default Blog;