import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom';
import One from '../../assets/images/home/1.jpg';
import aboutussection from '../../assets/images/home/aboutussection.png';



class AboutUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
                <div className="agn-about-us">
                    <img src={require("../../assets/images/shape/shape-61.svg")} alt="" className="shape-one" />
                    <img src={require("../../assets/images/shape/shape-64.svg")} alt="" className="shape-two" data-aos="fade-left" />
                    <img src={require("../../assets/images/shape/shape-65.svg")} alt="" className="shape-three" data-aos="fade-right" />
                    <img src={require("../../assets/images/shape/shape-60.svg")} alt="" className="shape-four" />
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 order-lg-last">
                                <div className="text-wrapper">
                                    <div className="theme-title-one">
                                        <div className="upper-title">About us</div>
                                    </div>
                                    <p className="aboutP">SBTS Group Inc. is a global technology firm that helps governments understand and coordinate attention to economic organizational, technological innovation, and integrated enterprise.</p>
                                    <p className="aboutP"> SBTS moves the needle beyond the challenges governments face with commercial counterparts by fostering peer to peer knowledge sharing and using current data collection and reporting techniques to spot tendencies and navigate change.  </p>
                                    <p className="aboutP"> With suites of products covering e-government, payment solutions and strategic consulting, SBTS brings 30 years of experience helping governments and organizations alike innovate though strategic projects, research, and technological initiatives.  </p>
                                </div>
                            </div>
                            <div className="col-lg-6 order-lg-first">
                                <div className="img-box">
                                    <img src={aboutussection} alt="" className="main-img" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="#" className="learn-more theme-button-two" data-aos="fade-left">Learn More <i class="fa fa-angle-right icon-right" aria-hidden="true"></i></a>
                </div>
        );

    }
}

export default withRouter(AboutUs);