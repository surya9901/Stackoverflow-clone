import React from 'react'
import {Link} from 'react-router-dom'

function Sidebar() {
    return (
        <>
            <ul class="sidebarcontent">
                <li><Link to="/" style={{"textDecoration":"none", "color":"black"}}>Home</Link></li>
                <li><Link to="/Questions" style={{"textDecoration":"none", "color":"black"}}>Questions</Link></li>
                <li><Link to="/tags" style={{"textDecoration":"none", "color":"black"}}>Tags</Link></li>
            </ul>
        </>
    )
}

export default Sidebar
