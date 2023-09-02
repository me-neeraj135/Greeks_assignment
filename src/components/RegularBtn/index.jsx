import React, { useState } from 'react'
import {BsArrowRight} from "react-icons/bs"
import "./index.css"

export default function RegularBtn({ title, name, onClick, onChange, type = "button", id, className}) {
    const [bgfull, setBgfull] = useState(false)
        return (<div className='regularBtn'>
            <button
                type={type}
                name={name}
                onClick={onClick}
                onChange={onChange}
                id={id}
                className={className}
                onMouseEnter={() => setBgfull(true)}
                onMouseLeave={() => setBgfull(false)}
            >{title}</button>
            <BsArrowRight/>
        </div>)
    }