import axios from "axios";
import { useEffect, useState } from "react";

const loginFormDataInitial = {
  name: "",
  email: "",
  password: "",
  rememberMe: false,
};

const LoginPage = () => {
  const [loginFormData, setLoginFormData] = useState(loginFormDataInitial);

  const inputChangeHandler = (e) => {
    const { value, name, checked, type } = e.target;
    setLoginFormData({
      ...loginFormData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("form submitted.");
    axios
      .post("www.myserverapiaddress.com/api/login", loginFormData)
      .then((res) => {
        if (res.loggedIn) {
        } else {
          //basarisiz
        }
      })
      .catch((err) => {
        //giris yapilamadi
      });
  };

  useEffect(() => {
    console.log("COMPONENT DID MOUNT")
    console.log("loginFormData: ", loginFormData);
  }, [loginFormData]);

  useEffect(() => {
    console.log("COMPONENT DID MOUNT");
  }, [])

  useEffect(() => {
    console.log("COMPONENT DID UPDATE");
  })

  return (
    <form onSubmit={submitHandler} className="login-form">
      <label htmlFor="user-pass">Name</label>
      <input
        id="user-pass"
        type="text"
        name="name"
        //Controlled Component - value eklendi mi eklenmedi mi
        value={loginFormData.name}
        onChange={inputChangeHandler}
      ></input>

      <label htmlFor="user-mail">Email</label>
      <input
        id="user-mail"
        type="email"
        name="email"
        value={loginFormData.email}
        onChange={inputChangeHandler}
      />

      <label htmlFor="user-pass">Password</label>
      <input
        id="user-pass"
        type="password"
        name="password"
        value={loginFormData.password}
        onChange={inputChangeHandler}
      />

      <label htmlFor="user-remember">Remember Me</label>
      <input
        id="user-remember"
        type="checkbox"
        name="rememberMe"
        checked={loginFormData.rememberMe}
        onChange={inputChangeHandler}
      />

      <button type="submit">Login</button>
      <button
        type="button"
        onClick={() => setLoginFormData(loginFormDataInitial)}
      >
        Reset
      </button>
    </form>
  );
};

export default LoginPage;
