import React, { Component } from 'react'
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import axios from 'axios';
import { testcount } from '../core/apidata';

export default class state extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             stateData : [],
             error : ''
        }
    }
    
    componentDidMount(){
        axios.get(testcount)
        .then(res =>{
            // console.log("state wise Data: ",res.data.statewise);
            this.setState({stateData : res.data.statewise});
        })
        .catch(err => {
            // console.log("Error While Retriving Data");
            this.setState({error : "Error retriving data"});
        })
    }

    render() {
        const {stateData,error} = this.state
        const statelist = stateData.sort((astate, bstate) => bstate.confirmed - astate.confirmed).map(item => 
            {
                let showrow = item.statecode === "TT" ? {display: 'none'} : {};
                return  <tr key={item.statecode} style={showrow} className={this.props.tableConfig}>
                            <td className="text-left">{item.state}</td>
                            <td>{item.confirmed}</td>
                            <td>{item.active}</td>
                            <td>{item.recovered}</td>
                            <td>{item.deaths}</td>
                        </tr>
            })
        return (
            <div>
                <div className="container mt-3">
                    <h3>State wise data</h3>
                    {   
                        <div className="table-responsive">
                        <table className="table table-bordered table-bordered table-striped table-hover mt-3 stateDataTable stateMob" >
                            <thead className="bg-white text-white">
                                <tr>
                                    <th className="text-left text-dark">state / UT</th>
                                    <th className="text-danger"><span>confirmed</span></th>
                                    <th className="text-primary"><span>active</span></th>
                                    <th className="text-success"><span>recovered</span></th>
                                    <th className="text-secondary"><span>deceased</span></th>
                                </tr>
                            </thead>
                            <tbody>
                                {   statelist
                                }
                            </tbody>
                        </table>
                        </div>
                    }
                    {
                        error ? this.state.error : ''
                    }
                </div>
            </div>
        )
    }
}
