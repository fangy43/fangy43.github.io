import React from 'react'
import './Home.css'
import icon from '../img/profile-sq.jpg'

export const Home = () => {
    return (
        <div className="home">
            <div className="home-context" >
                <img src={icon} alt="" />
                <div className="home-text">
                    <h1>Welcome</h1>
                    <p>This is my personal website. for learning about
                    React Js Html and Css. Let's see !!
                    </p>
                    
                </div>
            </div>
        </div>
    )
}