import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const NavLinks = ({ styleClass }) => {
  return (
    <NavWrapper className={styleClass}>
      <li>
        <Link to='/'>
          Menu
        </Link>
      </li>
      <li>
        <Link to='/'>
          Gallery
        </Link>
      </li>
    </NavWrapper>
  )
}

const NavWrapper = styled.nav`
  @media(min-width: 768px) {
    display: flex;
    li {
    margin: 0 15px;
      a {
        color: black;
      }
    }
  }
`

export default NavLinks