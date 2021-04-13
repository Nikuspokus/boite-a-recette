import React from 'react';

const Card = ({ details }) => {

    const ingredients = details.ingredients.split(',').map(item=><li key={item} >{item}</li>)

    const instructions = details.instructions.split('\n').map(item=><li key={item} >{item}</li>)

  return (
    <div className="card">
    <div className="image">
    <img src={require(`../img/${details.image}`)} alt={details.nom}/>
    </div>
    <div className="recette">
        <h2>{details.nom}</h2>
        <ul className="liste-ingredients">
            {ingredients}
        </ul>
        <ol className="liste-instructions">
            {instructions}
        </ol>
    </div>
    </div>
  );
};

export default Card;
