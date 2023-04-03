import React from 'react'
import MenuItem from './MenuItem'

export default function BottomRightMenu () {
    return (
        <div style = {{display: "flex", justifyContent: "flex-end", padding: "8px"}}>

            <div style = {{display: "flex", gap: "4px"}}>
            <MenuItem title = {"Privacy"} />
            <MenuItem tittle = {"Terms"} />
            <MenuItem tittle = {"Settings"} />
            </div>
        </div>
    )
}