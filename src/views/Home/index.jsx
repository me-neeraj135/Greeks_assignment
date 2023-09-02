import React, { useState } from 'react'
import loadable from 'react-loadable';
import education from "../assests/module/industry-education.webp"
import iot from "../assests/module/industry-iot.webp"
import fintect from "../assests/module/industry-fintech.svg"
import "./index.css"

const CompanyModule = loadable({
    loader: () => import('./CompanyModule'),
    loading: () => (<></>)
})
const CheckoutSec = loadable({
    loader: () => import('./CheckoutSec'),
    loading: () => (<></>)
})
const ClientSection = loadable({
    loader: () => import("./ClientSection"),
    loading: () => (<></>)
})
const Software = loadable({
    loader: () => import("./Software"),
    loading: () => (<></>)
})
const Team = loadable({
    loader: () => import("./Team"),
    loading: () => (<></>)
})
const Footer = loadable({
    loader: () => import("./Footer"),
    loading: () => (<></>)
})
const module = [
    {
        img: fintect,
        title: "Fintech Solution",
        heading: "Transforming Fintech with AI",
        points: ["Fraud detection", "Transaction categorisation", "Risk Scoring"],
        body: "Empower your financial institution with our advanced fintech solutions. From real-time fraud detection to easy bookkeeping, our software development services provide credit risk scoring for accurate lending eligibility, transaction categorization for seamless organization, and anomaly detection to safeguard your assets",
        arrange: "asce"
    },
    {
        img: iot,
        title: "Fintech Solution",
        heading: "Transforming Fintech with AI",
        points: ["Fraud detection", "Transaction categorisation", "Risk Scoring"],
        body: "Empower your financial institution with our advanced fintech solutions. From real-time fraud detection to easy bookkeeping, our software development services provide credit risk scoring for accurate lending eligibility, transaction categorization for seamless organization, and anomaly detection to safeguard your assets",
        arrange: "dec"
    },
    {
        img: education,
        title: "Fintech Solution",
        heading: "Transforming Fintech with AI",
        points: ["Fraud detection", "Transaction categorisation", "Risk Scoring"],
        body: "Empower your financial institution with our advanced fintech solutions. From real-time fraud detection to easy bookkeeping, our software development services provide credit risk scoring for accurate lending eligibility, transaction categorization for seamless organization, and anomaly detection to safeguard your assets",
        arrange: "dec"
    },
]

export default function Home(className) {
const [bgColorChanged, setBgColorChanged] = useState(true)

    return (<>
        <section className='header-mod df-bg-color' id="mod1" >
            <div className='d-flex h-100 flex-column align-items-center justify-content-center text-white w-100'>
                <div className='header-text-1'>EMBRACE THE FUTURE</div>
                <div className='header-text-2'>Welcome to the age of action</div>
            </div>
        </section>
        {module && module.map(info => (<>
            <section className={`home-module text-white min-vh-100 align-items-center d-flex ${bgColorChanged ? 'df-bg-color' : ''}`}>
                <CompanyModule info={info} />
            </section>
        </>))}
        <CheckoutSec className={bgColorChanged ? 'df-bg-color' : ''} />
        <ClientSection className={bgColorChanged ? 'df-bg-color' : ''} />
        <Software className={bgColorChanged ? 'df-bg-color' : ''} />
        <Team className={bgColorChanged ? 'df-bg-color' : ''} />
        <Footer className={bgColorChanged ? 'df-bg-color' : ''} />
    </>)
}
