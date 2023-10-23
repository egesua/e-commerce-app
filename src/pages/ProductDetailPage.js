import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetailPage = ({ products }) => {
  const [product, setProduct] = useState(null);

  const { productId } = useParams();

  useEffect(() => {
    const pro = products?.find((p) => p.id === productId);
    setProduct(pro);
  }, [productId, products]);

  return (
    <div>
      <h2>Products Detail Page: {productId}</h2>
      <hr />
      <div className="d-flex flex-wrap p-4">
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
