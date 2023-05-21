import React from 'react'
import {Routes as Switch, Route } from 'react-router-dom'
import About from '../about'
import Post from '../post'
import Home from '../home'
import { Header, Footer } from '../../components'


function MainApp() {
  return (
    <div className='d-flex flex-column vh-100'>
        <div>
            <Header />
        </div>
        <div className='flex-grow-1 container'>
            <Switch>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/post" element={<Post />} />
            </Switch>
        </div>
        <div className='text-bg-dark fluid p-3'>
            <Footer />
        </div>
    </div>
  )
}

export default MainApp