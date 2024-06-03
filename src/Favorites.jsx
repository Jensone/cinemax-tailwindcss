import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Database from "./assets/database.json";

export default function Favorites() {
  const [movies, setMovies] = useState(Database); // Initialisation de l'état 'movies' avec la liste par défaut

  return (
    <>
      <Navbar />
      <h1 className="text-center text-3xl font-bold mt-10 mb-5">Favorites</h1>
      {movies.length > 0 ? (
        <Card movies={movies} />
      ) : (
        <p className="text-center text-2xl font-bold mt-10">
          No favorite movie, add one for begin
        </p>
      )}
      <Footer />
    </>
  );
}
