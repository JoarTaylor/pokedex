import styled from 'styled-components'

const GameContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-family: Arial, Helvetica, sans-serif;
    
    h2{

        color: #A9A9A9
    }
`

const PokeCard = styled.div`
    background-color: #D3D3D3;
    width: 100px;
    padding: 1rem;
    border-radius: 10px;
    font-weight: bold;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

h4 {
    color: blue;
}

img {
    height: auto;
    width: 75px;
}
`

const PokeContainer = styled.div`
    width: 80vw;
    display: flex;
    justify-content: space-around;
`

const HandInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const WinnerEl = styled.p`
    display: ${({isWinner}) => isWinner? 'block' : 'none'};
    color: red;
    font-weight: bold;
`
export { PokeCard, PokeContainer, WinnerEl, HandInfo, GameContainer }