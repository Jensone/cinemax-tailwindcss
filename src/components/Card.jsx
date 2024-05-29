import React from "react";

const filmsLocal = [
    {
        Title: 'Yellow Submarine',
        Year: '1968',
        imdbID: 'tt0063823',
        Type: 'movie',
        Poster: 'https://m.media-amazon.com/images/M/MV5BMGExODFmMjQtZTgxOC00ZDE0LWJmM2MtOTQzM2YzNDZlMzNmL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg',
    },
    {
        Title: 'The Yellow Sea',
        Year: '2010',
        imdbID: 'tt1230385',
        Type: 'movie',
        Poster: 'https://m.media-amazon.com/images/M/MV5BZTU3OTdmOWUtYWE5My00NmFhLTgyMTktNTU0ZTNhMDU1NzEzXkEyXkFqcGdeQXVyMjQwMjk0NjI@._V1_SX300.jpg',
    },
    {
        Title: 'She Wore a Yellow Ribbon',
        Year: '1949',
        imdbID: 'tt0041866',
        Type: 'movie',
        Poster: 'https://m.media-amazon.com/images/M/MV5BYTkyMTM3ZTMtMDc1Mi00ZjRmLTk3NWYtMzFlOGY3Mjg4Mzk2XkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_SX300.jpg',
    },
    {
        Title: 'The Yellow Handkerchief',
        Year: '2008',
        imdbID: 'tt0954990',
        Type: 'movie',
        Poster: 'https://m.media-amazon.com/images/M/MV5BNzg3NzU4NDUzOV5BMl5BanBnXkFtZTcwNDk1Njg5Mg@@._V1_SX300.jpg',
    },
    {
        Title: 'Yellow Sky',
        Year: '1948',
        imdbID: 'tt0040978',
        Type: 'movie',
        Poster: 'https://m.media-amazon.com/images/M/MV5BYjI1ZGQxMjYtYzQwOC00NmI0LTkwNGItOWY0NjllZDI1YTI5XkEyXkFqcGdeQXVyMjI4MjA5MzA@._V1_SX300.jpg',
    },
    {
        Title: 'The Yellow Birds',
        Year: '2017',
        imdbID: 'tt3739110',
        Type: 'movie',
        Poster: 'https://m.media-amazon.com/images/M/MV5BY2ExMmI4MTUtNTFmZS00ZjBkLWFjOWEtNjE3MGVkZDQ1ZDZhXkEyXkFqcGdeQXVyNjUzODM0ODI@._V1_SX300.jpg',
    },
    {
        Title: 'I Am Curious (Yellow)',
        Year: '1967',
        imdbID: 'tt0061834',
        Type: 'movie',
        Poster: 'https://m.media-amazon.com/images/M/MV5BYjY2ZjUwYWItOWRjMS00NjJkLWFjODctMTRjMDM5ZjhkN2U3XkEyXkFqcGdeQXVyNTcwNjUwNzk@._V1_SX300.jpg',
    },
    {
        Title: 'The Yellow Rolls-Royce',
        Year: '1964',
        imdbID: 'tt0059927',
        Type: 'movie',
        Poster: 'https://m.media-amazon.com/images/M/MV5BZDc2ZWFmMDEtZWE1Mi00MGQ4LTgzNjktM2Q0ZjJmYWNhODdhXkEyXkFqcGdeQXVyMjI4MjA5MzA@._V1_SX300.jpg',
    },
    {
        Title: 'That Girl in Yellow Boots',
        Year: '2010',
        imdbID: 'tt1580704',
        Type: 'movie',
        Poster: 'https://m.media-amazon.com/images/M/MV5BNzE1YzcyOWMtNjU5OC00ZDQ2LWFkNWItYzI2MjQ5OTllZDVlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg',
    },
    {
        Title: 'The Cave of the Yellow Dog',
        Year: '2005',
        imdbID: 'tt0432325',
        Type: 'movie',
        Poster: 'https://m.media-amazon.com/images/M/MV5BZjdlZmZiYmMtOGY5ZC00ZDkwLWFkNGYtMWY3OTQyOTYzNmY0XkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_SX300.jpg',
    },
]; // Fin de liste

const apiKey = '3a097856' // Clé API OMDB

const fav = false;

const Card = () => {
    return (
        <>
            <div className="flex flex-wrap justify-center">
                { filmsLocal.map((film) => (
                        <div 
                            className="flex flex-col items-center justify-center object-cover w-1/5 m-5 mb-5 transition ease-in-out bg-center bg-no-repeat bg-cover duration-250 rounded-xl h-96 hover:scale-95 hover:shadow-xl"
                            key={film.imdbID}
                            style={{
                                backgroundImage: `url(${film.Poster})`,
                            }}
                        >
                            <div className="relative flex items-center justify-center w-full h-full p-2 transition ease-in-out shadow-md duration-320 bg-slate-800 bg-opacity-60 hover:bg-opacity-30">
                                <p className="text-2xl font-semibold">{film.Title}</p>
                                <form action="" className="absolute flex items-center justify-center top-5 right-5">
                                    <input type="hidden" name="i" value={film.imdbID} />
                                    <button type="submit" className="p-3 opacity-0 hover:opacity-100">
                                        <svg 
                                            className={fav ? 'text-orange-500' : 'text-white'}
                                            xmlns="http://www.w3.org/2000/svg" 
                                            width="24" 
                                            height="24" 
                                            viewBox="0 0 24 24"><path 
                                            fill="currentColor" d="M12 20.325q-.35 0-.712-.125t-.638-.4l-1.725-1.575q-2.65-2.425-4.788-4.812T2 8.15Q2 5.8 3.575 4.225T7.5 2.65q1.325 0 2.5.562t2 1.538q.825-.975 2-1.537t2.5-.563q2.35 0 3.925 1.575T22 8.15q0 2.875-2.125 5.275T15.05 18.25l-1.7 1.55q-.275.275-.637.4t-.713.125"
                                        /></svg>
                                    </button>
                                </form>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Card;