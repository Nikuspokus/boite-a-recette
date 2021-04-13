import React, { Component } from 'react';
import AjouterRecette from './AjouterRecette'

class Admin extends Component {
    render() {
        return (
            <div className="cards">
            <AjouterRecette ajouterRecette={this.props.AjouterRecette}/>
            <footer>
                <button onClick={this.props.chargerExemple}>Remplir</button>
            </footer>
            </div>
        );
    }
}

export default Admin;