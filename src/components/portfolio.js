import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom';
import $ from 'jquery';
import HeaderMain from './common/headerMain';
import HeaderBanner from './common/HeaderBanner';
import WhatWeDo from './common/WhatWeDo';
import Aboutus from './common/Aboutus';
import DoProjects from './common/DoProjects';
import Products from './common/Products';
import MainFooter from './common/MainFooter';
import Leadership from './common/Leadership';
import StaticMap from './common/StaticMap';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

class AppIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };
  }

//   componentDidMount () {
//     const script = document.createElement("script");

//     script.src = "https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js";
//     script.src = "../assets/js/theme.js";
//     script.async = true;

//     document.body.appendChild(script);
// }

  render() {
    return (
      <div>
        <HeaderMain />
        <HeaderBanner />
        <Aboutus />
        <Products />
        Hello
        <WhatWeDo showReadMoreBtn={true} />
        <Leadership />
        <StaticMap />
        <DoProjects />
        <MainFooter />
      </div>
    );

  }
}

export default withRouter(AppIndex);
