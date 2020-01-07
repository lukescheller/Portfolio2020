import React, { useState } from 'react'
import { Button, Form, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SearchBar = (props) => {

    const [search, setSearch] = useState('')

    const searchVal = (event) => {
        let val = event.target.value
        let to_Lower = val.toLowerCase()
        setSearch(to_Lower)
    }

    return (
        <Container style={{ margin: '10px', border: '1px solid white', display: 'flex' }}>
            <Form.Control type="text" placeholder="Search by Name or 1 - 386" onChange={searchVal} style={{ textAlign: 'center' }} /><Link to={'/pokecard/' + search}><Button>Search</Button></Link>
        </Container>
    )
}

export default SearchBar