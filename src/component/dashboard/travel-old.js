import React, { Component } from 'react';


class travel extends Component {
    // state = {

    // }
    // handleChange = (e) => {
    //     console.log(e);
    // }
    // handleSubmit = (e) => {
    //     console.log(e);
    // }
    render() {


        return (
            
            <section>

            <section className="container section" id="tabs">
            <div className="scrollspy" id="top">
            <div className="row">
                {/* <div className="col s12 l4">
                <h2 className="indigo-text text-darken-4">Travel</h2>
                </div> */}
                <div className="col s12 l8 offset-l2">
                <ul className="tabs">
                    <li className="tab col s6">
                    <a href="#notes" className="active black-text">Travel Notes</a>
                    </li>
                    <li className="tab col s6">
                    <a href="#photos" className="black-text">Travel Pictures</a>
                    </li>
                </ul>
                </div>
            </div>
            </div>
            </section>

            <section className="container section" id="notes">
            <div className="row">
            <div className="col s12 l6">
            <div className="card">
            <div className="card-image">
                <img src="../img/beijing.png" alt=""/>
                <a href="" className="halfway-fab btn-floating pink pulse">
                <i className="material-icons">favorite</i>
                </a>
            </div>
            <div className="card-content">
                <span className="card-title">China</span>
                <p>Beijing</p>
                <br/>
                <p className="right grey-text">Upload Date: 2019-08-01</p>
            </div>
            <div className="card-action">
            <a href="/travelNoteBeijing">View travel notes</a>
            </div>
            </div>
        </div>

        <div className="col s12 l6">
            <div className="card">
            <div className="card-image">
                <img src="../img/shanxi.png" alt=""/>
                <a href="" className="halfway-fab btn-floating pink pulse">
                <i className="material-icons">favorite</i>
                </a>
            </div>
            <div className="card-content">
                <span className="card-title">China</span>
                <p>Shanxi & Shandong</p>
                <br/>
                <p className="right grey-text">Upload Date: 2019-06-17</p>
            </div>
            <div className="card-action">
            <a href="/travelNoteShanxiShandong">View travel notes</a>
            </div>
            </div>
        </div>
        </div>

        <div className="row">
        <div className="col s12 l6">
            <div className="card">
            <div className="card-image">
                <img src="../img/quebec.png" alt=""/>
                <a href="" className="halfway-fab btn-floating pink pulse">
                <i className="material-icons">favorite</i>
                </a>
            </div>
            <div className="card-content">
                <span className="card-title">Canada</span>
                <p>Quebec</p>
                <br/>
                <p className="right grey-text">Upload Date: 2018-09-07</p>
            </div>
            <div className="card-action">
            <a href="/travelNoteQuebec">View travel notes</a>
            </div>
            </div>
        </div>

        <div className="col s12 l6">
            <div className="card">
            <div className="card-image">
                <img src="../img/yunnan.png" alt=""/>
                <a href="" className="halfway-fab btn-floating pink pulse">
                <i className="material-icons">favorite</i>
                </a>
            </div>
            <div className="card-content">
                <span className="card-title">China</span>
                <p>Xian & Yunnan</p>
                <br/>
                <p className="right grey-text">Upload Date: 2018-06-21</p>
            </div>
            <div className="card-action">
                <a href="/travelNoteXianYunnan">View travel notes</a>
            </div>
            </div>
        </div>
        </div>

        <div className="row">
        <div className="col s12 l6">
            <div className="card">
            <div className="card-image">
                <img src="../img/ottawa.png" alt=""/>
                <a href="" className="halfway-fab btn-floating pink pulse">
                <i className="material-icons">favorite</i>
                </a>
            </div>
            <div className="card-content">
                <span className="card-title">Canada</span>
                <p>Ottawa</p>
                <br/>
                <p className="right grey-text">Upload Date: 2018-04-27</p>
            </div>
            <div className="card-action">
            <a href="/travelNoteOttawa">View travel notes</a>
            </div>
            </div>
        </div>

        <div className="col s12 l6">
            <div className="card">
            <div className="card-image">
                <img src="../img/chengdu.png" alt=""/>
                <a href="" className="halfway-fab btn-floating pink pulse">
                <i className="material-icons">favorite</i>
                </a>
            </div>
            <div className="card-content">
                <span className="card-title">China</span>
                <p>Chongqing & Chengdu</p>
                <br/>
                <p className="right grey-text">Upload Date: 2017-08-10</p>
            </div>
            <div className="card-action">
            <a href="/travelNoteChongqingChengdu">View travel notes</a>
            </div>
            </div>
        </div>
        </div>

        <div className="row">
        <div className="col s12 l6">
            <div className="card">
            <div className="card-image">
                <img src="../img/thai.png" alt=""/>
                <a href="" className="halfway-fab btn-floating pink pulse">
                <i className="material-icons">favorite</i>
                </a>
            </div>
            <div className="card-content">
                <span className="card-title">Thailand</span>
                <p>Phuket, Chiang Mai & Bangkok</p>
                <br/>
                <p className="right grey-text">Upload Date: 2017-06-30</p>
            </div>
            <div className="card-action">
            <a href="/travelNoteThailand">View travel notes</a>
            </div>
            </div>
        </div>

        <div className="col s12 l6">
            <div className="card">
            <div className="card-image">
                <img src="../img/orlando.png" alt=""/>
                <a href="" className="halfway-fab btn-floating pink pulse">
                <i className="material-icons">favorite</i>
                </a>
            </div>
            <div className="card-content">
                <span className="card-title">USA</span>
                <p>Florida - Orlando</p>
                <br/>
                <p className="right grey-text">Upload Date: 2017-03-20</p>
            </div>
            <div className="card-action">
            <a href="/travelNoteUSA">View travel notes</a>
            </div>
            </div>
        </div>
            </div>

            <div className="row">
        <div className="col s12 l6">
            <div className="card">
            <div className="card-image">
                <img src="../img/toronto.png" alt=""/>
                <a href="" className="halfway-fab btn-floating pink pulse">
                <i className="material-icons">favorite</i>
                </a>
            </div>
            <div className="card-content">
                <span className="card-title">Canada</span>
                <p>Toronto</p>
                <br/>
                <p className="right grey-text">Upload Date: 2016-12-05</p>
            </div>
            <div className="card-action">
            <a href="/travelNoteToronto">View travel notes</a>
            </div>
            </div>
        </div>

        <div className="col s12 l6">
            <div className="card">
            <div className="card-image">
                <img src="../img/van.png" alt=""/>
                <a href="" className="halfway-fab btn-floating pink pulse">
                <i className="material-icons">favorite</i>
                </a>
            </div>
            <div className="card-content">
                <span className="card-title">Canada</span>
                <p>Vancouver</p>
                <br/>
                <p className="right grey-text">Upload Date: 2016-08-15</p>
            </div>
            <div className="card-action">
            <a href="/travelNoteVancouver">View travel notes</a>
            </div>
            </div>
        </div>
        </div>

        <div className="row">
        <div className="col s12 l6">
            <div className="card">
            <div className="card-image">
                <img src="../img/montreal.png" alt=""/>
                <a href="" className="halfway-fab btn-floating pink pulse">
                <i className="material-icons">favorite</i>
                </a>
            </div>
            <div className="card-content">
                <span className="card-title">Canada</span>
                <p>Montreal</p>
                <br/>
                <p className="right grey-text">Upload Date: 2015-03-19</p>
            </div>
            <div className="card-action">
            <a href="/travelNoteMontreal">View travel notes</a>
            </div>
            </div>
        </div>
    </div>

        
        {/* <button className="right" id="myBtn" tilte="Go to top"> */}
            <a href="#top" className="ToTheTopIcon">
                <i className="material-icons">arrow_upward</i>
            </a>
        {/* </button> */}

        </section>   

            <section className="container section" id="photos">

                    <div className="map hide-on-med-and-down">
                        <a href="/travelPicturesChina">
                        <img className="Chinaplane" src="../imgtrans/Chinaplane.png" width="200" height="150"></img>
                        </a>

                        <a href="/travelPicturesThailand">
                        <img className="thailandplane" src="../imgtrans/thailandplane.png" width="130" height="50"></img>
                        </a>

                        <a href="/travelPicturesUSA">
                        <img className="usaplane" src="../imgtrans/usaplane.png" width="100" height="60"></img>
                        </a>

                        <a href="/travelPicturesCanada">
                        <img className="canadaplane" src="../imgtrans/canadaplane.png" width="160" height="100"></img>
                        </a>
                    </div>

                    <div className="hide-on-large-only">
                        
                        <div className="row">
                            <div className="col s12 m6 l3">
                            <a href="/travelPicturesChina">
                                <div className="card">
                                <div className="card-image">
                                    <img src="../img2/China.png" alt="" className="responsive-img"/>
                                    <span className="card-title">China-中国</span>
                                    {/* <a href="" className="halfway-fab btn-floating pink pulse"> */}
                                    {/* <i className="material-icons">favorite</i> */}
                                    {/* </a> */}
                                </div>
                                {/* <div className="card-content">
                                    <span className="card-title">Canada</span>
                                    <p>Toronto</p>
                                    <br/>
                                    <p className="right grey-text">Upload Date: 2016-12-05</p>
                                </div>
                                <div className="card-action">
                                <a href="/travelNoteToronto">View travel notes</a>
                                </div> */}
                                </div>
                            </a>
                        </div>

                        <div className="col s12 m6 l3">
                            <a href="/travelPicturesThailand">
                                <div className="card">
                                <div className="card-image">
                                    <img src="../img2/thai.png" alt="" className="responsive-img"/>
                                    <span className="card-title">Thailand-泰国</span>
                                    {/* <a href="" className="halfway-fab btn-floating pink pulse"> */}
                                    {/* <i className="material-icons">favorite</i> */}
                                    {/* </a> */}
                                </div>
                                {/* <div className="card-content">
                                    <span className="card-title">Canada</span>
                                    <p>Toronto</p>
                                    <br/>
                                    <p className="right grey-text">Upload Date: 2016-12-05</p>
                                </div>
                                <div className="card-action">
                                <a href="/travelNoteToronto">View travel notes</a>
                                </div> */}
                                </div>
                            </a>
                        </div>

                        <div className="col s12 m6 l3">
                            <a href="/travelPicturesCanada">
                                <div className="card">
                                <div className="card-image">
                                    <img src="../img2/Canada.png" alt="" className="responsive-img"/>
                                    <span className="card-title">Canada-加拿大</span>
                                    {/* <a href="" className="halfway-fab btn-floating pink pulse"> */}
                                    {/* <i className="material-icons">favorite</i> */}
                                    {/* </a> */}
                                </div>
                                {/* <div className="card-content">
                                    <span className="card-title">Canada</span>
                                    <p>Toronto</p>
                                    <br/>
                                    <p className="right grey-text">Upload Date: 2016-12-05</p>
                                </div>
                                <div className="card-action">
                                <a href="/travelNoteToronto">View travel notes</a>
                                </div> */}
                                </div>
                            </a>
                        </div>

                        <div className="col s12 m6 l3">
                            <a href="/travelPicturesUSA">
                                <div className="card">
                                <div className="card-image">
                                    <img src="../img2/USA.png" alt="" className="responsive-img"/>
                                    <span className="card-title">USA-美国</span>
                                    {/* <a href="" className="halfway-fab btn-floating pink pulse"> */}
                                    {/* <i className="material-icons">favorite</i> */}
                                    {/* </a> */}
                                </div>
                                {/* <div className="card-content">
                                    <span className="card-title">Canada</span>
                                    <p>Toronto</p>
                                    <br/>
                                    <p className="right grey-text">Upload Date: 2016-12-05</p>
                                </div>
                                <div className="card-action">
                                <a href="/travelNoteToronto">View travel notes</a>
                                </div> */}
                                </div>
                            </a>
                        </div>
                        </div>

                        
                        
                        

                    </div>

          </section>
  
            </section>
        )
    }
}




export default travel