import React from "react";
import Movie from "./Movie";

function Movies(props){
    const {movies = []} = props;

    return (
        <div className="movies">
            {movies.length ? movies.map(movie =>{
                return <Movie key={movie.imdbID} {...movie}/>
            }) : (<h4 className="grey-text text-lighten-5">Nothing found</h4>)
            }
        </div>
    );
}
export default Movies;