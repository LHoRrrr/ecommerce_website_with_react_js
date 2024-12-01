import React from 'react';
import Product from '../Product/Product';
import { useProduct } from '../../contexts/ProductContext';

export default function ProductList() {
  const { product: products } = useProduct();

  if (!products || products.length === 0) {
    return <p>No products available.</p>;
  }
  const limit = 3; // Set the limit to 5 items
  
  const limitedProducts = products.slice(0, limit);

  return (
    <div className="product-section mt-150 mb-150">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 text-center">
            <div className="section-title">
              <h3>
                <span className="orange-text">Our</span> Products
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga quas itaque eveniet beatae optio.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {limitedProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
