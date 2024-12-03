import React from 'react';
import PropTypes from 'prop-types';

export default function Summary({ cartItems = [] }) {
  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  console.log(cartItems);

  // Assuming a tax rate of 10%
  const taxRate = 0.1;
  const taxTotalAmount = totalAmount * taxRate;

  const shipping = 45; // Flat shipping rate
  const totalPrice = totalAmount + taxTotalAmount + shipping;

  // Helper function to format as currency
  const formatCurrency = (amount) => `$${amount.toFixed(2)}`;

  return (
    <div className="total-section">
      <table className="total-table">
        <thead className="total-table-head">
          <tr className="table-total-row">
            <th>Total</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr className="total-data">
            <td><strong>Subtotal:</strong></td>
            <td>{formatCurrency(totalAmount)}</td>
          </tr>
          <tr className="total-data">
            <td><strong>Tax (10%):</strong></td>
            <td>{formatCurrency(taxTotalAmount)}</td>
          </tr>
          <tr className="total-data">
            <td><strong>Shipping:</strong></td>
            <td>{formatCurrency(shipping)}</td>
          </tr>
          <tr className="total-data">
            <td><strong>Total:</strong></td>
            <td>{formatCurrency(totalPrice)}</td>
          </tr>
        </tbody>
      </table>
      <div className="cart-buttons">
        <a href="checkout" className="boxed-btn black">Prodceed to Checkout</a>
      </div>
    </div>
  );
}

Summary.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      name: PropTypes.string,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
};
