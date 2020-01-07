import React, { useContext, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { PokeContext } from '../context/PokeContext'
import axios from 'axios'
import Spinner from '../components/Spinner'
import SearchBar from './SearchBar'


const Kanto = () => {
    const { state, dispatch } = useContext(PokeContext)
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=386')
            .then(res => {
                for (let x = 0; x < res.data.results.length; x++) {
                    axios.get(res.data.results[x].url)
                        .then(res => {
                            if (state.length === 0) {
                                dispatch({
                                    type: 'KANTO_POKEMON',
                                    payload: {
                                        id: res.data.id,
                                        name: res.data.name,
                                        img: res.data.sprites.front_default
                                    }
                                })
                            }
                        })
                }
            })
    }, [])

    state.sort(function (a, b) {
        return a.id - b.id
    })

    return (
        <Container>
            <SearchBar />
            {state.length !== 386 ? <Spinner /> : state.map((p, index) => (
                <Link to={'/pokecard/' + p.name} key={p.id} ><img src={p.img} alt='' /></Link>
            ))
            }
        </Container >
    )
}

export default Kanto