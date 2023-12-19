import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import ProductDetail from './ProductDetailsPage'

//import styles from '../styles/ProductListPage.css'


function ProductListPage() {
  // The state variable `products` is currently an empty array [], 
  // but you should use it to store the response from the Fake Store API (the list of products).
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(apiData => setProducts(apiData));
  }, []);

  return (
    <div className="content">
      {products.map(products => (
        
          <div className="card" key={products.id}>  
          <Link to={`/product/details/${products.id}`} key={products.id}>
          <img src={products.image} alt={products.title} />     
          <h1>{products.title}</h1>
          <ul>{products.category}</ul> 
          <ul>{products.price}</ul>          
          <ul>{products.description}</ul>          
          </Link>     
                   
        </div>
        

        
      ))}
    </div>
  );
}

export default ProductListPage;
