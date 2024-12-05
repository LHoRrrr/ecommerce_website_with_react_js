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
    <div className="cart-section mt-150 mb-150">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <div className="cart-table-wrap">
              <table className="cart-table">
                <thead className="cart-table-head">
                  <tr className="table-head-row">
                    <th className="product-remove"></th>
                    <th className="product-image">Product Image</th>
                    <th className="product-name">Name</th>
                    <th className="product-price">Price</th>
                    <th className="product-quantity">Quantity</th>
                    <th className="product-total">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems && cartItems.length > 0 ?
                    cartItems.map((item) => (
                    <Item key={item.id} item={item} handleRemove={handleRemove} handleAdd={handleAdd} handleRemoveQuantity={handleRemoveQuantity}></Item>
                    )) :
                    <h4 classNameName='no-item'>No item in the cart!</h4>
                  }
                </tbody>
              </table>
            </div>
          </div>

          <div className="col-lg-4">
            <Summary cartItems = {cartItems}></Summary>
          </div>
        </div>
      </div>
    </div>
  )
}
