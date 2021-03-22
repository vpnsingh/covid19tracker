import React, { useState, useEffect } from 'react'
import { vaccination_data } from "../core/apidata";
import Axios from "axios";
import Tooltip from '../core/Tooltip.tsx';
import NumericLabel from 'react-pretty-numbers';

const Vaccination = ({tableConfig,background}) => {

    const [summaryData, setSummaryData] = useState([]);
    const [stateData, setStateData] = useState([]);
    const [error, setError] = useState("");

    const getVaccinationData = () => {
        Axios.get(vaccination_data)
        .then(res => {
            // Overall summary for dashboard
            setSummaryData(res.data.topBlock)
            // All state vaccination data
            setStateData(res.data.getBeneficiariesGroupBy)
            // console.log(res);
        })
        .catch(err => {
            setError(err);
            // console.log(err);
        })
    }

    useEffect(() => {
        getVaccinationData();
    }, [])

    return (
        <div className="container">
            <h3 className="my-3">Vaccination Dashboard</h3>
            {
                summaryData ? 
                <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4 col-12">
                        <div className={"vaccination-div shadow-sm "+background}>
                            <div className="header text-left">
                                <p className="heading" style={{color: '#02B290'}}>Total Vaccination <br/> 
                                    <span><strong>
                                        <NumericLabel>{summaryData.vaccination?.total_doses}</NumericLabel>
                                    </strong></span>
                                </p>
                            </div>
                            <div className="body">
                                <div className="row">
                                    <div className="col-6">
                                        <p>Dose 1 <br/><NumericLabel>{summaryData.vaccination?.tot_dose_1}</NumericLabel></p>
                                    </div>
                                    <div className="col-6">
                                        <p>Dose 2 <br/><NumericLabel>{summaryData.vaccination?.tot_dose_2}</NumericLabel></p>
                                    </div>
                                </div>
                            </div>
                        </div><br/>
                    </div>
                    <div className="col-md-4 col-12">
                        <div className={"vaccination-div shadow-sm "+background}>
                            <div className="header text-left">
                                <p className="heading" style={{color: '#E07C24'}}>Total Registrations <br/> 
                                    <span><strong>
                                        <NumericLabel>{summaryData.registration?.total}</NumericLabel>
                                    </strong></span>
                                </p>
                            </div>
                            <div className="body">
                                <div className="row">
                                    <div className="col-6">
                                        <p>Online <br/><NumericLabel>{summaryData.registration?.online}</NumericLabel></p>
                                    </div>
                                    <div className="col-6">
                                        <p>Walk-In <br/><NumericLabel>{summaryData.registration?.onspot}</NumericLabel></p>
                                    </div>
                                </div>
                            </div>
                            </div><br/>
                    </div>
                    <div className="col-md-4 col-12">
                        <div className={"vaccination-div shadow-sm "+background}>
                            <div className="header text-left">
                                <p className="heading" style={{color: '#207398'}}>Sites Conducting Vaccination<br/> 
                                    <span><strong>
                                        <NumericLabel>{summaryData.sites?.total}</NumericLabel>
                                    </strong></span>
                                </p>
                            </div>
                            <div className="body">
                                <div className="row">
                                    <div className="col-6">
                                        <p>Government <br/><NumericLabel>{summaryData.sites?.govt}</NumericLabel></p>
                                    </div>
                                    <div className="col-6">
                                        <p>Private <br/><NumericLabel>{summaryData.sites?.pvt}</NumericLabel></p>
                                    </div>
                                </div>
                            </div>
                        </div><br/>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className={"vaccination-div shadow-sm "+background}>
                            <p style={{fontSize:18,textAlign:'left'}}>Vaccination By Gender</p>
                            <Tooltip 
                                data={[
                                    { title: 'Male', value: summaryData.vaccination?.male, color: '#03C6C7'},
                                    { title: 'Female', value: summaryData.vaccination?.female, color: '#E6425E' },
                                ]} 
                            />
                            <p className="mt-3 pb-0">
                                <span className="badge" style={{backgroundColor:'#03C6C7'}}>Male - <NumericLabel>{summaryData.vaccination?.male}</NumericLabel></span>&nbsp;&nbsp;      
                                <span className="badge" style={{backgroundColor:'#E6425E'}}>Female - <NumericLabel>{summaryData.vaccination?.female}</NumericLabel></span>
                            </p>
                        </div><br/>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className={"vaccination-div shadow-sm "+background}>
                            <p style={{fontSize:18,textAlign:'left'}}>Vaccination By Category</p>
                            <Tooltip 
                                data={[
                                    { title: 'Covishield', value: summaryData.vaccination?.covishield, color: '#12B0E8'},
                                    { title: 'Covaxin', value: summaryData.vaccination?.covaxin, color: '#38CC77' },
                                ]} 
                            />
                            <p className="mt-3 pb-0">
                                <span className="badge" style={{backgroundColor: '#12B0E8'}}>Covishield - <NumericLabel>{summaryData.vaccination?.covishield}</NumericLabel></span>&nbsp;&nbsp;      
                                <span className="badge" style={{backgroundColor: '#38CC77'}}>Covaxin - <NumericLabel>{summaryData.vaccination?.covaxin}</NumericLabel></span>
                            </p>
                        </div>
                    </div>
                    <div className="col-12 mt-2">
                        <div className={"vaccination-div shadow-sm "+background}>
                            <p style={{fontSize:18,textAlign:'left'}}>Vaccination By State/UT</p>
                            <div className="body">
                                <div className="table-responsive">
                                    <table className="table table-striped table-bordered table-hover vaccineDataTable vaccineDataTableMob">
                                        <thead className="bg-white text-white">
                                            <tr>
                                                <th className="text-left text-dark">STATE / UT</th>
                                                <th className="text-primary"><span>Today</span></th>
                                                <th className="text-info"><span>Partial Vaccinated</span></th>
                                                <th className="text-success"><span>Totally Vaccinated</span></th>
                                                <th className="text-secondary"><span>Total</span></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                stateData.map((item, index) => {
                                                    return(
                                                        <tr key={index} className={tableConfig}>
                                                            <td className="text-left">{item.title}</td>
                                                            <td><NumericLabel>{item.today}</NumericLabel></td>
                                                            <td><NumericLabel>{item.partial_vaccinated}</NumericLabel></td>
                                                            <td><NumericLabel>{item.totally_vaccinated}</NumericLabel></td>
                                                            <td><NumericLabel>{item.total}</NumericLabel></td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
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

export default Vaccination;