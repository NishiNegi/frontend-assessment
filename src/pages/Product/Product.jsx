/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetail from '../../components/ProductDetail/ProductDetail';

const Product = () => {
  const { id } = useParams();
  const [results, setResults] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const result = await response.json();
        setResults(result);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProducts();
  }, []);
  return (
    <div className="">
      <ProductDetail
        name={results.title}
        image={results.image}
        description={results.description}
        category={results.category}
        price={results.price}
      />
    </div>
  );
};

export default Product;
