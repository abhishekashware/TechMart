import React from 'react'
import Header from '../Header/Header'
import Router from '../../Routers/Router'
import Footer from '../Footer/Footer'

const Layout = () => {
  return (
    <>
    <Header/>
    <div style={{marginTop:'74px'}}>
        <Router/>
    </div>
    <Footer/>
    </>
  )
}

export default Layout