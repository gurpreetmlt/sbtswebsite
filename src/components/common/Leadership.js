import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom';
import One from '../../assets/images/home/1.jpg';
import aboutussection from '../../assets/images/home/aboutussection.png';



class Leadership extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
                <div className="leadership agn-about-us">
                    <img src={require("../../assets/images/shape/shape-61.svg")} alt="" className="shape-one" />
                    <img src={require("../../assets/images/shape/shape-64.svg")} alt="" className="shape-two" data-aos="fade-left" />
                    <img src={require("../../assets/images/shape/shape-65.svg")} alt="" className="shape-three" data-aos="fade-right" />
                    <img src={require("../../assets/images/shape/shape-60.svg")} alt="" className="shape-four" />
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 order-lg-first">
                                <div className="text-wrapper">
                                    <div className="theme-title-one">
                                        <div className="upper-title">Our Leadership</div>
                                        <h2 className="main-title">Evelyn A. Lewis</h2>
                                        <div className="upper-title">Chief Executive Officer</div>
                                    </div>
                                    <p className="aboutP">Evelyn Lewis is the CEO and Founder of SBTS Group. As a career entrepreneur, Evelyn consulted for government organizations for over 20 years building technology solutions for global health crises and identification management. </p>
                                    <a href="#" class="contact-us white-shdw-button">Leadership team <i class="icon flaticon-next"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="#" className="learn-more theme-button-two" data-aos="fade-left">Learn More <i class="fa fa-angle-right icon-right" aria-hidden="true"></i></a>
                </div>
        );

    }
}

export default withRouter(Leadership);