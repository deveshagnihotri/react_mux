import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import GetModal from '../components/addModal';
import { Button, ButtonToolbar } from 'react-bootstrap';
import url from '../constants/endPoints';
import '../components/homePage.css';
import { toast } from 'react-toastify';

function HomePage(props) {
  const [data, setData] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [modalType, setModalType] = useState('Add');
  const [catId, setCatId] = useState();
  const [productName, setProductName] = useState();
  const [unitPrice, setUnitPrice] = useState();
  const [onClickItemData, setOnClickEdit] = useState(false);
  const [clickedItem, setClickedItem] = useState();

  const fetchApiData = () => {
    fetch(url)
      .then(res => res.json())
      .then(items => setData(items.value));
  };

  useEffect(() => {
    fetchApiData();
  }, []);

  const handleCategoryId = e => {
    setCatId(e.target.value);
  };

  const handleProductName = e => {
    setProductName(e.target.value);
  };

  const handleUnitPrice = e => {
    setUnitPrice(e.target.value);
  };

  const handleSubmit = () => {
    let newData = {
      CategoryID: catId,
      ProductName: productName,
      UnitPrice: unitPrice
    };
    data.push(newData);
    toast.success('Item saved');
    setModalShow(false);
  };

  const onClickItem = item => {
    setOnClickEdit(true);
    setClickedItem(item);
  };

  const handleRemove = item => {
    let newList = data.filter(list => item.ProductName !== list.ProductName);
    setData(newList);
    toast.success(item.ProductName + ' Deleted ');
  };

  if (onClickItemData) {
    return (
      <Redirect to={{ pathname: '/productdetail', data: { clickedItem } }} />
    );
  }

  return (
    <div className="container">
      <div className="py-3">
        <ButtonToolbar>
          <Button
            variant="success"
            onClick={() => {
              setModalShow(true);
              setModalType('Add');
            }}
          >
            Add New Item
          </Button>
        </ButtonToolbar>
        <GetModal
          show={modalShow}
          modalType={modalType}
          onHide={e => setModalShow(false)}
          handleCategoryId={e => handleCategoryId(e)}
          handleProductName={e => handleProductName(e)}
          handleUnitPrice={e => handleUnitPrice(e)}
          handleSubmit={e => handleSubmit(e)}
        ></GetModal>
      </div>

      <div className="container">
        <table className="table-container">
          <thead className="table-header">
            <tr>
              <td>
                <h3>Id</h3>
              </td>
              <td>
                <h3>Product Name</h3>
              </td>
              <td>
                <h3>Action</h3>
              </td>
            </tr>
          </thead>
          <tbody>
            {data.map((item, id) => (
              <tr>
                <td>{id + 1}</td>
                <td onClick={() => onClickItem(item)} className="row" key={id}>
                  <p>{item.ProductName}</p>
                </td>
                <td>
                  <Button
                    variant="danger"
                    key={id}
                    onClick={() => handleRemove(item)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HomePage;
