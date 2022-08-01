import axios from 'axios';
import React, { Component } from 'react';

class PokemonType extends Component{

    constructor(props) {
        super(props);
    }
    /* Life cycle method */
    componentDidMount() {
        
    }
    renderSwitch(param) {
        switch(param) {
            case 'normal':
                return <span className='badge bg-normal w-100 text-capitalize' key={this.props.data.type.slot}>{param}</span>
            case 'fighting':
                return <span className='badge bg-fighting w-100 text-capitalize' key={this.props.data.type.slot}>{param}</span>
            case 'flying':
                return <span className='badge bg-flying w-100 text-capitalize' key={this.props.data.type.slot}>{param}</span>
            case 'poison':
                return <span className='badge bg-poison w-100 text-capitalize' key={this.props.data.type.slot}>{param}</span>
            case 'ground':
                return <span className='badge bg-ground w-100 text-capitalize' key={this.props.data.type.slot}>{param}</span>
            case 'rock':
                return <span className='badge bg-rock w-100 text-capitalize' key={this.props.data.type.slot}>{param}</span>
            case 'bug':
                return <span className='badge bg-bug w-100 text-capitalize' key={this.props.data.type.slot}>{param}</span>
            case 'ghost':
                return <span className='badge bg-ghost w-100 text-capitalize' key={this.props.data.type.slot}>{param}</span>
            case 'steel':
                return <span className='badge bg-steel w-100 text-capitalize' key={this.props.data.type.slot}>{param}</span>
            case 'fire':
                return <span className='badge bg-fire w-100 text-capitalize' key={this.props.data.type.slot}>{param}</span>
            case 'water':
                return <span className='badge bg-water w-100 text-capitalize' key={this.props.data.type.slot}>{param}</span>
            case 'grass':
                return <span className='badge bg-grass w-100 text-capitalize' key={this.props.data.type.slot}>{param}</span>
            case 'electric':
                return <span className='badge bg-electric w-100 text-capitalize' key={this.props.data.type.slot}>{param}</span>
            case 'psychic':
                return <span className='badge bg-psychic w-100 text-capitalize' key={this.props.data.type.slot}>{param}</span>
            case 'ice':
                return <span className='badge bg-ice w-100 text-capitalize' key={this.props.data.type.slot}>{param}</span>
            case 'dragon':
                return <span className='badge bg-dragon w-100 text-capitalize' key={this.props.data.type.slot}>{param}</span>
            case 'dark':
                return <span className='badge bg-dark w-100 text-capitalize' key={this.props.data.type.slot}>{param}</span>
            case 'fairy':
                return <span className='badge bg-fairy w-100 text-capitalize' key={this.props.data.type.slot}>{param}</span>  
          default:
            return <span className="badge bg-secondary">{param}</span>;
        }
    }
    render(){
        return(
            <div className='col-3 ps-1 pe-0'>{this.renderSwitch(this.props.data.type.name)}</div>  
        );
    }
}
export default PokemonType;