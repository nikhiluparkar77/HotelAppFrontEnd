import React from 'react';
import ClientReview from '../../Home/ClientReview/ClientReview';
import News from './News';

const ResentNews = () => {
    return (
        <div className="recentNews commanBlock">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h3>Recent News</h3>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.  </p>
                    </div>
                </div>
                <News />


            </div>
        </div>
    );
};

export default ResentNews;
