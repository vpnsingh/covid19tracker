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
                        <h4 className="text-left mb-4">COVID-19 TRACKER COUNT : </h4>
                        <div className="row">
                            <div className="col-lg-3 col-6">
                                <div className="card shadow-sm text-primary">
                                    <div className="card-header">
                                        <p>Confirmed</p>
                                    </div>
                                    <div className="card-body">
                                        <p>{countData.confirmed}</p>
                                    </div>
                                </div><br/>
                            </div> 
                                
                            <div className="col-lg-3 col-6">
                                <div className="card shadow-sm text-danger">
                                    <div className="card-header">
                                        <p>Active</p>
                                    </div>
                                    <div className="card-body">
                                        <p>{countData.active}</p>
                                    </div>
                                </div><br/>
                            </div>

                            <div className="col-lg-3 col-6">
                            <div className="card shadow-sm text-success">
                                <div className="card-header">
                                    <p>Recovered</p>
                                </div>
                                <div className="card-body">
                                    <p>{countData.recovered}</p>
                                </div>
                            </div><br/>
                            </div>
                            
                            <div className="col-lg-3 col-6">
                            <div className="card shadow-sm text-secondary">
                                <div className="card-header">
                                    <p>Deceased</p>
                                </div>
                                <div className="card-body">
                                    <p>{countData.deaths}</p>
                                </div>
                            </div><br/>
                            </div>
                        </div>
                        <p className="float-right">Last Updated : {moment(countData.lastupdatedtime, 'DD/MM/YYYY HH:mm:ss').format('LLLL')}</p>
                        <br/><br/>
                        <div className="row">
                            <div className="col-lg-4">
                            <a href="mailto:ncov2019@gov.in" target="_blank" className="text-decoration-none">
                                <div className="card shadow-sm card-info-font">
                                    <div className="card-header card-header-info-bg-red">
                                        <p>Helpline Number & Email Id</p>
                                    </div>
                                    <div className="card-body card-body-info-bg-red-l">
                                        <p>011-23978046 or 1075 <br/> ncov2019[at]gov[dot]in</p>
                                    </div>
                                </div><br/>
                            </a>    
                            </div>
                            <div className="col-lg-4">
                            <a href="https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf" target="_blank" className="text-decoration-none">
                                <div className="card shadow-sm card-info-font">
                                    <div className="card-header card-header-info-bg-purple">
                                        <p>Helpline No.</p>
                                    </div>
                                    <div className="card-body card-body-info-bg-purple-l">
                                        <p>State/UTs <br/> Helpline No.</p>
                                    </div>
                                </div><br/>
                            </a>    
                            </div>
                            <div className="col-lg-4">
                            <a href="https://wa.me/919013151515" target="_blank" className="text-decoration-none">
                                <div className="card shadow-sm card-info-font">
                                    <div className="card-header card-header-info-bg-green">
                                        <p>MyGov Corona Helpdesk</p>
                                    </div>
                                    <div className="card-body card-body-info-bg-green-l">
                                        <p>Live HelpDesk <br/> https://wa.me/919013151515</p>
                                    </div>
                                </div>
                            </a>    
                            </div>
                        </div>
                        <br/><hr/>
                        <h4 className="text-left mb-4">Daily State Report : </h4>
                        <div className="row">
                            <div className="col-lg-4">
                                <a  className="btn btn-outline-primary btn-lg btn-block" 
                                href="http://api.covid19india.org/states_daily_csv/confirmed.csv" target="_blank">
                                Confirmed
                                </a><br/>
                            </div>
                            <div className="col-lg-4">
                                <a  className="btn btn-outline-success btn-lg btn-block"
                                href="https://api.covid19india.org/states_daily_csv/recovered.csv" target="_blank">
                                Recovered
                                </a><br/>
                            </div>
                            <div className="col-lg-4">
                                <a  className="btn btn-outline-secondary btn-lg btn-block"
                                href="https://api.covid19india.org/states_daily_csv/deceased.csv" target="_blank">
                                Deceased
                                </a>
                            </div>
                        </div>
                        <hr/>
                        <div className="alert alert-success text-left mt-5">
                            <strong>Last Updated Time : </strong> {moment(countData.lastupdatedtime, 'DD/MM/YYYY HH:mm:ss').format('LLLL')}
                        </div>

                        </div>
                    </div> 
                    
                </div>
        )
    }
}
