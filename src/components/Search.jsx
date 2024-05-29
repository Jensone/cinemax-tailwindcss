/**
 * Cette fonction est appelée lorsqu'un utilisateur
 * soumet le formulaire de recherche de films.
 * 
 * Elle effectue une requête à l'API OMDB pour obtenir
 * la liste des films correspondant à la requête.
 * 
 * async/await est utilisé pour gérer les appels asynchrones
 * à l'API. Cela permet d'attendre la réponse de l'API avant
 * de continuer l'exécution du code.
 * 
 * 'e' est l'événement de soumission du formulaire,
 * on peut l'utiliser pour empêcher le comportement par défaut.
 * Le nom 'e' est une convention, c'est un raccourci pour 'event'.
 * 
 * try/catch est utilisé pour gérer les erreurs potentielles
 * lors de l'appel à l'API. Si une erreur se produit, elle est
 * capturée et affichée dans la console.
 * 
 * fetch() est utilisé pour effectuer une requête HTTP à l'API.
 * await est utilisé pour attendre la réponse de l'API.
 * 
 * setMovies() est utilisé pour mettre à jour l'état 'movies'
 * avec les données de l'API. Cela déclenchera un rendu de la
 * liste des films dans l'interface utilisateur.
 * 
 */

import React from "react"; // Import de React

// Les "States"

// Le "Fetch"

export default function Search() {
    return (
        <>
            <h1 className="text-3xl text-center">
                Type the name of any movie or serie
            </h1>
            <form action="">
                <input type="text" placeholder="Search" className="px-4 py-2 text-black rounded-l-full focus:outline-none " />
                <button type="submit" className="px-4 py-2 text-white bg-orange-500 rounded-r-full hover:bg-orange-700">
                    Search
                </button>
            </form>
        </>
    )
}