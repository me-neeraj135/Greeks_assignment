import React from 'react'
import { Col, Row } from 'reactstrap'
import web from "../../assests/sofwareIcon/web-icon.svg"
import RegularBtn from '../../../components/RegularBtn'
import "./index.css"

const platforms = [
    { icon: web, label: "Agile approach" },
    { icon: web, label: "Deep tech expertise" },
    { icon: web, label: "Personal commitment" },
    { icon: web, label: "Regular reporting" },
    { icon: web, label: "Time tracking" },
    { icon: web, label: "Scalability" }
]
function Team({className}) {
    return (
        <section id="mod1" className={`mod team min-vh-100 d-flex flex-column align-items-center justify-content-center ${className}`}>
            <div className='heading'>Only dedicated teams</div>
            <div className='content'>Our team is 100% concentrated on your project and you have full control over management of the dedicated team members.</div>
            <Row className="w-100">
                {platforms.map(platform => (<>
                    <Col md={4} className="d-flex p-5 flex-column justify-content-center align-items-center">
                        <div>
                            <img src={platform.icon} alt='#'/>
                        </div>
                        <div className='h4 text-white text-center py-4'>{platform.label}</div>
                    </Col>
                </>))}
            </Row>
            <RegularBtn title="See our tech stack"/>
        </section>
    )
}

export default Team