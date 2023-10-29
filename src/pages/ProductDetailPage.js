import { useEffect, useState } from "react";
import { useParams, useNavigate  } from "react-router-dom";
import { Button } from "reactstrap";

const ProductDetailPage = ({ products }) => {
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  const { productId } = useParams();

  useEffect(() => {
    const pro = products?.find((p) => p.id === productId);
    setProduct(pro);
  }, [productId, products]);

  return (
    <div>
      <h2>
        <Button className="button-item-left" color="link" onClick={() => navigate(-1)}>{"Back"}</Button>
        Products Detail Page: {productId}</h2>
      <hr />
      <div className="d-flex flex-column">
        <img alt="Sample" src={product?.img} />
        <h2>{product?.name}</h2>
        <p>{product?.description}</p>
        <p>{product?.price}</p>
        <p>{product?.stock}</p>
      </div>
    </div>
  );
};

export default ProductDetailPage;
