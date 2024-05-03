import React from 'react';
import { Outlet } from 'react-router-dom';
import Pages from './Pages';

const Layout = () => {
  return (
    <section className='flex flex-col h-screen'>
      <div className=''>
        <Pages/>
      </div>
      <div className='flex flex-grow bg-green-500 mt-20 justify-center items-center'>
        <Outlet/>
      </div>
    </section>
  );
};

export default Layout