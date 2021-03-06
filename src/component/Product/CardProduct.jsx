import React, { Component, Fragment } from 'react'

export default class CardProduct extends Component {
     render() {
          return (
               <Fragment>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                         <div className="card mt-3 CardProduct">
                              <img src={this.props.data.strMealThumb} className="card-img-top" alt="product-meals" />
                              <div className="card-body">
                                   <div className="detail-title d-flex justify-content-between mb-2 align-items-center">
                                        <h5 className="card-title">{this.props.data.strMeal}</h5>
                                        <span onClick={() => this.props.Godetail(this.props.data.idMeal)}>GO DETAIL</span>
                                   </div>
                                   <p className="card-text">{this.props.data.strInstructions}</p>
                              </div>
                         </div>
                    </div>
               </Fragment>
          )
     }
}
