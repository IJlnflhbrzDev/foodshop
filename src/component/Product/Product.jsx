import React, { Component, Fragment } from 'react'
import CardProduct from './CardProduct'
export default class Product extends Component {
     state = {
          ProductMakanan : []
     }

     GetProduct = async () => {
        await  fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
          .then(res => res.json())
          .then(resjson => {
               this.setState({
               ProductMakanan : resjson.meals
               })
               console.log("berhasil Ambil Data");
     })
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
                                        src={item.strMealThumb}
                                        title={item.strMeal}
                                        desc={item.strInstructions}

                                   />

                              })
                         }
                    </div>
               </>
          )
     }
}
