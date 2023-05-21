import React from 'react'
import { BrowserRouter as Router, Route, Routes as Switch} from 'react-router-dom'
import { MainApp, Login, Register } from '../../pages'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<MainApp />} />
      </Switch>
      
    </Router>
  )
}

export default Routes