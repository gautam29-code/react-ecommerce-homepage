import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Productdetails() {
  let { id } = useParams();
  let [product, setProduct] = useState(null);

  useEffect(() => {
    fetchdata();
  }, [id]);

  async function fetchdata() {
    try {
      let res = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      setProduct(res.data);
    } catch (err) {
      console.log(err);
    }
  }


  if (!product) {
    return <h3>Loading...</h3>;
  }

  return (
    <div className="card mb-3 p-3">
      <img
        src={product.image}
        alt={product.title}
        style={{ height: "120px", objectFit: "contain" }}
      />
      <h6>{product.title}</h6>
      <p>Price: ₹ {product.price}</p>
    </div>
  );
}

export default Productdetails;
