import React from 'react';
import Hero from '../Hero/Hero';
import Services from '../Services/Services';
import './Home.css'


const Home = () => {
    return (
        <div>
            <Hero/>   
            <Services home={true}/>         
        </div>
    );
};

export default Home;