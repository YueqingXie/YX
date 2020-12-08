import React, { Component } from 'react';
import Footer from '../layout/Footer';


class YXCN extends Component {
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
    <li><a href="/YX" className="btn btn-floating transparent">ENG</a></li>
    
    </ul>
    
    <ul className="sidenav grey lighten-2" id="mobile-menu">
        <li><a href="/travelCN" className="sidenavtext">旅游</a></li>
        <li><a href="/musicCN" className="sidenavtext">音乐</a></li>
        <li><a href="/calligraphyCN" className="sidenavtext">书法</a></li>
        <li><a href="/catCN" className="sidenavtext">我的猫</a></li>
        <li><a href="/CN#aboutmenavCN" className="sidenavtext">关于我</a></li>
            <br/>
            <li><a href="/YX" className="sidenavtext">ENG</a></li>

    </ul>
</div>
</nav>
</header>

            
            <section className="container section">
                <h4 className="titleENG center">YX</h4>





                <div className="row">
                    <div className="col m5 l5">
                        <img src="../img/me.jpg" alt="" className="responsive-img"></img>
                    </div>
                    <div className="col m5 l5  push-m1 push-l1 ">
                        <p className="YXdetailP"><strong>YX，</strong>是一个刚毕业的学生。 她有计算机科学与数学联合荣誉。 她喜欢编程并且希望成为一名前端开发人员。</p>
                        <br/>
                        <div className="YXdetail">

<p className="YXdetailP"><strong>学历：</strong>渥太华大学(2020)，计算机科学与数学联合荣誉。</p>
<p className="YXdetailP"><strong>出生：</strong>1998年1月26日(22岁)，中国。</p>
<p className="YXdetailP"><strong>身高：</strong>168厘米。</p>
<p className="YXdetailP"><strong>体重：</strong>43千克。</p>
</div>
                    </div>
                </div>


</section>

<Footer/>
            </section>
        )
    }
}




export default YXCN;
