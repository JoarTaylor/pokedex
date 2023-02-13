import React from 'react'
import Pokemon from './Pokemon'
import { PokeContainer, WinnerEl, HandInfo } from './styles.js/pokestyles'


export default function Pokedex({pokelist, isWinner, exp}) {

  return (
    <>
    <h2>Pokedex</h2>
    <PokeContainer>
    {pokelist.map(pokemon => {
        return <Pokemon pokemon={pokemon} key={pokemon.id}></Pokemon>
    })}
    </PokeContainer>
    <HandInfo>
    <h3>Total experience: {exp}</h3>
    <WinnerEl isWinner={isWinner}>THIS HAND WINS!</WinnerEl>
    </HandInfo>
    </>
  )
}
