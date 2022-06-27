import React from "react"
import { useQuery } from '@apollo/client'
import GET_HOMEDATA from './queries/DataHome.gql'
import { useState } from "react"
import { extname } from "path"


// export const Context = React.createContext({
//     items: '',
//     setItems: (items: any) => {},
//     data: {},
//     player: [],
//     setPlayer: React.Dispatch<React.SetStateAction<never[]>>
// })

// export const PlayersContext = ({children}) => {
//     const {data} = useQuery(GET_HOMEDATA)
   
//    const [player, setPlayer] = useState([])
   
//    return (
//         <Context.Provider value={{data, player, setPlayer}}>
//                 {children}
//         </Context.Provider>
//    )
// }



// export const CurrentPage = React.createContext({
//     currentPage: '',
//     setCurrentPage: (currentPage:string)

// })


export const Context = React.createContext({
    items: '',
    setItems: (items:string) => {}
  })

export const SearchContext = ({children}:{children:React.ReactNode}) => {
    const [context, setContext] = useState('');
    const initialContext = {
        items: context,
        setItems: setContext
      } 
    return(
        <Context.Provider value={initialContext}>
            {children}
        </Context.Provider>
    )
}

export  const PlayersContext = React.createContext({
    data:[],
    itemsPlayer: [],
    setItemsPlayer: (items:[]) => {}
})

export const PlayerContext = ({children}:{children:React.ReactNode}) => {
    // const {data} = useQuery(GET_HOMEDATA)
    const [player, setPlayer] = useState([])
    const {data, loading, error} = useQuery(GET_HOMEDATA)
    let players:any = data?.playersCollection.items
    

    const initialPlayerContext = {
        data:players,
        itemsPlayer: player,
        setItemsPlayer: setPlayer
    }

    return(
        <PlayersContext.Provider value={initialPlayerContext}>
            {children}
        </PlayersContext.Provider>
    )
}