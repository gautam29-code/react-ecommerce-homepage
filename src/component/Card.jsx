import { useState,useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function Card({ senddata }) {
  const [card, setcard] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  async function fetchdata() {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      setcard(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="container mt-4">
      <div className="row g-4">
        {card.map(product => (
          <div className="col-md-4" key={product.id}>
            <div className="card h-100 shadow">

              <Link to={`/Product/${product.id}`}>
                <div className="card-head text-center p-3">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="img-fluid"
                    style={{ height: "180px", objectFit: "contain" }}
                  />
                </div>
              </Link>

              <div className="card-body">
                <h6 className="card-title">{product.title}</h6>
                <h5 className="text-success">₹ {product.price}</h5>
                <p>{product.description.slice(0, 70)}...</p>

                <button
                  className="btn btn-warning btn-sm"
                  onClick={() => senddata(product)}
                >
                  Add to Cart
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}export default Card;
