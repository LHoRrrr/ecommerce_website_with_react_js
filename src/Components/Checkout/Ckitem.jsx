import React from 'react'

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
