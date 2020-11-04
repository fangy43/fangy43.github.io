import React from 'react'
import './Profile.css'
import icon from '../img/profile-sq.jpg'



export const Profile = () => {
    return (
        <div className="profile">

            <div className="profile-content">
                <div className="profile-top">
                    <div className="profile-left">
                        <img src={icon} alt="" className="profile-img" />
                    </div>
                    <div className="profile-right">
                        <div className="text-header">
                            Profile <i class="far fa-id-card"></i>
                        </div>
                        <div className="text">
                            <i class="fas fa-user-tag"></i> Name : Nattarat Serirat [ fang ] <br />
                            <i class="fas fa-birthday-cake"></i> Age : 20<br />
                            <i class='far fa-calendar-check'></i> Birthdate : 22 February 2000 <br />
                            <i class="fas fa-graduation-cap"></i> Education : Computer Engineering <br />
                            <i class="fas fa-phone"></i> Contact : 080-284-8185

                        </div>
                    </div>
                </div>
                <div className="profile-bot">
                    <br />
                    ใส่ไรดี??
                </div>
            </div>

        </div>
    )
}