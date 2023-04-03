import React from 'react'
import MenuItem from './MenuItem'

export default function ButtomLeftMenu () {
    return (
        <div style = {{display: "flex", justifyContent: "flex-start", padding: "8px"}}>

            <div style = {{display: "flex", gap: "4px"}}>
            <MenuItem title = {"About"} />
            <MenuItem tittle = {"Advertising"} />
            <MenuItem tittle = {"Business"} />
            <MenuItem tittle = {"How Search Works"} />
            </div>
        </div>
    )
}