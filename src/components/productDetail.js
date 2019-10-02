import React from 'react';
import '../components/homePage.css';

function ProductDetails(props) {
  const it = props.location.data.clickedItem;

  return (
    <div className="container py-3">
      <table className="table-container">
        <thead className="table-header">
          <tr>
            <td>CategoryID</td>
            <td>ProductID</td>
            <td>ProductName</td>
            <td>QuantityPerUnit</td>
            <td>ReorderLevel</td>
            <td>SupplierID</td>
            <td>UnitPrice</td>
            <td>UnitsInStock</td>
            <td>UnitsOnOrder</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{it.CategoryID}</td>
            <td>{it.ProductID}</td>
            <td>{it.ProductName}</td>
            <td>{it.QuantityPerUnit}</td>
            <td>{it.ReorderLevel}</td>
            <td>{it.SupplierID}</td>
            <td>{it.UnitPrice}</td>
            <td>{it.UnitsInStock}</td>
            <td>{it.UnitsOnOrder}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ProductDetails;
