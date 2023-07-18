import { Component } from "react";
import axios from "axios";
class Login2 extends Component{

    //constructor
        state={
            email:"",
            password:""
        }

    //method

    //data render
    // componentDidMount(){
    // }
    //data store
    //change data store in state
      changehandle=(e)=>{
        this.setState({
          [e.target.name]:e.target.value
        })
      }
      
    //event handling

    btnlogin=(e)=>{
        e.preventDefault();
        //stop browser refresh
        //connection
        axios.post('http://localhost:4000/login',this.state).then((response)=>{
            console.log("login",response.data)
            //localstorage token and usertType
            localStorage.setItem('token',response.data.token);
            localStorage.setItem('userType',response.data.userType);
            alert("login successful");
            window.location.href="/user"
        })
        .catch((error)=>{
            console.log(error);
            alert("login failed")
        })

    }

    render(){
        return(
            <>
            <h1>i am login</h1>

            <form action="action_page.php" method="post">
  <div className="imgcontainer">
    <img src="img_avatar2.png" alt="Avatar" class="avatar"/>
  </div>

  <div className="container">
    <label for="uname"><b>Email</b></label>
  
    <input type="email" placeholder="Enter Email" name="email" defaultValue={this.state.email} onChange={this.changehandle} required/>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="password" defaultValue={this.state.password} onChange={this.changehandle}required/>

    <button type="submit" onClick={this.btnlogin}>Login</button>
    <label>
      <input type="button" checked="checked" name="remember"/> Remember me
    </label>
  </div>

  <div class="container">
    <button type="button" class="cancelbtn">Cancel</button>
  </div>
</form>
ADVERTISEMENT

            </>
        )
    }
}

export default Login2;

// import userEvent from "@testing-library/user-event";
// import React, { useState } from "react";
// import axios from "axios";



// function Login2(){
//     const[User,SetUser]=useState({email:"",password:""});

//     const changehandle=(e)=>{
//         e.preventDeault();
//         const{name,value}=e.target;
//         SetUser({...User,[name]:value})
//     }

// //event
//    const  btnlogin=(e)=>{
//     e.preventDefault();
//     axios.post('http://localhost:4000/login',this.state).then((response)=>{
//     console.log("login",response.data)
//     //local token and usertype
//     localStorage.setIteam('token',response.data.token);
//     localStorage.setIteam('userType',response.data.userType)
//     alert("login successful")
//   })
//    .catch((error)=>{
//     console.log(error);
//     alert("login failed")
//    })
// }

//     return(
//         <>
//         <h1>i am login2 </h1>
//         <form>
//   <div class="imgcontainer">
//     <img src="img_avatar2.png" alt="Avatar" class="avatar"/>
//   </div> 

//    <div class="container">
//     <label for="email"><b>Username</b></label>
//     <input type="text" placeholder="Enter Username" name="email" defaultValue={User.email} onChange={changehandle} required/>

//     <label for="password"><b>Password</b></label>
//     <input type="password" placeholder="Enter Password" name="password" defaultValue={User.password} onChange={changehandle}  required/>

//     <button type="submit" onClick={btnlogin}>Login</button>
//     <label>
//       <input type="checkbox" checked="checked" name="remember"/> Remember me
//     </label>
//   </div> 
//  <div class="container">
//     <button type="button" class="cancelbtn">Cancel</button>
//   </div>
// </form>
//         </>
//     )
// }

// export default Login2;