import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppNavbar from './component/AppNavbar';
import Registration from './component/registration';
import Login from './component/login';
import Footer from './component/footer';
import ProductCard from './component/ProductCard';
import Cart from './component/cart';
import AddProduct from './component/addProduct';
import ProductCardCustomer from './component/ProductCardCustomer';
import Home from './Home';
import Admin from './component/admin';
import Fertilizer from './component/Fertilizer';
import ProtectedRoute from "./ProtectedRoute";
import Pesticides from './component/Pesticides';
import Seeds from './component/Seeds';
import ProductDetails from './component/productDetails';
import AboutUs from './component/AboutUs';
import ContactUs from './component/ContactUs';
import Search from './component/Search';
import NotFound from './component/NotFound';



function App() {
    const isAuthenticated = window.sessionStorage.getItem('isAuthenticated') === 'true';


    return (
    <BrowserRouter>
   
   <div className="App background-image">
      <AppNavbar/> 
                 <Switch>
                           <Route exact path="/">
                          
                                     <Home/>
                             
                           </Route>
                           <Route  path="/Home">
                          
                          
                                     <Home/>
                      
                           </Route>

                           <Route path="/login">
                                 <div className="content">
                                 <br></br><br></br><br></br>
                                     <Login/>
                                 </div>
                           </Route>

                           <Route path="/registration">
                                 <div className="content">
                                     <br></br><br></br><br></br>
                                     <Registration/> 
                                 </div>
                           </Route>
                          

                           <Route path="/AboutUs">
                                 <div className="content">
                                 <br></br><br></br><br></br>
                                     <AboutUs/>
                                 </div>
                           </Route>


                           <Route path="/ContactUs">
                                 <div className="content">
                                     <br></br><br></br><br></br>
                                     <ContactUs/> 
                                 </div>
                           </Route>


                           
                                 <Route path="/Fertilizer">
                                 <div className="content">
                                     <br></br><br></br><br></br>
                                     <Fertilizer/> 
                                     <br></br><br></br><br></br>   </div> <br></br><br></br><br></br> 
                           </Route>

                           <Route path="/Seeds">
                                 <div className="content">
                                     <br></br><br></br><br></br>
                                     <Seeds/> 
                                     <br></br><br></br><br></br>
                                       </div>
                                       <br></br><br></br><br></br> 
                           </Route>

                           <Route path="/Pesticides">
                                 <div className="content">
                                     <br></br><br></br><br></br>
                                     <Pesticides/> <br></br><br></br><br></br>
                                 </div>
                                 <br></br><br></br><br></br> 
                           </Route>

                           <Route path="/Search">
                                 <div className="content">
                                     <br></br><br></br><br></br>
                                     <Search/> <br></br><br></br><br></br>
                                 </div>
                                 <br></br><br></br><br></br> 
                           </Route>


                           


                           <Route path="/NotFound">
                                 <div className="content">
                                     <br></br><br></br><br></br>
                                     <NotFound/> <br></br><br></br><br></br>
                                 </div>
                                 <br></br><br></br><br></br> 
                           </Route>

                           <ProtectedRoute exact path="/ProductCard" component={ProductCard}></ProtectedRoute>

                           <ProtectedRoute exact path="/ProductCardCustomer" component={ProductCardCustomer}></ProtectedRoute>
                           
                           <ProtectedRoute path='/cart' exact component = {Cart} />
                         
                           <ProtectedRoute path='/addProduct' exact component = {AddProduct} />

                           <ProtectedRoute path='/productDetails' exact component = {ProductDetails} />

                     <ProtectedRoute
                          path="/admin"
                                component={Admin}
                               isAuthenticated={isAuthenticated}
                           />




<Route path="*">
                                 <div className="content">
                                     <br></br><br></br><br></br>
                                     <NotFound/> <br></br><br></br><br></br>
                                 </div>
                                 <br></br><br></br><br></br> 
                           </Route>



                           
                 </Switch>
                 <br></br>
                 <br></br><br></br>
                 <br></br><br></br>
                 <br></br><br></br>
                 <br></br>
                 <Footer></Footer>
      </div>
    </BrowserRouter>
  );





}

export default App;




















{/* <Route path="/ProductCard">
                           <div className="content">
                           <br></br><br></br>     <br></br><br></br>
                                     <ProductCard/>

                                    </div>            
                           </Route>                       */}
                          
                           {/* <Route path="/addProduct">
                           <br></br><br></br>
                                 <div className="content">
                                     <AddProduct/>
                                 </div>
                           </Route> */}
                          
                           {/* <Route path="/ProductCardCustomer">
                           <br></br><br></br>
                                 <div className="content">
                                     <ProductCardCustomer/>
                                 </div>
                          
                           </Route> */}

                           {/* <Route path="/cart">
                           <br></br><br></br>
                                 <div className="content">
                                     <Cart/>
                                 </div>
                          
                           </Route> */}

                           {/* <Route path="/admin">
                           <br></br><br></br>
                                 <div className="content">
                                     <Admin/>
                                 </div>
                      </Route> */}

