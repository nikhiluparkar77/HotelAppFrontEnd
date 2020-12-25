import React from 'react';
import user from "../../../Image/user.png";
 

const ClientReview = () => {
    return (
        <div className="Review commanBlock">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h3>Client Review</h3>

                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div id="Review" className="carousel slide" data-ride="carousel">
                            <ul className="carousel-indicators">
                                <li data-target="#Review" data-slide-to="0" className="active"> <img src={ user } alt="user" /></li>
                                <li data-target="#Review" data-slide-to="1"><img src={ user } alt="user" /></li>
                                <li data-target="#Review" data-slide-to="2"> <img src={ user } alt="user" /></li>
                            </ul>
                            <div className="carousel-inner text-center">
                                <div className="carousel-item active">
                                    <h4>"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old"</h4>
                                    <p>HR Manager</p>
                                </div>
                                <div className="carousel-item">
                                    <h4>"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old"</h4>
                                    <p>CEO Manager</p>
                                </div>
                                <div className="carousel-item">
                                    <h4>"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old"</h4>
                                    <p>HHD Manager</p>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#Review" data-slide="prev">
                                <span className="carousel-control-prev-icon"></span>
                            </a>
                            <a className="carousel-control-next" href="#Review" data-slide="next">
                                <span className="carousel-control-next-icon"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientReview;
