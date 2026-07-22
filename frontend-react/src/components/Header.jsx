import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
   <>
      <nav className='navbar container pt-3 pb-3 align-items-start '>
        <Link to='/' href="" className='navbar-brand text-light'>
          Stock Prediction Portal
        </Link>
        <div>
          <Link className='btn btn-outline-info' to='/login'>Login</Link>
          &nbsp;
          <Link to='/register'  className='btn btn-info' href="">Register</Link>
        </div>

      </nav>
   </>
  )
}

export default Header