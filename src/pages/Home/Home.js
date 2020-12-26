import React from 'react'
import './Home.css'
import icon from '../../img/welcome.svg'

export const Home = () => {
    return (
        <div className="home">
            <div className="home-context" >
                <img src={icon} alt="" className="icon"/>
                <div className="home-text">
                    <br/>
                    <p className="text-home"> Hi! My name is Fang. This is my personal website. Let's see !!
                    </p>
                    
                </div>
            </div>
        </div>
    )
}