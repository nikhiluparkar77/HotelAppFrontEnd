import React from 'react';
import Button from '../../Comman/Feilds/Button';
import TextBox from '../../Comman/Feilds/TextBox';
import FilterResult from './FilterResult';

const FilterRoom = () => {
    return (
        <div className="Filter">
            <div className="container">

                <div className="Filter BGColor pl-4 pr-4">
                    <div className="row">
                        <div className="col-lg-3">
                            <div class="form-group">
                                <label for="sel1">Purpose</label>
                                <select class="form-control" id="sel1">
                                    <option>-select purpose-</option>
                                    <option>Personal</option>
                                    <option>Family</option>
                                    <option>Party</option>
                                    <option>Social Event</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div class="form-group">
                                <label for="sel1">Numbar of rooms</label>
                                <select class="form-control" id="sel1">
                                    <option>-select no. rooms-</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>

                                </select>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <TextBox label="Date" type="date" />
                        </div>
                        <div className="col-lg-3">
                            <div class="form-group">
                                <div className="BookBtn">
                                    <Button value="Search Result" />
                                </div>

                            </div>
                        </div>
                    </div>






                </div>
                <FilterResult />
            </div>
        </div>
    );
};

export default FilterRoom;
