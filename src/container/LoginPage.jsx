// Mencoba Login Dengan Combinasi Pada Firebase

import React, { Component, Fragment } from "react"
import firebase from "../FirebaseConfig/index"
console.log("Firebase ==> ",firebase)
export default class LoginPage extends Component {
     state = {
          email: '',
          password: ''
     }
     handleFormChange = (e) => {
          this.setState({
               [e.target.id] : e.target.value
          })
     }
     handleButton = (e) => {
          const { email, password } = this.state;
          e.preventDefault();
          firebase.auth().createUserWithEmailAndPassword(email,password)
               .then((user) => {
                    alert('Berhasil Menyimpan Data Kamu! Terimakasih:v',user);

                    setTimeout(() => {
                         this.setState({
                              ...this.state,
                              email: '',
                              password : ''
                         })
                    }, 1000);
          })
          .catch((error) => {
          var errorCode = error.code;
               var errorMessage = error.message;
               console.log(errorCode)
               console.log(errorMessage)
          });

     }
     render() {
          return (
               <Fragment>
                    <h1 className="shadow text-center p-3">Register Page</h1>
                    <form className="shadow form-login">
                         <div className="mb-3">
                              <label htmlFor="email" className="form-label">Email </label>
                              <input required onChange={this.handleFormChange} type="email" className="form-control" id="email" placeholder="Masukan Email Kamu disini.." value={this.state.email}  />
                         </div>

                         <div className="mb-3">
                              <label htmlFor="password" className="form-label">Password </label>
                              <input required onChange={this.handleFormChange} type="password" className="form-control" id="password" placeholder="Masukan Pasowrd Kamu disini.." value={this.state.password} />
                         </div>

                         <input className="btn btn-danger mx-lg-3" onClick={this.handleButton} type="submit" value="Kirim" />
                   </form>
               </Fragment>
          )
     }
}
