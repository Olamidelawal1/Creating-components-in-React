import React from 'react'
import Languages from './Languages'

export default function LanguageLink () {
    return (
        <div  style = {{display: "flex", justifyContent: "centre", padding: "8px"}}>
            <p>Google offered in: </p>
            <div style = {{display: "flex", gap: "4px"}}>
                <Languages text= {"Hausa"} />
                <Languages text= {"Igbo"} />
                <Languages text= {"Ede Yoruba"} />
                <Languages text= {"Nigerian Pidgin"} />
            </div>
        </div>
    )
}