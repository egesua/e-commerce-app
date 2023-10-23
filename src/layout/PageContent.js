import { Route, Routes } from "react-router-dom";
import CounterPage from "../pages/CounterPage";
import MainPage from "../pages/MainPage";
import ProductsPage from "../pages/ProductsPage";
import ProductDetailPage from "../pages/ProductDetailPage";

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
        <Route path="/products/:productId" exact element={<ProductDetailPage />} />
        <Route path="/" exact element={<MainPage />} />
      </Routes>
    </div>
  );
};

export default PageContent;
