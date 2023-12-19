import { useState, useEffect } from "react";
import { useParams, Link} from "react-router-dom";


function ProductDetailsPage() {
  // The state variable `product` is currently an empty object {},
  // but you should use it to store the response from the Fake Store API (the product details).
  const [product, setProduct] = useState({});


  // The `productId` coming from the URL parameter is available in the URL path.
  // You can access it with the `useParams` hook from react-router-dom.
const {
  productId 
} = useParams () 

  // To fetch the product details, set up an effect with the `useEffect` hook:
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(res=>res.json())
            .then(json=>setProduct(json))
            .catch(error => {
              console.log(error);
            })
          }, [productId]);

  return (
    <div className="content">
    {product ? (
      <div className="card">
        <img src={product.image} alt={product.title} />
        <div>
          <ul className="btn-primary">{product.category}</ul>      
        <h1>{product.title}</h1>
        <div>
          <ul>{product.description}</ul>        
          <ul>{product.price}</ul> 
        </div>
        </div>
        
        
        <Link to='/'>
          <button className="btn-secondary" type="button">Back</button>        
        </Link>
        </div>
      ): <div>Loading...</div>}
    </div>
  )
    }

export default ProductDetailsPage;
