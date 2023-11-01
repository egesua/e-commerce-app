import axios from "axios";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import { Button, Form, FormFeedback, FormGroup, Input, Label } from "reactstrap";

const productDataInitial = {
  name: "",
  description: "",
  img: "",
  price: 0,
  stock: 0,
};


const ProductFormYup = () => {

  const [productData, setProductData] = useState([]);
  const [formErrors, setFormErrors] = useState({
    name: "",
    description: "",
    img: "",
    price: "",
    stock: "",
  })
  const [isValid, setValid] = useState(false);

  const productFormSchema = Yup.object().shape({
    name: Yup.string()
      .required("Must include a product name.")
      .min(4, "Name must be at least 4 characters long."),
    description: Yup.string()
      .required("Description is required."),
    img: Yup.string().url("Please use a valid url address."),
    price: Yup.number().test("positive-number", "Price must be greater than 0.", (value, context) => {
      return value > 0;
    }
    ),
    stock: Yup.number().positive("You must enter a positive value.")
  });

  const inputChangeHandler = (e) => {
    const { value, name, checked, type } = e.target;
    Yup.reach(productFormSchema, name)
    .validate(type === "checkbox" ? checked : value)
    .then((valid) => {setFormErrors({...formErrors, [name]:""});})
    .catch(err => {setFormErrors({...formErrors, [name]: err.errors[0]})})
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
    productFormSchema.isValid(productData).then((valid) => setValid(valid));
  }, [productData]);

  return (
    <Form onSubmit={productSubmitHandler} className="product-form">
      <FormGroup>
        <Label>Product Name</Label>
        <Input
          type="text"
          name="name"
          onChange={inputChangeHandler}
          value={productData.name}
          invalid={!!formErrors.name}
        />
        <FormFeedback>
          {formErrors.name}
        </FormFeedback>
      </FormGroup>
      {formErrors.name && (<span className="text-danger">{formErrors.name}</span>)}

      <FormGroup>
        <Label>Description</Label>
        <Input
          type="text"
          name="description"
          onChange={inputChangeHandler}
          value={productData.description}
          invalid={!!formErrors.description}
        />
        <FormFeedback>
          {formErrors.description}
        </FormFeedback>
      </FormGroup>
      {formErrors.description && (<span className="text-danger">{formErrors.description}</span>)}
      <FormGroup>
        <Label>Img Url</Label>
        <Input
          type="url"
          name="img"
          onChange={inputChangeHandler}
          value={productData.img}
          invalid={!!formErrors.img}
        />
        <FormFeedback>
          {formErrors.img}
        </FormFeedback>
      </FormGroup>
      {formErrors.img && (<span className="text-danger">{formErrors.img}</span>)}

      <FormGroup>
        <Label>Price</Label>
        <Input
          type="number"
          name="price"
          onChange={inputChangeHandler}
          value={productData.price}
          invalid={!!formErrors.price}
        />
        <FormFeedback>
          {formErrors.price}
        </FormFeedback>
      </FormGroup>
      {formErrors.price && (<span className="text-danger">{formErrors.price}</span>)}

      <FormGroup>
        <Label>Stock</Label>
        <Input
          type="number"
          name="stock"
          onChange={inputChangeHandler}
          value={productData.stock}
          invalid={!!formErrors.stock}
        />
        <FormFeedback>
          {formErrors.stock}
        </FormFeedback>
      </FormGroup>
      {formErrors.stock && (<span className="text-danger">{formErrors.stock}</span>)}
      <Button type="submit" color="primary" disabled={!isValid}>Submit</Button>
    </Form>
  );
};

export default ProductFormYup;
