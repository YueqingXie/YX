import React, {Component} from 'react';
import Footer from '../layout/Footer';




class dashboardCN extends Component{
    render(){




        return(
            
            // <body>
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
    <li><a href="/" className="btn btn-floating transparent">ENG</a></li>
    
    </ul>
    
    <ul className="sidenav grey lighten-2" id="mobile-menu">
        <li><a href="/travelCN" className="sidenavtext">旅游</a></li>
        <li><a href="/musicCN" className="sidenavtext">音乐</a></li>
        <li><a href="/calligraphyCN" className="sidenavtext">书法</a></li>
        <li><a href="/catCN" className="sidenavtext">我的猫</a></li>
        <li><a href="/CN#aboutmenavCN" className="sidenavtext">关于我</a></li>
            <br/>
            <li><a href="/" className="sidenavtext">ENG</a></li>

    </ul>
</div>
</nav>
</header>

                


        <nav className="main-nav" id="aboutmenavCN">
            <ul>
                <li><a href="/YXCN" className="join center">关于我</a></li>
                <li><a href="/educationCN" className="center">学历</a></li>
                <li><a href="/projectsCN" className="center">我的项目</a></li>
                <li><a href="/contactCN" className="center">联系</a></li>
            </ul>
        </nav>

                {/* <section className="skills">
                    <h3>Things I Can Do</h3>
                    <ul class="grid">
                        <li>
                            <img src="img/taoyi.jpg" alt=""></img>
                            <p>Pottery</p>
                        </li>
                        <li>
                            <img src="img/mugong.jpg" alt=""></img>
                            <p>Woodworking</p>
                        </li>
                        <li>
                            <img src="img/hua.jpg" alt=""></img>
                            <p>Sketch</p>
                        </li>
                        <li>
                            <img src="img/cai.jpg" alt=""></img>
                            <p>Cooking</p>
                        </li>
                    </ul>
                 </section> */}

                <section className="container section portfolio" id="photos">
                <h3>我的爱好</h3>
                <div className="projects grid">
                    <a href="/travelCN">
                        <img src="img/1.png" alt=""></img>
                        <p>旅游</p>
                    </a>
                    <a href="/musicCN">
                        <img src="img/2.png" alt=""></img>
                        <p>音乐</p>
                    </a>
                    <a href="/calligraphyCN">
                        <img src="img/3.png" alt=""></img>
                        <p>书法</p>
                    </a>
                </div>

                


                {/* <div className="row">
                    <div className="col s12 l4">
                        <img src="img/1.png" alt="" className="responsive-img "/>
                    </div>
                    <div className="col s12 l6 offset-l1">
                        <a href="/travel">
                            <h2 className="indigo-text text-darken-4" >Travel</h2>
                        </a>
                        
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.</p>
                    </div>
                </div>

                <div className="row">
                <div className="col s12 l4 offset-l1 push-l7">
                    <img src="img/2.png" alt="" className="responsive-img "/>
                </div>
                <div className="col s12 l6 offset-l1 pull-l5 right-align">
                <a href="/music">
                    <h2 className="indigo-text text-darken-4" >Music</h2>
                </a>
                    
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.</p>
                </div>
                </div>

                <div className="row">
                <div className="col s12 l4">
                    <img src="img/3.png" alt="" className="responsive-img "/>
                </div>
                <div className="col s12 l6 offset-l1">
                <a href="/calligraphy">
                    <h2 className="indigo-text text-darken-4">Calligraphy</h2>
                </a>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.</p>
                </div>
                </div>

                <div className="row">
                <div className="col s12 l4 offset-l1 push-l7">
                    <img src="img/4.png" alt="" className="responsive-img "/>
                </div>
                <div className="col s12 l6 offset-l1 pull-l5 right-align">
                <a href="/cat"><h2 className="indigo-text text-darken-4">My Cat</h2></a>
                    
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.</p>
                </div>
                </div>

                <div className="row">
                <div className="col s12 l4">
                    <img src="img/5.png" alt="" className="responsive-img "/>
                </div>
                <div className="col s12 l6 offset-l1">
                <a href="/YX"><h2 className="indigo-text text-darken-4">About Me</h2></a>
                    
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at lacus congue, suscipit elit nec, tincidunt orci.</p>
                </div>
                </div>
                 */}
                </section>

                <section className="interests">
                    {/* <h3>Things I Can Do</h3> */}
                    <h3>其他爱好</h3>
                    <ul className="grid">
                        <li>
                            <a href="/taoyiCN">
                                <img src="img/taoyi.jpg" alt=""></img>
                                <p>陶艺</p>
                            </a>
                        </li>
                        <li>
                            <a href="/mugongCN">
                                <img src="img/mugong.jpg" alt=""></img>
                                <p>木工</p>
                            </a>
                        </li>
                        <li>
                            <a href="/huaCN">
                                <img src="img/hua.jpg" alt=""></img>
                                <p>画画</p>
                            </a>
                        </li>
                        <li>
                            <a href="/caiCN">
                                <img src="img/cai.jpg" alt=""></img>
                                <p>厨艺</p>
                            </a>
                        </li>
                    </ul>
                 </section>

<Footer/>

            </section>
                // </body>
            
            
        )
    }
}




export default dashboardCN;