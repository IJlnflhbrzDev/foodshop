import React, { Component , Fragment } from 'react'
import Jumbotron from '../../component/01-Jumbotron/Jumbotron'
import About from '../../component/02-About/About'

export default class HomePages extends Component {
     render() {
          return (
               <Fragment>
                    <Jumbotron />
                     <About />
               </Fragment>
          )
     }
}
