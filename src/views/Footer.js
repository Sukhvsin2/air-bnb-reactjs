import React from 'react'
import "./Footer.css"

function Footer() {
    const year = new Date().getFullYear();
    return (
        <div className="footer">
            <p>{year + ' '} Airbnb UI ~ No rights are reserved! <a href="https://github.com/Sukhvsin2">Sukhvinder Singh</a> </p>
            <p>Privacy Terms Sitemap Company Details</p>
        </div>
    )
}

export default Footer
