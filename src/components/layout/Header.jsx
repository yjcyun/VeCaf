import React from 'react'
import styled from 'styled-components'
import { CgMenuRightAlt } from 'react-icons/cg'
import NavLinks from '../../constants/NavLinks'

const Header = ({ isOpen, setIsOpen }) => {
  return (
    <HeaderOverlay>
      <HeaderWrapper className='page-center'>
        <NavHeader>
          <div className='logo'>VeCaf</div>
          <button onClick={() => setIsOpen(!isOpen)}>
            <CgMenuRightAlt className='icon' />
          </button>
        </NavHeader>
        <NavLinks styleClass='header-nav' />
      </HeaderWrapper>
    </HeaderOverlay>

  )
}

const HeaderOverlay = styled.section`
  border-bottom: 1px solid white;
  background: linear-gradient(rgba(255,255,255,0.1),rgba(255,255,255,0.5));
`

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 5rem;
  font-weight: 700;
  .header-nav {
    display: none;
  }
  .logo {
    font-family: var(--secondary-ff);
    font-size: 1.7rem;
  }
  @media(min-width:768px){
    .header-nav{
      display: flex;
    }
  }
`

const NavHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  button {
    border: none;
    background: none;
    .icon {
      font-size: 1.5rem;
    }
  }
  @media(min-width: 768px) {
    button {
      display: none;
    }
  }
`

export default Header