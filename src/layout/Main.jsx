import React, { useState, useEffect } from "react";
import Movies from "../components/Movies";
import Preloader from "../components/Preloader";
import Search from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

export default function Main(){
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    const searchMovies = (text, type="all")=>{
        setLoading(true);
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${text}${type !== "all" ? `&type=${type}` : ""}`)
            .then(res => res.json())
            .then(data => {
                setLoading(false);
                setMovies(data.Search);
            });
    }
    /*
    componentDidMount() {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=iron man`)
            .then(res => res.json())
            .then(data => this.setState({movies: data.Search, loading: false}))
            .catch((err)=>{
                console.log(err.message());
                this.setState({loading: false});
            });
    }
     */

    useEffect(()=>{
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=iron man`)
            .then(res => res.json())
            .then(data => {
                setLoading(false);
                setMovies(data.Search);
            })
            .catch((err)=>{
                console.log(err.message());
                setLoading(false);
            });
    },[])

    return (
        <main className="container content blue-grey darken-3">
            <Search searchMovies={searchMovies} />
            {
                loading ? <Preloader/> : (
                    <Movies movies={movies}/>
                )
            }
        </main>
    );
}