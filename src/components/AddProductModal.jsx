import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const AddProductModal = (props) => {
  const [show, setShow] = useState(false);
  const [file, setFile] = useState(null);
  const [data, setData] = useState({});
  const [newProductObj, setNewProductObj] = useState({
    name: "",
    description: "",
    brand: "",
    price: "",
    category: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInput = (e) => {
    let id = e.target.id;
    setNewProductObj({
      ...newProductObj,
      [id]: e.target.value,
    });
  };

  const uploadPicture = async () => {
    let formData = new FormData();
    formData.append("picture", file);
    console.log(data.id);
    try {
      const response = await fetch(
        `http://localhost:3001/products/${data.id}/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      if (response.ok) {
        console.log("Picture uploaded successfully");
        props.fetchProducts();
      } else {
        console.log("Error while uploading picture");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const postData = async () => {
    try {
      const response = await fetch(`http://localhost:3001/products`, {
        method: "POST",
        body: JSON.stringify(newProductObj),
        headers: {
          "Content-Type": "Application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        setData(data);
        await uploadPicture();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="mb-5">
        Add Product
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                id="name"
                value={newProductObj.name}
                onChange={(e) => handleInput(e)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description:</Form.Label>
              <Form.Control
                type="text"
                id="description"
                value={newProductObj.description}
                onChange={(e) => handleInput(e)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Brand:</Form.Label>
              <Form.Control
                type="text"
                id="brand"
                value={newProductObj.brand}
                onChange={(e) => handleInput(e)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Price:</Form.Label>
              <Form.Control
                type="text"
                id="price"
                value={newProductObj.price}
                onChange={(e) => handleInput(e)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Category:</Form.Label>
              <Form.Control
                type="text"
                id="category"
                value={newProductObj.category}
                onChange={(e) => handleInput(e)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose} type="submit">
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default AddProductModal;
