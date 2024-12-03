import React from 'react'
import PropTypes from 'prop-types';

export default function Ckitem({item}) {
  return (
    <>
               <tr>
                <td>{item.title}</td>
                <td>{`${item.price?.toFixed(2) || '0.00'}$`}
                </td>
              </tr>
    </>
  )
}
