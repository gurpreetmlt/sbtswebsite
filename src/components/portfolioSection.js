import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom';
import './portfolioStyles.css';
import { filterSelection } from './portfolioScript.js';

class PortfolioSection extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {
        filterSelection("all")
        let btnContainer = document.getElementById("myBtnContainer");
        let btns = btnContainer.getElementsByClassName("btn");
        for (let i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function () {
                let current = document.getElementsByClassName("active");
                current[0].className = current[0].className.replace(" active", "");
                this.className += " active";
            });
        }
    }

    render() {
        return (
            <div>
                <h2>PORTFOLIO</h2>
                <div id="myBtnContainer">
                    <button className="btn active" onClick={() => filterSelection('all')}> Show all</button>
                    <button className="btn" onClick={() => filterSelection('nature')}> Nature</button>
                    <button className="btn" onClick={() => filterSelection('cars')}> Cars</button>
                    <button className="btn" onClick={() => filterSelection('people')}> People</button>
                </div>

                <div className="row">
                    <div className="column nature">
                        <div className="content">
                            <img src={require("../assets/images/w3images/mountains.jpg")} alt="Mountains" style={{ width: '100%' }} />
                            <h4>Mountains</h4>
                            <p>Lorem ipsum dolor..</p>
                        </div>
                    </div>
                    <div className="column nature">
                        <div className="content">
                            <img src={require("../assets/images/w3images/lights.jpg")} alt="Lights" style={{ width: '100%' }} />
                            <h4>Lights</h4>
                            <p>Lorem ipsum dolor..</p>
                        </div>
                    </div>
                    <div className="column nature">
                        <div className="content">
                            <img src={require("../assets/images/w3images/nature.jpg")} alt="Nature" style={{ width: '100%' }} />
                            <h4>Forest</h4>
                            <p>Lorem ipsum dolor..</p>
                        </div>
                    </div>

                    <div className="column cars">
                        <div className="content">
                            <img src={require("../assets/images/w3images/cars1.jpg")} alt="Car" style={{ width: '100%' }} />
                            <h4>Retro</h4>
                            <p>Lorem ipsum dolor..</p>
                        </div>
                    </div>
                    <div className="column cars">
                        <div className="content">
                            <img src={require("../assets/images/w3images/cars2.jpg")} alt="Car" style={{ width: '100%' }} />
                            <h4>Fast</h4>
                            <p>Lorem ipsum dolor..</p>
                        </div>
                    </div>
                    <div className="column cars">
                        <div className="content">
                            <img src={require("../assets/images/w3images/cars3.jpg")} alt="Car" style={{ width: '100%' }} />
                            <h4>Classic</h4>
                            <p>Lorem ipsum dolor..</p>
                        </div>
                    </div>

                    <div className="column people">
                        <div className="content">
                            <img src={require("../assets/images/w3images/people1.jpg")} alt="People" style={{ width: '100%' }} />
                            <h4>Girl</h4>
                            <p>Lorem ipsum dolor..</p>
                        </div>
                    </div>
                    <div className="column people">
                        <div className="content">
                            <img src={require("../assets/images/w3images/people2.jpg")} alt="People" style={{ width: '100%' }} />
                            <h4>Man</h4>
                            <p>Lorem ipsum dolor..</p>
                        </div>
                    </div>
                    <div className="column people">
                        <div className="content">
                            <img src={require("../assets/images/w3images/people3.jpg")} alt="People" style={{ width: '100%' }} />
                            <h4>Woman</h4>
                            <p>Lorem ipsum dolor..</p>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}

export default withRouter(PortfolioSection);
