import React from 'react'
import { useCart } from '../../contexts/CartContext';
import Item from './Item'
import Summary from './Summary';

export default function CartContainer() {
  const {cartItems, removeFromCart, addToCart, removeFromQuantity} = useCart();

  const handleAdd = (product) => {
    addToCart(product);
  }

  const handleRemove = (productId) => {
    removeFromCart(productId);
  }

  const handleRemoveQuantity = (productId) => {
    removeFromQuantity(productId)
  }
  return (
    <div class="cart-section mt-150 mb-150">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-12">
            <div class="cart-table-wrap">
              <table class="cart-table">
                <thead class="cart-table-head">
                  <tr class="table-head-row">
                    <th class="product-remove"></th>
                    <th class="product-image">Product Image</th>
                    <th class="product-name">Name</th>
                    <th class="product-price">Price</th>
                    <th class="product-quantity">Quantity</th>
                    <th class="product-total">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems && cartItems.length > 0 ?
                    cartItems.map((item) => (
                    <Item key={item.id} item={item} handleRemove={handleRemove} handleAdd={handleAdd} handleRemoveQuantity={handleRemoveQuantity}></Item>
                    )) :
                    <h4 className='no-item'>No item in the cart!</h4>
                  }
                </tbody>
              </table>
            </div>
          </div>

          <div class="col-lg-4">
            <Summary cartItems = {cartItems}></Summary>
          </div>
        </div>
      </div>
    </div>
  )
}
