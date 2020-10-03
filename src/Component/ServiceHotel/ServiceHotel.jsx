import React from 'react';
import BookYourTable from './BookYourTable/BookYourTable';
import SericesInfo from './SericesInfo/SericesInfo';
import ServiceBlock from './ServiceBlock/ServiceBlock';
import ServiceHeading from './ServiceHeading/ServiceHeading';

const ServiceHotel = () => {
    return (
        <div className="Services">
            <ServiceHeading />
            <ServiceBlock />
            <SericesInfo />
            <BookYourTable />
        </div>
    );
};

export default ServiceHotel;
