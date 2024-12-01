import { useEffect, useState } from 'react';

function useGetCategory() {
  
  const [categorie, setCategorie] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log(categorie, setCategorie, loading, setLoading);

  const getCategory = async () => {
    try {
      setLoading(true); 
      const res = await fetch("https://fakestoreapi.com/products/categories"); 
      if (res.ok) {
        const data = await res.json();
        setCategorie(data); 
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
      setLoading(false); 
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  return { categorie, loading };
}

export default useGetCategory;
