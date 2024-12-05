import React from 'react'
import Ckitem from './Ckitem'
import Cksummary from './Cksummary';
import { useCart } from '../../contexts/CartContext';

export default function ProductCheckout() {
  const {cartItems} = useCart();
  return (
    <>
      <div className="col-lg-4">
        <div className="order-details-wrap">
          <table className="order-details">
            <thead>
              <tr>
                <th>Your order Details</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody className="order-details-body">
              <tr>
                <td>Product</td>
                <td>Total</td>
              </tr>
              {cartItems && cartItems.length > 0 ?
                    cartItems.map((item) => (
                    <Ckitem key={item.id} item={item}></Ckitem>
                    )) :
                    <h4 classNameName='no-item'>No item in the cart!</h4>
                  }
            </tbody>
            <tbody className="checkout-details">
              <Cksummary cartItems={cartItems}></Cksummary>
            </tbody>
          </table>
          <a href="#" className="boxed-btn">Place Order</a>
        </div>
      </div>
    </>
  )
}
