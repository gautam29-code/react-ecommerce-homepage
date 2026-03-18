import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="container mt-4">
      <div className="row g-4">
        {products.map(product => (
        <div className="col-md-4" key={product.id}>
            <div className="card h-100 shadow">
              <div className="card-head text-center p-3">
                <img
                  src={product.image}
                  alt={product.title}
                  className="img-fluid"
                  style={{ height: "180px", objectFit: "contain" }}
                />
              </div>

              <div className="card-body">
                <h6 className="card-title">{product.title}</h6>
                <h5 className="text-success">₹ {product.price}</h5>
                <p className="card-text">
                  {product.description.slice(0, 70)}...
                </p>
                <button className="btn btn-warning btn-sm">AddtoCart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
