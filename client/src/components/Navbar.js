import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='nav'>
      <Link to='/' className='Home'>
        League Central
      </Link>
      <ul>
        <li className='active'>
          <CustomLink to='/profile'>Profile</CustomLink>
        </li>
        <li className='active'>
          <CustomLink to='/Login'>Login</CustomLink>
        </li>
      </ul>
    </nav>
  )
}

function CustomLink({to, children, ...props}) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true})

  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}

export default Navbar
