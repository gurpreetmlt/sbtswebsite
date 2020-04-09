import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom';
import $ from 'jquery';
import HeaderMain from './common/headerMain';
import PortfolioSection from './portfolioSection';
import MainFooter from './common/MainFooter';

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
        <PortfolioSection />
        <MainFooter />
      </div>
    );

  }
}

export default withRouter(AppIndex);
