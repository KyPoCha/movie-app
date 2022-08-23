import React from "react";
import Movies from "../components/Movies";
import Preloader from "../components/Preloader";
import Search from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component{
    state= {
        movies: [],
        loading: true,
    }

    componentDidMount() {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=iron man`)
            .then(res => res.json())
            .then(data => this.setState({movies: data.Search, loading: false}))
            .catch((err)=>{
                console.log(err.message());
                this.setState({loading: false});
            });
    }

    searchMovies = (text, type="all")=>{
        this.setState({loading: true});
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${text}${type !== "all" ? `&type=${type}` : ""}`)
            .then(res => res.json())
            .then(data => this.setState({movies: data.Search, loading: false}));
    }


    render() {
        const {movies, loading} = this.state;
        return (
            <main className="container content blue-grey darken-3">
                <Search searchMovies={this.searchMovies} />
                {
                    loading ? <Preloader/> : (
                        <Movies movies={movies}/>
                    )
                }
            </main>
        )
    }
}

export default Main;