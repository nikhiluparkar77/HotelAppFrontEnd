import React from 'react';
import ClientReview from '../Home/ClientReview/ClientReview';
import AboutHeader from './AboutHeader/AboutHeader';
import AboutInfo from './AboutInfo/AboutInfo';
import ResentNews from './ResentNews/ResentNews';

const AboutUs = () => {
    return (
        <div className="aboutPage">
            <AboutHeader />
            <AboutInfo />
            <ResentNews />
            <div className="BGColor">
                <ClientReview />
            </div>
        </div>
    );
};

export default AboutUs;

