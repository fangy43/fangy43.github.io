import { Card, CardDeck } from 'react-bootstrap'
import React from 'react'

import educaCard from '../../img/educa-card.jpg'

export const ProjectCard = (props) => {

    return (
        // <div>{props.ImgURL}</div>
        <Card bg="dark" style={{ height: '360px', width: '400px', borderRadius: '20px' }} >
            <Card.Img style={{ height: '200px', borderRadius: '20px' }} src={props.ImgURL} />
            <Card.Body>
                <Card.Title style={{ color: "white" }}><h4>{props.Topic}</h4></Card.Title>
                <Card.Text style={{ fontSize: '18px', textAlign: 'left' }}>
                    {props.Text}
                </Card.Text>
                <Card.Link href={props.Ref} style={{ color: "white" }}>See Github</Card.Link>
            </Card.Body>
        </Card>

    )
}


