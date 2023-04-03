import React from 'react'
import leaf from '../images/leaf.png'

export default function FooterText () {
    return (
        <div style = {{display: "flex", justifyContent: "center", padding: "8px"}}>

            <div style = {{display: "flex", gap: "2px"}}>
                <img src = {leaf} alt = "google leaf" style = {{height: "4px"}}/>
                <p>Carbon neutral since 2007</p>
            </div>
        </div>
    )
}