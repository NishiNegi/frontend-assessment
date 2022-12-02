/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';

const Home = () => {
  const [results, setResults] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const result = await response.json();
        setResults(result);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <>
      <h1>Products</h1>
      <div className="products__grid">
        {/* <ProductCard
          key="1"
          title="{product.title}"
          image="{product.image}"
          id={1}
        /> */}
        {results.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            image={product.image}
            id={product.id}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
