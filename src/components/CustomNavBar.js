import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Ball from '../images/pxbl.png'

const CustomNavBar = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg" variant='light'>
                <Navbar.Brand><Link to='/'><img src={Ball} alt='' width='60px' /></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end">
                    <Link to='/' style={{ color: 'black', margin: '10px' }}>Home</Link><br />
                    <Link to='/pokedex' style={{ color: 'black', margin: '10px' }}>Pokedex</Link><br />
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default CustomNavBar