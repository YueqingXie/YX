import React, { Component } from 'react';
import Footer from '../layout/Footer';



class huaCN extends Component {
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
    <li><a href="/hua" className="btn btn-floating transparent">ENG</a></li>
    
    </ul>
    
    <ul className="sidenav grey lighten-2" id="mobile-menu">
        <li><a href="/travelCN" className="sidenavtext">旅游</a></li>
        <li><a href="/musicCN" className="sidenavtext">音乐</a></li>
        <li><a href="/calligraphyCN" className="sidenavtext">书法</a></li>
        <li><a href="/catCN" className="sidenavtext">我的猫</a></li>
        <li><a href="/CN#aboutmenavCN" className="sidenavtext">关于我</a></li>
            <br/>
            <li><a href="/hua" className="sidenavtext">ENG</a></li>

    </ul>
</div>
</nav>
</header>


            <section className="container section">

            <h4 className="title center">画</h4>
                        <div id="huaContent">
                            <div className="huaContent3">
                                <img src="../img30/3.jpg" alt=""   className="responsive-img materialboxed"></img>
                            </div>
                            <div className="huaContent1">
                                <img src="../img30/1.jpg" alt=""   className="responsive-img materialboxed"></img>
                            </div>
                            <div className="huaContent2">
                                <img src="../img30/2.jpg" alt=""   className="responsive-img materialboxed"></img>
                            </div>
                        </div>

        <div className="row">
        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img30/4.jpg" alt="" className="responsive-img materialboxed"/>
            </div>
            </div>
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img30/5.jpg" alt="" className="responsive-img materialboxed"/>
            </div>
            </div>
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img30/6.jpg" alt="" className="responsive-img materialboxed"/>
            </div>
            </div>
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img30/7.jpg" alt="" className="responsive-img materialboxed"/>
            </div>
            </div>
        </div>
        </div>

        <div className="row">
        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img30/8.jpg" alt="" className="responsive-img materialboxed"/>
            </div>
            </div>
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img30/9.jpg" alt="" className="responsive-img materialboxed"/>
            </div>
            </div>
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img30/10.jpg" alt="" className="responsive-img materialboxed"/>
            </div>
            </div>
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img30/11.jpg" alt="" className="responsive-img materialboxed"/>
            </div>
            </div>
        </div>
        </div>


            
        </section>   
<Footer/>
        </section>

        )
    }
}






export default huaCN;