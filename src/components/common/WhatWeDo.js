import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom';
import One from '../../assets/images/home/ourservices.png';

class WhatWeDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="WhatWedo agn-about-us">
                <img src={require("../../assets/images/shape/shape-61.svg")} alt="" className="shape-one" />
                <img src={require("../../assets/images/shape/shape-64.svg")} alt="" className="shape-two" data-aos="fade-left" />
                <img src={require("../../assets/images/shape/shape-65.svg")} alt="" className="shape-three" data-aos="fade-right" />
                <img src={require("../../assets/images/shape/shape-60.svg")} alt="" className="shape-four" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 order-lg-last">
                            <div className="text-wrapper">
                                <div className="theme-title-one">
                                    <div className="upper-title">Our Services</div>
                                    <h2 className="main-title">Enterprise Solutions for a better tomorrow</h2>
                                </div>
                                <p>As a full-service international ICT company whose clients have varied complex needs, SBTS Group champions the position of providing expertise in a range of current and emerging technologies. It is our purpose to simplify your technology so that you can focus on running your organization, and we know the best way to accomplish that is to listen to your IT challenges and create a plan that is customized for what you do and how you do it.</p>
                                {this.props.showReadMoreBtn && <a href="#" class="contact-us white-shdw-button">Read More <i class="icon flaticon-next"></i></a>}
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-first">
                            <div className="img-box">
                                <img src={One} alt="" className="main-img" />
                            </div>
                        </div>
                    </div>
                </div>
                <a href="#" className="learn-more theme-button-two" data-aos="fade-left">Learn More <i class="fa fa-angle-right icon-right" aria-hidden="true"></i></a>
            </div>
        );

    }
}

export default withRouter(WhatWeDo);