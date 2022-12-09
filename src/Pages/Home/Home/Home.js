import React from 'react';
import CategoryArea from '../CategoryArea/CategoryArea';
import Hero from '../Hero/Hero';
import LatestPost from '../LatestPost/LatestPost';

const Home = () => {
    return (
        <section>
            <Hero/>
            <CategoryArea/>
            <LatestPost/>
        </section>
    );
};

export default Home;