import React from 'react'
import "./SearchPage.css"
import {Button} from "@material-ui/core"
import SearchResults from "./SearchResults"

function SearchPage() {
    const result = {
        img: 'https://source.unsplash.com/1600x900/?usa,LA',
        location: 'LA, USA',
        title: 'Stay at USA\'s best place',
        desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader.",
        star: 3.4,
        price: 200,
        total: 300
    }
    const result2 = {
        img: 'https://source.unsplash.com/1600x900/?tourist,forign',
        location: 'London, UK',
        title: 'Stay at Londons\'s best place',
        desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader.",
        star: 4.4,
        price: 500,
        total: 1500
    }
    const result3 = {
        img: 'https://source.unsplash.com/1600x900/?world,travel',
        location: 'LA, USA',
        title: 'Stay at Spain\'s best place',
        desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader.",
        star: 4,
        price: 600,
        total: 1800
    }
    const result4 = {
        img: 'https://source.unsplash.com/1600x900/?travling,love',
        location: 'Australia',
        title: 'Stay at Australia\'s best place',
        desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader.",
        star: 3.4,
        price: 200,
        total: 300
    }
    const result5 = {
        img: 'https://source.unsplash.com/1600x900/?tourist,travel',
        location: 'Delhi, India',
        title: 'Stay at India\'s best place',
        desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader.",
        star: 4.4,
        price: 500,
        total: 1500
    }
    const result6 = {
        img: 'https://source.unsplash.com/1600x900/?globe,travel',
        location: 'Las Vegas, USA',
        title: 'Stay at USA\'s best place',
        desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader.",
        star: 4,
        price: 600,
        total: 1800
    }
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>62 stays</p>
                <h2>Stay near</h2>
                <Button variant="outlined">Cancelation Flexiablity</Button>
                <Button variant="outlined">type of place</Button>
                <Button variant="outlined">price</Button>
                <Button variant="outlined">rooms & beds</Button>
                <Button variant="outlined">more filter</Button>
            </div>
            <SearchResults result={result}/>
            <SearchResults result={result2}/>
            <SearchResults result={result3}/>
            <SearchResults result={result4}/>
            <SearchResults result={result5}/>
            <SearchResults result={result6}/>
        </div>
    )
}

export default SearchPage
