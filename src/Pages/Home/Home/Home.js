import React from 'react';
import Banner from '../Home/Banner/Banner';
import Navigation from '../Home/Navigation/Navigation';
import About from '../Home/About/About';
import PlantServices from './PlantServices/PlantServices';
import Reviews from './Reviews/Reviews';
import Footer from './Footer/Footer';
import CarePlants from './CarePlants/CarePlants';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <About></About>
            <PlantServices></PlantServices>
            <Reviews></Reviews>
            <CarePlants></CarePlants>
            <Footer></Footer>
        </div>
    );
};

export default Home;