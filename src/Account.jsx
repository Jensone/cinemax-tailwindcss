import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Account() {
  return (
    <>
      <Navbar />
      <div className="p-5 border-2 w-full text-center">
        <h1>Account</h1>
      </div>

      <Footer />
    </>
  );
}
