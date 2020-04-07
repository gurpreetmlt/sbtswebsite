import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom';
import SbtsLogo from '../../assets/images/logo/sbtsLogo.png';
import {Navbar,Nav,NavItem,NavDropdown,MenuItem,Container,Card,Button} from "react-bootstrap";
  

class MainHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="theme-main-menu theme-menu-one">
                <div className="container">
                    <div className="row">
                        <div className="col-8 col-md-4">
                        <div className="logo"><a onClick={()=>this.props.history.push('/')}><img style={{width:'300px'}} src={SbtsLogo} alt="" /></a></div>
                        </div>
                        <div className="col-md-8">
                        <Navbar collapseOnSelect bg="" variant="light" expand="lg">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                        <Nav.Link onClick={()=>this.props.history.push('/')}>Home</Nav.Link>
                        <Nav.Link onClick={()=>this.props.history.push('/services')}>Services</Nav.Link>
                        <NavDropdown title="Products" id="basic-nav-dropdown">
                        <NavDropdown.Item onClick={()=>this.props.history.push('/eGoverment')}>E-Goverment</NavDropdown.Item>
                        <NavDropdown.Item onClick={()=>this.props.history.push('/financial')}>Financial</NavDropdown.Item>
                        <NavDropdown.Item onClick={()=>this.props.history.push('/training')}>Training</NavDropdown.Item>
                        <NavDropdown.Item onClick={()=>this.props.history.push('/callcenter')}>Call Center</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link onClick={()=>this.props.history.push('/careers')}>Careers</Nav.Link>
                        <Nav.Link onClick={()=>this.props.history.push('/contactus')}>Contact Us</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                        </Navbar>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}

export default withRouter(MainHeader);
