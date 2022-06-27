import { useLocation } from "react-router-dom";
import { useContext, useEffect , useState} from "react";
import { Context, SearchContext } from "../../Context";
import {HeaderContainer, NavLinkStyled, SearchStyledInput } from './HeaderContainer.styled'
import Button from "../Button";

const NavBar = () => {

  const location = useLocation()

  //console.log(location.pathname, ' type: ', typeof location.pathname)
   
  const {items, setItems} = useContext(Context);
  //const [search, setSearch] = useState('')
  
    // const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //   setFormData((prevState) => ({
    //     ...prevState,
    //     [e.target.id]: e.target.value,
    //   }));
    // };
    let search:any

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      //setSearch(e.target.value)
      search = e.target.value;
      if (search) console.log('header search: ', search)
      setItems(search)
    }
    
    // const pressEnter = (e:React.KeyboardEvent<HTMLInputElement>) => {
    //    if (e.key === 'Enter') {
    //      setItems(search);
    //      search = ''
    //      console.log('search' , search)
    //     }
      //console.log('enter pressed:', items)
    //}  
    // const onSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    //   e.preventDefault()
    //   console.log('search: ', search);
    //   setSearch('');
    // };
  return (

<HeaderContainer>

  {
    (location.pathname === '/') ? 
    <li>
    <NavLinkStyled to="/">   
        Home   
    </NavLinkStyled>
  </li> : <li>
    <NavLinkStyled to="/">   
        Back   
    </NavLinkStyled>
  </li>
  }
  
  <li>
    <NavLinkStyled to="/contact">
        <Button label={'Add player'} disabled={false} icon={'plus'}/>
    </NavLinkStyled>
  </li>

  <li>        
    <SearchStyledInput placeholder={'Search player...'} type={"text"} name={"search"} value={search} onChange={onChange} />
  </li>
</HeaderContainer>
  );
}

export default NavBar
