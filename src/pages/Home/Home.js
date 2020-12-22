import React from 'react'
import './Home.css'
import icon from '../../img/profile-sq.jpg'

export const Home = () => {
    return (
        <div className="home">
            <div className="home-context" >
                <img src={icon} alt="" className="icon"/>
                <div className="home-text">
                    <h1 className="header-home" >Welcome</h1>
                    <p className="text-home"> This is my personal website. for learning about
                    React Js Html and Css. Let's see !!
                    </p>
                    
                </div>
            </div>
        </div>
    )
}