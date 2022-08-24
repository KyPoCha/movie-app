import React, { useState, useEffect } from "react";

export default function Search(props){
    /*
    state = {
        search: "",
        searchNameMount: "",
        type: "all",
    }
     */
    const {
        searchMovies = Function.prototype,
    } = props;

    const [search, setSearch] = useState("");
    const [searchNameMount, setSearchMount] = useState();
    const [type, setType] = useState("all");

    const handleKey = (event)=>{
        if(event.key === "Enter"){
            searchMovies(search,type);
        }
    }

    useEffect(()=>{
        setSearch("Iron Man");
    }, []);

    const handleFilter = (event)=>{
        setType(event.target.dataset.type);
        searchMovies(search, event.target.dataset.type);
    }

    return(
        <div className="row">
            <input
                className="validate grey-text text-lighten-5"
                id="search_inline"
                type="search"
                placeholder="Search"
                value={searchNameMount}
                onChange={(event)=> {
                        setSearch(event.target.value);
                        setSearchMount(event.target.value);
                    }
                }
                onKeyDown={handleKey}
            />
            <button className="waves-effect waves-light btn pink darken-4 grey-text text-lighten-5 btn-search"
                    onClick={()=>{
                        searchMovies(search,type);
                    }}
            >Search</button>
            <div>
                <label>
                    <input className="with-gap" name="type" type="radio" data-type="all" onChange={handleFilter} checked={type === "all"}/>
                    <span>All</span>
                </label>
                <label>
                    <input className="with-gap" name="type" type="radio" data-type="movie" onChange={handleFilter} checked={type === "movie"}/>
                    <span>Movies only</span>
                </label>
                <label>
                    <input className="with-gap" name="type" type="radio" data-type="series" onChange={handleFilter} checked={type === "series"}/>
                    <span>Series only</span>
                </label>
            </div>
        </div>
    );
}