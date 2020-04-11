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

            <div class="portFolio p0 mt-200">
                <div className="container">
                    <div class="theme-title-one text-center">
                        <div class="upper-title">Our Portfolio 
                        </div>
                    </div>

                    <div class="row service-box-row">
                    <div id="myBtnContainer">
                                        <button className="btn active" onClick={() => filterSelection('all')}> Show all</button>
                                        <button className="btn" onClick={() => filterSelection('nature')}> Website</button>
                                        <button className="btn" onClick={() => filterSelection('cars')}> Corporate Identity</button>
                                        <button className="btn" onClick={() => filterSelection('people')}> Postcard</button>
                                        <button className="btn" onClick={() => filterSelection('people')}> Multimedia Presentation</button>
                                        <button className="btn" onClick={() => filterSelection('people')}> Animation</button>

                                    </div>

                        </div>

                    <div class="row service-box-row">
                                   
                                    <div className="column nature">
                                        <div className="content">
                                            <img src={require("../assets/images/portfolio/ABN-International-Group.jpg")} alt="Mountains" style={{ width: '100%' }} />
                                            <h5>ABN International Group</h5>
                                           
                                        </div>
                                    </div>
                                    <div className="column nature">
                                        <div className="content">
                                            <img src={require("../assets/images/portfolio/ABN-International-Group2.jpg")} alt="Lights" style={{ width: '100%' }} />
                                            <h5>ABN International Group</h5>
                                          
                                        </div>
                                    </div>
                                    <div className="column nature">
                                        <div className="content">
                                            <img src={require("../assets/images/portfolio/abnlinks.jpg")} alt="Nature" style={{ width: '100%' }} />
                                            <h5>Abnlinks</h5>
                                           
                                        </div>
                                    </div>

                                    <div className="column cars">
                                        <div className="content">
                                            <img src={require("../assets/images/portfolio/animation.jpg")} alt="Car" style={{ width: '100%' }} />
                                            <h5>SBTS Group</h5>
                                            
                                        </div>
                                    </div>
                                    <div className="column cars">
                                        <div className="content">
                                            <img src={require("../assets/images/portfolio/Costom-Printers.jpg")} alt="Car" style={{ width: '100%' }} />
                                            <h5>Costom Printers</h5>
                                            
                                        </div>
                                    </div>
                                    <div className="column cars">
                                        <div className="content">
                                            <img src={require("../assets/images/portfolio/First-Line-Air.jpg")} alt="Car" style={{ width: '100%' }} />
                                            <h5>First Line Air</h5>
                                            
                                        </div>
                                    </div>

                                    <div className="column people">
                                        <div className="content">
                                            <img src={require("../assets/images/portfolio/First-Line-Airways.jpg")} alt="People" style={{ width: '100%' }} />
                                            <h5>First Line Airways</h5>
                                            
                                        </div>
                                    </div>
                                    <div className="column people">
                                        <div className="content">
                                            <img src={require("../assets/images/portfolio/First-Line-Airways2.jpg")} alt="People" style={{ width: '100%' }} />
                                            <h5>First Line Airways</h5>
                                            
                                        </div>
                                    </div>
                                    <div className="column people">
                                        <div className="content">
                                            <img src={require("../assets/images/portfolio/ICEL2.jpg")} alt="People" style={{ width: '100%' }} />
                                            <h5>ICEL</h5>
                                            
                                        </div>
                                    </div>

                                    <div className="column people">
                                        <div className="content">
                                            <img src={require("../assets/images/portfolio/Integnets.jpg")} alt="People" style={{ width: '100%' }} />
                                            <h5>Integnets</h5>
                                            
                                        </div>
                                    </div>

                                    <div className="column people">
                                        <div className="content">
                                            <img src={require("../assets/images/portfolio/integnets2.jpg")} alt="People" style={{ width: '100%' }} />
                                            <h5>integnets</h5>
                                            
                                        </div>
                                    </div>

                                    <div className="column people">
                                        <div className="content">
                                            <img src={require("../assets/images/portfolio/Izora.jpg")} alt="People" style={{ width: '100%' }} />
                                            <h5>Izora</h5>
                                            
                                        </div>
                                    </div>

                                    <div className="column people">
                                        <div className="content">
                                            <img src={require("../assets/images/portfolio/Kambi-Information-Technology,-Inc..jpg")} alt="People" style={{ width: '100%' }} />
                                            <h5>Kambi Information Technology, Inc.</h5>
                                            
                                        </div>
                                    </div>

                                    <div className="column people">
                                        <div className="content">
                                            <img src={require("../assets/images/portfolio/Kambi-Travels.jpg")} alt="People" style={{ width: '100%' }} />
                                            <h5>Kambi Travels</h5>
                                            
                                        </div>
                                    </div>

                                    <div className="column people">
                                        <div className="content">
                                            <img src={require("../assets/images/portfolio/MGN-Health-Services.jpg")} alt="People" style={{ width: '100%' }} />
                                            <h5>MGN Health Services</h5>
                                            
                                        </div>
                                    </div>

                                    <div className="column people">
                                        <div className="content">
                                            <img src={require("../assets/images/portfolio/MGN-Health-Services2.jpg")} alt="People" style={{ width: '100%' }} />
                                            <h5>MGN Health Services</h5>
                                            
                                        </div>
                                    </div>

                                    <div className="column people">
                                        <div className="content">
                                            <img src={require("../assets/images/portfolio/Nollywood-Superstars.jpg")} alt="People" style={{ width: '100%' }} />
                                            <h5>Nollywood Superstars</h5>
                                           
                                        </div>
                                    </div>

                                    <div className="column people">
                                        <div className="content">
                                            <img src={require("../assets/images/portfolio/PAWA-Complex-International-Inc.jpg")} alt="People" style={{ width: '100%' }} />
                                            <h5>PAWA Complex International Inc</h5>
                                           
                                        </div>
                                    </div>

                                    <div className="column people">
                                        <div className="content">
                                            <img src={require("../assets/images/portfolio/PCL-Internatinal.jpg")} alt="People" style={{ width: '100%' }} />
                                            <h5>PCL Internatinal</h5>
                                           
                                        </div>
                                    </div>

                                    <div className="column people">
                                        <div className="content">
                                            <img src={require("../assets/images/portfolio/Prime-Time-Printing.jpg")} alt="People" style={{ width: '100%' }} />
                                            <h5>Prime Time Printing</h5>
                                           
                                        </div>
                                    </div>

                                    <div className="column people">
                                        <div className="content">
                                            <img src={require("../assets/images/portfolio/SBTSGroupInc.jpg")} alt="People" style={{ width: '100%' }} />
                                            <h5>SBTS Group, Inc.</h5>
                                           
                                        </div>
                                    </div>

                                    <div className="column people">
                                        <div className="content">
                                            <img src={require("../assets/images/portfolio/SBTS-Group2.jpg")} alt="People" style={{ width: '100%' }} />
                                            <h5>SBTS Group</h5>
                                           
                                        </div>
                                    </div>

                                    <div className="column people">
                                        <div className="content">
                                            <img src={require("../assets/images/portfolio/SBTS-Group3.jpg")} alt="People" style={{ width: '100%' }} />
                                            <h5>SBTS Group</h5>
                                           
                                        </div>
                                    </div>

                                    <div className="column people">
                                        <div className="content">
                                            <img src={require("../assets/images/portfolio/SBTS-Group4.jpg")} alt="People" style={{ width: '100%' }} />
                                            <h5>SBTS Group</h5>
                                           
                                        </div>
                                    </div>

                                    <div className="column people">
                                        <div className="content">
                                            <img src={require("../assets/images/portfolio/SBTS-Group5.jpg")} alt="People" style={{ width: '100%' }} />
                                            <h5>SBTS Group</h5>
                                           
                                        </div>
                                    </div>

                                    <div className="column people">
                                        <div className="content">
                                            <img src={require("../assets/images/portfolio/SBTS-Group6.jpg")} alt="People" style={{ width: '100%' }} />
                                            <h5>SBTS Group</h5>
                                           
                                        </div>
                                    </div>

                                    <div className="column people">
                                        <div className="content">
                                            <img src={require("../assets/images/portfolio/SBTS-Group7.jpg")} alt="People" style={{ width: '100%' }} />
                                            <h5>SBTS Group</h5>
                                           
                                        </div>
                                    </div>

                                    <div className="column people">
                                        <div className="content">
                                            <img src={require("../assets/images/portfolio/SBTS-Group8.jpg")} alt="People" style={{ width: '100%' }} />
                                            <h5>SBTS Group</h5>
                                           
                                        </div>
                                    </div>

                                
                                    <div className="column people">
                                        <div className="content">
                                            <img src={require("../assets/images/portfolio/Sierra-Leone-Homecoming-2003.jpg")} alt="People" style={{ width: '100%' }} />
                                            <h5>Sierra Leone Homecoming 2003</h5>
                                           
                                        </div>
                                    </div>

                                    <div className="column people">
                                        <div className="content">
                                            <img src={require("../assets/images/portfolio/Sierra-Leone-Home-coming-Summit.jpg")} alt="People" style={{ width: '100%' }} />
                                            <h5>Sierra Leone Home coming Summit</h5>
                                           
                                        </div>
                                    </div>

                                    <div className="column people">
                                        <div className="content">
                                            <img src={require("../assets/images/portfolio/Slick-Willie's.jpg")} alt="People" style={{ width: '100%' }} />
                                            <h5>Slick Willie's</h5>
                                           
                                        </div>
                                    </div>

                                    
                                    <div className="column people">
                                        <div className="content">
                                            <img src={require("../assets/images/portfolio/Sonako-Homes.jpg")} alt="People" style={{ width: '100%' }} />
                                            <h5>Sonako Homes</h5>
                                           
                                        </div>
                                    </div>

                                    <div className="column people">
                                        <div className="content">
                                            <img src={require("../assets/images/portfolio/Stephanie-Okereke.jpg")} alt="People" style={{ width: '100%' }} />
                                            <h5>Stephanie Okereke</h5>
                                           
                                        </div>
                                    </div>

                                    
                                    <div className="column people">
                                        <div className="content">
                                            <img src={require("../assets/images/portfolio/Sulaiman-Banja-Tejan-Sie.jpg")} alt="People" style={{ width: '100%' }} />
                                            <h5>Sulaiman Banja Tejan-Sie</h5>
                                           
                                        </div>
                                    </div>

                                        
                                    <div className="column people">
                                        <div className="content">
                                            <img src={require("../assets/images/portfolio/The-African-Yellow-Pages.jpg")} alt="People" style={{ width: '100%' }} />
                                            <h5>The African Yellow Pages</h5>
                                           
                                        </div>
                                    </div>

                                          
                                    <div className="column people">
                                        <div className="content">
                                            <img src={require("../assets/images/portfolio/The-Sigma-Club---Fourah-Bay-Collage.jpg")} alt="People" style={{ width: '100%' }} />
                                            <h5>The Sigma Club - Fourah Bay Collage</h5>
                                           
                                        </div>
                                    </div>

                                    <div className="column people">
                                        <div className="content">
                                            <img src={require("../assets/images/portfolio/The-Sigma-Club---Fourah-Bay-Collage2.jpg")} alt="People" style={{ width: '100%' }} />
                                            <h5>The Sigma Club - Fourah Bay Collage</h5>
                                           
                                        </div>
                                    </div>

                                    <div className="column people">
                                        <div className="content">
                                            <img src={require("../assets/images/portfolio/Trainingsol.jpg")} alt="People" style={{ width: '100%' }} />
                                            <h5>Trainingsol</h5>
                                           
                                        </div>
                                    </div>

                                    
                                    <div className="column people">
                                        <div className="content">
                                            <img src={require("../assets/images/portfolio/Ultima-Care.jpg")} alt="People" style={{ width: '100%' }} />
                                            <h5>Ultima Care</h5>
                                           
                                        </div>
                                    </div>

                                    <div className="column people">
                                        <div className="content">
                                            <img src={require("../assets/images/portfolio/West-African-Airlines.jpg")} alt="People" style={{ width: '100%' }} />
                                            <h5>West African Airlines</h5>
                                           
                                        </div>
                                    </div>

                                    
                                    <div className="column people">
                                        <div className="content">
                                            <img src={require("../assets/images/portfolio/West-African-Express.jpg")} alt="People" style={{ width: '100%' }} />
                                            <h5>West African Express</h5>
                                           
                                        </div>
                                    </div>

                                    <div className="column people">
                                        <div className="content">
                                            <img src={require("../assets/images/portfolio/West-African-Express2.jpg")} alt="People" style={{ width: '100%' }} />
                                            <h5>Costom Printers</h5>
                                           
                                        </div>
                                    </div>




                                    

                                </div>

                </div>
            </div>
        );

    }
}

export default withRouter(PortfolioSection);
