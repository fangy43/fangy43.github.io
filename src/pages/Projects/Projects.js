import React, { useState } from 'react'
import { Card, CardDeck } from 'react-bootstrap'
import './Projects.css'
import educaCard from '../../img/educa-card.jpg'
import { ProjectCard } from '../../components/ProjectCard/ProjectCard'

export const Projects = () => {

    const cards = [
        {
            ImgURL:'https://github.com/fangy43/fangy43.github.io/blob/dev/src/img/educa-card.jpg?raw=true',
            Topic:"Educa",
            Des:" Web application for Education  - Software Development Process Project with my team at KMITL.",
            GithubRef:"https://github.com/educa-kmitl",
            Ref:"https://educa.now.sh",
        }
        
    ]


    return (
        <div className="project">
            <h1>Projects</h1>
            <div className="projects-list">
                {cards.map((items) => {
                    return(
                        <ProjectCard
                            ImgURL={items.ImgURL}
                            Topic={items.Topic}
                            Des={items.Des}
                            GithubRef={items.GithubRef}
                            Ref={items.Ref}
                         />
                    )
                })}
            </div>
        </div>
    )
}