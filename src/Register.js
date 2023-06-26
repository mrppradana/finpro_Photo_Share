import { useState } from "react";
import { apiPhoto } from "../src/API/api";
import { Link } from "react-router-dom";
import "./Login.css";

function Register() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [profilePictureUrl, setProfilePictureUrl] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bio, setBio] = useState("");
  const [website, setWebsite] = useState("");

  async function handleRegister(event) {
    event.preventDefault();
    apiPhoto
      .post("/api/v1/register", { name: name, username: username, email: email, password: password, passwordRepeat: passwordRepeat, profilePictureUrl: profilePictureUrl, phoneNumber: phoneNumber, bio: bio, website: website })
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("token", response.data.token);
        window.location.href = "/"; // redirect
        // Handle successful registration here
      })
      .catch((error) => {
        console.log(error);
        // Handle registration error here
      });
  }

  return (
    <>
      <div className="wrapper">
        <div className="card">
          <h2>Register</h2>
          <form className="form">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
              spellCheck="false"
              className="control"
              placeholder="Name"
            />
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              name="username"
              spellCheck="false"
              className="control"
              placeholder="Username"
            />
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
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
            <input
              type="password"
              value={passwordRepeat}
              onChange={(e) => setPasswordRepeat(e.target.value)}
              name="passwordRepeat"
              spellCheck="false"
              className="control"
              placeholder="Repeat Password"
            />
            <input
              type="text"
              value={profilePictureUrl}
              onChange={(e) => setProfilePictureUrl(e.target.value)}
              name="profilePictureUrl"
              spellCheck="false"
              className="control"
              placeholder="Profile Picture URL"
            />
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              name="phoneNumber"
              spellCheck="false"
              className="control"
              placeholder="Phone Number"
            />
            <input
              type="text"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              name="bio"
              spellCheck="false"
              className="control"
              placeholder="Bio"
            />
            <input
              type="text"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              name="website"
              spellCheck="false"
              className="control"
              placeholder="Website"
            />
            <button
              onClick={(e) => handleRegister(e)}
              className="control"
              type="button"
            >
              Register
            </button>
            <h2>Already have an account?</h2>
            <button className="control">
            <Link to="/login" >
              Login
            </Link>
            </button>

          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
