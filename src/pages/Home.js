import React from 'react'
import Header from '../components/header/Header'
import Sidebar from '../components/sidebar/Sidebar'
import Video from '../components/video/Video'

const Home = () => {
  return (
    <>
    <Header/>
    <div className="main-display" style={{display:"flex"}}>
      <Sidebar/>
      <Video/>
    </div>
    </>
  )
}

export default Home