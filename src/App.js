import React, { Component } from "react";
// CSS
import "./App.css";

import Header from "./components/Header";
import Admin from "./components/Admin";
import Card from "./components/Card";
import recettes from "./recettes";

//firebase
import base from "./base";

class App extends Component {
  state = {
    pseudo: this.props.match.params.pseudo,
    recettes: {},
  };

  // permet de connecter et de synchroniser la base de données avec notre application
  componentDidMount() {
    this.ref = base.syncState(`/${this.state.pseudo}/recettes`, {
      context: this,
      state: "recettes",
    });
  }

  // Permet de ne pas écraser les informations qui
  // ne nous appartiennent pas lors de la sortie
  // et de la sauvegarde de sa page
  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  ajouterRecette = (recette) => {
    const recettes = { ...this.state.recettes };
    recettes[`recette-${Date.now()}`] = recette;
    this.setState({ recettes });
  };

  majRecette = (key, newRecette) => {
    const recettes = { ...this.state.recettes };
    recettes[key] = newRecette;
    this.setState({ recettes });
  };

  supprimerRecette = key => {
    const recettes = { ...this.state.recettes };
    recettes[key] = null;
    this.setState({ recettes });
  };

  chargerExemple = () => this.setState({ recettes });

  render() {
    const cards = Object.keys(this.state.recettes).map((key) => (
      <Card key={key} details={this.state.recettes[key]} />
    ));
    // console.log(cards);
    return (
      <div className="box">
        <Header pseudo={this.state.pseudo} />
        <div className="cards">{cards}</div>
        <Admin
          recettes={this.state.recettes}
          ajouterRecette={this.ajouterRecette}
          majRecette={this.majRecette}
          supprimerRecette={this.supprimerRecette}
          chargerExemple={this.chargerExemple}
        />
      </div>
    );
  }
}

export default App;
