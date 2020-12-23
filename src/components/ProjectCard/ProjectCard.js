import { Card, CardDeck } from 'react-bootstrap'
import React from 'react'

import educaCard from '../../img/educa-card.jpg'

export const ProjectCard = (props) => {

    return (
        // <div>{props.ImgURL}</div>
        <Card bg="dark" style={{ height: '400px', width: '450px', borderRadius: '20px' ,}} >
            <Card.Link href={props.Ref}>
                <Card.Img style={{ height: '200px', borderRadius: '25px' ,}} src={props.ImgURL} />
            </Card.Link>
            <Card.Body>
                <Card.Title style={{ color: "white" }}><h4>{props.Topic}</h4></Card.Title>
                <Card.Text style={{ fontSize: '20px', textAlign: 'left' }}>
                    {props.Text}
                </Card.Text>
                <Card.Link href={props.GithubRef} style={{ color: "white" }}>See Github</Card.Link>
            </Card.Body>
        </Card>

    )
}


