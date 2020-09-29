import React, { useState } from 'react'
import { menu } from '../../constants/menu'
import Title from '../layout/Title'
import styled from 'styled-components'

// GET UNIQUE CATEGORY NAME
const getCategories = items => {
  let tempItems = items.map(item => item.category);
  let tempCategories = new Set(tempItems);
  let categories = Array.from(tempCategories);
  return categories = [...categories];
}

const Menu = () => {
  const [categories] = useState(getCategories(menu));

  const renderMenu = menuCategory => menu.map((item, index) => {
    if (item.category === menuCategory) {
      return (
        <li className='list' key={index}>
          <div className='name-div'>
            <p className='name'>{item.name}</p>
            <span className='color-orange'>${item.price}</span>
          </div>
          <span className='desc'>{item.desc && item.desc}</span>
        </li>
      )
    }
    return null;
  });

  return (
    <>
      <Title title='Menu' />
      <MenuWrapper className='page-center section-margin mt-5'>
        {categories.map(item => (
          <div className=''>
            <h3 className='color-orange'>{item}</h3>
            <ul>
              {renderMenu(item)}
            </ul>
          </div>
        ))}
      </MenuWrapper>
    </>
  )
}

const MenuWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-gap: 3rem;
  h3 {
    text-transform: capitalize;
  }
  .list {
    margin: 1.5rem 0;
    .name-div {
      padding-bottom: 0.4rem;
      display: flex;
      justify-content: space-between;
      background-image: linear-gradient(to right, var(--secondary-clr-1) 33%, rgba(255,255,255,0) 0%);
      background-position: bottom;
      background-size: 5px 1px;
      background-repeat: repeat-x;
    }
    .desc {
      color: var(--secondary-clr-1);
      font-size: 12px;
    }
  }
`

export default Menu
