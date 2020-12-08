import React, { Component } from 'react';
import Footer from '../layout/Footer';


class travelCN extends Component {
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
            
            <body>

<header>


<nav className="nav-wrapper black">
<div className="container">
    <a href="/CN" className="brand-logo ">
        <span>Y.X.</span>
    </a>
    
    <a href="" className="sidenav-trigger" data-target="mobile-menu">
    <i className="material-icons">menu</i>
    </a>
    <ul className="right hide-on-med-and-down">
    <li><a href="/travelCN" >旅游</a></li>
    <li><a href="/musicCN">音乐</a></li>
    <li><a href="/calligraphyCN">书法</a></li>
    
    <li><a href="/catCN">🐈</a></li>

    <li><a href="https://www.instagram.com/crys___7" className=" btn-floating btn-small transparent" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram"></i>
    </a></li>
    <li><a href="https://www.youtube.com/channel/UClv5NmxBvWIjid8crocDvZQ" className=" btn-floating btn-small transparent" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-youtube"></i>
    </a></li>
    <li><a href="https://www.facebook.com/profile.php?id=100006981077508" className=" btn-floating btn-small transparent" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-facebook"></i>
    </a></li>
    <li><a href="https://twitter.com/YueqingXie" className=" btn-floating btn-small transparent" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-twitter"></i>
    </a></li>
    <li><a href="/travel" className="btn btn-floating transparent">ENG</a></li>
    
    </ul>
    
    <ul className="sidenav grey lighten-2" id="mobile-menu">
        <li><a href="/travelCN" className="sidenavtext">旅游</a></li>
        <li><a href="/musicCN" className="sidenavtext">音乐</a></li>
        <li><a href="/calligraphyCN" className="sidenavtext">书法</a></li>
        <li><a href="/catCN" className="sidenavtext">我的猫</a></li>
        <li><a href="/CN#aboutmenavCN" className="sidenavtext">关于我</a></li>
            <br/>
            <li><a href="/travel" className="sidenavtext">ENG</a></li>

    </ul>
</div>
</nav>
</header>


            <section className="container section" id="tabs">
            <div className="scrollspy" id="top">
            <div className="row">
                {/* <div className="col s12 l4">
                <h2 className="indigo-text text-darken-4">Travel</h2>
                </div> */}
                <div className="col s12 l8 offset-l2">
                <ul className="tabs">
                    <li className="tab col s6">
                    <a href="#notes" className="active black-text">游记</a>
                    </li>
                    <li className="tab col s6">
                    <a href="#photos" className="black-text">照片</a>
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
                <span className="card-title">中国</span>
                <p>北京</p>
                <br/>
                <p className="right grey-text">上传日期: 2019-08-01</p>
            </div>
            <div className="card-action">
            <a href="/travelNoteBeijingCN">查看游记</a>
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
                <span className="card-title">中国</span>
                <p>山西 & 山东</p>
                <br/>
                <p className="right grey-text">上传日期: 2019-06-17</p>
            </div>
            <div className="card-action">
            <a href="/travelNoteShanxiShandongCN">查看游记</a>
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
                <span className="card-title">加拿大</span>
                <p>魁北克</p>
                <br/>
                <p className="right grey-text">上传日期: 2018-09-07</p>
            </div>
            <div className="card-action">
            <a href="/travelNoteQuebecCN">查看游记</a>
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
                <span className="card-title">中国</span>
                <p>西安 & 云南</p>
                <br/>
                <p className="right grey-text">上传日期: 2018-06-21</p>
            </div>
            <div className="card-action">
                <a href="/travelNoteXianYunnanCN">查看游记</a>
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
                <span className="card-title">加拿大</span>
                <p>渥太华</p>
                <br/>
                <p className="right grey-text">上传日期: 2018-04-27</p>
            </div>
            <div className="card-action">
            <a href="/travelNoteOttawaCN">查看游记</a>
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
                <span className="card-title">中国</span>
                <p>重庆 & 成都</p>
                <br/>
                <p className="right grey-text">上传日期: 2017-08-10</p>
            </div>
            <div className="card-action">
            <a href="/travelNoteChongqingChengduCN">查看游记</a>
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
                <span className="card-title">泰国</span>
                <p>普吉岛, 清迈 & 曼谷</p>
                <br/>
                <p className="right grey-text">上传日期: 2017-06-30</p>
            </div>
            <div className="card-action">
            <a href="/travelNoteThailandCN">查看游记</a>
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
                <span className="card-title">美国</span>
                <p>弗罗里达 - 奥兰多</p>
                <br/>
                <p className="right grey-text">上传日期: 2017-03-20</p>
            </div>
            <div className="card-action">
            <a href="/travelNoteUSACN">查看游记</a>
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
                <span className="card-title">加拿大</span>
                <p>多伦多</p>
                <br/>
                <p className="right grey-text">上传日期: 2016-12-05</p>
            </div>
            <div className="card-action">
            <a href="/travelNoteTorontoCN">查看游记</a>
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
                <span className="card-title">加拿大</span>
                <p>温哥华</p>
                <br/>
                <p className="right grey-text">上传日期: 2016-08-15</p>
            </div>
            <div className="card-action">
            <a href="/travelNoteVancouverCN">查看游记</a>
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
                <span className="card-title">加拿大</span>
                <p>蒙特利尔</p>
                <br/>
                <p className="right grey-text">上传日期: 2015-03-19</p>
            </div>
            <div className="card-action">
            <a href="/travelNoteMontrealCN">查看游记</a>
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
                        <a href="/travelPicturesChinaCN">
                        <img className="Chinaplane" src="../imgtrans/Chinaplane.png" width="200" height="150"></img>
                        </a>

                        <a href="/travelPicturesThailandCN">
                        <img className="thailandplane" src="../imgtrans/thailandplane.png" width="130" height="50"></img>
                        </a>

                        <a href="/travelPicturesUSACN">
                        <img className="usaplane" src="../imgtrans/usaplane.png" width="100" height="60"></img>
                        </a>

                        <a href="/travelPicturesCanadaCN">
                        <img className="canadaplane" src="../imgtrans/canadaplane.png" width="160" height="100"></img>
                        </a>
                    </div>

                    <div className="hide-on-large-only">
                        
                        <div className="row">
                            <div className="col s12 m6 l3">
                            <a href="/travelPicturesChinaCN">
                                <div className="card">
                                <div className="card-image">
                                    <img src="../img2/China.png" alt="" className="responsive-img"/>
                                    <span className="card-title">中国-China</span>
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
                            <a href="/travelPicturesThailandCN">
                                <div className="card">
                                <div className="card-image">
                                    <img src="../img2/thai.png" alt="" className="responsive-img"/>
                                    <span className="card-title">泰国-Thailand</span>
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
                            <a href="/travelPicturesCanadaCN">
                                <div className="card">
                                <div className="card-image">
                                    <img src="../img2/Canada.png" alt="" className="responsive-img"/>
                                    <span className="card-title">加拿大-Canada</span>
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
                            <a href="/travelPicturesUSACN">
                                <div className="card">
                                <div className="card-image">
                                    <img src="../img2/USA.png" alt="" className="responsive-img"/>
                                    <span className="card-title">美国-USA</span>
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

<Footer/>
            </body>
        )
    }
}




export default travelCN;