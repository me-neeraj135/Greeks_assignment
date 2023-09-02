import React from 'react'
import web from "../../assests/sofwareIcon/web-icon.svg"
import RegularBtn from '../../../components/RegularBtn'
import "./index.css"

const platforms = [
    { icon: web, label: "Web" },
    { icon: web, label: "iOS" },
    { icon: web, label: "Android" },
    { icon: web, label: "Hybrid" },
    { icon: web, label: "Wearables" },
    { icon: web, label: "TV" }
]
function Software({className}) {
    return (
        <section id="mod5" className={`mod software min-vh-100 d-flex flex-column align-items-center justify-content-center ${className}`}>
            <div className='heading'>Software for modern platforms</div>
            <div className='content'>We develop applications for mobile, web, wearables, and TV.</div>
            <div className='platform-container flex-wrap'>
                {platforms.map(platform => (<>
                    <div>
                        <div>
                            <img src={platform.icon} alt='#'/>
                        </div>
                        <div className='h4 text-white text-center py-4'>{platform.label}</div>
                    </div>
                </>))}
            </div>
            <RegularBtn title="See our tech stack"/>
        </section>
    )
}

export default Software