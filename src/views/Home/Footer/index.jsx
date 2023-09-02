import React from 'react'
import logo from "../../assests/geeks-logo-white.svg"
import "./index.css"

const routesArray = [
    {
        label: "Work",
        name: "work",
        isActive: true
    },
    {
        label: "Technologies",
        name: "technologies",
        isActive: false
    },
    {
        label: "Services",
        name: "services",
        isActive: false
    },
    {
        label: "Company",
        name: "company",
        isActive: false
    },
    {
        label: "Contacts",
        name: "contacts",
        isActive: true
    },
    {
        label: "Contacts",
        name: "contacts",
        isActive: true
    },
    {
        label: "Terms and Conditions",
        name: "terms_and_conditions",
        isActive: true
    },
    {
        label: "Privacy Policy",
        name: "privacy_policy",
        isActive: true
    },

]

export default function Footer({className}) {
    return (<div id="mod6" className={`mod footer-container ${className}`}> 
        <section className='d-flex justify-content-center'>
            <div className='footer'>
                <div className='h1'>Get to know us better!</div>
                <p className='h4 my-3'>It is a pleasure to have you on our website. Let us know if there's an opportunity to do something together.</p>
                <button>Drop us a message</button>
            </div>
        </section>
        <section className='footer-info d-flex'>
                <div className="address">
                    <img src={logo} alt='logo' />
                    <p>447 Broadway, 2nd Floor Suite #772, New York 10013, United States +1-347-535-0004</p>
                </div>
                <div md={7}>
                    <div className='d-flex gap-2 flex-wrap route'>
                        {routesArray.map(route => (<>
                            <div>{route.label}</div>
                        </>))}
                    </div>
                </div>
                <div>
                    <button>Stay tuned for our update</button>
                </div>
        </section>
        <div className='text-center copyri'>&copy; Copyright 2023 – Mobile App Design and Development Company. All Rights Reserved</div>
    </div>)
}