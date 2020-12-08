import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Footer from '../layout/Footer';


class educationCN extends Component {
    state = {
        password: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.password); 
    }
    render() {
        if( this.state.password == "8918308"){
            return <Redirect to = '/TheseDiplomasAreBelongToYueqingXieDoNotAllowToDownloadCN'/>
        }

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
    <li><a href="/education" className="btn btn-floating transparent">ENG</a></li>
    
    </ul>
    
    <ul className="sidenav grey lighten-2" id="mobile-menu">
        <li><a href="/travelCN" className="sidenavtext">旅游</a></li>
        <li><a href="/musicCN" className="sidenavtext">音乐</a></li>
        <li><a href="/calligraphyCN" className="sidenavtext">书法</a></li>
        <li><a href="/catCN" className="sidenavtext">我的猫</a></li>
        <li><a href="/CN#aboutmenavCN" className="sidenavtext">关于我</a></li>
            <br/>
            <li><a href="/education" className="sidenavtext">ENG</a></li>

    </ul>

</div>
</nav>
</header>

       
            <section className="container section">
            <h4 className="titleENG center">YX-学历</h4>
                <div className="row">
                    <div className="col s12 l5">
                    <h4 className="black-text school">高中</h4>
                        <p className="YXdetailP">William Lyon Mackenzie C.I.</p>
                        <p className="YXdetailP">毕业于2016年6月29日。</p>                    
                </div>
                    <div className="col s12 l5 offset-l2">
                    <h4 className="black-text school">大学</h4>
                        <p className="YXdetailP">渥太华大学 - University of Ottawa</p>
                        <p className="YXdetailP">计算机科学与数学 - Joint honours in Computer Science and Mathematics.</p>
                        <p className="YXdetailP">毕业于2020年10月7日。</p>
                    </div>
                </div>

                

            </section>

            <section className="educationAuthform container ">

                <form onSubmit={this.handleSubmit} className="transparent ">
                    <div className="input-field">
                        <label htmlFor="password" className="numAuthTitle black-text">输入密码查看毕业证书:</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                </form>

            </section> 


<Footer/>
            </section>
        )
    }
}




export default educationCN;