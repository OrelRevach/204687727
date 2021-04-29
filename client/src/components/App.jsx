import Header from './Header';
import Footer from './Footer'
import HomePage from './HomePage'
import {Container, Row} from 'react-bootstrap'
import CategoryPage from './CategoryPage';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import ProductPage from './ProductPage';
import AboutUs from './AboutUs'
import Blog from './Blog'
import BlogPost from './BlogPost'
import Login from './Login'
import SignUp from './SignUp';
import ContactUs from './ContactUs';
import SearchPage from './SearchPage';
import CartPage from './CartPage';
import AdminPage from './Admin';
import Store from './StoreContext';
function App() {
  return (
    <Container fluid style={{backgroundColor: '#f6f6f6'}}>
     <Store>
     <Row>
       <Header/>
      </Row>
      <BrowserRouter>
      <Switch>
      <Route path='/' exact component={HomePage}/>
      <Route path='/:type/:id' exact component={CategoryPage}/>
    <Route path='/products/:id'component={ProductPage}/>
    <Route path='/AboutUs'component={AboutUs}/>
    <Route path='/post/:id'component={BlogPost}/>
    <Route path='/blog'component={Blog}/>
    <Route path='/login'component={Login}/>
    <Route path='/signup'component={SignUp}/>
    <Route path='/ContactUs'component={ContactUs}/>
    <Route path='/search'component={SearchPage}/>
    <Route path='/CartPage'component={CartPage}/>
    <Route path='/Admin'component={AdminPage}/>






    


    
  
    </Switch>
    </BrowserRouter>

      <Row>
        <Footer/>
      </Row>
  
      </Store>
    </Container>
    
    
    
  );
}
export default App;
