import { useState } from "react";
import { apiPhoto } from "../src/API/api";
import { Password } from "@mui/icons-material";
import "./Login.css";

function Login() {
  // menyimpan data form yg lagi diketik
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(event) {
    event.preventDefault();

    apiPhoto
      .post("/api/v1/login", { email: username, password: password })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        window.location.href = "/"; // redirect
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <div className="wrapper">
        <div className="card">
          <img src="" />
          <h2>Login</h2>
          <form className="form">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              name="Email"
              spellCheck="false"
              className="control"
              placeholder="Email"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              spellCheck="false"
              className="control"
              placeholder="Password"
            />
            <button
              onClick={(e) => handleLogin(e)}
              className="control"
              type="button"
            >
              Login
            </button>
            <h2>Don't Have an Account?</h2>
            <button onClick={() => (window.location.href = "/register")}  className="control">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
