import React, { Component } from 'react'
import CardProduct from './CardProduct'
export default class Product extends Component {
     state = {
          ProductMakanan: []
     }

     GetProduct = async () => {
          await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
               .then(res => res.json())
               .then(resjson => {
                    this.setState({
                         ProductMakanan: resjson.meals
                    })
               })
     }

     handleGodetail = (id) => {
          console.log(this.props);
          console.log('id paramss ', id)
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
                                        dataProduct={item}
                                        Godetail={this.handleGodetail}

                                   />

                              })
                         }
                    </div>
               </>
          )
     }
}
