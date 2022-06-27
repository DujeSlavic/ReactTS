import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import Input from '../Input/Input'


export const HeaderContainer = styled.nav`
    overflow: hidden;
    background-color: #798a91;
    display: block;

    li {
        float:right;
        height: 100%;
        display: block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 17px;
    }

    li:first-child{
        float: left;
    }
    button{
      display: flex;
      align-items: center;
      background:none;
      border:none;
      margin:0;
      padding:0;
      color: white;
      font-size:17px;
    }
    span{
      padding: 0 0 0 25px;  
      height: 17px;
      width: 17px;
    }
    `

export const NavLinkStyled = styled(NavLink)`
color: white;
text-decoration: none;
`

export const SearchStyledInput = styled(Input)`
    ::placeholder {
        color: #dee4e7;
    }
        text-decoration: none;
        font-size: 17px;
        
`