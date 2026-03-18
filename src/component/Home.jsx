import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("");

  // 🔥 FETCH DATA
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        setLoading(false);
      });
  }, []);

  // 🔍 FILTER + SORT (ALL IN SAME COMPONENT)
  let filtered = products.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  if (category !== "all") {
    filtered = filtered.filter(item => item.category === category);
  }

  if (sort === "low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "high") {
    filtered.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="container mt-4">

      {/* 🔥 HERO */}
      <div className="text-center mb-4">
        <h1 className="fw-bold">🛍️ MyStore</h1>
        <p className="text-muted">Shop Smart, Live Better</p>
      </div>

      {/* 🔧 CONTROLS */}
      <div className="row mb-4">
        {/* SEARCH */}
        <div className="col-md-4">
          <input
            type="text"
            placeholder="Search..."
            className="form-control"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* CATEGORY */}
        <div className="col-md-4">
          <select
            className="form-control"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            <option value="smartphones">Smartphones</option>
            <option value="laptops">Laptops</option>
            <option value="fragrances">Fragrances</option>
            <option value="skincare">Skincare</option>
          </select>
        </div>

        {/* SORT */}
        <div className="col-md-4">
          <select
            className="form-control"
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="">Sort By</option>
            <option value="low">Price: Low → High</option>
            <option value="high">Price: High → Low</option>
          </select>
        </div>
      </div>

      {/* ⏳ LOADING */}
      {loading && <h3 className="text-center">Loading...</h3>}

      {/* 🛒 PRODUCT GRID */}
      <div className="row">
        {filtered.map(item => (
          <div className="col-md-3 mb-4" key={item.id}>
            <div className="card h-100 shadow-sm">

              <img
                src={item.thumbnail}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />

              <div className="card-body text-center">
                <h6>{item.title}</h6>

                <p className="text-warning">
                  ⭐ {item.rating}
                </p>

                <h5 className="text-success">
                  ₹{item.price}
                </h5>

                <Link to={`/product/${item.id}`}>
                  <button className="btn btn-dark btn-sm">
                    View
                  </button>
                </Link>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Home;