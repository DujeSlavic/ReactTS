import Image from "../Image/Image"
import PlayerCardInfo from "./PlayerCardInfo"
//import {ImageStyled} from '../Image/Image.Styled'
import styled from 'styled-components'

interface Props {
    playerName: string,
    playerPhoto: any,
    playerPosition: string,
    playerId:number,
    children?: React.ReactNode,
    className?: any,
    countryFlag?:any
}
const PlayerCard = ({countryFlag, className, playerName, playerPhoto, playerPosition, playerId}:Props) => (
    <div className={className}>
        <ImageStyled url={playerPhoto}/>
        <PlayerCardInfo countryFlag={countryFlag} playerName={playerName} playerPosition={playerPosition} playerId={playerId}/>
    </div>
)

export default PlayerCard

export const PlayerCardStyled = styled(PlayerCard)`
    width: 400px;
    height: 300px;
    margin: auto;
    font-family: arial;
    overflow: hidden;
    background-color: #798a91;
    border-radius: 5px 5px 0px 0px;  
`
const ImageStyled = styled(Image)`
    height: 200px;
    width: 400px;
    object-fit: cover;
`