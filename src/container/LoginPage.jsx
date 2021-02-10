// Mencoba Login Dengan Combinasi Pada Firebase

import React, { Component, Fragment } from "react"
import firebase from "../FirebaseConfig/index"
export default class LoginPage extends Component {
     state = {
          email: '',
          password: ''
     }
     handleFormChange = (e) => {
          this.setState({
               [e.target.id]: e.target.value
          })

     }
     handleButton =  async (e) => {
          const { email, password } = this.state;
          e.preventDefault();
         await firebase.auth().createUserWithEmailAndPassword(email, password)
               .then((user) => {
                    alert('Berhasil Menyimpan Data Kamu! Terimakasih:v', user);
                    this.setState({

                         emeil: '',
                         password : ''
                    })

                    this.props.history.push('/Home');

               })
               .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    alert(errorCode);
                    alert(errorMessage);
               });
     }
     render() {
          return (
               <Fragment>
                    <form className=" mt-5 ">
                         <div className="segment">
                              <h1 className=" text-primary">Daftar Dulu Yuk.. </h1>
                         </div>

                         <label htmlFor="email">
                              <input type="email" id="email" placeholder="Email Address" onChange={this.handleFormChange} value={this.state.email} />
                         </label>
                         <label htmlFor="password">
                              <input type="password" id="password" placeholder="Password" onChange={this.handleFormChange} value={this.state.password} />
                         </label>
                         <button className="red" type="submit" onClick={this.handleButton}>REGISTER</button>
                    </form>
               </Fragment>
          )
     }
}
