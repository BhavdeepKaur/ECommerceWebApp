import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import ProductsScreen from './screens/ProductsScreen';

const openMenu = () =>{
  document.querySelector(".sidebar").classList.add("open");
}
const closeMenu = () => {
  document.querySelector(".sidebar").classList.remove("open")
}

function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="header">
      <div className="brand">
        <button onClick={openMenu}>
          &#9776;
        </button>
        <Link to = "/" style={{ color: '#ff086f' }}>YayShop</Link>
      </div>
      <div className="header-links">
        <a href="/cart/:id?" className="fa fa-shopping-cart fa-lg"> Cart</a>
        
        <a href="#" className="dropdown fa fa-user fa-lg"> Admin
                <ul className="dropdown-content">
                  <li>
                     <Link to="/products">Products</Link> <br></br><hr></hr>
                     <Link to="/orders">Orders</Link>
                  </li>
              </ul>
        </a>
      </div>
    </header>
    <aside className="sidebar" >
      <h2 style={{ color: '#020556'}}>Shopping Categories</h2>
      <button className="sidebar-close-button" onClick={closeMenu}>x</button>
      <ul className="categories">
        <li>
          <Link to="/category/Books" className="fa fa-book fa-lg" style={{ color: 'red' }}> Books </Link>
        </li>
        <hr></hr>
        <li>
          <Link to="/category/Pencils" className="fa fa-pencil fa-lg" style={{ color: 'green' }}> Pencils </Link>
        </li>
        <hr></hr>
        <li>
          <Link to="/category/Colors" className="fa fa-eyedropper fa-lg" style={{ color: 'blue' }}> Colors </Link>
        </li>
        <hr></hr>
        <li>
          <Link to="/category/Pen" className="fa fa-pencil-square-o fa-lg"> Pen </Link>
        </li>
        <hr></hr>
        <li>
          <Link to="/category/Paint Brush" className="fa fa-paint-brush fa-lg" style={{ color: 'orange' }}> Paint Brush </Link>
        </li>
        <hr></hr>
      </ul>
    </aside>
    <main className="main">
      <div className="content">
        <Route path="/products" component={ProductsScreen} />
        <Route path = "/product/:id" component = {ProductScreen} />
        <Route path = "/cart/:id?" component = {CartScreen} /> {/*cart should work itself,id is optional*/}
        <Route path="/category/:id" component= {HomeScreen} />
        <Route path = "/" exact = {true} component = {HomeScreen} />
      </div>

    </main>
    <footer className="footer">
      <i className="fa fa-copyright fa-lg"> Copyright 2020 YayShop</i>
    </footer>
  </div>
  </BrowserRouter>
  );
}

export default App;
