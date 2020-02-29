import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {withRouter} from 'react-router-dom';
import HeaderMain from './common/headerMain';
import HeaderBanner from './common/HeaderBanner';
import WhatWeDo from './common/WhatWeDo';
import Aboutus from './common/Aboutus';
import CompletedProjects from './common/CompletedProjects';
import OurGallery from './common/OurGallery';
import OurBlog from './common/OurBlog';
import DoProjects from './common/DoProjects';
import Products from './common/Products';
import MainFooter from './common/MainFooter';
import StaticMap from './common/StaticMap';

class AppIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <div>
            <HeaderMain />
            <HeaderBanner />
            <Aboutus />
            <Products />
            <WhatWeDo />
            {/* <CompletedProjects /> */}
            <DoProjects />
            <StaticMap />
            <MainFooter />
        </div>
    );
        
  }
}

export default withRouter(AppIndex);
