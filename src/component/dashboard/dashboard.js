import React, {Component} from 'react';



class dashboard extends Component{
    render(){




        return(
            
            // <body>
            <section>

<header>


<nav className="nav-wrapper black">
<div className="container">
    <a href="/" className="brand-logo ">
        <span>Y.X.</span>
    </a>
    
    <a href="" className="sidenav-trigger" data-target="mobile-menu">
    <i className="material-icons">menu</i>
    </a>
    <ul className="right hide-on-med-and-down">
    <li><a href="/travel">Travel</a></li>
    <li><a href="/music">Music</a></li>
    <li><a href="/calligraphy">Calligraphy</a></li>
    
    <li><a href="/cat">🐈</a></li>

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
    <li><a href="/CN" className="btn btn-floating transparent">CN</a></li>
    
    </ul>
    
    <ul className="sidenav grey lighten-2" id="mobile-menu">
        <li><a href="/travel" className="sidenavtext">Travel</a></li>
        <li><a href="/music" className="sidenavtext">Music</a></li>
        <li><a href="/calligraphy" className="sidenavtext">Calligraphy</a></li>
        <li><a href="/cat" className="sidenavtext">My Cat</a></li>
        <li><a href="/#aboutmenav" className="sidenavtext">About Me</a></li>
            <br/>
            <li><a href="/CN" className="sidenavtext">CN</a></li>

    </ul>
</div>
</nav>
</header>

                


        <nav className="main-nav" id="aboutmenav">
            <ul>
                <li><a href="/YX" className="join center">About Me</a></li>
                <li><a href="/education" className="center">Education</a></li>
                <li><a href="/projects" className="center">My Projects</a></li>
                <li><a href="/contact" className="center">Contact</a></li>
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
                <h3>Some of my interests</h3>
                <div className="projects grid">
                    <a href="/travel">
                        <img src="img/1.png" alt=""></img>
                        <p>Travel</p>
                    </a>
                    <a href="/music">
                        <img src="img/2.png" alt=""></img>
                        <p>Music</p>
                    </a>
                    <a href="/calligraphy">
                        <img src="img/3.png" alt=""></img>
                        <p>Calligraphy</p>
                    </a>
                </div>


                </section>

                <section className="interests">
                    {/* <h3>Things I Can Do</h3> */}
                    <h3>Other hobbies</h3>
                    <ul className="grid">
                        <li>
                            <a href="/taoyi">
                                <img src="img/taoyi.jpg" alt=""></img>
                                <p>Pottery</p>
                            </a>
                        </li>
                        <li>
                            <a href="/mugong">
                                <img src="img/mugong.jpg" alt=""></img>
                                <p>Woodworking</p>
                            </a>
                        </li>
                        <li>
                            <a href="/hua">
                                <img src="img/hua.jpg" alt=""></img>
                                <p>Sketch</p>
                            </a>
                        </li>
                        <li>
                            <a href="/cai">
                                <img src="img/cai.jpg" alt=""></img>
                                <p>Cooking</p>
                            </a>
                        </li>
                    </ul>
                 </section>

                 <footer className="page-footer black darken-3">
                <div className="container">
                <div className="row">

                    <div className="flex text-xs-center col l1 m2 s12">
                        {/* <img src="../img/me_small.png"></img> */}
                        <p className="center">Y.X.</p>
                    </div>

                    <div className="col l5 offset-l1 m5 s12 hide-on-small-only">
                    <h5>Who is Y.X.?</h5>
                    <p>Y.X. graduated from uOttawa in 2020. She studied computer science and mathematics. She enjoys programming, travelling & playing instruments.</p>
                    </div>
              

                    <div className="col l4 offset-l1 m5 s12">
                    {/* <h5 className="white-text">Connect</h5> */}
                    <div className="text-xs-center mx my social-icons">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/crys___7" className=" btn-floating btn-small transparent" >
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UClv5NmxBvWIjid8crocDvZQ" className=" btn-floating btn-small transparent">
                        <i className="fab fa-youtube"></i>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=100006981077508" className=" btn-floating btn-small transparent">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/YueqingXie" className=" btn-floating btn-small transparent">
                        <i className="fab fa-twitter"></i>
                    </a>
                    </div>
                    </div>
                </div>
                </div>
                <div className="footer-copyright grey darken-4">
                <div className="container copyright center-align">Copyright &copy; 2020 Y.X.</div>
                </div>
            </footer>
  

            </section>
                // </body>
            
            
        )
    }
}




export default dashboard;