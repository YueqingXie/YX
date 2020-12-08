import React, { Component } from 'react';
import Footer from '../layout/Footer';



class travelPictures2CN extends Component {

    render() {
     
        return (
            <section>
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
    <li><a href="/travelPicturesThailand" className="btn btn-floating transparent">ENG</a></li>
    
    </ul>
    
    <ul className="sidenav grey lighten-2" id="mobile-menu">
        <li><a href="/travelCN" className="sidenavtext">旅游</a></li>
        <li><a href="/musicCN" className="sidenavtext">音乐</a></li>
        <li><a href="/calligraphyCN" className="sidenavtext">书法</a></li>
        <li><a href="/catCN" className="sidenavtext">我的猫</a></li>
        <li><a href="/CN#aboutmenavCN" className="sidenavtext">关于我</a></li>
            <br/>
            <li><a href="/travelPicturesThailand" className="sidenavtext">ENG</a></li>

    </ul>
</div>
</nav>
</header>

            
            <section className="container section" id="tabs">
            <div className="scrollspy" id="top">
            <div className="row">
            <div className="col s12 m12 l12 center">
            <ul className="tabs">
                    <li className="tab">
                    <a href="#picsChina" className=" indigo-text text-darken-4">中国</a>
                    </li>
                    <li className="tab">
                    <a href="#picsThailand" className="active indigo-text text-darken-4">泰国</a>
                    </li>
                    <li className="tab">
                    <a href="#picsCanada" className="indigo-text text-darken-4">加拿大</a>
                    </li>
                    <li className="tab">
                    <a href="#picsUSA" className="indigo-text text-darken-4">美国</a>
                    </li>
            </ul>
            </div>
            </div>
            </div>

            <section className="container section" id="picsChina">
            <div className="row">
            <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img3/1.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">国家大剧院</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img3/2.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">北海公园</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img3/3.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">Modernista</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img3/4.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">恭王府</span>
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
        </div>
        </div>


        <div className="row">
        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img3/5.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">恭王府</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img3/6.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">国家图书馆</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img3/7.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">四季民福</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img3/8.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">四季民福</span>
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
        </div>
        </div>

        <div className="row">
        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img3/9.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">四季民福</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img3/10.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">四季民福</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img3/11.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">四季民福</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img3/12.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">国家博物馆</span>
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
        </div>
        </div>

        <div className="row">
        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img3/13.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">重庆</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img3/14.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">保护研究中心</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img3/15.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">钟楼</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img3/16.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">黄龙</span>
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
        </div>
        </div>

        <div className="row">
        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img3/17.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">九寨沟-长海</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img3/18.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">五彩池</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img3/19.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">熊猫海</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img3/20.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">珍珠滩瀑布</span>
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
        </div>
        </div>

        <div className="row">
        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img3/21.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">兵马俑</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img3/22.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">大雁塔</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img3/23.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">松赞林寺</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img3/24.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">拉姆央措湖</span>
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
        </div>
        </div>

        <div className="row">
        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img3/25.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">拉姆央措湖</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img3/26.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">纳帕海</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img3/27.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">独克宗古城</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img3/28.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">虎跳峡</span>
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
        </div>
        </div>

        <div className="row">
        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img3/29.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">泸沽湖</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img3/30.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">洱海</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img3/31.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">热带植物园</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img3/32.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">金马碧鸡坊</span>
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
        </div>
        </div>


        <div className="row">
        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img3/33.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">九乡</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img3/34.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">九乡</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img3/35.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">石林</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img3/36.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">曼听公园</span>
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
        </div>
        </div>

        <div className="row">
        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img3/37.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">晋祠</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img3/38.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">王家大院</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img3/39.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">悬空寺</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img3/40.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">华严寺</span>
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
        </div>
        </div>

        <div className="row">
        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img3/41.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">大明湖</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img3/42.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">济南</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img3/43.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">趵突泉</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img3/44.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">九丈崖</span>
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
        </div>

        </div>

        <div className="row">
        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img3/45.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">沈阳918</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img3/46.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">长白山天池</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img3/47.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">大连发现王国</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img3/48.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">天津之眼</span>
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
        </div>
        </div>

        <div className="row">
        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img3/49.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">苏州狮子林</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img3/50.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">杭州西湖</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img3/51.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">杭州乌镇</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img3/52.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">上海</span>
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
        </div>
        </div>

            </section>


            <section className="container section" id="picsThailand">
            <div className="row">
            <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img4/1.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">珊瑚岛</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img4/2.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">皇帝岛</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img4/3.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">卡塔海滩</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img4/4.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">神仙半岛</span>
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
        </div>
        </div>


        <div className="row">
        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img4/5.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">神仙半岛</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img4/6.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">玛雅湾</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img4/7.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">珊瑚岛</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img4/8.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">卡伦海滩</span>
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
        </div>
        </div>

        <div className="row">
        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img4/9.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">玛雅湾</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img4/10.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">芭东海滩</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img4/11.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">清迈周日夜市</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img4/12.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">丛林飞跃</span>
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
        </div>
        </div>

        <div className="row">
        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img4/13.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">宁曼路</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img4/14.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">夜间动物园</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img4/15.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">夜间动物园</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img4/16.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">曼谷SIAM</span>
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
        </div>
        </div>

            </section>


            <section className="container section" id="picsCanada">
            <div className="row">
            <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img5/1.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">CN塔</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img5/2.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">海柏公园</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img5/3.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">海柏公园</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img5/4.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">尼亚加拉瀑布</span>
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
        </div>
        </div>


        <div className="row">
        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img5/5.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">奇幻乐园</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img5/6.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">奇幻乐园</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img5/7.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">奇幻乐园</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img5/8.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">Woodbine</span>
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
        </div>
        </div>

        <div className="row">
            <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img5/9.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">Woodbine</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img5/10.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">安大略美术馆</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img5/11.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">多伦多市政厅</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img5/12.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">皇家博物馆</span>
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
        </div>
        </div>


        <div className="row">
        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img5/13.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">多伦多动物园</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img5/14.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">湖心岛</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img5/15.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">伊顿中心</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img5/16.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">皇家山</span>
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
        </div>
        </div>

        <div className="row">
            <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img5/17.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">魁北克圣母院</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img5/18.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">枫树广场</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img5/19.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">温哥华中国城</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img5/20.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">史丹利公园</span>
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
        </div>
        </div>


        <div className="row">
        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img5/21.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">英吉利湾</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img5/22.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">加拿大广场</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img5/23.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">渥太华大学</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img5/24.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">国会山</span>
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
        </div>
        </div>

        <div className="row">
            <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img5/25.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">国会山</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img5/26.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">ByWard</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img5/27.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">渥太华圣母院</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img5/28.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">国家美术馆</span>
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
        </div>
        </div>


        <div className="row">
        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img5/29.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">Commissioners</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img5/30.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">Parc Omega</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img5/31.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">千岛湖</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img5/32.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">魁北克老城</span>
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
        </div>
        </div>

            </section>


            <section className="container section" id="picsUSA">
            <div className="row">
            <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img6/1.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">环球影城</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img6/2.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">冒险岛</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img6/3.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">冒险岛</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img6/4.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">冒险岛</span>
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
        </div>
        </div>

        <div className="row">
            <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img6/5.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">魔法王国</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img6/6.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">魔法王国</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img6/7.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">魔法王国</span>
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
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img6/8.png" alt="" className="responsive-img materialboxed"/>
                <span className="card-title">未来世界</span>
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
        </div>
        </div>

            </section>

            <a href="#top" className="ToTheTopIcon">
                <i className="material-icons">arrow_upward</i>
            </a>

        </section>
<Footer/>
        </section>

        )
    }
}




export default travelPictures2CN;