import React from 'react'
import Ckitem from './Ckitem'
import Cksummary from './Cksummary';
import { useCart } from '../../contexts/CartContext';

export default function ProductCheckout() {
  const {cartItems} = useCart();
  return (
    <>
      <div class="col-lg-4">
        <div class="order-details-wrap">
          <table class="order-details">
            <thead>
              <tr>
                <th>Your order Details</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody class="order-details-body">
              <tr>
                <td>Product</td>
                <td>Total</td>
              </tr>
              {cartItems && cartItems.length > 0 ?
                    cartItems.map((item) => (
                    <Ckitem key={item.id} item={item}></Ckitem>
                    )) :
                    <h4 className='no-item'>No item in the cart!</h4>
                  }
            </tbody>
            <tbody class="checkout-details">
              <Cksummary cartItems={cartItems}></Cksummary>
            </tbody>
          </table>
          <a href="#" class="boxed-btn">Place Order</a>
        </div>
      </div>
    </>
  )
}
