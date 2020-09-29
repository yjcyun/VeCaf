import React from 'react'
import { homeStory } from '../../constants/home-story'
import chef from '../../images/chef.png'
import styled from 'styled-components'

const Welcome = () => {
  return (
    <WelcomeWrapper className='page-center'>
      <WelcomeContainer>
        <div className='welcome-sign'>
          <div className='img-container'>
            <img src={chef} alt='Chef Hat' />
          </div>
          <h1>Welcome</h1>
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
  margin-top: 2rem;
  .welcome-sign {
    margin: 0 0 2rem;
    .img-container {
      width: 5rem;
      margin: 0 auto 1.5rem;
    }
    h1 {
      font-family: var(--secondary-ff);
      font-weight: 400;
      font-size: 2rem;
      margin-bottom: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      :after, :before {
      content:'';
      width: 0;
      height: 1px;
      background: var(--secondary-clr-2);
      margin: 0 20px;
      }
    }
  }
  .welcome-section-wrapper{
    display: flex;
    flex-direction: column;
  }
  @media (min-width: 768px) {
    .welcome-sign{
      h1{
        font-size: 2.2rem;
        :after, :before {
          width: 10rem;
        }
      }
    }
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
    font-weight: 400;
    font-size: 1.4rem;
    margin-bottom: 1rem;
    color: var(--primary-clr-1);
  }
  @media (min-width: 768px) {
    h3{
      font-size: 1.7rem;
    }
  }
`

export default Welcome
