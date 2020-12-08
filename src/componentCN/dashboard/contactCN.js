import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Footer from '../layout/Footer';

class contactCN extends Component {
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
          if( this.state.password == "8732881026"){
            return <Redirect to = '/contact8732881026CN'/>
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
    <li><a href="/contact" className="btn btn-floating transparent">ENG</a></li>
    
    </ul>
    
    <ul className="sidenav grey lighten-2" id="mobile-menu">
        <li><a href="/travelCN" className="sidenavtext">旅游</a></li>
        <li><a href="/musicCN" className="sidenavtext">音乐</a></li>
        <li><a href="/calligraphyCN" className="sidenavtext">书法</a></li>
        <li><a href="/catCN" className="sidenavtext">我的猫</a></li>
        <li><a href="/CN#aboutmenavCN" className="sidenavtext">关于我</a></li>
            <br/>
            <li><a href="/contact" className="sidenavtext">ENG</a></li>

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

                        <form onSubmit={this.handleSubmit} className="transparent ">
                            <div className="input-field">
                                <label htmlFor="password" className="numAuthTitle black-text">输入密码查看电话号码:</label>
                                <input type="password" id="password" onChange={this.handleChange}/>
                            </div>
                        </form>

                        </div>
                    </div>
                </div>


                    <div className="hide-on-med-and-up">
                    <div>
                            <i className="material-icons left">email</i><p><strong>邮箱: </strong>xieyueqingxyq@gmail.com</p>
                        </div>


                        
                    </div>



            </section>
<Footer/>
            </section>
        )
    }
}




export default contactCN