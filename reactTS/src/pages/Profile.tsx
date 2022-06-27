import React, { useState,useContext } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import GET_HOMEDATA from '../queries/DataHome.gql'
import {Context,PlayersContext} from '../Context'
import Title from '../components/Title'
import styled from 'styled-components'



const Div = styled.div`
    color: #8a8a8a;
    padding: 50px;
`
    


interface PlayerData {
  nickname?: string,
  id?: number,
  name?: string
}

const Profile = () => {

  const {data,itemsPlayer,setItemsPlayer} = useContext(PlayersContext)
    const players = data;
  
  const { id } = useParams()

  // const {data, loading, error} = useQuery(GET_HOMEDATA)
  // let players = data?.playersCollection.items

  // if (!players) return <></>

  // players = players?.map((player: PlayerData, i: number) => ({...player, id:i}))

  const player:any = players?.find((player: PlayerData)  => player.id === +id!)
  return (
      //(userInfo===1)? 
      // (<>
      //   <div>Profile</div><br />
      //   <div>{username}</div><br />
      //   <div>{userInfo}</div>
      // </>) : (<div>error</div>)
     
      player?.nickname === 'Dendi' ?(
      <Div>
        <Title value={'h3'} text={player.name}/>
        <Title value={'h1'} text={player.description.json.content[0].content[1].value}/>
      </Div>
      ):(
        <>
      <div>Error</div>
      {
        console.error('Error: Player page does not exist.')
      }
      </>
      )    
  )
}

export default Profile