import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div className="container">
        <Header />
        {children}
    </div>
  )
}

export default Layout