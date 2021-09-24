import React from 'react'
import {Icon, FotoProfile, ProfileIcon, SubscribeIcon, LogoutIcon} from '../assets/assets';

import { Link } from 'react-router-dom';

const Left = () => {
    return (
        <div className="left">
            <Link to="/home">
                <img src={Icon} alt="wow" className="icon"/>
            </Link>
            <img src={FotoProfile} alt="foto-profile" className="foto-profile"/>
            <p className="nama">Gandha Saputra</p>
            <p className="status-subs">Not Subscribed Yet </p>
            <hr />
            <Link to="/profile">
                <img src={ProfileIcon} alt="profile-icon" className="profile-icon"/>
            </Link>
            <Link to="/subscribe">
                <img src={SubscribeIcon} alt="subs-icon" className="subs-icon"/>
            </Link>
            <hr />
            <Link to="/">
            <img src={LogoutIcon} alt="logout-icon" className="logout-icon"/>
            </Link>
        </div>
    )
}

export default Left
