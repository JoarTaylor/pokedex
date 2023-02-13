import React, { useState, useEffect } from 'react'
import Pokedex from './Pokedex'
import {uid} from 'react-uid';


export default function Pokegame({pokelist}) {

    const [firstHand, setFirstHand] = useState([])
    const [secondHand, setSecondHand] = useState([])
    const [firstWinner, setFirstWinner] = useState(false)
    const [secondWinner, setSecondWinner] = useState(false)
    const [total1, setTotal1] = useState()
    const [total2, setTotal2] = useState()

    
    useEffect(() => {
        const firstTempArr = [];
        const secondTempArr = [];
        const firstTempHand = []
        const secondTempHand = []

        while(firstTempArr.length < 4) {
            let randNum = Math.floor(Math.random() * 8);
            if(firstTempArr.indexOf(randNum) === -1) {
                firstTempArr.push(randNum)
                firstTempHand.push(pokelist[randNum])
            }
        }

        while(secondTempArr.length < 4) {
            let randNum = Math.floor(Math.random() * 8);
            if(secondTempArr.indexOf(randNum) === -1) {
                secondTempArr.push(randNum)
                secondTempHand.push(pokelist[randNum])
            }
        }
        setFirstHand(firstTempHand)
        setSecondHand(secondTempHand)
    }, [])

    useEffect(() => {
        if(firstHand.length > 1) {
        const firstTotal = firstHand.reduce((acc, poke) => {
            return acc + poke.base_experience
        }, 0)

        const secondTotal = secondHand.reduce((acc, poke) => {
            return acc + poke.base_experience
        }, 0)

        if(firstTotal > secondTotal) {
            setFirstWinner(true);
            setSecondWinner(false);
        } else if (secondTotal > firstTotal) {
            setFirstWinner(false);
            setSecondWinner(true);
        }

        setTotal1(firstTotal)
        setTotal2(secondTotal)
    }
    })

  return (
    <>
    <Pokedex exp={total1} isWinner={firstWinner} pokelist={firstHand}></Pokedex>
    <Pokedex exp={total2} isWinner={secondWinner} pokelist={secondHand}></Pokedex>
    </>
  )
}
