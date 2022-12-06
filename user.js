import React from 'react';
import firebase from "./Firestore";
import Courselist from "./courselist";

class User extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
         fullname: ""
        };
    }
    updateInput = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      }
      addUser = e => {
        e.preventDefault();
        const db = firebase.firestore();
        db.settings({
          timestampsInSnapshots: true
        });
        const userRef = db.collection("users").add({
          fullname: this.state.fullname,
          email: this.state.email
        });  
        this.setState({
          fullname: "",
          email: ""
        });
      };
  render() {
    return (
        <div className="main-container">
            <h2>Login</h2>
        <form className="login-form" onSubmit={this.addUser}>
          <input
       type="text"
       name="fullname"
       placeholder="Full name"
       onChange={this.updateInput}
      />
      <input
    type="email"
    name="email"
    placeholder="Email"
    onChange={this.updateInput}
    value={this.state.email}
  />
          <button type="submit">Submit</button>
        </form>
        <Courselist/>

        </div>
        );
      }
   }
export default User;