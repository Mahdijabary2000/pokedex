import{POKEMONS} from'./pokemons.js';

const title=document.createElement('h1')
title.textContent='Pokedex!';
title.style.textAlign='center';
title.style.marginTop='100px';
title.style.marginBottom='3rem';

const pokemonMain=document.createElement('div')
pokemonMain.classList='pokemonMain conainer'

POKEMONS.forEach(element => {
    const pokemon=document.createElement('div')
    pokemon.classList='pokemon';

    const pokemonItem=document.createElement('img')
    pokemonItem.src=element.image;
    pokemonItem.classList='pokemonItem';

    const pokemonTitle=document.createElement('h4')
    pokemonTitle.textContent=element.name;
    pokemonTitle.classList='pokemonTitle';

    const pokemonType=document.createElement('p')
    pokemonType.textContent=element.type;
    pokemonType.classList='pokemonType';

    pokemon.appendChild(pokemonItem)
    pokemon.appendChild(pokemonTitle)
    pokemon.appendChild(pokemonType)
    pokemonMain.appendChild(pokemon)

    if( pokemonType.textContent==='grass'){
       pokemon.style.backgroundColor='#a7f38e' ;
    }else if(pokemonType.textContent==='fire'){
        pokemon.style.backgroundColor='pink'
    }else if(pokemonType.textContent==='water'){
        pokemon.style.backgroundColor='#8ee0f3'
    }
    else {
        pokemon.style.backgroundColor='#f0aa5a'
    }
  
});

document.body.appendChild(title);

  document.body.appendChild(pokemonMain)
