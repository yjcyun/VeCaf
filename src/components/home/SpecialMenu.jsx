import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import croissant from '../../images/croissant.png'
import coffee from '../../images/coffee.png'

const query = graphql`
  {
    brunch: file(relativePath: {eq: "bg-2.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    happy: file(relativePath: {eq: "bg-3.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const SpecialMenu = () => {
  const { brunch } = useStaticQuery(query);
  const { happy } = useStaticQuery(query);

  return (
    <SpecialWrapper className='card-center section-margin'>
      <div className='left'>
        <BackgroundImage
          fluid={brunch.childImageSharp.fluid}
          className='bg-container'
        >
          <div className='empty-container'></div>
          <div className='menu'>
            <div className='top'>
              <div className='img-container'>
                <img src={croissant} alt='Croissant' />
              </div>
              <h2>Brunch</h2>
              <span className='subtitle color-orange'>~ Today's Specials ~</span>
            </div>
            <div className='menu-main'>
              <li>
                <div className='menu-name'>
                  <p>unChicken + Waffles</p>
                  <p className='color-orange'>$15</p>
                </div>
                <p className='menu-desc'>Breaded, fried unChicken on a Belgian waffle with whipped cinnamon butter, spicy syrup, and a side of sauteed bacon+garlic collard greens</p>
              </li>
              <li>
                <div className='menu-name'>
                  <p>Phish 'n Chips</p>
                  <p className='color-orange'>$15</p>
                </div>
                <p className='menu-desc'>Beer-battered tempeh phish, served with fresh-cut fries and house-made tartar.</p>
              </li>
              <li>
                <div className='menu-name'>
                  <p>Seitan Chicken-Fried Steak</p>
                  <p className='color-orange'>$15</p>
                </div>
                <p className='menu-desc'>Seitan steak, breaded and deep-fried, with a side of sauteed bacon+garlic collard greens and mashed potatoes+rosemary gravy.</p>
              </li>
            </div>
          </div>
        </BackgroundImage>
      </div>

      <div className='right'>
        <BackgroundImage
          fluid={happy.childImageSharp.fluid}
          className='bg-container'
        >
          <div className='empty-container'></div>
          <div className='menu'>
            <div className='top'>
              <div className='img-container'>
                <img src={coffee} alt='Happy hour' />
              </div>
              <h2>Happy hour</h2>
              <span className='subtitle color-orange'>~ Starts at 3pm ~</span>
            </div>
            <div className='menu-main right'>
              <p>The restaurant will open at 3pm for happy hour and dinner service starting at 5pm. We will continue to offer brunch on weekends from 10am-3pm with bottomless mimosas. We will also continue with our late night lounge on Friday and Saturdays until 2am.</p>
              <div className='contact'>+1 416 123 1234</div>
            </div>
          </div>
        </BackgroundImage>
      </div>
    </SpecialWrapper >
  )
}

const SpecialWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: auto;
  box-shadow: 0px 0px 12px 0px rgba(0,0,0,0.2);
  @media(max-width: 768px){
    grid-template-columns: 1fr;
  }
  h2 {
    font-family: var(--secondary-ff);
    margin-bottom: 1rem;
  }
  .subtitle {
    letter-spacing: 2px;
  }
  .img-container{
    width: 4rem;
    margin: 1rem auto;
  }
  .left {
    display: flex;
    .bg-container {
        display: flex;
        justify-content: space-between;
        background-position: center;
        background-size: contain;
      }
    .menu {
      border-right: 1px solid rgba(0,0,0,0.1);
    }
  }
  .right {
    .bg-container {
      height: 100%;
    }
  }
  .menu {
    background: #fff;
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 2rem 0;
    .top {
      text-align: center;
      margin: 0 auto;
    }
    .menu-main.right {
      text-align:center;
      p{
        line-height: 1.5;
      }
      .contact {
        margin: 1rem 0;
        font-size: 1.3rem;
        font-family: var(--secondary-ff);
      }
    }
    .menu-main{
      padding: 2rem;
      li {
        margin-bottom: 1rem;
      }
      .menu-name {
        display: flex;
        justify-content: space-between;
        padding-bottom: 5px;
        background-image: linear-gradient(to right, var(--secondary-clr-1) 33%, rgba(255,255,255,0) 0%);
        background-position: bottom;
        background-size: 5px 1px;
        background-repeat: repeat-x;
      }
      .menu-desc {
        padding-top: 5px;
        font-size: 0.8rem;
        color: var(--secondary-clr-1);
      }
    }
  }

`

export default SpecialMenu
