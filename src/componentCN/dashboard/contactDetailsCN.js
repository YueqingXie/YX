import React, { Component } from 'react';
import Footer from '../layout/Footer';


class contactDetailsCN extends Component {
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
    <li><a href="/contact8732881026" className="btn btn-floating transparent">ENG</a></li>
    
    </ul>
    
    <ul className="sidenav grey lighten-2" id="mobile-menu">
        <li><a href="/travelCN" className="sidenavtext">旅游</a></li>
        <li><a href="/musicCN" className="sidenavtext">音乐</a></li>
        <li><a href="/calligraphyCN" className="sidenavtext">书法</a></li>
        <li><a href="/catCN" className="sidenavtext">我的猫</a></li>
        <li><a href="/CN#aboutmenavCN" className="sidenavtext">关于我</a></li>
            <br/>
            <li><a href="/contact8732881026" className="sidenavtext">ENG</a></li>

    </ul>
</div>
</nav>
</header>

            
            <section className="container section">
            <h4 className="titleENG center">YX-联系</h4>

                <div className="row hide-on-small-only">
                    <div className="col m6 l6">
                        <img src="../img/me.png" alt="" className="responsive-img"></img>
                    </div>
                    <div className="col m4 l4  push-m1 push-l1 ">
                        <div>
                            <i className="material-icons left">email</i><p><strong>邮箱: </strong>xieyueqingxyq@gmail.com</p>
                        </div>
                        <div>
                            <i className="material-icons left">phone</i><p><strong>电话: </strong>(+1)873-288-1026</p>
                        </div>
                    </div>
                </div>


                    <div className="hide-on-med-and-up">
                    <div>
                            <i className="material-icons left">email</i><p><strong>邮箱: </strong>xieyueqingxyq@gmail.com</p>
                        </div>
                        <div>
                            <i className="material-icons left">phone</i><p><strong>电话: </strong>(+1)873-288-1026</p>
                        </div>
                    </div>



            </section>
<Footer/>
            </section>
        )
    }
}




export default contactDetailsCN