import React from 'react'
import "./index.css"

function ClientCard({ info }) {
  const { logo, heading, content } = info
  return (
    <div className='text-center client-card-content'>
      <div className='p-2'>
          <img className='w-100' src={logo} alt='#' />
      </div>
    
      <div className='heading'>{heading}</div>
      <p className='content'>{content}</p>
    </div>
  )
}

export default ClientCard
