import { Link, NavLink, useNavigate } from "react-router-dom";

function Nav({ cart }) {
  let navigate =useNavigate()
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container">
        
        <Link className="navbar-brand fw-bold" to="/Home">
          🛍️ MyStore
        </Link>

       
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/Home">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/Product">
                Products
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/Card">
                Shop
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/Contact">
                Contact
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/Dashboard">
                Dashboard
              </NavLink>
            </li>
          </ul>

  

          
          <NavLink to="/Cart" className="btn btn-warning position-relative">
            🛒 Cart
            {cart > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart}
              </span>
            )}
          </NavLink>
         <button className="btn btn-warning position-relative ms-3" onClick={()=>navigate(-1)}>🔙</button>
          
        </div>
      </div>
    </nav>
  );
}

export default Nav;













































































































// import { Link, NavLink, useNavigate } from "react-router-dom";
// import "../style.css";

// function Nav({ cart }) {
//   let navigate = useNavigate();

//   return (
//     <nav className="navbar navbar-expand-lg custom-navbar fixed-top">
//       <div className="container">

//         <Link className="navbar-brand brand-logo" to="/Home">
//           🛍️ MyStore
//         </Link>

//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav mx-auto gap-2">

//             {["Home", "Product", "Card", "Contact", "Dashboard"].map((item) => (
//               <li className="nav-item" key={item}>
//                 <NavLink
//                   className="nav-link nav-animate"
//                   to={`/${item}`}
//                 >
//                   {item}
//                 </NavLink>
//               </li>
//             ))}

//           </ul>

//           <div className="d-flex align-items-center gap-3">
//             <NavLink to="/Cart" className="btn cart-btn position-relative">
//               🛒
//               {cart > 0 && (
//                 <span className="cart-badge">
//                   {cart}
//                 </span>
//               )}
//             </NavLink>

//             <button
//               className="btn back-btn"
//               onClick={() => navigate(-1)}
//               title="Go Back"
//             >
//               🔙
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Nav;
