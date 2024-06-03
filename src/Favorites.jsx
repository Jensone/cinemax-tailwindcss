import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Favorites() {
  return (
    <>
      <Navbar />
      <p>Favorites</p>
      <Link to="/">Home</Link>
      <Link to="/account">Account</Link>
      <Footer />
    </>
  );
}
