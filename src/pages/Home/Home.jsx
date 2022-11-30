import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";

const Home = () => {
  const [results, setResults] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const results = await response.json();
        setResults(results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProducts();
    // results.map((product) => <p>{product.title}</p> )
  }, []);
  return (
    <div className="">
      <h1>Products</h1>
      {results.map(product => (
        <ProductCard
          key={product.id}
          title={product.title}
          image={product.image}
          id={product.id}
        />
      ))}
      <p></p>
    </div>
  );
};

export default Home;
