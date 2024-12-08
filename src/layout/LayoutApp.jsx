import React from 'react'
import Navigation from '../components/Navigation/Navigation'
import Theme from '../components/Theme/Theme'
import { Outlet } from 'react-router-dom'

const LayoutApp = () => {
  return (
    <div className="h-screen flex-block justify-center items-center content-center dark:bg-neutral-900">
        <Theme />
        <Navigation />
        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default LayoutApp