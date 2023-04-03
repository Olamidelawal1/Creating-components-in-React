import React from 'react'
import Google from '../images/Google.jpg'

export default function Logo () {
    return (
        <div style = {{justifyContent: "centre"}}>
            <img src = {Google} alt = "Google's logo" style = {{height: "40px", width: "40px"}}/>
        </div>
    )
}