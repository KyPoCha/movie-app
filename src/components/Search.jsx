import React from "react";

export default class Search extends React.Component{

    state = {
        search: "",
        searchNameMount: "",
        type: "all",
    }

    handleKey = (event)=>{
        if(event.key === "Enter"){
            this.props.searchMovies(this.state.search);
        }
    }

    componentDidMount() {
        this.setState({search: "Iron Man"});
    }

    handleFilter = (event)=>{
        this.setState(()=>({type: event.target.dataset.type}),()=>{
            this.props.searchMovies(this.state.search, this.state.type);
        });
    }

    render() {
        return(
            <div className="row">
                        <input
                            className="validate grey-text text-lighten-5"
                            id="search_inline"
                            type="search"
                            placeholder="Search"
                            value={this.state.searchNameMount}
                            onChange={(event)=>this.setState({search: event.target.value, searchNameMount: event.target.value})}
                            onKeyDown={this.handleKey}
                        />
                <button className="waves-effect waves-light btn pink darken-4 grey-text text-lighten-5 btn-search"
                    onClick={()=>{
                        this.props.searchMovies(this.state.search,this.state.type);
                    }}
                >Search</button>
                <div>
                    <label>
                        <input className="with-gap" name="type" type="radio" data-type="all" onChange={this.handleFilter} checked={this.state.type === "all"}/>
                        <span>All</span>
                    </label>
                    <label>
                        <input className="with-gap" name="type" type="radio" data-type="movie" onChange={this.handleFilter} checked={this.state.type === "movie"}/>
                        <span>Movies only</span>
                    </label>
                    <label>
                        <input className="with-gap" name="type" type="radio" data-type="series" onChange={this.handleFilter} checked={this.state.type === "series"}/>
                        <span>Series only</span>
                    </label>
                </div>
            </div>
        );
    }
}