import React from 'react'
import { Outlet } from 'react-router-dom'
import Pages from './Pages'


const Layout = () => {
  return (
    <section>
      <div>
        <Pages/>
      </div>
      <div className='bg-red-300'>
        <Outlet/>
      </div>
    </section>
  )
}

export default Layout