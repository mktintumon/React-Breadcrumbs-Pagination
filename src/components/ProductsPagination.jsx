import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductsPagination() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(
        `https://dummyjson.com/products?limit=10&skip=${page * 10 - 10}`
      );

      if (res.data && res.data.products) {
        setProducts(res.data.products);
        setTotalPages(res.data.total / 10);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [page]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [page]);

  const pagehandler = (selectedPage) => {
    if (selectedPage > 0 && selectedPage <= totalPages && selectedPage !== page)
      setPage(selectedPage);
  };

  console.log(products);
  console.log(totalPages);

  return (
    <>
      <h2 className="home">Explore our all Products</h2>
      {products.length > 0 && (
        <div className="products">
          {products.map((product) => {
            return (
              <Link to={`/products/${product.id}`} key={product.id}>
                <span className="product__single" >
                  <img src={product.thumbnail} alt={product.title} />
                  <h2>{product.title}</h2>
                  <h3>Price : ${product.price}</h3>
                  <p>Rating : {product.rating}</p>
                </span>
              </Link>
            );
          })}
        </div>
      )}

      {/* PAGINATION */}
      {products.length > 0 && (
        <div className="pagination">
          <span
            className={page > 1 ? "" : "pagination__disable"}
            onClick={() => pagehandler(page - 1)}
          >
            ◀
          </span>

          {[...Array(totalPages)].map((_, i) => {
            return (
              <span
                key={i}
                className={page === i + 1 ? "pagination__selected" : ""}
                onClick={() => pagehandler(i + 1)}
              >
                {i + 1}
              </span>
            );
          })}

          <span
            className={page < totalPages ? "" : "pagination__disable"}
            onClick={() => pagehandler(page + 1)}
          >
            ▶
          </span>
        </div>
      )}
    </>
  );
}

export default ProductsPagination;
