import { useState } from "react";
import { Link, Navigate, Route, useNavigate } from "react-router-dom";
import { User } from "./client";
import * as client from "./client";
export default function Signin() {
  const [credentials, setCredentials] = useState<User>({
    _id: "",
    username: "", password: "", firstName: "", lastName: "", role: "USER"
  });
  const navigate = useNavigate();
  const signin = async () => {
    await client.signin(credentials);
    navigate("/Kanbas/Account/Profile");
  };
  const handleSignupClick = () => {
    navigate("/Kanbas/Account/Signup");
  };

  return (
    <div>
      <h1>Signin</h1>
      <input className="form-control mt-4 mb-1 w-50" value={credentials.username} placeholder="Username" onChange={(e) =>
        setCredentials({ ...credentials, username: e.target.value })} />
      <input className="form-control mb-1 w-50" value={credentials.password} placeholder="Password" onChange={(e) =>
        setCredentials({ ...credentials, password: e.target.value })} />
      <button className="btn btn-success mt-2" onClick={signin}> Signin </button>
      <button className="btn btn-warning mt-2 ms-2" onClick={handleSignupClick} >Signup</button>
    </div>
  );
}

