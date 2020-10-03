import React from 'react'
import "./SearchResults.css"
import FavioriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import StartIcon from "@material-ui/icons/Star"

function SearchResults({result}) {
    return (
        <div className="searchResult">
            <img src={result.img} alt="" />
            <FavioriteBorderIcon className="searchResult__heart" />
            <div className="searchResult__info">
                <div className="searchResult__infoTop">
                    <p>{result.location}</p>
                    <p className="title">{result.title}</p>
                    <p>______</p>
                    <p>{result.desc}</p>
                </div>
                <div className="searchResult__infoBottom">
                    <div className="searchResult__stars">
                        <StartIcon className="searchResult__star"/>
                        <strong>{result.star}</strong>
                    </div>
                    <div className="searchResult__price">
                        <h2>${result.price}/night</h2>
                        <p>Total ${result.total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResults
