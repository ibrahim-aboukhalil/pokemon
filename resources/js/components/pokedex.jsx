import axios from 'axios';
import React, { Component } from 'react';
import PokemonCard from './pokemonCard';

class Pokedex extends Component{

    constructor(props) {
        super(props);
        this.state = { 
            pokedex: [],
        };
        this.offset=0;
        this.limit=12;
    }
    /* Life cycle method */
    componentDidMount() {
        this.getPokemonList(this.offset,this.limit);
    }
    /* Get pokemon list */
    getPokemonList = (offset,limit) => {
        let self = this;
        axios.get('/get/pokemon/list', { params: { offset:offset,limit:limit } }).then(function(response){
            self.setState({
                pokedex: response.data
            });
        });
    }
    handleMoreClick = () =>{
        this.limit = this.limit+this.limit;
        this.getPokemonList(this.offset,this.limit);
    }
    render(){
        return(
            <div className='container'>
                <div className='row'>
                    {this.state.pokedex.results?.map(function(x,i){
                        return (
                            <PokemonCard key={i} data={x}/>
                        );
                    })}
                </div>
                <div className='row text-center'>
                    <div className='col-12'>
                        <button type="button" className="btn btn-primary btn-block w-25 fw-bold mb-3" key="more-button" id="more-button" onClick={this.handleMoreClick}>Load More</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default Pokedex;