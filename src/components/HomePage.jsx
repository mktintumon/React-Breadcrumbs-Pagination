import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function HomePage() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products?limit=3");

      if (res.data && res.data.products) {
        setProducts(res.data.products);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div className="home">
        <h2>Welcome to the Home Page</h2>
        <button>
          <Link to={"/products"}>Explore All products</Link>
        </button>
      </div>

      {products.length > 0 && (
        <div className="products">
          {products.map((product) => {
            return (
              <span className="product__single" key={product.title}>
                <img src={product.thumbnail} alt={product.title} />
                <h2>{product.title}</h2>
                <h3>Price : ${product.price}</h3>
                <p>Rating : {product.rating}</p>
              </span>
            );
          })}
        </div>
      )}
    </>
  );
}

export default HomePage;
