import React from 'react'
import styled from 'styled-components'
import NavLinks from '../../constants/NavLinks'
import logo from '../../images/coffee.png'
import { CgMenuRightAlt } from 'react-icons/cg'

const Header = ({ isOpen, setIsOpen }) => {

  return (
    <HeaderWrapper className='page-center'>
      <NavHeader>
        <div className='logo'>
          <img src={logo} alt='Coffe mug' />
        </div>
        <button onClick={()=>setIsOpen(!isOpen)}>
          <CgMenuRightAlt className='icon' />
        </button>
      </NavHeader>
      <NavLinks styleClass='header-nav' />
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.section`
  display: flex;
  align-items: center;
  height: 5rem;
  .header-nav {
    display: none;
  }
  .logo {
    width: 60px;
    margin-right: 1rem;
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