import React from 'react'
import RegularBtn from '../../components/RegularBtn'
import "./index.css"

export default function CheckoutSec({className}) {
    return (
        <section className={`checkoutSec-container mod d-flex justify-content-center ${className}`}>
            <div className='checkoutSec'>
                 <div className='h1'>Check out more works by Geeks Invention</div>
            <p className='h4 my-3'>Our case studies describe design and development solutions implemented at our Geeks Invention projects. The stories are a valuable resource for those looking to develop their own mobile apps.</p>
            <RegularBtn title="See all case studies"/>
            </div>
        </section>
    )
}
