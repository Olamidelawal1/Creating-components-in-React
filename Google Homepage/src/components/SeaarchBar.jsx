import {useState} from "react";


const SearchBar = () => {

    const [SearchInput, searchSearchInput] = useState("");
    return (
        <div style = {{justifyContent: "centre"}}>
             <input type = "text" placeholder = "Search here" onChange={event => searchSearchInput(event.target.value)} />
        </div>
    )
}

export default SearchBar;