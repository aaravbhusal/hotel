import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Update() {
  const [User, setUser] = useState({
    username: "",
    email: "",
    password: "",
    userType: "",
    avatar: ""
  });

  const { id } = useParams();

  const changeHandle = (e) => {
    const { name, value } = e.target;
    setUser({ ...User, [name]: value });
  };

  const fileHandle = (e) => {
    setUser({ ...User, avatar: e.target.files[0] });
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/usersingle/" + id, {
        headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
      })
      .then((response) => {
        setUser(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const btnRegister = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/updateOne/" + id, User, {
        headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
      })
      .then((response) => {
        console.log("res", response.data);
        alert("Update successful");
      })
      .catch((error) => {
        console.log(error);
        alert("Update failed");
      });
  };

  return (
    <>
      <h1>I am logged in</h1>

      <form action="action_page.php" method="post">
        <div className="container">
          <label htmlFor="uname"><b>Username</b></label>
          <input type="text" placeholder="Enter Email" name="username" value={User.username} onChange={changeHandle} required />

          <label htmlFor="email"><b>Email</b></label>
          <input type="email" placeholder="Enter Email" name="email" value={User.email} onChange={changeHandle} required />

          <label htmlFor="password"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="password" value={User.password} onChange={changeHandle} required />

          <label htmlFor="userType"><b>User Type</b></label>
          <input type="text" placeholder="Enter User Type" name="userType" value={User.userType} onChange={changeHandle} required />

          <label htmlFor="avatar"><b>Image</b></label>
          <input type="file" name="avatar" onChange={fileHandle} required />

          <button type="submit" onClick={btnRegister}>Update</button>
          <label>
            <input type="button" checked="checked" name="remember" /> Remember me
          </label>
        </div>

        <div className="container">
          <button type="button" className="cancelbtn">Cancel</button>
        </div>
      </form>
    </>
  );
}

export default Update;
