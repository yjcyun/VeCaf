import React from 'react'
import { homeStory } from '../../constants/home-story'
import chef from '../../images/chef.png'
import styled from 'styled-components'
import Title from '../layout/Title'

const Welcome = () => {
  return (
    <WelcomeWrapper className='page-center'>
      <WelcomeContainer className='mt-1'>
        <div className='welcome-sign'>
          <div className='img-container'>
            <img src={chef} alt='Chef Hat' />
          </div>
          <Title title='Welcome'/>
        </div>
        <div className='welcome-section-wrapper'>
          {homeStory.map(story => (
            <WelcomeSection key={story.year}>
              <h3>{story.year}</h3>
              <p>{story.desc}</p>
            </WelcomeSection>
          ))}
        </div>
      </WelcomeContainer>
    </WelcomeWrapper>
  )
}

const WelcomeWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .welcome-sign {
    margin: 0 0 2rem;
    .img-container {
      width: 5rem;
      margin: 0 auto 1.5rem;
    }
  }
  .welcome-section-wrapper{
    display: flex;
    flex-direction: column;
  }
  @media (min-width: 768px) {
    .welcome-section-wrapper{
      flex-direction: row;
    }
  }
`

const WelcomeSection = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  h3 {
    font-family: var(--secondary-ff);
    margin-bottom: 1rem;
    color: var(--primary-clr-1);
  }
`

export default Welcome
