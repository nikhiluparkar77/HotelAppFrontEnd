import React from 'react';
import BookingHeader from './BookingHeader/BookingHeader';
import FilterRoom from './FilterRoom/FilterRoom';

const BookingHotel = () => {
    return (
        <div className="boking">
            <BookingHeader />
            <FilterRoom />

        </div>
    );
};

export default BookingHotel;
