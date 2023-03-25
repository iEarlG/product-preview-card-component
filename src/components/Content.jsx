import React from 'react';

import { AiOutlineShoppingCart } from 'react-icons/ai';
import desktopProduct from '../assets/images/image-product-desktop.jpg';

const Content = () => {
  return (
    <main>
      <section className="contents">
      <div className="content-box">
        <img src={desktopProduct} alt="desktopProduct" className="product-img" />
      </div>

      <div className="text-contents">
        <h3>Perfume</h3>
        <h1>Gabrielle Essence Eau De Parfum</h1>
        <p>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>

        <div className="content-price">
          <h2>$149.99</h2>
          <p>$169.99</p>
        </div>
        
        <div className="content-button">
          <a href="#">
            <AiOutlineShoppingCart 
              className="cart-icon"
            />
              Add to Cart
          </a>
        </div>
      </div>
      </section>
    </main>
  )
}

export default Content;