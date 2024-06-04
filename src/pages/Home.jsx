import React from 'react'
// components
import Sidebar from '../components/sideBar/SideBar'
import Editor from '../components/editor/Editor'
import Discover from '../components/discover/Discover'
import Fallow from '../components/follow/Fallow'
import ToTop from '../components/totop/ToTop'
import ShopFixed from '../components/shopfixed/ShopFixed'

const Home = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <Editor/>
      <Discover/>
      <Fallow/>
      <ToTop/>
      <ShopFixed/>
    </div>
  )
}

export default Home