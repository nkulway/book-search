import { useState } from "react";
import "./style.css";

function Login() {
  const [loginData, setLoginData] = useState({
    username: null,
    password: null,
  });

  const handleChange = (e) => {
    const value = e.target.value;
    const type = e.target.id;

    const loginDataCopy = Object.assign({}, loginData, {
      ...loginData,
    });

    if (type === "username") {
      loginDataCopy.username = value;
    } else {
      loginDataCopy.password = value;
    }
    setLoginData(loginDataCopy);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="center">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form__field">
            <label htmlFor="username">Username</label>
            <input id="username" type="text" onChange={handleChange} />
          </div>
          <div className="form__field">
            <label htmlFor="password">Password</label>
            <input id="password" type="text" onChange={handleChange} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
