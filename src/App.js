import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';

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
        <Link to = "/" >YayShop</Link>
      </div>
      <div className="header-links">
        <a href="cart.html">Cart</a>
        <a href="signin.html">Sign In</a>
      </div>
    </header>
    <aside className="sidebar">
      <h3>Shopping Categories</h3>
      <button className="sidebar-close-button" onClick={closeMenu}>x</button>
      <ul>
        <li>
          <a href="index.html" className="fa fa-book fa-lg"> Books </a>
        </li>
        <hr></hr>
        <li>
          <a href="index.html" className="fa fa-pencil fa-lg"> Stationery </a>
        </li>
        <hr></hr>
      </ul>
    </aside>
    <main className="main">
      <div className="content">

        <Route path = "/product/:id" component = {ProductScreen} />
        <Route path = "/" exact = {true} component = {HomeScreen} />
      </div>

    </main>
    <footer className="footer">
      All right reserved.
    </footer>
  </div>
  </BrowserRouter>
  );
}

export default App;
