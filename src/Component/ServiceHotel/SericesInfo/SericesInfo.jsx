import React from 'react';
import img4 from "../../../Image/4.jpg";
const SericesInfo = () => {
    return (
        <div className="ServicesPart commanBlock">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h3>Enjoy your day.</h3>
                    </div>
                </div>
                <div className="row pt-4">
                    <div className="col-lg-12">
                        <ul class="nav nav-pills" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active" data-toggle="pill" href="#ItalianFood">Italian Food</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="pill" href="#SpaComplex">Spa Complex</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="pill" href="#OutdoorRestaurant">Outdoor Restaurant</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="pill" href="#PoolsideBar">Poolside Bar</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="pill" href="#ChildrenPlayground">Children Playground</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="pt-4">

                    <div className="tab-content">
                        <div id="ItalianFood" className="container tab-pane active">
                            <div className="row">
                                <div className="col-lg-6">
                                    <img src={ img4 } className="img-fluid" />
                                </div>
                                <div className="col-lg-6">

                                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. </p>
                                    <p className="WorkingHour"> Working Hours </p>
                                    <div className="BookingService">
                                        <p className="service"><b>Breakfast:</b> 7am to 10am <button type="button" class="btn btn-outline-dark btn-sm float-right">Book Now</button></p>
                                        <p className="service"><b>Lunch:</b> 12pm to 2pm  <button type="button" class="btn btn-outline-dark btn-sm float-right">Book Now</button></p>
                                        <p className="service"><b>Dinner:</b> 8pm to 11pm  <button type="button" class="btn btn-outline-dark btn-sm float-right">Book Now</button></p>
                                        <p className="service"><b>Evening Bar:</b> 10pm to 2am <button type="button" class="btn btn-outline-dark btn-sm float-right">Book Now</button> </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div id="SpaComplex" className="container tab-pane fade">
                            <div className="row">
                                <div className="col-lg-6">
                                    <img src={ img4 } className="img-fluid" />
                                </div>
                                <div className="col-lg-6">

                                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. </p>
                                    <p className="WorkingHour"> Working Hours </p>
                                    <div className="BookingService">
                                        <p className="service"><b>Breakfast:</b> 7am to 10am <button type="button" class="btn btn-outline-dark btn-sm float-right">Book Now</button></p>
                                        <p className="service"><b>Lunch:</b> 12pm to 2pm  <button type="button" class="btn btn-outline-dark btn-sm float-right">Book Now</button></p>
                                        <p className="service"><b>Dinner:</b> 8pm to 11pm  <button type="button" class="btn btn-outline-dark btn-sm float-right">Book Now</button></p>
                                        <p className="service"><b>Evening Bar:</b> 10pm to 2am <button type="button" class="btn btn-outline-dark btn-sm float-right">Book Now</button> </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div id="OutdoorRestaurant" className="container tab-pane fade">
                            <div className="row">
                                <div className="col-lg-6">
                                    <img src={ img4 } className="img-fluid" />
                                </div>
                                <div className="col-lg-6">

                                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. </p>
                                    <p className="WorkingHour"> Working Hours </p>
                                    <div className="BookingService">
                                        <p className="service"><b>Breakfast:</b> 7am to 10am <button type="button" className="btn btn-outline-dark btn-sm float-right">Book Now</button></p>
                                        <p className="service"><b>Lunch:</b> 12pm to 2pm  <button type="button" className="btn btn-outline-dark btn-sm float-right">Book Now</button></p>
                                        <p className="service"><b>Dinner:</b> 8pm to 11pm  <button type="button" className="btn btn-outline-dark btn-sm float-right">Book Now</button></p>
                                        <p className="service"><b>Evening Bar:</b> 10pm to 2am <button type="button" className="btn btn-outline-dark btn-sm float-right">Book Now</button> </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div id="PoolsideBar" className="container tab-pane fade">
                            <div className="row">
                                <div className="col-lg-6">
                                    <img src={ img4 } className="img-fluid" />
                                </div>
                                <div className="col-lg-6">

                                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. </p>
                                    <p className="WorkingHour"> Working Hours </p>
                                    <div className="BookingService">
                                        <p className="service"><b>Breakfast:</b> 7am to 10am <button type="button" class="btn btn-outline-dark btn-sm float-right">Book Now</button></p>
                                        <p className="service"><b>Lunch:</b> 12pm to 2pm  <button type="button" class="btn btn-outline-dark btn-sm float-right">Book Now</button></p>
                                        <p className="service"><b>Dinner:</b> 8pm to 11pm  <button type="button" class="btn btn-outline-dark btn-sm float-right">Book Now</button></p>
                                        <p className="service"><b>Evening Bar:</b> 10pm to 2am <button type="button" class="btn btn-outline-dark btn-sm float-right">Book Now</button> </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div id="ChildrenPlayground" className="container tab-pane fade">
                            <div className="row">
                                <div className="col-lg-6">
                                    <img src={ img4 } className="img-fluid" />
                                </div>
                                <div className="col-lg-6">

                                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. </p>
                                    <p className="WorkingHour"> Working Hours </p>
                                    <div className="BookingService">
                                        <p className="service"><b>Breakfast:</b> 7am to 10am <button type="button" class="btn btn-outline-dark btn-sm float-right">Book Now</button></p>
                                        <p className="service"><b>Lunch:</b> 12pm to 2pm  <button type="button" class="btn btn-outline-dark btn-sm float-right">Book Now</button></p>
                                        <p className="service"><b>Dinner:</b> 8pm to 11pm  <button type="button" class="btn btn-outline-dark btn-sm float-right">Book Now</button></p>
                                        <p className="service"><b>Evening Bar:</b> 10pm to 2am <button type="button" class="btn btn-outline-dark btn-sm float-right">Book Now</button> </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SericesInfo;
