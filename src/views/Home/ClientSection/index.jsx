import React from 'react'
import { Col, Row } from 'reactstrap'
import ClientCard from './ClientCard'
import ibm from "../../assests/clientIcon/logo-ibm.webp"
import "./index.css"

const clients = [
  { logo: ibm, heading: "Global Technology", content: "From cloud computing to artificial intelligence, IBM's cutting-edge technologies and expertise have helped countless businesses stay ahead of the curve in today's digital world." },
  { logo: ibm, heading: "Global Technology", content: "From cloud computing to artificial intelligence, IBM's cutting-edge technologies and expertise have helped countless businesses stay ahead of the curve in today's digital world." },
  { logo: ibm, heading: "Global Technology", content: "From cloud computing to artificial intelligence, IBM's cutting-edge technologies and expertise have helped countless businesses stay ahead of the curve in today's digital world." },
  { logo: ibm, heading: "Global Technology", content: "From cloud computing to artificial intelligence, IBM's cutting-edge technologies and expertise have helped countless businesses stay ahead of the curve in today's digital world." },
  { logo: ibm, heading: "Global Technology", content: "From cloud computing to artificial intelligence, IBM's cutting-edge technologies and expertise have helped countless businesses stay ahead of the curve in today's digital world." },
  { logo: ibm, heading: "Global Technology", content: "From cloud computing to artificial intelligence, IBM's cutting-edge technologies and expertise have helped countless businesses stay ahead of the curve in today's digital world." },
  { logo: ibm, heading: "Global Technology", content: "From cloud computing to artificial intelligence, IBM's cutting-edge technologies and expertise have helped countless businesses stay ahead of the curve in today's digital world." },
  { logo: ibm, heading: "Global Technology", content: "From cloud computing to artificial intelligence, IBM's cutting-edge technologies and expertise have helped countless businesses stay ahead of the curve in today's digital world." },
  { logo: ibm, heading: "Global Technology", content: "From cloud computing to artificial intelligence, IBM's cutting-edge technologies and expertise have helped countless businesses stay ahead of the curve in today's digital world." },
  { logo: ibm, heading: "Global Technology", content: "From cloud computing to artificial intelligence, IBM's cutting-edge technologies and expertise have helped countless businesses stay ahead of the curve in today's digital world." },
  { logo: ibm, heading: "Global Technology", content: "From cloud computing to artificial intelligence, IBM's cutting-edge technologies and expertise have helped countless businesses stay ahead of the curve in today's digital world." },
  { logo: ibm, heading: "Global Technology", content: "From cloud computing to artificial intelligence, IBM's cutting-edge technologies and expertise have helped countless businesses stay ahead of the curve in today's digital world." },
]

export default function ClientSection({className}) {
  return (<section className={`mod clientSection-container ${className}`} id="mod4">
    <div className='clientSection'>
      <div className='heading'>Recent clients</div>
      <p>We worked with the Fortune 500 companies in the USA, Africa, UK, Middle East
        World's 4th Strongest Banking Brand, Automobile & IoT industry</p>
    </div>
    <Row >{
      clients.map(info => (<>
        <Col md={4} className="my-3">
          <div className="client-card">
            <ClientCard info={info} />
          </div>
        </Col>
      </>))
    }</Row>
  </section>)
}
