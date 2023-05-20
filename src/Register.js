import './Login.css';
import { useState } from 'react';
import axios from 'axios';

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

    const data = {
      name,
      username,
      email,
      password,
      passwordRepeat,
      profilePictureUrl,
      phoneNumber,
      bio,
      website
    };

    const config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: '{{BASE_URL}}/api/v1/register', // Ganti dengan URL base yang sesuai
      headers: {
        'apiKey': '{{API_KEY}}' // Ganti dengan kunci API yang sesuai
      },
      data: data
    };

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        window.location.href = '/';
        // Lakukan tindakan setelah berhasil mendaftar
      })
      .catch((error) => {
        console.log(error);
        // Tangani kesalahan yang terjadi saat pendaftaran
      });
  }

  return (
    <div className="wrapper">
       <div className="card">
          <h2>Register</h2>
          <form  className="form">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="control"
            />
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className="control"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="control"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="control"
            />
            <input
              type="password"
              value={passwordRepeat}
              onChange={(e) => setPasswordRepeat(e.target.value)}
              placeholder="Repeat Password"
              className="control"
            />
            <button type="submit" className="control" onSubmit={handleRegister} >Register</button>
          </form>
        </div>
    </div>
  );
}

export default Register;
