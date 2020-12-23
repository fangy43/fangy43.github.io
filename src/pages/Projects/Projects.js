import React, { useState } from 'react'
import { Card, CardDeck } from 'react-bootstrap'
import './Projects.css'
import educaCard from '../../img/educa-card.jpg'
import { ProjectCard } from '../../components/ProjectCard/ProjectCard'

export const Projects = () => {



    return (
        <div className="project">
            <h1>Projects</h1>
            <div className="projects-list">
                <CardDeck style={{ margin: '20px' }}>
                    <ProjectCard
                        ImgURL='https://github.com/fangy43/fangy43.github.io/blob/dev/src/img/educa-card.jpg?raw=true'
                        Topic="Educa"
                        Text=" Web application for Education  - Software Development Process Project with my team at KMITL."
                        GithubRef="https://github.com/Educa-software"
                        Ref="https://educa.now.sh"
                    />
                    <ProjectCard

                    />

                </CardDeck>
                <CardDeck style={{ margin: '20px' }}>
                    <ProjectCard

                    />
                    <ProjectCard

                    />

                </CardDeck>






            </div>
        </div>
    )
}