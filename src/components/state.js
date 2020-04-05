import React, { Component } from 'react'
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
        // console.log(stateData)
        return (
            <div>
                <div className="container mt-3">
                    <h3>State wise data</h3>
                    {   
                        <div className="table-responsive">
                        <table className="table table-borderless table-bordered table-striped table-hover mt-3 stateDataTable">
                            <thead className="bg-secondary text-white">
                                <tr>
                                    <th className="text-left">state</th>
                                    <th>confirmed</th>
                                    <th>active</th>
                                    <th>recovered</th>
                                    <th>deceased</th>
                                </tr>
                            </thead>
                            <tbody>
                                {   stateData.map(item => 
                                    <tr key={item.statecode}>
                                        <td className="text-left">{item.state}</td>
                                        <td>{item.confirmed}</td>                            
                                        <td>{item.active}</td>
                                        <td>{item.recovered}</td>
                                        <td>{item.deaths}</td>
                                    </tr>)
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
