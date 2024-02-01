import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Product() {
  const { id } = useParams();
  console.log(id);

  const [product, setProduct] = useState(null);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(`https://dummyjson.com/products/${id}`);
      if (res.data) {
        setProduct(res.data);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("mohit:", product ? product.id : "Product is null");

  return (
    <>
      <div className="">
        <h2>Product details </h2>
        {product ? 
        <div>
            <h3>Title : {product.title}</h3>
            <h3>Description : {product.description}</h3>
            <h3>Price : {product.price}</h3>
            <h3>Brand : {product.brand}</h3>
            <h3>Category : {product.category}</h3>
            <img src={product.thumbnail} alt="" />
        </div> 
        : <p>loading...</p>}
      </div>
    </>
  );
}

export default Product;
