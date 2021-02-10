import React, { Component, Fragment } from "react"
import {rootContext } from "../../container/RouterHome/RouterHome"
export default class CounterPesanan extends Component {
     render() {
          return (

               <rootContext.Consumer>
                    {
                         value => {
                              return (
                                   <Fragment>
                                        <div className="mt-3">
                                             <button className=" btn btn-success mx-2" onClick={() => value.dispacth({type : "PLUS_ORDER"})}>Tambah Pesanan</button>
                                             <button className="btn btn-danger" onClick={() => value.dispacth({type : "MINUS_ORDERS"})}>Kurangi Pesanan</button>
                                        </div>
                                   </Fragment>
                              )
                         }
                    }
               </rootContext.Consumer>

          )
     }
}
