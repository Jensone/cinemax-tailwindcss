/**
 * Ce fichier contient le composant Navbar
 * Pour déclarer un composant on doit charger React
 * puis on crée une fonction 'Navbar' qui retourne
 * un élément JSX (le contenu du composant).
 *
 * Il faut également exporter le composant
 * pour pouvoir l'utiliser ailleurs.
 */
import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="flex items-center justify-between pr-9">
        <h2>
          <Link to="/">
            <img src={logo} alt="Logo Cinemax" width="250" />
          </Link>
        </h2>
        <div className="flex items-center gap-5 mt-7">
          <Link to="/">Search</Link>
          <Link to="/favorites">Favorites</Link>
          <Link
            to="/account"
            className="px-4 py-2 text-white bg-orange-500 rounded-full"
          >
            Login
          </Link>
        </div>
      </div>
    </>
  );
}
