import React, { useState } from 'react'
import logo from "./assests/geeks-logo-white.svg"
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineClose } from "react-icons/ai"
import "./Home/index.css"

const routesArray = [
    {
        label: "HOME",
        name: "home",
        isActive: true
    },
    {
        label: "WORKS",
        name: "works",
        isActive: false
    },
    {
        label: "TECHNOLOGIES",
        name: "technologies",
        isActive: false
    },
    {
        label: "SERVICE",
        name: "service",
        isActive: false
    },
    {
        label: "COMPANY",
        name: "company",
        isActive: false
    },
    {
        label: "CONTACTS",
        name: "contacts",
        isActive: true
    },

]

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false)
    return (<>
        <header className='px-5 py-3 sticky-top navbar w-100'>
            <div className='d-flex flex-wrap justify-content-between align-items-center w-100'>
                <img src={logo} alt='logo' />
                <div className='d-flex flex-wrap routes-btn'>
                    {
                        routesArray.map(route => (<>
                            <div className='px-2 text-white routes-btn'>{route.label}</div>
                        </>))
                    }</div>
                {!isOpen ? <div className='hambarger' onClick={() => setIsOpen(true)}>
                    <GiHamburgerMenu color='white' />
                </div> : <div className='hambarger' onClick={() => setIsOpen(false)}>
                    <AiOutlineClose color='white' />
                </div>}

            </div>
        </header>
        {isOpen && <div className='w-100 overlay d-flex justify-content-center align-items-center flex-column'>
            {
                routesArray.map(route => (<>
                    <div className=''>{route.label}</div>
                </>))
            }
        </div>}
    </>)
}
