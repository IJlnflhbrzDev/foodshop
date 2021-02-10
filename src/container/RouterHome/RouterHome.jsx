import React, { Component, createContext } from 'react'
import {BrowserRouter as Router ,Switch, Link , Route} from "react-router-dom"
import GoDetail from '../../component/Product/GoDetail'
import Product from '../../component/Product/Product'
import LoginPage from '../LoginPage';
import HomePages from "../HomePages/HomePages"

export const rootContext = createContext();
const Provider = rootContext.Provider;

export default class RouterHome extends Component {
     state = {
          totalPesaan : 0
     }

     dispacth = (action) => {
           if (action.type === "PLUS_ORDER" ) {
                return this.setState({
                     totalPesaan : this.state.totalPesaan + 1
                })
          }

          if (action.type === "MINUS_ORDERS") {
               return this.setState({
                    totalPesaan : this.state.totalPesaan  - 1
               })
          }
     }

     render() {
          return (
               <Router>
                    <Provider value={
                         {
                              state: this.state,
                              dispacth : this.dispacth
                         }
                    }>
                    <div className="w-100">
                              <nav className="navbar navbar-expand-md navbar-dark bg-primary">
                                   <span className="navbar-brand" >FoodShoop.com</span>
                                   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                   </button>
                                   <div className="collapse navbar-collapse" id="navbarNav">
                                        <ul className="navbar-nav ms-auto">
                                             <li className="nav-item">
                                                  <Link to="/" className="nav-link">Home</Link>
                                             </li>
                                             <li className="nav-item">
                                                  <Link to="/product" className="nav-link" >Product</Link>
                                             </li>
                                             <li className="nav-item">
                                                  <Link to="/login" className="nav-link" >Login</Link>
                                             </li>

                                             <li className="nav-item">
                                                  <Link to="/hubungikami" className="nav-link">Hubungi Kami</Link>
                                             </li>

                                             <li className="nav-item">
                                                  <span className="nav-link disabled text-warning">Hasil Pesanan { this.state.totalPesaan}</span>
                                             </li>
                                        </ul>
                                   </div>
                              </nav>

     {/* ALL COMPONENTSS  */}


                    <Switch>
                         <Route exact path="/" component={HomePages} />
                         <Route path="/product" component={Product} />
                         <Route path="/login" component={LoginPage} />
                         <Route path="*" component={() => "404 NOT FOUNT"} />
                         <Route path="/product-detail/:idProduct" component={GoDetail} />
                              </Switch>
                         </div>
                    </Provider>
               </Router>
          )
     }
}

