/**
 * Le composant Card est utilisé pour afficher 
 * les movies dans l'interface utilisateur.
 * 
 * Afin d'afficher les informations des movies,
 * on utilise les 'props' pour passer les données
 * d'un composant à l'autre.
 * 
 * la syntaxe est celle-ci : {props}
 */
import React from 'react';

const fav = false;

const Card = ({movies}) => {
    return (
        <>
            <div className="flex flex-wrap justify-center">
                {movies.filter(movie => movie.imdbID).map(movie => (
                    <div
                        className="flex flex-col items-center justify-center object-cover w-1/5 m-5 mb-5 transition ease-in-out bg-center bg-no-repeat bg-cover duration-250 rounded-xl h-96 hover:scale-95 hover:shadow-xl"
                        key={movie.imdbID}
                        style={{
                            backgroundImage: `url(${movie.Poster})`,
                        }}
                    >
                        <div className="relative flex items-center justify-center w-full h-full p-2 transition ease-in-out shadow-md duration-320 bg-slate-800 bg-opacity-60 hover:bg-opacity-30">
                            <p className="text-2xl font-semibold">
                                {movie.Title}
                            </p>
                            <form
                                action=""
                                className="absolute flex items-center justify-center top-5 right-5"
                            >
                                <input
                                    type="hidden"
                                    name="i"
                                    value={movie.imdbID}
                                />
                                <button
                                    type="submit"
                                    className="p-3 opacity-0 hover:opacity-100"
                                >
                                    <svg
                                        className={
                                            fav
                                                ? 'text-orange-500'
                                                : 'text-white'
                                        }
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
                            </form>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Card;
