import React from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import { Routes,Route } from "react-router-dom";
import Login2 from "./component/Login2";
import Login3 from "./component/Login3";
import Register from "./component/Register";
import User from "./component/User";
import User2 from "./component/User2";
import Update from "./component/Update";
import Reducer from "./component/Reducer";
import ChildA from "./Props/ChildA";
import Logout from "./component/Logout";




function App() {
  return (
  <>
    <h1>i am body</h1>
    <Routes>
    <Route path="/header" exact element={<Header/>}/>
      <Route path="/body" exact element={<Body/>}/>
      <Route path="/footer" exact element={<Footer/>}/>
      <Route path="/login" exact element={<Login3/>}/>
      <Route path="/login2" exact element={<Login2/>}/>
      <Route path="/register" exact element={<Register/>}/>
      <Route path="/user" exact element={<User/>}/>
      <Route path="/user2" exact element={<User2/>}/>
      <Route path="/updateOne" exact element={<Update/>}/>
      <Route path="/logout" exact element={<Logout/>}/>
      <Route path="/reducer" exact element={<Reducer/>}/>
      <Route path="/child" exact element={<ChildA/>}/>
    </Routes>
  </>
  );
}

export default App;
