import React from 'react';
import ContactFrom from './ContactForm/ContactFrom';
import ContectHeader from './ContactHeader/ContectHeader';
import MapBlock from './MapBlock/MapBlock';

const ContectUs = () => {
    return (
        <div className="ContactUs">
            <ContectHeader />
            <ContactFrom />
            <MapBlock />
        </div>
    );
};

export default ContectUs;
