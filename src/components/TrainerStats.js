import React from 'react'
import { Card } from 'react-bootstrap'
import { Flag } from 'semantic-ui-react'
import me from '../images/cropped.png'

const TrainerStats = () => {
    return (
        <Card>
            <Card.Header style={{ textAlign: 'left' }}>Luke Scheller</Card.Header>
            <Card.Body>
                <img src={me} alt='' style={{ borderRadius: '50%', width: '250px' }} />
                <Card.Title style={{ marginTop: '10px' }}></Card.Title>
                <span>
                    <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png' style={{ borderRadius: '50%', width: '100px' }} alt='' />
                    <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png' style={{ borderRadius: '50%', width: '100px' }} alt='' />
                    <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png' style={{ borderRadius: '50%', width: '100px' }} alt='' />
                    <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/248.png' style={{ borderRadius: '50%', width: '100px' }} alt='' />
                    <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/196.png' style={{ borderRadius: '50%', width: '100px' }} alt='' />
                    <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/228.png' style={{ borderRadius: '50%', width: '100px' }} alt='' />
                </span>
                <Card.Title style={{ marginTop: '10px' }}>Stats</Card.Title>
                <Card.Text>
                    TrainerClass: Scientist<br />
                    Dob: 12/26/1991 (28)<br />
                    Nationality: <Flag name='south korea' /><Flag name='united states' /><Flag name='switzerland' /><br />
                    Residence: Las Vegas, NV <Flag name='united states' /><br />
                    Education: University of Las Vegas Nevada<br />
                    Major: Web Development & Graphic Design<br />
                </Card.Text>
                <Card.Title>Contact Info</Card.Title>
                <Card.Text>
                    Phone: (651) 207 7638<br />
                    Email: lukescheller1991@outlook.com
                </Card.Text>
            </Card.Body>
        </Card >
    )
}

export default TrainerStats