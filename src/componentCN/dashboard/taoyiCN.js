import React, { Component } from 'react';
import Footer from '../layout/Footer';


class taoyiCN extends Component {
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
    <li><a href="/taoyi" className="btn btn-floating transparent">ENG</a></li>
    
    </ul>
    
    <ul className="sidenav grey lighten-2" id="mobile-menu">
        <li><a href="/travelCN" className="sidenavtext">旅游</a></li>
        <li><a href="/musicCN" className="sidenavtext">音乐</a></li>
        <li><a href="/calligraphyCN" className="sidenavtext">书法</a></li>
        <li><a href="/catCN" className="sidenavtext">我的猫</a></li>
        <li><a href="/CN#aboutmenavCN" className="sidenavtext">关于我</a></li>
            <br/>
            <li><a href="/taoyi" className="sidenavtext">ENG</a></li>

    </ul>
</div>
</nav>
</header>


            <section className="container section" id="tabs">
            <div className="scrollspy" id="top">
            <div className="row">
                {/* <div className="col s12 l4">
                <h4 className="black-text taoyititle">Travel</h4>
                </div> */}
                <div className="col s12 l8 offset-l2">
                <ul className="tabs">
                    <li className="tab col s4">
                    <a href="#xiangxunbei" className="active black-text ">香薰杯</a>
                    </li>
                    <li className="tab col s4">
                    <a href="#caihui" className="black-text ">彩绘</a>
                    </li>
                    <li className="tab col s4">
                    <a href="#shaizi" className="black-text ">骰子</a>
                    </li>
                </ul>
                </div>
            </div>
            </div>
            </section>


            <section className="container section" id="xiangxunbei">
                <div className="row">
                    <div className="col s12 l4">
                        <img src="../img29/1.jpg" alt="" className="responsive-img materialboxed"/>
                    </div>
                    <div className="col s12 l6 offset-l1">
                        <h4 className="black-text taoyititle" >拉坯机</h4>
                        <p>将陶泥放在拉培机上，用手与水将陶泥塑成自己想要的样子。</p>
                    </div>
                </div>

                <div className="row">
                <div className="col s12 l4 offset-l1 push-l7">
                    <img src="../img29/2.jpg" alt="" className="responsive-img materialboxed"/>
                </div>
                <div className="col s12 l6 offset-l1 pull-l5 right-align">
                    <h4 className="black-text taoyititle">成型</h4>
                    <p>成型后好生保存，晾干。</p>
                </div>
                </div>

                <div className="row">
                    <div className="col s12 l4">
                        <img src="../img29/3.jpg" alt="" className="responsive-img materialboxed"/>
                    </div>
                    <div className="col s12 l6 offset-l1">
                        <h4 className="black-text taoyititle" >半干</h4>
                        <p>在拉培成型后的一到三天，作品半干。</p>
                    </div>
                </div>

                <div className="row">
                <div className="col s12 l4 offset-l1 push-l7">
                    <img src="../img29/4.jpg" alt="" className="responsive-img materialboxed"/>
                </div>
                <div className="col s12 l6 offset-l1 pull-l5 right-align">
                    <h4 className="black-text taoyititle">画出轮廓</h4>
                    <p>半干的时候用铅笔描出需要雕刻的地方。</p>
                </div>
                </div>

                <div className="row">
                    <div className="col s12 l4">
                        <img src="../img29/5.jpg" alt="" className="responsive-img materialboxed"/>
                    </div>
                    <div className="col s12 l6 offset-l1">
                        <h4 className="black-text taoyititle" >雕刻</h4>
                        <p>南瓜灯的感觉。</p>
                    </div>
                </div>

                <div className="row">
                <div className="col s12 l4 offset-l1 push-l7">
                    <img src="../img29/6.jpg" alt="" className="responsive-img materialboxed"/>
                </div>
                <div className="col s12 l6 offset-l1 pull-l5 right-align">
                    <h4 className="black-text taoyititle">雕刻(背面)</h4>
                    <p>背面雕刻地方大一些，方便放小蜡烛进去。</p>
                </div>
                </div>

                <div className="row">
                    <div className="col s12 l4">
                        <img src="../img29/7.jpg" alt="" className="responsive-img materialboxed"/>
                    </div>
                    <div className="col s12 l6 offset-l1">
                        <h4 className="black-text taoyititle" >刷</h4>
                        <p>将陶泥和水混合在一起，用小刷子沾着泥水，将作品有裂痕的地方填满、不平的地方刷光滑。</p>
                    </div>
                </div>

                <div className="row">
                <div className="col s12 l4 offset-l1 push-l7">
                    <img src="../img29/8.jpg" alt="" className="responsive-img materialboxed"/>
                </div>
                <div className="col s12 l6 offset-l1 pull-l5 right-align">
                    <h4 className="black-text taoyititle">上色</h4>
                    <p>根据自己的喜好上色。</p>
                </div>
                </div>

                <div className="row">
                    <div className="col s12 l4">
                        <img src="../img29/9.jpg" alt="" className="responsive-img materialboxed"/>
                    </div>
                    <div className="col s12 l6 offset-l1">
                        <h4 className="black-text taoyititle" >烤制</h4>
                        <p>黑色颜料烤花了，不过也还可以。</p>
                    </div>
                </div>

                <div className="row">
                <div className="col s12 l4 offset-l1 push-l7">
                    <img src="../img29/10.jpg" alt="" className="responsive-img materialboxed"/>
                </div>
                <div className="col s12 l6 offset-l1 pull-l5 right-align">
                    <h4 className="black-text taoyititle">成品</h4>
                    <p>顶部刻了我的名字，也有点看不清了。</p>
                </div>
                </div>

                <div className="row">
                    <div className="col s12 l4">
                        <img src="../img29/11.jpg" alt="" className="responsive-img materialboxed"/>
                    </div>
                    <div className="col s12 l6 offset-l1">
                        <h4 className="black-text taoyititle" >成品(背面)</h4>
                        <p></p>
                    </div>
                </div>

                <div className="row">
                <div className="col s12 l4 offset-l1 push-l7">
                    <img src="../img29/12.jpg" alt="" className="responsive-img materialboxed"/>
                </div>
                <div className="col s12 l6 offset-l1 pull-l5 right-align">
                    <h4 className="black-text taoyititle">放入蜡烛</h4>
                    <p></p>
                </div>
                </div>

                <div className="row">
                    <div className="col s12 l4">
                        <img src="../img29/13.jpg" alt="" className="responsive-img materialboxed"/>
                    </div>
                    <div className="col s12 l6 offset-l1">
                        <h4 className="black-text taoyititle" >放入蜡烛(背面)</h4>
                        <p></p>
                    </div>
                </div>

                <a href="#top" className="ToTheTopIcon">
                    <i className="material-icons">arrow_upward</i>
                </a>

                
            </section>   

            <section className="container section" id="caihui">
            <h4 className="title">画出轮廓</h4>
                <div className="row">
                    <div className="col s4">
                        <img src="../img29/14.jpg" alt="" className="responsive-img materialboxed"></img>
                    </div>
                    <div className="col s4">
                        <img src="../img29/15.jpg" alt="" className="responsive-img materialboxed"></img>
                    </div>
                    <div className="col s4">
                        <img src="../img29/16.jpg" alt="" className="responsive-img materialboxed"></img>
                    </div>
                </div>
            <h4 className="title">上色</h4>
                <div className="row">
                    <div className="col s4">
                        <img src="../img29/17.jpg" alt="" className="responsive-img materialboxed"></img>
                    </div>
                    <div className="col s4">
                        <img src="../img29/18.jpg" alt="" className="responsive-img materialboxed"></img>
                    </div>
                    <div className="col s4">
                        <img src="../img29/19.jpg" alt="" className="responsive-img materialboxed"></img>
                    </div>
                </div>
            <h4 className="title">烤制</h4>
                <div className="row">
                    <div className="col s4">
                        <img src="../img29/20.jpg" alt="" className="responsive-img materialboxed"></img>
                    </div>
                    <div className="col s4">
                        <img src="../img29/21.jpg" alt="" className="responsive-img materialboxed"></img>
                    </div>
                    <div className="col s4">
                        <img src="../img29/22.jpg" alt="" className="responsive-img materialboxed"></img>
                    </div>
                </div>
            </section>   

            <section className="container section" id="shaizi">
            <h4 className="title">定型</h4>
                <div className="row">
                <div className="col s4">
                    <img src="../img29/23.jpg" alt="" className="responsive-img materialboxed"></img>
                </div>
                </div>

            <h4 className="title">雕刻</h4>
                <div className="row">
                <div className="col s4">
                    <img src="../img29/24.jpg" alt="" className="responsive-img materialboxed"></img>
                </div>
                </div>

            <h4 className="title">上色</h4>
                <div className="row">
                    <div className="col s4">
                        <img src="../img29/25.jpg" alt="" className="responsive-img materialboxed"></img>
                    </div>
                    <div className="col s4">
                        <img src="../img29/26.jpg" alt="" className="responsive-img materialboxed"></img>
                    </div>
                    <div className="col s4">
                        <img src="../img29/27.jpg" alt="" className="responsive-img materialboxed"></img>
                    </div>
                </div>
                <div className="row">
                    <div className="col s4">
                        <img src="../img29/28.jpg" alt="" className="responsive-img materialboxed"></img>
                    </div>
                    <div className="col s4">
                        <img src="../img29/29.jpg" alt="" className="responsive-img materialboxed"></img>
                    </div>
                    <div className="col s4">
                        <img src="../img29/30.jpg" alt="" className="responsive-img materialboxed"></img>
                    </div>
                </div>
            <h4 className="title">烤制</h4>
                <div className="row">
                    <div className="col s4">
                        <img src="../img29/31.jpg" alt="" className="responsive-img materialboxed"></img>
                    </div>
                    <div className="col s4">
                        <img src="../img29/32.jpg" alt="" className="responsive-img materialboxed"></img>
                    </div>
                    <div className="col s4">
                        <img src="../img29/33.jpg" alt="" className="responsive-img materialboxed"></img>
                    </div>
                </div>
                <div className="row">
                    <div className="col s4">
                        <img src="../img29/34.jpg" alt="" className="responsive-img materialboxed"></img>
                    </div>
                    <div className="col s4">
                        <img src="../img29/35.jpg" alt="" className="responsive-img materialboxed"></img>
                    </div>
                    <div className="col s4">
                        <img src="../img29/36.jpg" alt="" className="responsive-img materialboxed"></img>
                    </div>
                </div>
            </section>   
    
<Footer/>
            </body>
        )
    }
}





export default taoyiCN;