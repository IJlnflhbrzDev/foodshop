import React, { Component } from 'react'
import CardProduct from './CardProduct'
import axios from "axios"
export default class Product extends Component {
     state = {
          ProductMakanan: []
     }

     GetProduct = async () => {
          await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=')
               .then(resjson => {
                    this.setState({
                         ProductMakanan: resjson.data.meals
                    })
                    console.log(resjson);
               })
     }

     handleGodetail = (id) => {
          this.props.history.push(`/product-detail/${id}`)
     }
     componentDidMount() {
          console.log("sedang menunggu daata")
          this.GetProduct()
     }
     render() {
          return (
                                        <>
                    <div className="row">
                         {
                              this.state.ProductMakanan.map(item => {
                                   return <CardProduct
                                        key={item.idMeal}
                                        data={item}
                                        Godetail={this.handleGodetail}

                                   />

                              })
                         }
                    </div>
                    </>
                         )
     }
}
