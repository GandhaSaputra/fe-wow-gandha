import React from 'react';
import './Home.css';

import Left from '../../components/Left';
import RightHome from '../../components/RightHome';

const Home = () => {
    return (
        <div className="container-home">
            <Left/>
            <RightHome/>
        </div>
    )
}

export default Home;
