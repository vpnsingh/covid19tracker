import React, { Component } from 'react'

export default class pagenotfound extends Component {
    render() {
        return (
            <div className="container mt-5">
                <h1 className="text-danger font-weight-bold">404</h1>
                <h3>Page Not Found</h3>
                <br/>
                <a className="btn btn-info btn-lg" href="/"><i className="fa fa-home"></i> Go to Home</a>
            </div>
        )
    }
}
