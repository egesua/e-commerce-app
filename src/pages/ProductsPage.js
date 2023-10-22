import { useState } from "react";
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

const ProductsPage = () => {
  const products = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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
            <img alt="Sample" src="https://picsum.photos/300/200" />
            <CardBody>
              <CardTitle tag="h5">Product {product}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                Card subtitle
              </CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
              <Button color="primary" onClick={toggle}>Sepete Ekle</Button>
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
