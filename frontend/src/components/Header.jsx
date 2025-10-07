import React from 'react'

const Header = () => {
  return (
    <>
    <nav className="navbar container">
        <a className='navbar-brand text-light'> Stock Prediction</a>
        <div>
            <a className='btn btn-primary mx-2' href='/login'>Login</a>
            <a className='btn btn-primary mx-2' href='/register'>Register</a>   
        </div>
        </nav>
    </>
  )
}

export default Header