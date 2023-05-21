import React from 'react'
import { BrowserRouter as Router, Route, Routes as Switch} from 'react-router-dom'
import { About, Home, Post } from '../../pages'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/about' element={<About />} />
        <Route exact path='/post' element={<Post />} />
        <Route exact path='/' element={<Home />} />
      </Switch>
      
    </Router>
  )
}

export default Routes