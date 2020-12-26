import React from 'react'
import './Profile.css'
import icon from '../../img/profile-sq.jpg'
import { useState } from 'react'

import portfolio from '../../img/resume-v2.png'

export const Profile = () => {
    
    const [name,setName] = useState([]) 

    return (
        <div className="profile">
            <img className = "profile-img" src = {portfolio} width = "1160px"  />
        </div>
    )
}