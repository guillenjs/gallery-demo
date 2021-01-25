import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const StyledNav = styled.div 
    `
    color: white;
    text-decoration: none;
    ul {
        color: white;
        display: flex;
        justify-content: space-evenly;
        text-decoration: none;
    }

    `


const NavBar = () => {
        return(
        <StyledNav>
            <ul>
                <li> 
                    <Link to='/page-2'>page 2</Link>
                </li>
                <li> 
                    <Link to='/artist'>artist</Link>
                </li>
                <li> 
                    <Link to='/page-2'>page 2</Link>
                </li>
            </ul>
        </StyledNav>
    )
}

export default NavBar