import React, { useEffect, useState } from 'react'
import { Container, Card, ListGroup, ListGroupItem, Button, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Spinner from './Spinner'
import axios from 'axios'
import map from '../images/map.png'

const PokeCard = props => {
    const pokeName = props.match.params.name

    const [pokemon, setPokemon] = useState({})
    const [check, setCheck] = useState(false)

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/' + pokeName)
            .then(res => {
                setPokemon({
                    id: res.data.id,
                    name: res.data.name,
                    img: res.data.sprites.front_default,
                    ability: res.data.abilities[0].ability.name,
                    height: res.data.height,
                    weight: res.data.weight,
                    exp: res.data.base_experience
                })
            }).catch((error) => {
                setCheck(true)
            })
    }, [])

    return (
        <div>
            <div style={style}><Link to='/pokedex' style={{ color: 'white' }}><Button>Back</Button></Link></div>
            {check ? '...no results' : <Container style={{
                backgroundImage: 'url(' + map + ')',
                backgroundSize: 'cover',
                padding: '10px',
            }}>
                <Col>{pokemon.id === undefined ||
                    pokemon.name === undefined ||
                    pokemon.img === undefined ||
                    pokemon.height === undefined ||
                    pokemon.weight === undefined ||
                    pokemon.exp === undefined ? <Spinner /> :
                    <Card style={{ width: '15rem', margin: '0 auto' }}>
                        <Card.Img variant="top" src={pokemon.img} />
                        <Card.Body>
                            <Card.Title>{pokemon.name}</Card.Title>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>{'Index: ' + '#' + pokemon.id}</ListGroupItem>
                            <ListGroupItem>{'Ability: ' + pokemon.ability}</ListGroupItem>
                            <ListGroupItem>{'Height: ' + pokemon.height}</ListGroupItem>
                            <ListGroupItem>{'Weight: ' + pokemon.weight}</ListGroupItem>
                            <ListGroupItem>{'Base Experience: ' + pokemon.exp}</ListGroupItem>
                            <ListGroupItem><a href={'http://pokeapi.co'}><Button>PokeApi</Button></a></ListGroupItem>
                        </ListGroup>
                    </Card>}</Col>
            </Container >
            }
        </div >
    )
}

const style = {
    border: '1px solid white',
    textAlign: 'left',
    margin: '15px',
}

export default PokeCard

//  <Row> 
//  <Col style={{ border: '1px solid black', display:'flex', alignItems: 'center'}}><div alt='' style={{marginLeft:'auto', marginRight: 'auto', width: '60px'}}></div></Col>
//  <Col style={{ border: '1px solid black', display:'flex', alignItems: 'center'}}><div alt='' style={{marginLeft:'auto', marginRight: 'auto', width: '60px'}}></div></Col>
//  </Row> 

