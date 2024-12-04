import React from 'react'
import PropTypes from 'prop-types';

export default function Cksummary({cartItems= []}) {
  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);


  // Assuming a tax rate of 10%
  const taxRate = 0.1;
  const taxTotalAmount = totalAmount * taxRate;

  const shipping = 45; // Flat shipping rate
  const totalPrice = totalAmount + taxTotalAmount + shipping;

  // Helper function to format as currency
  const formatCurrency = (amount) => `$${amount.toFixed(2)}`;
  return (
    <>
      <tr>
        <td>Subtotal</td>
        <td>{`${formatCurrency(totalAmount)}$`}</td>
      </tr>
      <tr>
        <td>Tax</td>
        <td>10%</td>
      </tr>
      <tr>
        <td>Shipping</td>
        <td>$45</td>
      </tr>
      <tr>
        <td>Total</td>
        <td>{`${formatCurrency(totalPrice)}$`}</td>
      </tr>
    </>
  )
}
Cksummary.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      name: PropTypes.string,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
};
