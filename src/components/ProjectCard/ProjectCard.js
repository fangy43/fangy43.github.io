import { Card, CardDeck } from 'react-bootstrap'
import React from 'react'
export const ProjectCard = (props) => {

    return (
        <Card bg="dark" style={{ height: '380px', width: '500px', borderRadius: '20px' ,margin: "20px"}} >
            <Card.Link href={props.Ref}>
                <Card.Img style={{ height: '200px', borderRadius: '25px' ,}} src={props.ImgURL} />
            </Card.Link>
            <Card.Body>
                <Card.Title style={{ color: "white" }}><h4>{props.Topic}</h4></Card.Title>
                <Card.Text style={{ fontSize: '20px', textAlign: 'left' }}>
                    {props.Des}
                </Card.Text>
                <Card.Link href={props.GithubRef} style={{ color: "white" }}>See Github</Card.Link>
            </Card.Body>
        </Card>

    )
}


