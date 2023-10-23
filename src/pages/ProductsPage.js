import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";

const ProductsPage = ({ products }) => {

  const [showModal, setShowModal] = useState(false);
  const toggle = () => setShowModal(!showModal);

  return (
    <div>
      <h2>Products Page</h2>
      <hr />
      <div className="d-flex flex-wrap p-4">
        {products.map((product) => (
          <Card
            className="me-2 mb-2"
            color="light"
            style={{
              width: "22rem",
            }}
            key={product}
          >
            <img alt="Sample" src={product.img} />
            <CardBody>
              <CardTitle tag="h5">{product.name}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                {product.price} $
              </CardSubtitle>
              <CardText>
                {product.description}
              </CardText>
              <div className="d-flex justify-content-around">
              <Button color="primary" onClick={toggle}>Add to Cart</Button>
              <Link className="icon-link" to={"/products/" + product.id}>Inspect</Link>
              </div>
            </CardBody>
          </Card>
  
        ))}
      </div>
      <Modal isOpen={showModal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Ürün Sepete Eklendi!</ModalHeader>
        <ModalBody>
          Ne de güzel eklendi!
        </ModalBody>
        <ModalFooter>
        <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
          <Button color="primary" onClick={toggle}>
            Süper!
          </Button>
          
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ProductsPage;
