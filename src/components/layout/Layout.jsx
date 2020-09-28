import React, { useState } from 'react'
import Hero from '../home/Hero'
import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar'

const Layout = ({ children, home }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {home
        ? <Hero isOpen={isOpen} setIsOpen={setIsOpen} />
        : <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      }
      <Sidebar isOpen={isOpen} />
      <main className='main'>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
