import React, { Component } from 'react';
import Footer from '../layout/Footer';


class educationDetailsCN extends Component {



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
    <li><a href="/TheseDiplomasAreBelongToYueqingXieDoNotAllowToDownload" className="btn btn-floating transparent">ENG</a></li>
    
    </ul>
    
    <ul className="sidenav grey lighten-2" id="mobile-menu">
        <li><a href="/travelCN" className="sidenavtext">旅游</a></li>
        <li><a href="/musicCN" className="sidenavtext">音乐</a></li>
        <li><a href="/calligraphyCN" className="sidenavtext">书法</a></li>
        <li><a href="/catCN" className="sidenavtext">我的猫</a></li>
        <li><a href="/CN#aboutmenavCN" className="sidenavtext">关于我</a></li>
            <br/>
            <li><a href="/TheseDiplomasAreBelongToYueqingXieDoNotAllowToDownload" className="sidenavtext">ENG</a></li>

    </ul>
</div>
</nav>
</header>

       
            <section className="container section">
            <h4 className="titleENG center">YX-学历</h4>
                <div className="row">
                    <div className="col s12 l6">
                        <img src="../imgeducation/1.jpg" alt="" className="responsive-img materialboxed"/>
                    </div>
                    <div className="col s12 l4 offset-l2">
                        <h4 className="black-text school">高中</h4>
                        <p className="YXdetailP">William Lyon Mackenzie C.I.</p>
                        <p className="YXdetailP">毕业于2016年6月29日。</p>   
                    </div>
                </div>

                <div className="row">
                    <div className="col s12 l6 push-l6">
                        <img src="../imgeducation/2.jpg" alt="" className="responsive-img materialboxed"/>
                    </div>
                    <div className="col s12 l4 offset-l1 pull-l7 right-align">
                    <h4 className="black-text school">大学</h4>
                        <p className="YXdetailP">渥太华大学 - University of Ottawa</p>
                        <p className="YXdetailP">计算机科学与数学 - Joint honours in Computer Science and Mathematics.</p>
                        <p className="YXdetailP">毕业于2020年10月7日。</p>
                    </div>
                </div>
            

            </section>

 

<Footer/>
            </section>
        )
    }
}




export default educationDetailsCN;