import React from 'react'
import useGetCategory from "../../useGetCategory/useGetCategory";
import Category from '../Category/Category'

export default function CategoryList() {
  const {categorie, loading} = useGetCategory();
  return (
    <>
      <div className="col-md-12">
        <div className="product-filters">
            <ul>
              {
                loading ? Array.from({length: 4}).map((_, index) =>(
                  <h4 key={index}>Loading....</h4>
                )) :
                  categorie?.map((category)=> (
                    <Category key = {category} category = {category} ></Category>
                  )
                )
              }
            </ul>
        </div>
      </div>
    </>
  )
}
