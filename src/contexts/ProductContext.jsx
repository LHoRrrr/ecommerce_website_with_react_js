import { createContext, useEffect, useState, useContext } from 'react';
import { useParams } from "react-router-dom";
import PropTypes from 'prop-types';

const ProductContext = createContext({
  product: [],
  loading: true,
  error: null,
});

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { category } = useParams();

  const getProduct = async (category) => {
    try {
      setLoading(true);
      setError(null);

      let url = "https://fakestoreapi.com/products";

      if (category) {
        url += `/category/${category}?limit=20`;
      } else {
        url += "?limit=21";
      }

      const res = await fetch(url);
      if (!res.ok) {
        throw new Error(`Error fetching data: ${res.statusText}`);
      }

      const data = await res.json();
      setProduct(data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
      setError(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProduct(category);
  }, [category]);

  return (
    <ProductContext.Provider value={{ product, loading, error }}>
      {children}
    </ProductContext.Provider>
  );
};

ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useProduct = () => useContext(ProductContext);
