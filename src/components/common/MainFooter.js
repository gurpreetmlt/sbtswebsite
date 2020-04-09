import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom';
import SbtsLogo from '../../assets/images/logo/sbtsLogo.png';
import LocationMap from '../../assets/images/marker/pin.png';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
                <div id="footer" className="theme-footer-one">
                    <div className="shape-one"></div>
                    <img src={require("../../assets/images/shape/shape-67.svg")} alt="" className="shape-two" />
                    <div className="top-footer">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 col-sm-6 col-12 about-widget">
                                    <a onClick={()=>this.props.history.push('/')} className="Footerlogo"><img src={SbtsLogo} alt="" /></a>
                                    <a href="#" className="email">info@sbts.com</a>
                                    <a href="#" className="phone">1234567890</a>
                                </div>
                                <div className="col-lg-3 col-lg-3 col-sm-6 col-12 footer-list">
                                    <h5 className="title">Products</h5>
                                    <ul>
                                        <li><a onClick={()=>this.props.history.push('/eGoverment')}>E-Goverment</a></li>
                                        <li><a onClick={()=>this.props.history.push('/financial')}>Financial</a></li>
                                        <li><a onClick={()=>this.props.history.push('/training')}>Training</a></li>
                                        <li><a onClick={()=>this.props.history.push('/callcenter')}>Call Center</a></li>
                                    </ul>
                                </div>
                                <div className="col-lg-3 col-sm-6 col-12 footer-list">
                                    <h5 className="title">Quick Links</h5>
                                    <ul>
                                        <li><a onClick={()=>this.props.history.push('/')}>Home</a></li>
                                        <li><a onClick={()=>this.props.history.push('/services')}>Services</a></li>
                                        <li><a onClick={()=>this.props.history.push('/careers')}>Careers</a></li>
                                        <li><a onClick={()=>this.props.history.push('/media')}>Media Kit</a></li>
                                        <li><a onClick={()=>this.props.history.push('/portfolio')}>Portfolio</a></li>
                                    </ul>
                                </div>
                                <div className="col-lg-3 col-lg-2 col-sm-6 col-12 footer-information">
                                    <h5 className="title">Our Offices</h5>
                                    <div className="officelocations">
                                        <p><div className="mappin"><img src={LocationMap} /></div><span>Washington, DC, USA</span></p>
                                        <p><div className="mappin"><img src={LocationMap} /></div><span>Freetown, Sierra Leone</span></p>
                                        <p><div className="mappin"><img src={LocationMap} /></div><span> Pune, India </span></p>
                                        <p><div className="mappin"><img src={LocationMap} /></div><span> Monrovia, Liberia </span></p>
                                        <p><div className="mappin"><img src={LocationMap} /></div><span> Kinsasha, Congo </span></p>
                                    </div>

                                    <ul className="FooterIcons">
                                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                        <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="bottom-footer">
                            <div className="clearfix">
                                <p>&copy; 2020 copyright all right reserved</p>
                                <ul>
                                    <li><a onClick={()=>this.props.history.push('/privacy')}>Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default withRouter(Footer);
