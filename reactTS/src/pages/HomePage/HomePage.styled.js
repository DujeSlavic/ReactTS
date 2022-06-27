import styled from 'styled-components'
import Button from '../../components/Button'
import { NavLink } from 'react-router-dom'

export const HomepageGrid = styled.div`
    display: flex;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding: 50px 20px;
    grid-gap: 50px;
`
export const NavLinkStyled = styled(NavLink)`
    color: white;
    text-decoration: none;
`
export const ButtonStyled = styled(Button)`
    background-color: #7c8c93; 
    border: none;
    color: #e7eaeb;
    padding: 15px 30px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px; 
    border-radius: 4px;
    position:absolute;
    top:-25px;    
`
export const ButtonAndLine = styled.div`
    background-color:#eeeeee;
    border:none;
    position:relative;
    width:100%;
    height:150px;
    top:50px;
    display: flex;
    justify-content: center;
    button:last-child{
        top:50px;
  }
`