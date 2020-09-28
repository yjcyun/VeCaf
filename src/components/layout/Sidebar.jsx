import React from 'react'
import styled from 'styled-components'
import NavLinks from '../../constants/NavLinks'

const Sidebar = ({ isOpen }) => {
  return (isOpen &&
    <SidebarWrapper>
      <NavLinks styleClass='side-nav' />
    </SidebarWrapper>
  )
}

const SidebarWrapper = styled.aside`
  background-color: var(--primary-clr-1);
  width: 100%;
  position: absolute;
  top: 5rem;
  height: auto;
  padding: 2rem 0;
  .side-nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    li {
      margin: 1rem 0;
    }
    a{
      color: white;
    }
  }
  @media(min-width:768px) {
    display: none;
  }
`

export default Sidebar