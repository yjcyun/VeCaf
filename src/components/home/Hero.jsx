import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import Header from '../layout/Header'
import styled from 'styled-components'

const query = graphql`
  {
    bg: file(relativePath: {eq: "bg-1.jpg"}) {
      childImageSharp {
        fluid(maxWidth:1800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const Hero = ({ isOpen, setIsOpen }) => {
  const { bg } = useStaticQuery(query);

  return (
    <BgImg>
      <BackgroundImage
        fluid={bg.childImageSharp.fluid}
        className='masthead'
      >
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        <HeroText>
          <div>Coffee<br />Matters</div>
        </HeroText>
      </BackgroundImage>
    </BgImg>
  )
}

const HeroText = styled.div`
  font-family: var(--hero-ff);
  font-size: 5rem;
  color: var(--primary-clr-2);
  background: rgba(255,255,255,0.4);
  height: calc(100% - 5rem);
  display: flex;
  justify-content: center;
  align-items: center;
  div{
    text-align: center;
    line-height: 1;
    transform: rotate(-10deg) translateX(-1rem);
  }
  @media(min-width: 768px){
    font-size: 8rem;
  }
`

const BgImg = styled.div`
  .masthead{
    width: 100%; 
    height: 85vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`

export default Hero