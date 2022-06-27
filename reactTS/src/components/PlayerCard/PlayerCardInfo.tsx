import Title from '../Title'
import Image from '../Image/Image'
//import { StyledPlayerCardInfo } from './PlayerCardInfo.Styled'
//import {FlagStyle} from '../Image/Image.Styled'
import styled from 'styled-components'

interface Props {
    playerName:string, 
    playerPosition:string, 
    playerId:number,
    countryFlag:string
}

const PlayerCardInfo = ({countryFlag, playerName, playerPosition, playerId}:Props) => (
    <StyledPlayerCardInfo>
        <div>
             <FlagStyle url={countryFlag}/>
        </div>
        <div>
        {/* <Link to={`/player/${playerId}`}><h2>{playerName}</h2></Link> */}
                <Title value={'h2'} text={playerName}/>
                <Title value={'h3'} text={playerPosition}/>
        </div>
    
    </StyledPlayerCardInfo>
)

export default PlayerCardInfo;

const StyledPlayerCardInfo = styled.div`
      display: flex;
  height: 100px;
  width: 400px;
  background-color: #798a91;
  align-items: center;
  text-decoration: none;
  
div:first-child{
  display: block;
  width: 100px;
  text-align: center;   
}

 div h2 {
text-decoration: none;
color: #b0bcc0;
}
`
const FlagStyle = styled(Image)`
    /* border-radius:190px;
    width: 60px;
    height: 60px; */
    display: inline-block;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-position: center center;
  /* background-size: 250%; */   
`