import React from 'react'
import { Outlet } from 'react-router-dom'


const Layout = () => {
  return (
    <section>
        <Pages/>
        <Outlet/>
    </section>
  )
}

export default Layout