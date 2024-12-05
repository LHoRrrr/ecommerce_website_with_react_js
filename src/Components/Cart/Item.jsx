import React from 'react';
import PropTypes from 'prop-types';

export default function Item({ item, handleRemove, handleAdd, handleRemoveQuantity }) {
  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);

    if (newQuantity > 0 && newQuantity !== item.quantity) {
      if (newQuantity > item.quantity) {
        handleAdd(item.id);
      } else {
        handleRemoveQuantity(item.id);
      }
    }
  };
  //const formatCurrency = (amount) => `$${amount.toFixed(2)}`;
  return (
    <tr className="table-body-row">
      <td className="product-remove">
        <button
          type="button"
          onClick={() => handleRemove(item.id)}
          aria-label={`Remove ${item.title} from cart`}
        >
          <i className="far fa-window-close"></i>
        </button>
      </td>
      <td className="product-image">
        <img
          src={item.image || '/placeholder.png'}
          alt={item.title || 'Product image'}
        />
      </td>
      <td className="product-name">{item.title || 'No title available'}</td>
      <td className="product-price">{`${item.price?.toFixed(2) || '0.00'}$`}</td>
      <td className="product-quantity">
        <input
          type="number"
          value={item.quantity}
          min="1"
          onChange={handleQuantityChange}
        />
      </td>
      <td className="product-total">
        {`${(item.price * item.quantity).toFixed(2) || '0.00'}$`}
      </td>
    </tr>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    image: PropTypes.string,
  }).isRequired,
  handleRemove: PropTypes.func.isRequired,
  handleAdd: PropTypes.func.isRequired,
  handleRemoveQuantity: PropTypes.func.isRequired,
};
