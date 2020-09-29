import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import styled from 'styled-components'

const query = graphql`
  {
    coffee:file(relativePath: {eq: "bg-3.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Contact = () => {
  const { coffee } = useStaticQuery(query);

  return (
    <ContactWrapper className='page-center section-margin'>
      <div className='mb-1'>
        <h3>Business Hours</h3>
        <ul className='mt-1'>
          <li>
            <span>Weekdays</span>{' '}
            <span>9 - 18</span>
          </li>
          <li>
            <span>Saturday</span>{' '}
            <span>10 - 17</span>
          </li>
          <li>
            <span>Sunday</span>{' '}
            <span>Closed</span>
          </li>
        </ul>
      </div>
      <div className='img-container'>
        <Image fluid={coffee.childImageSharp.fluid} />
      </div>
      <div>
        <h3 className='mt-1 mb-1'>Get in touch</h3>
        <p>+1 416 123 1234</p>
        <p>contact@vecaf.ca</p>
      </div>
    </ContactWrapper>
  )
}

const ContactWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  align-items: center;
  text-align: center;
  box-shadow: 0px 0px 12px 0px rgba(0,0,0,0.2);
  padding: 2rem 0;
  li {
    margin: 0.4rem 0;
  }
  @media(min-width: 768px) {
    padding: 0;
    grid-template-columns: repeat(3,1fr);
  }
`
export default Contact
