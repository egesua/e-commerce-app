import axios from "axios";
import { useEffect, useState } from "react";
import ProductFormYup from "../components/ProductFormYUP";

const loginFormDataInitial = {
  name: "",
  email: "",
  password: "",
  rememberMe: false,
};

const CreateProductPage = () => {
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
    <div>
      <h1>Create Product</h1>
      <hr />
      <ProductFormYup />
    </div>
  );
};

export default CreateProductPage;
