import React, {useContext,useState,useEffect} from 'react';
import { Container,Row,Col,CardDeck,Card,Button} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import {useParams} from 'react-router'
import{StoreContext,updateLocal} from './StoreContext';
import axios from "axios";


library.add(faCartPlus);



function CategoryPage (){
  const {type,id}= useParams();
const [products,setProducts]=useState([]);
const [category, setCategory] = useState({})
const [store,updateStore]=useContext(StoreContext);
useEffect(()=>{
  
const getData =async()=>{
  const {data} = await axios.get("http://localhost:3000/product")
  setProducts(data);
  const res = await axios.get(`http://localhost:3000/${type}/${id}`)
  console.log(res)
  setCategory(res.data);
  }
  getData();
},[])
  
  const addToCart= (id)=>{
   const prod  =products.find(elem =>elem.id==id)
   updateStore({...store,cart:{
     ...store.cart,totalPrice : store.cart.totalPrice+prod.price 
   }
  });
  store.cart.items.push(prod);
  console.log(store.cart.totalPrice);
  updateLocal(store.cart.items,store.cart.totalPrice);
  }
 
 

return (
<Container fluid>
    <Row>
    <h1>{category.name}</h1>
    </Row>
    <Row>
    </Row>  

    <i class="fas fa-cart-plus"></i>

    <CardDeck className="p-5 outline-success"variant="outline">
          
          {products.map(prod => {
            
             

              return (  <Card className="bg-dark text-white">
              <Card.Img src={prod.src} alt="Card image" />
              
              <Card.ImgOverlay variant="outline">   
              <a href={`/products/${prod.id}`} > 
                <Card.Title>{prod.name}</Card.Title>
                </a>
                <Card.Text variant="outline">
                  {prod.desc}
                </Card.Text>
                <Card.Text >
                  {prod.price}
                </Card.Text>
                <div className=""><Button variant="outline-success" onClick={()=>{addToCart(prod.id)}} className="" size="2x"
              ><FontAwesomeIcon icon="cart-plus"/></Button></div>
              </Card.ImgOverlay>
             
           
            </Card>
            
           )})
           }
            </CardDeck>  
    
</Container>
)
}
 export default CategoryPage;