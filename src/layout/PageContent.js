import { Route, Routes } from "react-router-dom";
import CounterPage from "../pages/CounterPage";
import MainPage from "../pages/MainPage";
import ProductsPage from "../pages/ProductsPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import LoginPage from "../pages/LoginPage";
import CreateProductPage from "../pages/CreateProductPage";

const PageContent = ({ userName, products }) => {
  return (
    <div className="page-content">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/counter-page"
          element={<CounterPage userName={userName} />}
        ></Route>
        <Route
          path="/products/edit"
          element={<ProductDetailPage products={products} />}
        >
        </Route>
        <Route path="/products" exact element={<ProductsPage products={products}/>}>
          
        </Route>
        <Route path="/products/:productId" exact element={<ProductDetailPage products={products}/>} />
        <Route path="/" exact element={<MainPage />} />
        <Route
          path="/login"
          element={<LoginPage />}
        >
        </Route>
        <Route
          path="/create-product"
          element={<CreateProductPage />}
        >
        </Route>
      </Routes>
    </div>
  );
};

export default PageContent;
