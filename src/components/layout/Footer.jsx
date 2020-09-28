import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <h2>VeCaf</h2>
        <FooterBody className='page-center'>
          <div className='body-div'>
            <h3>About</h3>
            <p>VeCaf is a vegan cafe owned and run by chef Jane Doe in Toronto, Canada</p>
          </div>
          <div className='body-div'>
            <h3>Get news & offers</h3>
            <form
              name='vecaf-subscription'
              method='post'
              netlify-honeypot='bot-field'
              data-netlify='true'
              action='/success'
            >
              <input type='hidden' name='bot-field' />
              <input type='hidden' name='form-name' value='vecaf-subscription' />
              <input
                type='email'
                name='email'
                placeholder='Your email'
              />
              <input type='submit' className='btn' value='Subscribe' />
            </form>
            <small>* We never send you spam!</small>

          </div>
          <div className='body-div'>
            <h3>Contact</h3>
            <p>1234 Bloor St <br />
          Toronto, ON Canada<br />
          +1 416 123 1234
          </p>
          <p className='email'>contact@vecaf.ca</p>
          </div>
        </FooterBody>
      </FooterWrapper>
      <AboutSite className='page-center'>
        <div>Made with Gatsby.js</div>
        <div>&copy; {new Date().getFullYear()} Developed by <a href='https://christinayun.ca'>Christina Yun</a></div>
      </AboutSite>
    </>
  )
}

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-clr-2);
  color: #fff;
  padding: 4rem 1rem 1rem;
  h2 {
    font-weight: 400;
    font-family: var(--secondary-ff);
    font-size: 2.5rem;
    color: var(--primary-clr-3);
    margin-bottom: 2rem;
  }
  @media(min-width: 992px) {
    padding: 4rem 2rem;
  }
`

const FooterBody = styled.div`
  display: grid;
  
  justify-content: center;
  text-align: center;
  h3{
    font-family: var(--secondary-ff);
    font-size: 1.5rem;
    font-weight: 400;
    margin-bottom: 1rem;
  }
  .body-div {
    margin: 2rem 0;
  }
  form {
    margin-bottom: 1rem;
  }
  input {
    border-top-left-radius: 2rem;
    border-bottom-left-radius: 2rem;
    padding: 1rem;
    border: 1px solid rgba(255, 255, 255, 0.3);
    background: none;
    outline: none;
    color: #fff;
    font-family: var(--primary-ff);
    width: 66%;
    font-size: 0.8rem;
  }
  input.btn {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: 2rem;
    border-bottom-right-radius: 2rem;
    border: 1px solid var(--primary-clr-1);
    width: 34%;
    padding: 1rem 0;
  }
  small {
    color: var(--secondary-clr-1);
  }
  .email {
    margin: 1rem 0;
    color: var(--primary-clr-1);
  }

  @media(min-width: 567px) {
    input {
      padding: 1rem 2rem;
      font-size: 1rem;
    }
  }
  @media(min-width:996px){
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
    .body-div {
      :first-child p{
        width: 70%;
        margin: 0 auto;
      }
    }
  }
`

const AboutSite = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 2.1rem;
  @media(min-width: 992px) {
    flex-direction: row;
  }
`

export default Footer