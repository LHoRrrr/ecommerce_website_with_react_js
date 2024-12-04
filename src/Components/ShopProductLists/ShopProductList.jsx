import React from 'react';
import ShopProduct from '../ShopProduct/ShopProduct'
import { useProduct } from '../../contexts/ProductContext';

export default function ShopProductList() {
  const { product: products } = useProduct();

  if (!products || products.length === 0) {
    return <p>No products available.</p>;
  }
  const limit = 21; 
  const limitedProducts = products.slice(0, limit);
  return (
    <>
      <div class="row product-lists">
      {limitedProducts.map((product) => (
            <ShopProduct key={product.id} product={product} />
          ))}
      </div>

    </>
  )
}
