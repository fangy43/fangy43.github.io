import React from 'react'
import { Card, CardDeck } from 'react-bootstrap'
import './Projects.css'
import educaCard from '../img/educa-card.jpg'

export const Projects = () => {
    return (
        <div className="project">
            <h1>Projects</h1>
            <div className="projects-list">
                <CardDeck>
                    <Card bg="dark" style={{ height: '350px' }} >
                        <Card.Img style={{ height: '200px' }}  src= {educaCard}/>
                        <Card.Body>
                            <Card.Title style={{ color: "white" }}><h4>Educa</h4></Card.Title>
                            <Card.Text style={{ fontSize: '15px' }}>
                                Web application for Education <br></br> - Software Development Process Project with my team at KMITL. 
                            </Card.Text>
                            <Card.Link href="https://github.com/Educa-software" style={{ color: "white" } }>See Github</Card.Link>
                        </Card.Body>
                    </Card>
                    
                    <Card bg="dark" style={{ height: '350px' }}>
                        <Card.Img style={{ height: '200px' }} variant="top" src="" />
                        <Card.Body>
                            <Card.Title style={{ fontSize: '30px' }, { color: "white" }}   >Card Title</Card.Title>
                            <Card.Text style={{ fontSize: '15px' }}>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                        </Card.Text>
                        </Card.Body>
                    </Card>

                
                </CardDeck>
                <CardDeck>
                    <Card bg="dark" style={{ width: '340px' }, { height: '350px' }}>
                        <Card.Img style={{ height: '200px' }} variant="top" src="" />
                        <Card.Body>
                            <Card.Title style={{ fontSize: '30px' }, { color: "white" }}   >Card Title</Card.Title>
                            <Card.Text style={{ fontSize: '15px' }}>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                        </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card bg="dark" style={{ width: '340px' }, { height: '350px' }}>
                        <Card.Img style={{ height: '200px' }} variant="top" src="" />
                        <Card.Body>
                            <Card.Title style={{ fontSize: '30px' }, { color: "white" }}   >Card Title</Card.Title>
                            <Card.Text style={{ fontSize: '15px' }}>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                        </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card bg="dark" style={{ width: '380px' }, { height: '350px' }}>
                        <Card.Img style={{ height: '200px' }} variant="top" src="" />
                        <Card.Body>
                            <Card.Title style={{ fontSize: '30px' }, { color: "white" }}   >Card Title</Card.Title>
                            <Card.Text style={{ fontSize: '15px' }}>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                        </Card.Text>
                        </Card.Body>
                    </Card>

                </CardDeck>


            </div>
        </div>
    )
}