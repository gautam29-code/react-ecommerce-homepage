import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Nav from "./component/Navbar";
import Product from "./component/Product";
import Cart from "./component/Cart";
import Contact from "./component/Contact";
import Nofound from "./component/Nofound";
import Card from "./component/Card";
import { useState } from "react";
import Dashboard from "./component/Dashboard";
import Profile from "./component/Profile";
import Setting from "./component/Settting";
import Productdetails from "./component/Productdetails";

function App() {
  let [cart, setcart] = useState([])
  function recivedata(item) {
    setcart(prevCart => {
      let existingItem = prevCart.find(p => p.id === item.id);

      if (existingItem) {
      
        return prevCart.map(p =>
          p.id === item.id ? { ...p, qty: p.qty + 1 } : p
        );
      } else {
        return [...prevCart, { ...item, qty: 1 }];
      }
    });
  }
  return (<>
    <BrowserRouter>
      <Nav cart={cart.length} />
      <Routes>
        <Route path="/" element={<Home />} > </Route>
        <Route path="/Home" element={<Home />} > </Route>
        <Route path="/Product" element={<Product />} > </Route>
        <Route path="/Cart" element={<Cart cart={cart} />} > </Route>
        <Route path="/Contact" element={<Contact />} > </Route>
        <Route path="/Card" element={<Card senddata={recivedata} />} > </Route>
        <Route path="/Dashboard" element={<Dashboard/>}>
         <Route path="Profile" element={<Profile/>}></Route>
         <Route path="Setting" element={<Setting/>}></Route>
        
        </Route>
        <Route path="/Product/:id" element={<Productdetails/>}>

        </Route>
        <Route path="/*" element={<Nofound />} > </Route>
      </Routes>
    </BrowserRouter>


  </>)
} export default App;
