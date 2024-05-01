import React from 'react'
import { NavLink } from 'react-router-dom'

const Pages = () => {
  return (
    <nav>
      <div>
      <NavLink to='/Hooks'>Basic hooks</NavLink>
      </div>
      <div>
      <NavLink to='/Data-display'>Data display</NavLink>
      </div>
      <div>
      <NavLink to='/CRUD'>CRUD</NavLink>
      </div>
      <div>
      <NavLink to='/Data-manipulation'>Data manipulation</NavLink>
      </div>
      <div>
      <NavLink to='/Data-selection'>Data selection</NavLink>
      </div>
      <div>
      <NavLink to='/Image-handling'>Image handling</NavLink>
      </div>
      <div>
      <NavLink to='/Master-dom'>Master rect router dom</NavLink>
      </div>
      <div>
      <NavLink to='/Styling'>Styling</NavLink>
      </div>
      <div>
      <NavLink to='/Forms'>Forms</NavLink>
      </div>
      <div>
      <NavLink to='/State-propagation'>State propagation</NavLink>
      </div>
    </nav>
  )
}

export default Pages