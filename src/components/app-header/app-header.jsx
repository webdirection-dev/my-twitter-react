import React from "react";
import './app-header.css';
import styled from "styled-components";

const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h1 {
      color: ${props => props.colored ? 'darkblue' : 'black'};
      font-size: 26px;
      :hover {
        color: goldenrod;
      }
    } 
    h2 {
      font-size: 1.2rem;
      color: grey;
    }
`

const AppHeader = ({allPosts, likedPostCurrentCount}) => {
    return (
        <Header as='a' colored>
            <h1>Name Surname</h1>
            <h2>{allPosts} записей, из них понравилось {likedPostCurrentCount}</h2>
        </Header>
    )
}

export default AppHeader;