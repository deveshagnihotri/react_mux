import React from 'react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/homePage';
import ProductDetail from './components/productDetail';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>this is the App</p>
      </header>
      <ToastContainer />

      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/productdetail" component={ProductDetail} />
      </Switch>
    </div>
  );
}

export default App;
