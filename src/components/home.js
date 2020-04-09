import React, { Component } from 'react'
import Banner from '../assets/images/banner.png'
import axios from 'axios';
import moment from 'moment';
import { testcount } from '../core/apidata';

export default class home extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             countData : [],
             error : ''
        }
    }
    
    componentDidMount(){
        axios.get(testcount)
        .then(res =>{
            // console.log("total count data: ",res.data.statewise[0]);
            this.setState({countData : res.data.statewise[0]});
        })
        .catch(err => {
            // console.log("Error While Retriving Data");
            this.setState({error : "Error retriving data"});
        })
    }

    render() {
        const { countData, error } = this.state
        // console.log(" dfdg", this.state.countData);
        return (
            <div>
                <div className="banner-div">
                    <img src={Banner} className="img-fluid" />
                    <hr/>
                    <div className="container mt-5">
                        <h4 className="text-left mb-5">COVID-19 TRACKER COUNT : </h4>
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="card shadow-sm text-primary">
                                    <div className="card-header">
                                        <p>Confirmed Cases</p>
                                    </div>
                                    <div className="card-body">
                                        <p>{countData.confirmed}</p>
                                    </div>
                                </div><br/>
                            </div> 
                                
                            <div className="col-lg-3">
                                <div className="card shadow-sm text-danger">
                                    <div className="card-header">
                                        <p>Active Cases</p>
                                    </div>
                                    <div className="card-body">
                                        <p>{countData.active}</p>
                                    </div>
                                </div><br/>
                            </div>

                            <div className="col-lg-3">
                            <div className="card shadow-sm text-success">
                                <div className="card-header">
                                    <p>Total Recovered</p>
                                </div>
                                <div className="card-body">
                                    <p>{countData.recovered}</p>
                                </div>
                            </div><br/>
                            </div>
                            
                            <div className="col-lg-3">
                            <div className="card shadow-sm text-secondary">
                                <div className="card-header">
                                    <p>Total Deceased</p>
                                </div>
                                <div className="card-body">
                                    <p>{countData.deaths}</p>
                                </div>
                            </div><br/>
                            </div>
                        </div>

                        <div className="alert alert-success text-left mt-5">
                            <strong>Last Updated Time : </strong> {moment(countData.lastupdatedtime, 'DD/MM/YYYY HH:mm:ss').format('LLLL')}
                        </div>

                        </div>
                    </div> 
                    
                </div>
        )
    }
}
