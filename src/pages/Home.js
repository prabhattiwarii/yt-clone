import React from 'react'
import Header from '../components/header/Header'
import Sidebar from '../components/sidebar/Sidebar'
import Filter from '../components/filter/Filter'

const Home = () => {
  return (
    <>
    <Header/>
    <div className="main-display" style={{display:"flex"}}>
      <Sidebar/>
      <Filter/>
    </div>
    </>
  )
}

export default Home