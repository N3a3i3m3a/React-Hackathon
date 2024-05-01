import React from 'react'
import { Outlet } from 'react-router-dom'
import Pages from '../Pages'


const Layout = () => {
  return (
    <section>
        <Pages/>
        <Outlet/>
    </section>
  )
}

export default Layout