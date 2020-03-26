import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom';

class Professional extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lname: '',
            cv: '',
            address: '',
            city: '',
            state: '',
            postalcode: '',
            country: '',
            phone: '',
            email: '',
            details: '',
        };
    }

    onChange(e) {
        if (e.target.id === 'fname') {
            // console.log('inside name ****** ',e.target.value);
            this.setState({ fname: e.target.value });
        } else if (e.target.id === 'lname') {
            this.setState({ lname: e.target.value });
        } else if (e.target.id === 'cv') {
            this.setState({ cv: e.target.value });
        } else if (e.target.id === 'address') {
            this.setState({ address: e.target.value});
        } else if (e.target.id === 'city') {
            this.setState({ city: e.target.value});
        } else if (e.target.id === 'state') {
            this.setState({ state: e.target.value});
        } else if (e.target.id === 'postalcode') {
            this.setState({ postalcode: e.target.value});
        } else if (e.target.id === 'country') {
            this.setState({ country: e.target.value});
        } else if (e.target.id === 'phone') {
            this.setState({ phone: e.target.value});
        } else if (e.target.id === 'email') {
            this.setState({ email: e.target.value});
        } else if (e.target.id === 'details') {
            this.setState({ details: e.target.value});
        }
    }

    submitCareerForm(e){
        e.preventDefault();
        let reqObj = {
            "first_name": this.state.fname,
            "last_name": this.state.lname,
            "cv": this.state.cv,
            "address": this.state.address,
            "city": this.state.city,
            "state": this.state.state,
            "postal_code": this.state.postalcode,
            "country": this.state.country,
            "email": this.state.email,
            "phone": this.state.phone,
            "details": this.state.details
        }

        console.log(reqObj)
    
        fetch('https://sbts-group.herokuapp.com/users/carrers',{
            method: "POST",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(reqObj),
        })
        .then(response =>  response.json())
        .then(resData => {
            if(resData.statusCode == 200){
                alert(resData.message);
            }
            this.setState({
                fname: '',
                lname: '',
                cv: '',
                address: '',
                city: '',
                state: '',
                postalcode: '',
                country: '',
                phone: '',
                email: '',
                details: '',
            });
        })
        .catch((error)=>{
            console.log('error ******* ',error)
        })
        
    }

    render() {
        return (
            <div className="AddressComp">
                <div className="container"> 
                <div className="row">
                    <div className="col-md-12">
                        {/* <h2> Professionals </h2> */}
                        <p> No current openings? Submit your resume for general consideration. </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <form onSubmit={(e)=>this.submitCareerForm(e)}>
                            <div className="card rounded-0">
                                <div className="card-body p-3">
                                    <div className="row">
                                    <div className="col-md-6 form-group">
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text"><i className="fa fa-user text-info"></i></div>
                                            </div>
                                            <input onChange={(e)=>this.onChange(e)} type="text" className="form-control" id="fname" name="fname" placeholder="First Name" required />
                                        </div>
                                    </div>
                                    
                                    {/* <div className="col-md-6 form-group">
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text"><i className="fa fa-map-marker text-info"></i></div>
                                            </div>
                                            <input onChange={(e)=>this.onChange(e)} type="text" className="form-control" id="address" name="address" placeholder="Address" required />
                                        </div>
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text"><i className="fa fa-hospital-o text-info"></i></div>
                                            </div>
                                            <input onChange={(e)=>this.onChange(e)} type="text" className="form-control" id="city" name="city" placeholder="City" required />
                                        </div>
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text"><i className="fa fa-globe text-info"></i></div>
                                            </div>
                                            <input onChange={(e)=>this.onChange(e)} type="text" className="form-control" id="state" name="state" placeholder="State/Province" required />
                                        </div>
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text"><i className="fa fa-globe text-info"></i></div>
                                            </div>
                                            <input onChange={(e)=>this.onChange(e)} type="text" className="form-control" id="postalcode" name="postalcode" placeholder="Postal Code" required />
                                        </div>
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text"><i className="fa fa-globe text-info"></i></div>
                                            </div>
                                            <input onChange={(e)=>this.onChange(e)} type="text" className="form-control" id="country" name="country" placeholder="Country" required />
                                        </div>
                                    </div> */}
                                    <div className="col-md-6 form-group">
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text"><i className="fa fa-user text-info"></i></div>
                                            </div>
                                            <input onChange={(e)=>this.onChange(e)} type="text" className="form-control" id="lname" name="lname" placeholder="Last Name" required />
                                        </div>
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text"><i className="fa fa-envelope text-info"></i></div>
                                            </div>
                                            <input onChange={(e)=>this.onChange(e)} type="email" className="form-control" id="email" name="email" placeholder="ejemplo@gmail.com" required />
                                        </div>
                                    </div>
                                    
                                    <div className="col-md-6 form-group">
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text"><i className="fa fa-phone text-info"></i></div>
                                            </div>
                                            <input onChange={(e)=>this.onChange(e)} type="tel" className="form-control" id="phone" name="phone" placeholder="Phone" required />
                                        </div>
                                    </div>
                                    
                                    <div className="col-md-6 form-group">
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text"><i className="fa fa-building text-info"></i></div>
                                            </div>
                                            <input onChange={(e)=>this.onChange(e)} type="file" className="form-control" id="cv" name="cv" placeholder="Upload Resume" required />
                                        </div>
                                    </div>

                                    <div className="col-md-6 form-group">
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text"><i className="fa fa-building text-info"></i></div>
                                            </div>
                                            <select class="browser-default custom-select" className="form-control">
                                                <option selected>Preferred Contact</option>
                                                <option value="1">Email</option>
                                                <option value="2">Phone</option>
                                            </select>
                                        </div>
                                    </div>
                                    
                                    <div className="col-md-12 form-group">
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text"><i className="fa fa-comment text-info"></i></div>
                                            </div>
                                            <textarea className="form-control" id="details" name="details" placeholder="Message to Hiring Manager" required></textarea>
                                        </div>
                                    </div>

                                    <div className="col-md-12 text-center">
                                        <input type="submit" value="Submit" className="btn btn-info rounded-0 py-2" />
                                    </div>
                                </div>
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
                </div>
            </div>
        );

    }
}

export default withRouter(Professional);
