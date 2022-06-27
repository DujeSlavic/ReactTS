import { useState, useContext } from 'react'
import {Context,PlayersContext} from '../../Context'
import {PlayerCardStyled} from '../../components/PlayerCard/PlayerCard'
import { HomepageGrid, NavLinkStyled, ButtonStyled, ButtonAndLine } from './HomePage.styled';

interface PlayerData {
    nickname: string,
    __typename: string,
    id: number,
    name: string,
    countryFlag: {
        url:string
    },
    photo:{
        url:string
    },
    position:string
  }


const HomePage = () => {
    const {items, setItems} = useContext(Context);
    const {data,itemsPlayer,setItemsPlayer} = useContext(PlayersContext)
    const players = data;
    
    const [numberOfDisplayedPlayers, setNumberOfDisplayedPlayers] = useState(10);
    const [sorted, setSorted] = useState(false)
    
    let displayedPlayers:any = (!sorted) ? players?.slice(0,numberOfDisplayedPlayers) : 
        players?.slice(0,numberOfDisplayedPlayers).sort((a:any,b:any) => {
            if(a.nickname < b.nickname) return -1
            if(a.nickname > b.nickname) return 1
            return 0
        });

    if(items) displayedPlayers = displayedPlayers?.filter((player:any) => player.name.toLowerCase().includes(items.toLowerCase()))
    
    const showMore = () => setNumberOfDisplayedPlayers(numberOfDisplayedPlayers + 6)

    const sortPlayers = () => setSorted(!sorted)

  return (
    <>
        <HomepageGrid>
        {
            displayedPlayers?.map((player:PlayerData) =>(
                <NavLinkStyled to={`/player/${player.id}`}>
                    <PlayerCardStyled 
                        playerName={player.name} 
                        playerPhoto={player.photo.url} 
                        playerPosition={player.position}
                        playerId={player.id}
                        countryFlag={player.countryFlag.url}
                    />
                </NavLinkStyled>
            ))
        }
        </HomepageGrid>
        {/* <ButtonAndLine>
            <hr/>
            <ButtonStyled onClick={showMore} disabled={false}>Load more</ButtonStyled>
            <hr />
        </ButtonAndLine> */}

        <ButtonAndLine>
            <ButtonStyled label={'Load more'} onClick={showMore} disabled={false}></ButtonStyled>
            <ButtonStyled label={'sort!'} onClick={sortPlayers} disabled={false}></ButtonStyled>
        </ButtonAndLine>
    </>
  )
}

export default HomePage