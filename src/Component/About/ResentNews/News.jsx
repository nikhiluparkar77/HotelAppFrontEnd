import React from 'react';
import { Link } from "react-router-dom";
import B1 from "../../../Image/B1.jpg";
import B2 from "../../../Image/B2.jpg";

const News = () => {
    return (
        <div className="news p-4">
            <div id="News" className="carousel slide" data-ride="carousel">


                <ul className="carousel-indicators">
                    <li data-target="#News" data-slide-to="0" className="active"></li>
                    <li data-target="#News" data-slide-to="1"></li>
                    <li data-target="#News" data-slide-to="2"></li>
                </ul>


                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row pt-4">
                            <div className="col-lg-6">
                                <div className="card">
                                    <img className="card-img-top" src={ B1 } alt="Card image" />
                                    <div className="card-body">

                                        <div className="row">
                                            <div className="col-lg-12">
                                                <h5 className="card-title">News Heading 1 <span className="text-right NewsDate">12-07-2020</span></h5>

                                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                                <Link className="SellingLink">Read More ...</Link>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card">
                                    <img className="card-img-top" src={ B2 } alt="Card image" />
                                    <div className="card-body">

                                        <div className="row">
                                            <div className="col-lg-12">
                                                <h5 className="card-title">News Heading 2 <span className="text-right NewsDate">18-06-2020</span></h5>
                                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                                <Link className="SellingLink">Read More ...</Link>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row pt-4">
                            <div className="col-lg-6">
                                <div className="card">
                                    <img className="card-img-top" src={ B1 } alt="Card image" />
                                    <div className="card-body">

                                        <div className="row">
                                            <div className="col-lg-12">
                                                <h5 className="card-title">News Heading 3 <span className="text-right NewsDate">19-07-2020</span></h5>
                                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                                <Link className="SellingLink">Read More ...</Link>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card">
                                    <img className="card-img-top" src={ B2 } alt="Card image" />
                                    <div className="card-body">

                                        <div className="row">
                                            <div className="col-lg-12">
                                                <h5 className="card-title">News Heading 4 <span className="text-right NewsDate">07-08-2020</span></h5>
                                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                                <Link className="SellingLink">Read More ...</Link>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row pt-4">
                            <div className="col-lg-6">
                                <div className="card">
                                    <img className="card-img-top" src={ B1 } alt="Card image" />
                                    <div className="card-body">

                                        <div className="row">
                                            <div className="col-lg-12">
                                                <h5 className="card-title">News Heading 5 <span className="text-right NewsDate">21-09-2020</span></h5>
                                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                                <Link className="SellingLink">Read More ...</Link>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card">
                                    <img className="card-img-top" src={ B2 } alt="Card image" />
                                    <div className="card-body">

                                        <div className="row">
                                            <div className="col-lg-12">
                                                <h5 className="card-title">News Heading 6 <span className="text-right NewsDate">27-10-2020</span></h5>
                                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                                <Link className="SellingLink">Read More ...</Link>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <a className="carousel-control-prev" href="#News" data-slide="prev">
                        <span className="carousel-control-prev-icon"></span>
                    </a>
                    <a className="carousel-control-next" href="#News" data-slide="next">
                        <span className="carousel-control-next-icon"></span>
                    </a>

                </div>

            </div>
        </div >
    );
};

export default News;
