import React from 'react';
import TextBox from '../../Comman/Feilds/TextBox';
import B1 from "../../../Image/B1.jpg";
import Button from '../../Comman/Feilds/Button';

const BookYourTable = () => {
    return (
        <div className="BookYourTable BGColor commanBlock">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="tableBook">
                            <h3>Book Your Table For Evening Party</h3>
                            <hr />
                            <form>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <TextBox type="text" label="Name" />
                                    </div>
                                    <div className="col-lg-6">
                                        <TextBox type="text" label="Email" />
                                    </div>
                                    <div className="col-lg-6">
                                        <TextBox type="text" label="Mobile No." />
                                    </div>
                                    <div className="col-lg-6">
                                        <div class="form-group">
                                            <label for="sel1">Table No.</label>
                                            <select class="form-control" id="sel1">
                                                <option>-select Table-</option>
                                                <option>702</option>
                                                <option>801</option>
                                                <option>555</option>
                                                <option>780</option>
                                                <option>310</option>
                                                <option>510</option>
                                                <option>816</option>
                                                <option>101</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div class="BtnSubmit">
                                            <Button type="submit" value="Book now" />
                                        </div>

                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                    <div className="col-lg-6">
                        <img src={ B1 } className="img-fluid" />

                    </div>
                </div>


            </div>
        </div>
    );
};

export default BookYourTable;
