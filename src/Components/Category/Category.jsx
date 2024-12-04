import React from 'react'
import {Link} from 'react-router-dom'

export default function Category({category}) {
  return (
    <>
      <Link to={`/shop/${category}`}>
        <li class="active" data-filter="*">{category}</li>
      </Link>
    </>
  ) 
}
