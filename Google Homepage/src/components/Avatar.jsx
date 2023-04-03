import React from 'react'
import Messi from '../images/MESSI.jpg'

export default function Avatar () {
    return (
    <div>
        <img src = {Messi} alt = "Messi's image" style = {{height: "16px"}}/>
    </div>
    )
}