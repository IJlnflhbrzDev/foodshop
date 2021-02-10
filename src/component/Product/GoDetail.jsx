import axios from 'axios'
import React, { Component, Fragment } from 'react'
import CounterPesanan from "../ToatsPesanan/CounterPesanan"

export default class GoDetail extends Component {
     state = {
          dataMakanan: {
               strMeal : '' ,
               strMealThumb: '',
               strIngredient4: '',
               strInstructions: ''
          }
     }
     getDetailProduct =  () => {
          const idProducts = this.props.match.params.idProduct;
          console.log(this.props);
          console.log(idProducts);
          axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i= ${idProducts}`).then(res => {
               this.setState({
                    dataMakanan :  res.data.meals
               }, () => {
                         const DataProduct = this.state.dataMakanan[0];
                         return (
                              <Fragment>
{
                              document.getElementById("detailProduct").innerHTML =
                         `
                                       <div>
                                         <img src=${DataProduct.strMealThumb} alt="detailProduct"/>
                                       </div>
                                       <div>
                                             <h1 className="bg-warning">${DataProduct.strMeal}</h1>
                                             <p className="lead">${DataProduct.strInstructions}</p>
                                             Location :  <strong>${DataProduct.strArea}</strong>
                                             <br>
                                             Pembuat : <strong>${DataProduct.strSource}</strong>
                                             <br><br>
                                       </div>
                         `
                    }
                              </Fragment>

                         )
               })
          })

     }
     componentDidMount() {
           this.getDetailProduct()
     }
     render() {
          return (
               <Fragment>
                    <div id="detailProduct" className="text-dark">
                         <h1><strike>Mohon Tunggu Sebentar...</strike></h1>
                    </div>
                    <CounterPesanan />
               </Fragment>
          )
     }
}
