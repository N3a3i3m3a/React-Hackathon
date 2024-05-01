import React from 'react'
import { NavLink } from 'react-router-dom'

const Pages = () => {
  return (
    <section>
      <div>
      <NavLink to=''>Basic hooks</NavLink>
      </div>
      <div>
      <NavLink to=''>Data display</NavLink>
      </div>
      <div>
      <NavLink to=''>CRUD</NavLink>
      </div>
      <div>
      <NavLink to=''>Data manipulation</NavLink>
      </div>
      <div>
      <NavLink to=''>Data selection</NavLink>
      </div>
      <div>
      <NavLink to=''>Image handling</NavLink>
      </div>
      <div>
      <NavLink to=''>Master rect router dom</NavLink>
      </div>
      <div>
      <NavLink to=''>Styling</NavLink>
      </div>
      <div>
      <NavLink to=''>Forms</NavLink>
      </div>
      <div>
      <NavLink to=''>State propagation</NavLink>
      </div>
    </section>
  )
}

export default Pages