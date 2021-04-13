import React from 'react';

const Header = ({pseudo}) => {
    // regle regex : nom de la constante => verification des caractères, "i" pour test mjuscule et minuscule
    const formatPseudo = pseudo => /[aeiouy]/i.test(pseudo[0]) ? `d'${pseudo}` : `de ${pseudo}` 
    return (
        <header>
         <h1>La boite à recettes {formatPseudo(pseudo)}</h1>
        </header>
    );
};

export default Header;