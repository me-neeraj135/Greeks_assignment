import React from 'react'
import { Col, Row } from 'reactstrap'
import PointToShow from "../../../components/PointToShow"
import RegularBtn from '../../../components/RegularBtn'
import "./index.css"

function CompanyModule({ info }) {
    const { title, heading, body, points, arrange, img } = info
    return (
        <Row className={`company-module ${arrange === "asce" && "flex-row-reverse"}`}>
            <Col md={6} xs={12} sm={12} className="d-flex align-items-center">
                <div className='CompanyModule-img'>
                     <img width={2000} src={img} alt='#' />
                </div>
            </Col>
            <Col md={6} xs={12} sm={12} className="info">
                <div className='title'>{title}</div>
                <div className='heading'>{heading}</div>
                {points && <div className='d-flex gap-2 flex-wrap py-4'>{
                    points.map(title => <PointToShow title={title} />)
                }</div>}
                <p className='body'>{body}</p>
                <RegularBtn
                    color="white"
                    title="See full case study"
                />
            </Col>
        </Row>
    )
}

export default CompanyModule

