import React from 'react'
import { PokeCard } from './styles.js/pokestyles'

export default function Pokemon({pokemon}) {
  return (
    <>
    <PokeCard>
    <h4>{pokemon.name}</h4>
    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt="" />
    <div>Type: {pokemon.type}</div>
    <div>EXP: {pokemon.base_experience}</div>
    </PokeCard>
    </>
  )
}
