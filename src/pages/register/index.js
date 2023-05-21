import React from 'react'
import { Input, Button } from '../../components'


function Register() {
  return (
    <>
    <div className="container px-4">

      <h1 className='mb-3'>Register</h1>
      <div className='row mb-3'>
        <div className="input-group col-6">
          <Input title="Username" type="text" aria-label="Username" className="form-control"/>
        </div>  
      </div>
      <div className='row mb-3'>
        <div className="input-group col-6">
          <Input title="Email" type="email" aria-label="Email" className="form-control"/>
        </div>
      </div>
      <div className='row mb-3'>
        <div className="input-group col-6">
          <Input title="Password" type="password" aria-label="Password" className="form-control"/>
        </div>
      </div>
      <div className='row mb-3'>
        <div className="input-group col-6">
          <Button title="Register" type="submit" className="btn btn-primary fluid"/>            
        </div>
      </div>

      <p>Already have account? Login <a href='/login'>here</a></p>

    </div>
    </>
  )
}

export default Register