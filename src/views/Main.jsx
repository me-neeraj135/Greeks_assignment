import React from 'react'
import loadable from 'react-loadable';

const NavBar = loadable({
  loader: () => import('./NavBar'),
  loading: () => (<></>)
})
const Home = loadable({
  loader: () => import("./Home"),
  loading: () => (<></>)
})

export default function Main() {
 
  return (
    <div className='position-relative'>
      <NavBar />
      <Home />
    </div>
  )
}
