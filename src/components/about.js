import React, { Component } from 'react';

export default class about extends Component {
    render() {
        return (
            <div className="container">
                <div className="card shadow-sm text-dark mt-5">
                    <div className="card-header">
                        <p>About and Useful Information</p>
                    </div>
                    <div className={"card-body border-0 "+this.props.background}>
                        <div className="table-responsive">
                        <table className={"table table-borderless table-striped table-hover mt-3 text-left "+this.props.tableConfig}>
                        <tbody>
                            <tr>
                                <th>Developer</th>
                                <td>Vipin Singh</td>
                            </tr>
                            <tr>
                                <th>Technology</th>
                                <td>Reactjs</td>
                            </tr>
                            <tr>
                                <th>Github Repo</th>
                                <td><a href="https://github.com/vpnsingh/covid19tracker" target="_blank">github.com/vpnsingh/</a></td>
                            </tr>
                            <tr>
                                <th>Special Thanks</th>
                                <td><a href="https://www.covid19india.org/" target="_blank">covid19india.org</a></td>
                            </tr>
                            <tr>
                                <th>API</th>
                                <td><a href="https://api.covid19india.org/" target="_blank">api.covid19india.org</a></td>
                            </tr>
                            <tr>
                                <th>Crowdsourced Patient Database</th>
                                <td><a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vSc_2y5N0I67wDU38DjDh35IZSIS30rQf7_NYZhtYYGU1jJYT6_kDx4YpF-qw0LSlGsBYP8pqM_a1Pd/pubhtml" target="_blank">Click Here</a></td>
                            </tr>
                            <tr>
                                <th>Data source for Vasai-Virar</th>
                                <td>Sanjay Gupta</td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
