import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
import { User } from "./client";
export default function Signup() {
  const [error, setError] = useState("");
  const [user, setUser] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const signup = async () => {
    try {
      await client.signup(user);
      navigate("/Kanbas/Account/Profile");
    } catch (err : any) {
      setError(err.response.data.message);
    }
  };
  const signin = async () => {
    navigate("/Kanbas/Account/Signin");
  };
  return (
    <div>
      <h1>Signup</h1>
      {error && <div>{error}</div>}
      <input placeholder="Username" className="form-control mt-4 mb-2 w-50" value={user.username} onChange={(e) => setUser({
          ...user, username: e.target.value })} />
      <input placeholder="Password" className="form-control mb-2 w-50" value={user.password} onChange={(e) => setUser({
          ...user, password: e.target.value })} />
      <button className="btn btn-danger" onClick={signup}> Signup </button>
      <button className="btn btn-primary ms-2" onClick={signin}> Login </button>
    </div>
  );
}

