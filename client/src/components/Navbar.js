import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='nav'>
      <Link to='/LeagueList' className='Home'>
        League Central
      </Link>
      <Link to='/Login' className='Home'>
        Login
      </Link>
      
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
