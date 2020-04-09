import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom';
import UbaLogo from '../../assets/images/clients/ubaLogo.jpg';
import Thworldbank from '../../assets/images/clients/thworldbank.jpg';
import StandardChartered from '../../assets/images/clients/standardChartered.jpg';
import SLCBLogo from '../../assets/images/clients/sLCBLogo.jpg';
import NaswLogo from '../../assets/images/clients/naswLogo.jpg';
import AccLogo from '../../assets/images/clients/accLogo.jpg';
import AredentLogo from '../../assets/images/clients/aredentLogo.jpg';
import BaLogo from '../../assets/images/clients/baLogo.jpg';
import CdcLogo from '../../assets/images/clients/cdcLogo.jpg';
import DfidLogo from '../../assets/images/clients/dfidLogo.jpg';
import EcobankLogo from '../../assets/images/clients/ecobankLogo.jpg';
import HasLogo from '../../assets/images/clients/hasLogo.jpg';
import IOMLogo from '../../assets/images/clients/IOMLogo.jpg';
import MedsattuLogo from '../../assets/images/clients/medsattuLogo.jpg';

class Ourclient extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div class=" ourClient our-feature-app p0 mt-200">
                <div className="container">
                <div class="theme-title-one text-center"><div class="upper-title">Our Valued clients
                </div></div>
            <div class="row single-feature-box">
            <div class="col-md-12 col-lg-12">
                <div class="feature-img-box">
                    <img src={require("../../assets/images/shape/shape-45.svg")} alt="" class="shape-one" />
                    <img src={require("../../assets/images/shape/shape-46.svg")} alt="" class="shape-two" />
                    <img src={require("../../assets/images/shape/shape-47.svg")} alt="" class="shape-three" />
                    <img src={require("../../assets/images/shape/shape-48.svg")} alt="" class="shape-four" />
                    <img src={require("../../assets/images/shape/shape-49.svg")} alt="" class="shape-five" />
                    <div class="row service-box-row">
                        <div class="col-md-2 service-boxes">
                            <div class="feature-offer-box support-feature js-tilt">
                                <img src={UbaLogo} alt="" />
                            </div>
                        </div>
                        <div class="col-md-2 service-boxes">
                            <div class="feature-offer-box support-feature js-tilt">
                                <img src={Thworldbank} alt="" />
                            </div>
                        </div>
                        <div className="col-md-2 service-boxes">
                        <div class="feature-offer-box support-feature js-tilt">
                                <img src={StandardChartered} alt="" />
                            </div>
                        </div>
                        <div class="col-md-2 service-boxes">
                            <div class="feature-offer-box support-feature js-tilt">
                                <img src={SLCBLogo} alt="" />
                            </div>
                        </div>
                        <div class="col-md-2 service-boxes">
                            <div class="feature-offer-box support-feature js-tilt">
                                <img src={NaswLogo} alt="" />
                            </div>
                        </div> 
                    </div>

                    <div class="row service-box-row">
                        <div class="col-md-2 service-boxes">
                            <div class="feature-offer-box support-feature js-tilt">
                                <img src={AccLogo} alt="" />
                            </div>
                        </div>
                        <div class="col-md-2 service-boxes">
                            <div class="feature-offer-box support-feature js-tilt">
                                <img src={AredentLogo} alt="" />
                            </div>
                        </div>
                        <div className="col-md-2 service-boxes">
                        <div class="feature-offer-box support-feature js-tilt">
                                <img src={BaLogo} alt="" />
                            </div>
                        </div>
                        <div class="col-md-2 service-boxes">
                            <div class="feature-offer-box support-feature js-tilt">
                                <img src={CdcLogo} alt="" />
                            </div>
                        </div>
                        <div class="col-md-2 service-boxes">
                            <div class="feature-offer-box support-feature js-tilt">
                                <img src={DfidLogo} alt="" />
                            </div>
                        </div> 
                    </div>

                    <div class="row service-box-row">
                        <div class="col-md-2 service-boxes">
                            <div class="feature-offer-box support-feature js-tilt">
                                <img src={EcobankLogo} alt="" />
                            </div>
                        </div>
                        <div class="col-md-2 service-boxes">
                            <div class="feature-offer-box support-feature js-tilt">
                                <img src={HasLogo} alt="" />
                            </div>
                        </div>
                        <div className="col-md-2 service-boxes">
                        <div class="feature-offer-box support-feature js-tilt">
                                <img src={IOMLogo} alt="" />
                            </div>
                        </div>
                        <div class="col-md-2 service-boxes">
                            <div class="feature-offer-box support-feature js-tilt">
                                <img src={MedsattuLogo} alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        </div>
        </div>
        );

    }
}

export default withRouter(Ourclient);