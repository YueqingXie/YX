import React, { Component } from 'react';
import Footer from '../layout/Footer';




class mugongCN extends Component {
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
    <li><a href="/mugong" className="btn btn-floating transparent">ENG</a></li>
    
    </ul>
    
    <ul className="sidenav grey lighten-2" id="mobile-menu">
        <li><a href="/travelCN" className="sidenavtext">旅游</a></li>
        <li><a href="/musicCN" className="sidenavtext">音乐</a></li>
        <li><a href="/calligraphyCN" className="sidenavtext">书法</a></li>
        <li><a href="/catCN" className="sidenavtext">我的猫</a></li>
        <li><a href="/CN#aboutmenavCN" className="sidenavtext">关于我</a></li>
            <br/>
            <li><a href="/mugong" className="sidenavtext">ENG</a></li>

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
                    <li className="tab col s3">
                    <a href="#mugong1" className="active black-text">双翼飞机</a>
                    </li>
                    <li className="tab col s3">
                    <a href="#mugong2" className="black-text">踏脚凳</a>
                    </li>
                    <li className="tab col s3">
                    <a href="#mugong3" className="black-text">篮子编织盒</a>
                    </li>
                    <li className="tab col s3">
                    <a href="#mugong4" className="black-text">其他</a>
                    </li>
                </ul>
                </div>
            </div>
            </div>
            </section>

            <section className="container section" id="mugong1">
                <h4 className="title">作品</h4>
                    <img src="../img31/1.jpg" width="420" height="300" alt="" className="responsive-img materialboxed"></img>
                <h4 className="title">图纸</h4>
                    <img src="../img31/2.jpg" width="420" height="300" alt="" className="responsive-img materialboxed"></img>
                <h4 className="title">报告</h4>
                <div className="row">
        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img31/3.jpg" alt="" className="responsive-img materialboxed"/>
            </div>
            </div>
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img31/4.jpg" alt="" className="responsive-img materialboxed"/>
            </div>
            </div>
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img31/5.jpg" alt="" className="responsive-img materialboxed"/>
            </div>
            </div>
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img31/6.jpg" alt="" className="responsive-img materialboxed"/>
            </div>
            </div>
        </div>
        </div>

        <div className="row">
        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img31/7.jpg" alt="" className="responsive-img materialboxed"/>
            </div>
            </div>
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img31/8.jpg" alt="" className="responsive-img materialboxed"/>
            </div>
            </div>
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img31/9.jpg" alt="" className="responsive-img materialboxed"/>
            </div>
            </div>
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img31/10.jpg" alt="" className="responsive-img materialboxed"/>
            </div>
            </div>
        </div>
        </div>

            </section>   

            <section className="container section" id="mugong2">
                <h4 className="title">作品</h4> 
                    <div className="row">
                        <div className="col s12 m6 l6">
                            <img src="../img31/11.jpg" width="420" height="300" alt="" className="responsive-img materialboxed"></img>
                        </div>
                        <div className="col s12 m6 l6">
                            <img src="../img31/12.jpg" width="420" height="300" alt="" className="responsive-img materialboxed"></img>
                        </div>
                    </div>

                <h4 className="title">图纸</h4>
                    <img src="../img31/13.jpg" width="420" height="300" alt="" className="responsive-img materialboxed"></img>
                <h4 className="title">报告</h4>
                <div className="row">
        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img31/14.jpg" alt="" className="responsive-img materialboxed"/>
            </div>
            </div>
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img31/15.jpg" alt="" className="responsive-img materialboxed"/>
            </div>
            </div>
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img31/16.jpg" alt="" className="responsive-img materialboxed"/>
            </div>
            </div>
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img31/17.jpg" alt="" className="responsive-img materialboxed"/>
            </div>
            </div>
        </div>
        </div>

        <div className="row">
        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img31/18.jpg" alt="" className="responsive-img materialboxed"/>
            </div>
            </div>
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img31/19.jpg" alt="" className="responsive-img materialboxed"/>
            </div>
            </div>
        </div>


        </div>

            </section>   


            <section className="container section" id="mugong3">
                <h4 className="title">作品</h4> 
                    <img src="../img31/20.jpg" width="420" height="300" alt="" className="responsive-img materialboxed"></img>
                <h4 className="title">图纸</h4>
                    <img src="../img31/21.jpg" width="420" height="300" alt="" className="responsive-img materialboxed"></img>
                <h4 className="title">报告</h4>
                <div className="row">
        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img31/22.jpg" alt="" className="responsive-img materialboxed"/>
            </div>
            </div>
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img31/23.jpg" alt="" className="responsive-img materialboxed"/>
            </div>
            </div>
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img31/24.jpg" alt="" className="responsive-img materialboxed"/>
            </div>
            </div>
        </div>

        </div>

     </section>   


            <section className="container section" id="mugong4">
            <div className="row">
        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img31/25.jpg" alt="" className="responsive-img materialboxed"/>
            </div>
            </div>
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img31/26.jpg" alt="" className="responsive-img materialboxed"/>
            </div>
            </div>
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img31/27.jpg" alt="" className="responsive-img materialboxed"/>
            </div>
            </div>
        </div>

        <div className="col s12 m6 l3">
            <div className="card">
            <div className="card-image">
                <img src="../img31/28.jpg" alt="" className="responsive-img materialboxed"/>
            </div>
            </div>
        </div>
        </div>


            </section>   
<Footer/>
         </body>
            
        )
    }
}



export default mugongCN;