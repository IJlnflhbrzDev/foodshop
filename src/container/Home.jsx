import React, { Component } from 'react'
import {BrowserRouter as Router ,Switch, Link , Route} from "react-router-dom"
import Product from '../component/Product/Product'

export default class Home extends Component {
     render() {
          return (
               <Router>

                         <div className="container border w-100 bg-primary p-2">
                              <nav className="navbar navbar-expand-md navbar-dark bg-primary">
                                   <span className="navbar-brand" >FoodShoop.com</span>
                                   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                   </button>
                                   <div className="collapse navbar-collapse" id="navbarNav">
                                        <ul className="navbar-nav ms-auto">
                                             <li className="nav-item">
                                                 <Link to="/"  className="nav-link " aria-current="page">HomePage</Link>
                                             </li>
                                             <li className="nav-item">
                                                  <Link to="/about" className="nav-link" >About</Link>
                                        </li>

                                             <li className="nav-item">
                                                  <Link to="/users" className="nav-link" >Users</Link>
                                        </li>
\
                                             <li className="nav-item">
                                                  <Link to="/product" className="nav-link" >Product</Link>
                                             </li>

                                             <li className="nav-item">
                                                  <span className="nav-link">FreeCourse</span>
                                             </li>
                                        </ul>
                                   </div>
                              </nav>

     {/* ALL COMPONENTSS  */}


                    <Switch>
                         <Route exact path="/" component={HomePage} />
                         <Route path="/about" component={About} />
                         <Route path="/users" component={Users} />
                         <Route path="/product" component={Product} />
                         </Switch>
                         </div>
                    </Router>
          )
     }
}




function HomePage() {
  return <h2 className="bg-primary">Home</h2>;
}

function About() {
  return <h2 className="bg-primary">About</h2>;
}

function Users() {
  return <h2 className="bg-primary">Users</h2>;
}