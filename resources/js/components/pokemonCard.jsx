import axios from 'axios';
import React, { Component } from 'react';
import PokemonType from './pokemonType';

class PokemonCard extends Component{

    constructor(props) {
        super(props);
        this.state = { 
            pokemon: [],
        };
    }

    /* Life cycle method */
    componentDidMount() {
        this.getPokemonDetails(this.props.data.url);
    }

    /* Get pokemon details */
    getPokemonDetails = (Purl) => {
        let self = this;
        axios.get('/get/pokemon/details', { params: { url: Purl } }).then(function(response){
            self.setState({
                pokemon: response.data
            });
        });
    }

    render(){
        return(
            <div className='col-3 mt-3 mb-3'>
                <div className="card" style={{width: 18 + 'rem'}}>
                {this.state.pokemon.sprites ? (
                    <img src={this.state.pokemon.sprites.other.dream_world.front_default} className="card-img-top" alt={this.state.pokemon.name}/>
                    ) : (<img src="https://raw.githubusercontent.com/SamHerbert/SVG-Loaders/master/svg-loaders/puff.svg" className="card-img-top" alt="preloader"/>)
                }
                    <div className="card-body">
                        <p className="card-text text-gray mb-0"># { this.state.pokemon.id }</p>
                        <h5 className="card-title text-capitalize">{ this.props.data.name }</h5>
                        <div className='row'>
                            {this.state.pokemon.types?.map(function(x,i){
                                return (
                                    <PokemonType key={i} data={x}/>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>           
        );
    }
}
export default PokemonCard;