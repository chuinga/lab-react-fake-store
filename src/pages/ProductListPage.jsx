import { useState, useEffect } from "react";


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);
  

  // To fetch the list of products, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(apiData => setProducts(apiData));
  }, []);

  return (
    <div className="ProductListPage">
      {products.map(products => (
        <li key={products.id}>{products.name}</li>
      ))}
    </div>
  );
}

export default ProductListPage;
