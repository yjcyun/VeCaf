import React from 'react'
import styled from 'styled-components'

const Title = ({title,dark}) => {
  return (
    <TitleWrapper dark={dark}>{title}</TitleWrapper>
  )
}

const TitleWrapper = styled.h1`
  font-family: var(--secondary-ff);
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props=>props.dark?'#fff': '000'};
  :after, :before {
    content:'';
    width: 0;
    height: 1px;
    background: var(--secondary-clr-2);
    margin: 0 20px;
  }
  @media (min-width: 768px) {
    :after, :before {
      width: 10rem;
    }
  }
`

export default Title