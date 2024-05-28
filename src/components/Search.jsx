import React from "react";

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