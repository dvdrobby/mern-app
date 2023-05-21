import React from 'react'
import {Routes as Switch, Route } from 'react-router-dom'
import About from '../about'
import Post from '../post'
import Home from '../home'


function MainApp() {
  return (
    <>
    <header>header</header>
    <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/post" element={<Post />} />
    </Switch>
 
    <footer>footer</footer>
    </>
  )
}

export default MainApp