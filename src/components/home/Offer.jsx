import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import Title from '../layout/Title'
import Image from 'gatsby-image'
import { homeOffer } from '../../constants/home-offer'

const query = graphql`
  {
    weoffer: allFile(filter: {relativeDirectory: {eq: "home-offer"}}, sort: {fields: name, order: ASC}) {
      nodes {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
const Offer = () => {
  const { weoffer } = useStaticQuery(query);

  return (
    <OfferWrapper className='page-center section-margin'>
      <Title title='We Offer' />
      <div className='each-offer mt-5'>
        {weoffer.nodes.map((node, imgIndex) => (
          <div className='img-container' key={imgIndex}>
            <Image fluid={node.childImageSharp.fluid} />
            <h4>{homeOffer[imgIndex].title}</h4>
            <p>{homeOffer[imgIndex].desc}</p>
          </div>
        ))}
      </div>
    </OfferWrapper>
  )
}

const OfferWrapper = styled.section`
  .each-offer {
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(150px, 1fr));
    grid-gap: 3rem;
    justify-content: center;
    text-align: center;
  }
  .img-container {
    img {
      border-radius: 50%;
    }
    h4{
      margin: 1.5rem 0;
    }
    p {
      color: var(--secondary-clr-1);
      line-height: 1.5;
    }
  }
`

export default Offer
