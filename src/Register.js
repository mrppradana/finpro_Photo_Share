import { useState } from "react";
import { apiPhoto } from "../src/API/api";
import { Password } from "@mui/icons-material";
import './Login.css';


function Register() {
  // menyimpan data form yg lagi diketik
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(event) {
    event.preventDefault();
    
    apiPhoto.post('/api/v1/login', { email: username, password: password })
    .then((response) => {
      localStorage.setItem('token', response.data.token);
      window.location.href = '/'; // redirect
    })
    .catch((error) => {
      console.log(error);
    });

  }

  return (
    <>
      {/* <div className="modal fade" id="modalLogin" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="card login-form">
              <div className="card-body">
                <h1 className="card-title text-center">LOGIN</h1>
              </div>
              <div className="card-text">
                <form>
                  <div className="mb-3">
                    <label htmlFor="exampleInputUsername1" className="form-label">
                      Username
                    </label>
                    <input 
                    type="text" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    className="form-control" 
                    id="exampleInputUsername1" 
                    aria-describedby="usernameHelp" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                      Password
                    </label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" />
                  </div>
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      Check me out
                    </label>
                  </div>
                  <div className="d-grid gap-2">
                    <button onClick={(e) => handleLogin(e)} type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div> */}
  <div className="wrapper">
    <div className="card">
      <img src='' />
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
          type="password" value={password} onChange={(e) => setPassword(e.target.value)}
          name="password"
          spellCheck="false"
          className="control"
          placeholder="Password"
        />
        <button onClick={(e) => handleLogin(e)}  className="control" type="button" >
          Login
        </button>
      </form>
    </div>
  </div>
    </>
  );
}

export default Register;
