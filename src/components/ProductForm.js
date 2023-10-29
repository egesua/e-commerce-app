import axios from "axios";
import { useEffect, useState } from "react";

const ProductForm = () => {
  const productDataInitial = {
    name: "",
    description: "",
    img: "",
    price: 0,
    stock: 0,
  };

  const [productData, setProductData] = useState([]);

  const inputChangeHandler = (e) => {
    const { value, name, checked, type } = e.target;
    setProductData({
      ...productData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const productSubmitHandler = (e) => {
    e.preventDefault();
    axios.post("https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products", productData)
     .then(res => {
        console.log("Product succesfully submitted.", res.data);
        setProductData(productDataInitial);
     });
  };

  useEffect(() => {
    console.log("productData > ", productData);
  }, [productData]);

  return (
    <form onSubmit={productSubmitHandler} className="product-form">
      <label>
        <span>Product Name </span>
        <input
          type="text"
          name="name"
          onChange={inputChangeHandler}
          value={productData.name}
        ></input>
      </label>

      <label>
        <span>Description </span>
        <input
          type="text"
          name="description"
          onChange={inputChangeHandler}
          value={productData.description}
        ></input>
      </label>
      <label>
        <span>Image Url </span>
        <input
          type="url"
          name="img"
          onChange={inputChangeHandler}
          value={productData.img}
        ></input>
      </label>

      <label>
        <span>Price </span>
        <input
          type="text"
          name="price"
          onChange={inputChangeHandler}
          value={productData.price}
        ></input>
      </label>

      <label>
        <span>Stock </span>
        <input
          type="number"
          name="stock"
          onChange={inputChangeHandler}
          value={productData.stock}
        ></input>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ProductForm;
