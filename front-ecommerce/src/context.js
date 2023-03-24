import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [productList, setProductList] = useState([]);
  const [queryString, setQueryString] = useState('');
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);

  const saveProducts = (data) => {
    setProductList(data.products);
    setCategories([
      ...new Set(data.products.map((product) => product.product_category[0])),
    ]);
    setBrands([...new Set(data.products.map((product) => product.brand))]);
  };

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(`/api/v1/products?${queryString}`);
      console.log('queryString:', queryString);
      saveProducts(data);
    } catch (err) {
      console.error(err);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, [queryString]);

  console.log('products:', productList);
  // console.log('categories:', categories);
  // console.log('brands: ', brands);
  return (
    <AppContext.Provider
      value={{
        isLoading,
        productList,
        categories,
        brands,
        queryString,
        setQueryString,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
