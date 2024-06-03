import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Favorites from "./Favorites.jsx";
import Account from "./Account.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  // Création du router
  {
    path: "/", // URL de la page (page d'accueil)
    element: <App />, // Composant à afficher
  },
  {
    path: "favorites", // URL de la page favorites (localhost:5173/favorites)
    element: <Favorites />, // Composant à afficher
  },
  {
    path: "account", // URL de la page account (localhost:5173/account)
    element: <Account />, // Composant à afficher
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* On passe le router à RouterProvider */}
    <RouterProvider router={router} />{" "}
  </React.StrictMode>,
);
