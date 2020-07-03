import React, { Component } from 'react'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

import firebase from '../firebase'

export default class vasai_virar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             covidData : [],
             error : '',
             newsData : [],
             isData : false
        }
    }
    
    componentDidMount(){
        // fetch data related to count
        const dataRef = firebase.database().ref('data');
        dataRef.on('value', (snapshot) => {
            let tempdata = snapshot.val();
            // console.log(tempdata, "data received");
            this.setState({
                covidData : snapshot.val(),
                isData : true
            });
        });

        // fetch latest news
        const newsRef = firebase.database().ref('newsData');
        newsRef.on('value', (snapshot) => {
            let newsdata = snapshot.val();
            // console.log(newsdata, "news received");
            let ptState = [];
            for (let item in newsdata) {
              ptState.push({
                id: item,
                news : newsdata[item].news
              });
            }
            this.setState({
                newsData : ptState,
                isData : true
            });
        });

    }

    render() {
        const {covidData, error, newsData } = this.state;
        return (
            <div className="container">
                <h3 className="my-3">Vasai - Virar Covid Dashboard</h3>
                {
                    this.state.isData ?
                    <div className="container  mt-5">
                    <div className="row">
                        <div className="col-lg-3 col-6">
                            <div className={"card shadow-sm text-danger "+this.props.background}>
                                <div className="card-header">
                                    <p>Confirmed</p>
                                </div>
                                <div className="card-body">
                                    <p>{covidData.total}</p>
                                </div>
                            </div><br/>
                        </div>   
                        <div className="col-lg-3 col-6">
                            <div className={"card shadow-sm text-primary "+this.props.background}>
                                <div className="card-header">
                                    <p>Active</p>
                                </div>
                                <div className="card-body">
                                    <p>{covidData.active}</p>
                                </div>
                            </div><br/>
                        </div>
                        <div className="col-lg-3 col-6">
                        <div className={"card shadow-sm text-success "+this.props.background}>
                            <div className="card-header">
                                <p>Recovered</p>
                            </div>
                            <div className="card-body">
                                <p>{covidData.recovered}</p>
                            </div>
                        </div><br/>
                        </div>
                        <div className="col-lg-3 col-6">
                        <div className={"card shadow-sm text-secondary "+this.props.background}>
                            <div className="card-header">
                                <p>Deceased</p>
                            </div>
                            <div className="card-body">
                                <p>{covidData.deceased}</p>
                            </div>
                        </div><br/>
                        </div>
                    </div>
                    <hr/>
                    <h4 className="text-left">Cases Via Area :</h4>
                    <div className="table-responsive">
                    <table className={"table table-bordered table-striped table-hover mt-3 font-weight-bold " + this.props.tableConfig}>
                        <tbody>
                            <tr>
                                <th className="text-left">Naigaon</th><td>{covidData.naigaon}</td>
                            </tr>
                            <tr>
                                <th className="text-left">Vasai</th><td>{covidData.vasai}</td>
                            </tr>
                            <tr>
                                <th className="text-left">Nalasopara</th><td>{covidData.nalasopara}</td>
                            </tr>
                            <tr>
                                <th className="text-left">Virar</th><td>{covidData.virar}</td>
                            </tr>
                            <tr>
                                <th className="text-left">Vasai - Virar Rural</th><td>{covidData.rural}</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                    <div className="alert alert-success text-left mt-3 offset-lg-8 col-lg-4 col-12">
                        <strong>Last Updated Time : </strong> {covidData.updatetime}
                    </div>
                    <hr/>
                    
                   <ul className="nav nav-tabs d-none">
                        <li className="nav-item">
                            <a className="nav-link active" data-toggle="tab" href="#news">Latest News</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#helpline">Helpline Numbers</a>
                        </li>
                    </ul>

                    <div className="tab-content d-none">
                        <div className="tab-pane container active text-justify" id="news">
                            <br/>
                            <ol className="pl-2">
                            {
                                newsData.sort((a, b) => b.id - a.id).slice(0, 5).map(
                                (item, i) => 
                                    <li className="mb-2" key={i}> {item.news} </li>
                                )
                            }
                            </ol>
                        </div>
                        <div className="tab-pane container fade" id="helpline">
                            <h4 className="text-left pt-2">Helpline Numbers : </h4>
                            <p className="text-left">Please call these numbers only if there is an urgent medical emergency regarding COVID-19.</p>
                            <div className="table-responsive">
                            <table className={"table table-borderless table-bordered table-striped table-hover mt-3 vvtable "+ this.props.tableConfig}>
                                <thead>
                                    <tr>
                                        <th>Area</th>
                                        <th>Unit</th>
                                        <th>Person In Charge</th>
                                        <th>Number</th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Virar West</td>
                                    <td>Nidan UPHC</td>
                                    <td>Dr. Trupti Kokate</td>
                                    <td>+91 77200 60477</td>
                                </tr>
                                <tr>
                                    <td>Virar West</td>
                                    <td>Bolinj UPHC</td>
                                    <td>Dr. Pranjalee Pimpale</td>
                                    <td>+91 77200 60487</td>
                                </tr>
                                <tr>
                                    <td>Virar East</td>
                                    <td>Tamale Talao UPHC</td>
                                    <td>Dr. Varsha Shinde</td>
                                    <td>+91 91687 90264</td>
                                </tr>
                                <tr>
                                    <td>Virar East</td>
                                    <td>Chandansar UPHC</td>
                                    <td>Dr. Sonal Sankhe</td>
                                    <td>+91 93231 91119</td>
                                </tr>
                                <tr>
                                    <td>Virar East</td>
                                    <td>Naringi UPHC</td>
                                    <td>Dr. Sharad Gavit</td>
                                    <td>+91 98818 54453</td>
                                </tr>
                                <tr>
                                    <td>NallaSopara West</td>
                                    <td>Patankar Park UPHC</td>
                                    <td>Dr. Ashwini Naiknavare</td>
                                    <td>+91 84249 02954</td>
                                </tr>
                                <tr>
                                    <td>Nallasopara East</td>
                                    <td>Ambedkar Nagar, Taki Road UPHC</td>
                                    <td>Dr. Krupali Farde</td>
                                    <td>+91 77200 60471</td>
                                </tr>
                                <tr>
                                    <td>Nallasopara East</td>
                                    <td>Sarvodaya Vasahat UPHC</td>
                                    <td>Dr. Jagdish Mahajan</td>
                                    <td>+91 77200 60488</td>
                                </tr>
                                <tr>
                                    <td>Nallasopara East</td>
                                    <td>Zalawad UPHC</td>
                                    <td>Dr. Aakruti Kamkhaliya</td>
                                    <td>+91 77200 60486</td>
                                </tr>
                                <tr>
                                    <td>Nallasopara East</td>
                                    <td>Achole Talav UPHC </td>
                                    <td>Dr. Swati Chincholkar</td>
                                    <td>+91 98604 00015/+91 77200 60518</td>
                                </tr>
                                <tr>
                                    <td>Vasai East</td>
                                    <td>Waliv Vasai UPHC</td>
                                    <td>Dr. Panditrao Rathod</td>
                                    <td>+91 80978 86150</td>
                                </tr>
                                <tr>
                                    <td>Vasai East</td>
                                    <td>Sativali Uphc</td>
                                    <td>Dr. Shrinivas Dudhmal</td>
                                    <td>+91 98235 20112/+91 77200 60490</td>
                                </tr>
                                <tr>
                                    <td>Vasai East</td>
                                    <td>Navghar  UPHC</td>
                                    <td>Dr. Sunita Patel</td>
                                    <td>+91 80802 04374</td>
                                </tr>
                                <tr>
                                    <td>Vasai West</td>
                                    <td>Deewanman UPHC</td>
                                    <td>Dr. Nivedita Chaudhari</td>
                                    <td>+91 77200 60476</td>
                                </tr>
                                <tr>
                                    <td>Vasai West</td>
                                    <td>Barampur UPHC</td>
                                    <td>Dr. Abhiraj Mane</td>
                                    <td>+91 74477 14267/+91 84858 42674</td>
                                </tr>
                                <tr>
                                    <td>Vasai West</td>
                                    <td>Vasai Gaon UPHC</td>
                                    <td>Dr. Pranjalee Pimpale</td>
                                    <td>+91 77200 60487</td>
                                </tr>
                                <tr>
                                    <td>Nallasopara East</td>
                                    <td>Dhaniv UPHC</td>
                                    <td>Dr. Sudhir Pandhare</td>
                                    <td>+91 77200 60472/+91 99753 08380</td>
                                </tr>
                                <tr>
                                    <td>Nallasopara East</td>
                                    <td>Pelhar Uphc</td>
                                    <td>Dr. Vandana Vasaikar</td>
                                    <td>+91 96235 02081</td>
                                </tr>
                                <tr>
                                    <td>Nallasopara East</td>
                                    <td>Bilalpada uphc</td>
                                    <td>Dr. Shahin Shaikh</td>
                                    <td>+91 99871 74157/+91 98703 60786</td>
                                </tr>
                                <tr>
                                    <td>Nallasopara East</td>
                                    <td>Moregaon UPHC</td>
                                    <td>Dr. Vikram Rathod</td>
                                    <td>+91 98337 50921</td>
                                </tr>
                                <tr>
                                    <td>Naigaon East</td>
                                    <td>Juchandra UPHC</td>
                                    <td>Dr. Krishna Gosavi</td>
                                    <td>+91 89833 61861/+91 72762 85516</td>
                                </tr>
                                </tbody>
                            </table>
                            </div>
                        </div>
                    </div>
                    <h4 className="text-left">Important Links :</h4>
                    <ul className="pl-4 mt-2 text-left">
                        <li className="mb-2">
                            <a href="https://vvcmc.in/vvmc/corona/local_host/HealthSurvey.html" target="_blank">Vasai Virar City Health Survey (वसई विरार शहर आरोग्य सर्वेक्षण)</a>
                        </li> 
                        <li className="mb-2">
                            <a href="https://vvcmc.in/vvmc/?p=4695&lang=en" target="_blank">वसई विरार शहर करोना विषाणू संसर्गाची लक्षणे</a>
                        </li>   
                        <li className="mb-2">
                            <a href="https://covid-19.maharashtra.gov.in/" target="_blank">COVID-19 (Coronavirus) - Self Assessment Tool
                            </a>
                        </li>
                        <li className="mb-2">
                            <a href="https://www.mahainfocorona.in/mr" target="_blank">करोना प्रतिबंध आणि महाराष्ट्र</a>
                        </li>
                        <li className="mb-2">
                            <a href="http://stopcoronavirus.mcgm.gov.in/" target="_blank">Stop Coronavirus in Mumbai</a>
                        </li>    
                    </ul>    
                    <hr/>    
                    <div>
                        <h4 className="text-left">Daily News :</h4>
                        <TwitterTimelineEmbed
                            sourceType="profile"
                            screenName="Suhas_News"
                            options={{height: 1000}}
                        />
                    </div>
                    </div> 
                    :   <div className="d-flex justify-content-center align-items-center mt-5">
                            <div className="spinner-border spinner-border-md mr-3" role="status" aria-hidden="true"></div>
                            <p className="m-0 font-weight-bold">Loading... </p>
                        </div> 
                }

            </div>
        )
    }
}
