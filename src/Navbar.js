import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {

    const handlesubmit = () => {
        window.alert("search")
    }

    const handlelogin = () => {
        window.alert("Logged in")
    }
    const handleSignup = () => {
        window.alert("signup")
    }
    return (
        <>
            <header class="navbar" style={{ "border-top": "4px solid orange" }}>
                <div class="container-fluid">
                    <Link to="/" style={{ "color": "black", "fontWeight": "bold", "textDecoration": "none", "fontSize": "20px" }} ><i class="fab fa-stack-overflow" style={{ "color": "orange" }}></i> Stack Overflow - Clone</Link>
                    <div class="d-flex">
                        <input class="me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success me-2" onClick={() => handlesubmit()} >Search</button>
                        <button class="btn btn-primary me-2" onClick={() => handlelogin()}>Login</button>
                        <button class="btn btn-primary me-2" onClick={() => handleSignup()}>Sign Up</button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar
