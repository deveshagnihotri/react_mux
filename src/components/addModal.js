import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

function GetModal(props) {
  console.log(props, 'Suvesh');
  const modalProductName =
    props.modalType === 'Edit' ? props.modalData.ProductName : '';
  console.log(modalProductName, 'GetModal');
  const [productName, setProductName] = useState(modalProductName);
  console.log(productName, 'GetModal');
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.modalType === 'Edit' ? (
              <h1>Edit to Item</h1>
            ) : (
              <h1>Add to Item </h1>
            )}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicCategoryId">
              <Form.Label>CategoryID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter CategoryID"
                value={props.catId}
                onChange={e => props.handleCategoryId(e)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicProductName">
              <Form.Label>ProductName</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter ProductName"
                value={productName}
                onChange={e => setProductName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Unit Price</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Unit Price"
                value={props.unitPrice}
                onChange={e => props.handleUnitPrice(e)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={e => {
              props.handleSubmit(e);
            }}
            variant="primary"
            type="submit"
            value="Save"
          >
            Submit
          </Button>
          <Button onClick={e => props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

GetModal.propTypes = {};

export default GetModal;
