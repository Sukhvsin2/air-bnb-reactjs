import React, {useState} from 'react'
import './Banner.css'
import {Button} from "@material-ui/core";
import Search from ".././components/Search";
import {useHistory} from "react-router-dom"

function Banner() {
    const history = useHistory();

    const [showSearch, setShowSearch] = useState(false);

    function datePicker(){
        setShowSearch(!showSearch);
    }

    return (
        <div className="banner">
            <div className="banner__search">
                {showSearch && <Search/>}
                <Button onClick={datePicker} className="banner__searchButton" variant="outlined">{showSearch ? 'hide date' :'Search dates'}</Button>
            </div>
            <div className="banner__info">
                <h1> get out & streach your imagination</h1>
                <h5>
                    plan a diffrent kind of getaway to uncover the hidden gems near you.
                </h5>
                <Button onClick={()=>{
                    history.push('/search-results')
                }} variant='outlined'>Explore nearby</Button>                
            </div>
        </div>
    )
}

export default Banner
