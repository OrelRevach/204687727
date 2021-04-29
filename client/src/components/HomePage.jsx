import {React,useState,useEffect} from "react";
import {Carousel, Card,  Col, CardDeck,Container, Row} from "react-bootstrap"
import axios from "axios";

function Homepage(){
  const [genders,setGenders]=useState([])
  const [categories,setCategories]=useState([])
  const getgGenderData =async()=>{
    const {data} = await axios.get("http://localhost:3000/gender")
      setGenders(data); 
      }
    
   const  getSportsData=async()=>{
    const {data} = await axios.get("http://localhost:3000/cat")
      setCategories(data); 
      }

  useEffect(()=>{
  getSportsData();
    getgGenderData();
  },[])
 

    return (
      
      <Container fliud>

   
      <Row className="w-100">
        <Col  >
          
      <Carousel >
        <Carousel.Item  className="w-100 h-80">
          <img  style={{ maxHeight :600 ,height:600,witdh: 1850 ,maxWidth:1850 }}
          
            src="https://img-resize.com/view/0a13396a78ce2f686a53dde292620731.jpg" 
            alt="First slide"
          />
          <Carousel.Caption>
          <h2>R.I.P-Kobe Braynt</h2>
          <h3>Mamba Mentality-be the best version of your self</h3>
          </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img  style={{ maxHeight :600 ,height:600,witdh: 1850 ,maxWidth:1850 }}
            src="https://img-resize.com/view/079a45cde319db3a2d8bb79b85a0f448.jpg"
            alt="Second slide"
          />
  
          <Carousel.Caption >
            <h2>Michael Jordan With Scotty Pippen</h2>
          </Carousel.Caption>
          </Carousel.Item >
          <Carousel.Item style={{ maxHeight :600 ,height:600,witdh: 1200 ,maxWidth:1850 }} >
          <img  style={{ maxHeight :600 ,height:600,witdh: 1200 ,maxWidth:1850 }}
            src="https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F200129141528-kobe-bryant-jersey-trnd.jpg"
            alt="Third slide"
          />
  
          <Carousel.Caption >
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </Col>
      </Row>
      <Row>
        <Col>
      <CardDeck className="p-5">
          
      {genders.map(cat => {
          return (  <Card className="bg-dark text-white">
          <Card.Img src={cat.src} alt="Card image"/>
          <a href={`/gender/${cat._id}`} >
          <Card.ImgOverlay>
            <Card.Title>{cat.name}</Card.Title>
            <Card.Text>
              {cat.desc}
            </Card.Text>
          </Card.ImgOverlay>
          </a>
        </Card>
       )})}
        </CardDeck>  


        <CardDeck className="p-5">
          
          {categories.map(type => {
              return (  <Card className="bg-dark text-white">
              <Card.Img src={type.src} alt="Card image" />
              <a href={`/cat/${type._id}`} >
              <Card.ImgOverlay>
                <Card.Title>{type.name}</Card.Title>
                <Card.Text>
                  {type.desc}
                </Card.Text>
        
               
              </Card.ImgOverlay>
              </a>
            </Card>
           )})}
            </CardDeck>  
    
            
            </Col>
            </Row>
            </Container>
    );

  }
  


export default Homepage;