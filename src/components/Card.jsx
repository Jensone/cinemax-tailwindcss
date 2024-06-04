/**
 * Le composant Card est utilisé pour afficher
 * les movies dans l'interface utilisateur.
 *
 * Afin d'afficher les informations des movies,
 * on utilise les 'props' pour passer les données
 * d'un composant à l'autre.
 *
 * la syntaxe est celle-ci : {props} en argument
 * de la fonction fléchée.
 */
import { useState } from "react";
import Database from "../assets/database.json";

const Card = ({ movies }) => {
  // On récupère les favoris depuis le localStorage
  const getFavorites = () => {
    let values = [],
      keys = Object.keys(localStorage), // On récupère les clés du localStorage
      i = keys.length; // On récupère la longueur des clés pour la boucle
    // Tant que i est supérieur à 0
    while (i--) {
      // On ajoute les valeurs dans le tableau
      if (keys[i].includes("tt") && keys[i].length === 9) {
        values.push(localStorage.getItem(keys[i]));
      }
    }
    return values; // On retourne les valeurs sinon on retourne un tableau vide
  };

  /**
   * On utilise le hook useState pour gérer
   * l'état des favoris. On initialise l'état
   * avec un objet vide {}.
   */
  const [favorites, setFavorites] = useState(getFavorites());
  const [newFavorites, setNewFavorites] = useState([]);

  favorites.map((fav) => {
    console.log(fav["isFav"]);
  });
  /**
   * Function handleFavorite(param: movie)
   * Le film est ajouter aux favoris si
   * il n'est pas déjà présent dans la liste.
   * Sinon il est retiré des favoris.
   */
  const handleFavorite = (movie) => {
    const movieData = {
      imdbID: movie.imdbID,
      Title: movie.Title,
      Poster: movie.Poster,
      isFav: true,
    };
    localStorage.setItem(movie.imdbID, JSON.stringify(movieData));
    setFavorites(getFavorites());
    console.log("Added to favorites");
  };

  return (
    <div className="flex flex-wrap justify-center">
      {movies.map((movie) => (
        <div
          className="flex flex-col items-center justify-center w-full m-2 transition ease-in-out bg-center bg-no-repeat bg-cover sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 duration-250 rounded-xl h-96 hover:scale-95 hover:shadow-xl"
          key={movie.imdbID}
          style={{
            backgroundImage: `url(${movie.Poster})`,
          }}
        >
          <div className="relative flex items-center justify-center w-full h-full p-2 transition ease-in-out shadow-md duration-320 bg-slate-800 bg-opacity-60 hover:bg-opacity-30 rounded-xl">
            <p className="text-2xl font-semibold text-center text-white hover:cursor-default">
              {movie.Title}
            </p>
            <button
              onClick={() => handleFavorite(movie)} // On appelle la fonction handleFavorite
              className="absolute flex items-center justify-center p-3 top-5 right-5"
            >
              {console.log(movie.isFav)}
              <svg
                className={movie.isFav ? "text-orange-500" : "text-white"} // On change la couleur de l'icône en fonction du favori
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 20.325q-.35 0-.712-.125t-.638-.4l-1.725-1.575q-2.65-2.425-4.788-4.812T2 8.15Q2 5.8 3.575 4.225T7.5 2.65q1.325 0 2.5.562t2 1.538q.825-.975 2-1.537t2.5-.563q2.35 0 3.925 1.575T22 8.15q0 2.875-2.125 5.275T15.05 18.25l-1.7 1.55q-.275.275-.637.4t-.713.125"
                />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
