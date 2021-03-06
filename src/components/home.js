import React, { Component } from 'react'
import Banner from '../assets/images/banner.png'
import axios from 'axios';
import moment from 'moment';
import { testcount, vaccination_data } from '../core/apidata';
import NumericLabel from 'react-pretty-numbers';

export default class home extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             countData : '',
             error : '',
             vaccination : '',
        }
    }
    
    componentDidMount(){
        this.Vaccination();
        axios.get(testcount)
        .then(res =>{
            // console.log("total count data: ",res.data);
            this.setState({countData : res.data.statewise[0]});
        })
        .catch(err => {
            // console.log("Error While Retriving Data");
            this.setState({error : "Error retriving data"});
        })
    }

    Vaccination(){
        axios.get(vaccination_data)
        .then(res =>{
            // console.log("total count data: ",res.data);
            this.setState({vaccination : res.data.topBlock.vaccination});
        })
        .catch(err => {
            // console.log("Error While Retriving Data");
            // this.setState({error : "Error retriving data"});
        })
    }

    render() {
        const { countData, error } = this.state
        // console.log(" dfdg", this.state.countData);
        return (
            <div>
            {
                this.state.countData ?
                <div className="banner-div">
                <img src={Banner} className="img-fluid" />
                <hr/>
                <div className="container mt-5">
                    <div className="data-section">
                        <h3 className={"head-txt "+this.props.background}>COVID-19 TRACKER COUNT </h3>
                        <div className="row">
                            <div className="col-lg-3 col-6">
                                <div className={"card shadow-sm text-danger "+this.props.background}>
                                    <div className="card-header">
                                        <p>Confirmed</p>
                                    </div>
                                    <div className="card-body">
                                        <p><NumericLabel>{countData.confirmed}</NumericLabel></p>
                                    </div>
                                </div><br/>
                            </div> 
                            
                            <div className="col-lg-3 col-6">
                                <div className={"card shadow-sm text-primary "+this.props.background}>
                                    <div className="card-header">
                                        <p>Active</p>
                                    </div>
                                    <div className="card-body">
                                        <p><NumericLabel>{countData.active}</NumericLabel></p>
                                    </div>
                                </div><br/>
                            </div>

                            <div className="col-lg-3 col-6">
                                <div className={"card shadow-sm text-success "+this.props.background}>
                                    <div className="card-header">
                                        <p>Recovered</p>
                                    </div>
                                    <div className="card-body">
                                        <p><NumericLabel>{countData.recovered}</NumericLabel></p>
                                    </div>
                                </div><br/>
                            </div>
                        
                            <div className="col-lg-3 col-6">
                                <div className={"card shadow-sm text-secondary "+this.props.background}>
                                    <div className="card-header">
                                        <p>Deceased</p>
                                    </div>
                                    <div className="card-body">
                                        <p><NumericLabel>{countData.deaths}</NumericLabel></p>
                                    </div>
                                </div><br/>
                            </div>

                            <div className="col-lg-3 col-6">
                                <div className={"card shadow-sm text-info "+this.props.background}>
                                    <div className="card-header">
                                        <p>Recovery Rate</p>
                                    </div>
                                    <div className="card-body">
                                        <p>{(Math.round(countData.recovered * 100) / countData.confirmed).toFixed(2)} %</p>
                                    </div>
                                </div><br/>
                            </div>

                            <div className="col-lg-3 col-6">
                                <div className={"card shadow-sm text-info "+this.props.background}>
                                    <div className="card-header">
                                        <p>Deceased Rate</p>
                                    </div>
                                    <div className="card-body">
                                        <p>{(Math.round(countData.deaths * 100) / countData.confirmed).toFixed(2)} %</p>
                                    </div>
                                </div><br/>
                            </div>

                            <div className="col-lg-3 col-6">
                                <div className={"card shadow-sm text-vaccination1 "+this.props.background}>
                                    <div className="card-header">
                                        <p>Total Vaccination</p>
                                    </div>
                                    <div className="card-body">
                                        <p><NumericLabel>{this.state.vaccination.total_doses}</NumericLabel></p>
                                    </div>
                                </div><br/>
                            </div>

                            <div className="col-lg-3 col-6">
                                <div className={"card shadow-sm text-vaccination2 "+this.props.background}>
                                    <div className="card-header">
                                        <p>Today's Vaccination</p>
                                    </div>
                                    <div className="card-body">
                                        <p><NumericLabel>{this.state.vaccination.today}</NumericLabel></p>
                                    </div>
                                </div><br/>
                            </div>
                        </div>
                    </div>
                    {/* <h4 className="text-left mb-4">COVID-19 TRACKER COUNT : </h4> */}
                    
                    <p className="float-right mt-2">Last Updated : {moment(countData.lastupdatedtime, 'DD/MM/YYYY HH:mm:ss').format('LLLL')}</p>
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
                : 
                <div className="d-flex justify-content-center align-items-center mt-5">
                    <div className="spinner-border spinner-border-md mr-3" role="status" aria-hidden="true"></div>
                    <p className="m-0 font-weight-bold">Loading... </p>
                </div> 
            }
            </div>
        )
    }
}
