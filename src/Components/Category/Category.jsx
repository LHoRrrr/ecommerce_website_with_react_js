import React from 'react'
import {Link} from 'react-router-dom'

export default function Category({category}) {
  return (
    <>
      <Link to={`/shop/${category}`}>
        <li className="active" data-filter="*">{category}</li>
      </Link>
    </>
  ) 
}
