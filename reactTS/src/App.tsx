import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "./components/Header/Header";
import HomePage  from "./pages/HomePage/HomePage";
import Profile from "./pages/Profile";
import AddPlayer  from "./pages/AddPlayer/AddPlayer";
import {useState, useEffect} from 'react';
import { User } from "./model";
import Button from "./components/Button";
import { useQuery } from '@apollo/client'

import { Context, SearchContext, PlayerContext,PlayersContext } from "./Context";


// export const Context = React.createContext({
//   items: {},
//   setItems: (items: any) => {}
// })

// export const Context = React.createContext({
//   items: '',
//   setItems: (items:string) => {}
// })

const App = () => {

  // interface PlayerData {
  //   nickname: string,
  //   __typename: string,
  //   id: number,
  //   name: string,
  //   countryFlag: {
  //       url:string
  //   },
  //   photo:{
  //       url:string
  //   },
  //   position:string
  // }

  //   const [search, setSearch] = useState('')
    
    
  //   const {data, loading, error} = useQuery(GET_HOMEDATA)
  //   let players:PlayerData[] = data?.playersCollection.items


    //const [context, setContext] = useState([] as PlayerData[]);
    //-----const [context, setContext] = useState('bla');

    // useEffect(()=> {
    //   setContext(data)
    // }, [data])
    
    //players = players?.map((player: PlayerData, i: number) => ({...player, id:i}))
    //console.log(players)
//--------------------------------------
    // const initialContext = {
    //   items: context,
    //   setItems: setContext
    // } 
  
    return (
      <>
        <BrowserRouter>
          <SearchContext>

            <NavBar />
            <PlayerContext>
              <Routes>              
                  <Route path="/" element={<HomePage />}></Route>
                  <Route path="/player/:id" element={<Profile/>}></Route>
                  <Route path="/contact" element={<AddPlayer />}></Route>              
              </Routes>
            </PlayerContext>
          </SearchContext>  
        </BrowserRouter>
      </>
    );
  
}
export default App;