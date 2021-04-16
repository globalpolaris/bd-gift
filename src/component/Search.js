import React from 'react'

const SearchBar = () => {
    return (
        <div className="searchbar">
            <input type="text" id="search" maxLength='24' placeholder="Something..."></input>
            {/* <button className="submit-btn">GO</button> */}
        </div>
    )
}

export default SearchBar