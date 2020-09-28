import React, { useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar'

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <Sidebar isOpen={isOpen} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
