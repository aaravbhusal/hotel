import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const User2 = () => {
  const [User, SetUser] = useState([]);
  const [config] = useState({
    headers: { authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  const deleteUser = (userid) => {
    axios
      .delete('http://localhost:4000/deleteuser/' + userid, config)
      .then((res) => {
        console.log('response', res);
        alert('delete successfull');
      })
      .catch((error) => {
        console.log(error);
        alert('delete failed');
      });
  };

  useEffect(() => {
    axios
      .get('http://localhost:4000/userall', config)
      .then((response) => {
        SetUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [deleteUser]);
  return (
    <>
      {User.map((curElem) => {
        return (
          <>
            <div className="container2">
              <div className="username"> {curElem.username} </div>
              <div className="password"> {curElem.password} </div>
              <div className="userType"> {curElem.userType} </div>
              <div className="email"> {curElem.email} </div>
              <div className="testing">
                <img src={'http://localhost:4000/' + curElem.avatar} />
                <button
                  className="delete"
                  onClick={deleteUser.bind(this, curElem._id)}
                >
                  Delete
                </button>
              </div>
              <Link to={'/updateuser/' + curElem._id}>Update</Link>
            </div>
          </>
        );
      })}
    </>
  );
};

export default User2;
// import axios from "axios";
// import { useState,useEffect } from "react";
// import { Link } from "react-router-dom";

// function User2(){
//     const[User,SetUser]=useState([]);
//     //const Config=useState({headers:{''}})

//         const deleteuser=(userid)=>{
        
//         axios.delete('http://localhost:4000/deleteuser/'+userid,{
//             headers : {'authorization': `Bearer ${localStorage.getItem('token')}`}
//        }).then((resp)=>{
//             console.log("response",resp)    
//         alert("delete successful")

//         }).catch((error)=>{
//             console.log(error);
//             alert("delete failed")

//         })
//     }

// // same as componentDidMount() 
//     useEffect(()=>{
//         axios.get('http://localhost:4000/userall',{
//             headers : {'authorization': `Bearer ${localStorage.getItem('token')}`}
//         })
//         .then((response)=>{
//             SetUser(response.data);

//         })
//         .catch((error)=>{
//             console.log(error);
//         })


//     },[])
//     return(
//     <>

// <div className="user-container" >
//     {
//         User.map((curElem)=>{
//             return(
//                 <> 
//                <div className="user-card" >
//             <div className="user-details">
//                 <p>Username: {curElem.username}</p>
//                 <p>Email: {curElem.email}</p>
//                 <p>Password: {curElem.password}</p>
//                 <p>User Type: {curElem.userType}</p>
//             </div>
//             <div className="user-actions">
//             <img src={'http://localhost:4000/'+curElem.avatar} alt="image"></img>
                
//                 <button class="delete" onClick={deleteuser.bind(this,curElem._id)}>delete</button>
                
//                 <Link to={"/updateuser/"+curElem._id}>Update</Link>
//             </div>

//             </div>
          
//                 </>
//             )

//         })
//     }
//     </div>
    
//     </>
//     )
// }

// export default User2;


// // import { useState,useEffect } from "react";
// // import axios from "axios";

// // function User2(){
// //     const[User,SetUser]=useState([]);
// //     // const Config=useState({headers : {'authorization': `Bearer ${localStorage.getItem('token')}`}})
// //     const deleteuser=(userid)=>{
        
// //         axios.delete('http://localhost:4000/deleteuser/'+userid,{
// //             headers : {'authorization': `Bearer ${localStorage.getItem('token')}`}
// //        }).then((resp)=>{
// //             console.log("response",resp)    
// //         alert("delete successful")

// //         }).catch((error)=>{
// //             console.log(error);
// //             alert("delete failed")

// //         })
// //     }


// //     useEffect(()=>{
       
// //             axios.get('http://localhost:4000/userall',{
// //                  headers : {'authorization': `Bearer ${localStorage.getItem('token')}`}
// //             }).then((response)=>{
// //                 SetUser(response.data);
// //             })
// //             .catch((error)=>{
// //                 console.log(error);
// //             })
        
// //     },[])
    
// //     return(

        
// //         <>

// //         {
// //             User.map((curElem)=>{
// //                 return(
// //                     <>
// //                         {curElem.username}
// //                         {curElem.password}
// //                         {curElem.email}
// //                         {curElem.userType}
// //                         <img src={'http://localhost:4000/'+curElem.avatar}></img>

// //                         <button class="delete" onClick={deleteuser.bind(curElem._id)}>delete</button>
// //                     </>
// //                 )
// //             })
// //         }
// //         </>
// //     )
// // }

// // export default User2;




// // import {useState,useEffect} from "react";
// // import axios from "axios";

// // function User2(){
// //     const[User,SetUser]= useState([]);
// //     useEffect(()=>{
// //         axios.get('http://localhost:4000/userall',{
// //             headers : {'authorization': `Bearer ${localStorage.getItem('token')}`}
// //     }).then((response)=>{
// //         SetUser(response.data);
// //     })
// //     .catch((error)=>{
// //         console.log(error);
// //     })
// //         },[])
        
// // return(
// //     <>
// //                 {User.map((val)=>{ 
// //                 return(
// //                     <>
// //                 {val.username}
// //                 {val.email}
// //                 {val.password}
// //                 {val.userType}
// //                 <img src={'http://localhost:4000/'+val.avatar} alt="image"></img>
// //                 </>
// //                 )
// //             })}
// //             </>
// //         )
// //     }
// // export default User2;