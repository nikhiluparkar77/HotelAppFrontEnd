import React from 'react';
import TextBox from '../../Comman/Feilds/TextBox';
import Button from '../../Comman/Feilds/Button';
const Filter = () => {
    return (
        <div className="Filter BGColor">
            <div className="container">
                <div className="row ">

                    <div className="col-lg-3">
                        <TextBox type="date" label="Check In" />

                    </div>
                    <div className="col-lg-3">
                        <TextBox type="date" label="Check Out" />
                    </div>
                    <div className="col-lg-3">
                        <TextBox type="number" label="Number Of Person" />
                    </div>
                    <div className="col-lg-2">
                        <div className="BookBtn">
                            <Button type="submit" value="Book now" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Filter;
