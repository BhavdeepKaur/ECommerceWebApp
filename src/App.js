import React from 'react';
import './App.css';

const openMenu = () =>{
  document.querySelector(".sidebar").classList.add("open");
}
const closeMenu = () => {
  document.querySelector(".sidebar").classList.remove("open")
}

function App() {
  return (
    <div classNameName="grid-container">
    <header className="header">
      <div className="brand">
        <button onClick={openMenu}>
          &#9776;
        </button>
        <a href="index.html">YayProducts</a>
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
          <a href="index.html">Books</a>
        </li>

        <li>
          <a href="index.html">Stationery</a>
        </li>

      </ul>
    </aside>
    <main className="main">
      <div className="content">
        <ul className="products">
          <li>
            <div className="product">
              <img className="product-image" src="/images/d1.jpg" alt="product" />
              <div className="product-name">
                <a href="product.html">Story Book</a>
              </div>
              <div className="product-brand">Papermate</div>
              <div className="product-price">$60</div>
              <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-image" src="/images/d1.jpg" alt="product" />
              <div className="product-name">
                <a href="product.html">Story Book</a>
              </div>
              <div className="product-brand">Papermate</div>
              <div className="product-price">$60</div>
              <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-image" src="/images/d1.jpg" alt="product" />
              <div className="product-name">
                <a href="product.html">Story Book</a>
              </div>
              <div className="product-brand">Papermate</div>
              <div className="product-price">$60</div>
              <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-image" src="/images/d1.jpg" alt="product" />
              <div className="product-name">
                <a href="product.html">Story Book</a>
              </div>
              <div className="product-brand">Papermate</div>
              <div className="product-price">$60</div>
              <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-image" src="/images/d1.jpg" alt="product" />
              <div className="product-name">
                <a href="product.html">Story Book</a>
              </div>
              <div className="product-brand">Papermate</div>
              <div className="product-price">$60</div>
              <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
          </li>
          <li>
            <div className="product">
              <img className="product-image" src="/images/d1.jpg" alt="product" />
              <div className="product-name">
                <a href="product.html">Story Book</a>
              </div>
              <div className="product-brand">Papermate</div>
              <div className="product-price">$60</div>
              <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
          </li>

        </ul>
      </div>

    </main>
    <footer className="footer">
      All right reserved.
    </footer>
  </div>
  );
}

export default App;
